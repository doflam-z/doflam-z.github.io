# rabbitmq

> rabbitmq的部署，集群配置，常用命令等



## docker部署rabbitmq

> 部署在内网两个节点，使用镜像集群配置
>
> 目录结构
>
> 

### 两台机生成配置文件

node1 

docker-compose.yml

```yaml
version: '3.8'
services:
  rabbitmq:
    image: rabbitmq:3.12.8-management
    container_name: rabbitmq
    hostname: ${HOSTNAME}
    restart: unless-stopped
    mem_limit: 8g        # 限制最多使用 8GB 内存
    cpus: 6              # 限制最多使用 8 个 CPU
    ports:
      - "5672:5672"  # AMQP协议端口
      - "15672:15672"  # 管理界面端口
      - "4369:4369" # 集群通信端口
      - "25672:25672" # 集群通信端口
    environment:
      RABBITMQ_DEFAULT_USER: ${USER}
      RABBITMQ_DEFAULT_PASS: ${PASS}
      RABBITMQ_ERLANG_COOKIE: ${COOKIE_NAME}  # 集群通信密钥
      RABBITMQ_NODENAME: ${NODENAME}
    volumes:
      - ${DATA_PATH}:/var/lib/rabbitmq  # 数据持久化
    extra_hosts:
      - ${EXTRA_HOSTS}
```

node1 .env

```
DATA_PATH=/data/rabbitmq/data
NODENAME=rabbit@node1
HOSTNAME=node1
COOKIE_NAME=jobui_rabbit
USER=jobui
PASS=jobui123
CLUSTER_WITH=
EXTRA_HOSTS=node2:192.168.2.139
```

node2 .env

```
DATA_PATH=/data/rabbitmq/data
NODENAME=rabbit@node2
HOSTNAME=node2
COOKIE_NAME=jobui_rabbit
USER=jobui
PASS=jobui123
CLUSTER_WITH=
EXTRA_HOSTS=node1:192.168.2.135
```

### 分别启动容器

```bash
docker-compose up -d
```

### 节点配置写入hosts

```bash
echo "192.168.2.139 node2" | sudo tee -a /etc/hosts # node1
echo "192.168.2.135 node1" | sudo tee -a /etc/hosts # node2
```



### node2加入集群

```bash
docker exec rabbitmq rabbitmqctl stop_app	# 停止服务
docker exec rabbitmq rabbitmqctl reset # 重置服务（会清除数据）
docker exec rabbitmq rabbitmqctl join_cluster rabbit@node1 # 加入节点
docker exec rabbitmq rabbitmqctl start_app # 启动服务
docker exec rabbitmq rabbitmqctl cluster_status # 查看集群状态
```

### 配置镜像集群

在任意节点执行

```bash
docker exec -it rabbitmq rabbitmqctl set_policy ha-all "^" '{"ha-mode":"all"}'
```

### 配置防火墙

```bash
sudo firewall-cmd --permanent --zone=trusted --add-source=192.168.2.0/24
sudo firewall-cmd --reload
```

