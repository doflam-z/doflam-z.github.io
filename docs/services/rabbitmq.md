# rabbitmq

> rabbitmq的部署，集群配置，常用命令等



## docker部署rabbitmq

> 部署在内网两个节点，使用镜像集群配置



### 两台机生成配置文件

node1 docker-compose.yml

```yaml
version: '3.8'
services:
  rabbitmq:
    image: rabbitmq:3.12.8-management
    container_name: rabbitmq
    hostname: node1 # 节点名称
    restart: unless-stopped # 除非stop命令否则自动重启
    mem_limit: 8g        # 限制最多使用 8GB 内存
    cpus: 6              # 限制最多使用 6 个 CPU
    ports:
      - "192.168.2.135:5672:5672"  # AMQP协议端口
      - "15672:15672"  # 管理界面端口
      - "192.168.2.135:4369:4369" # 集群通信端口
      - "192.168.2.135:25672:25672" # 集群通信端口
    environment:
      RABBITMQ_DEFAULT_USER: "jobui"
      RABBITMQ_DEFAULT_PASS: "jobui123"
      RABBITMQ_ERLANG_COOKIE: "jobui_rabbit"  # 集群通信密钥
      RABBITMQ_NODENAME: rabbit@node1
    volumes:
      - /ssd_data/rabbitmq/data:/var/lib/rabbitmq  # 数据持久化
    extra_hosts:
      - "node2:192.168.2.139" # 关键：让容器能解析node2
```

node2 docker-compose.yml

```yaml
version: '3.8'
services:
  rabbitmq:
    image: rabbitmq:3.12.8-management # 或指定版本如 rabbitmq:3.12
    container_name: rabbitmq
    hostname: node2
    restart: unless-stopped
    mem_limit: 8g        # 限制最多使用 8GB 内存
    cpus: 6              # 限制最多使用 6 个 CPU
    ports:
      - "192.168.2.139:5672:5672"  # AMQP协议端口
      - "192.168.2.139:4369:4369"  # 集群通信端口
      - "192.168.2.139:25672:25672"
    environment:
      RABBITMQ_DEFAULT_USER: "jobui"
      RABBITMQ_DEFAULT_PASS: "jobui123"
      RABBITMQ_ERLANG_COOKIE: "jobui_rabbit"  # 集群通信密钥
      RABBITMQ_NODENAME: rabbit@node2
      RABBITMQ_CLUSTER_NODES: rabbit@node1  # 指向初始节点
    volumes:
      - /ssdb_data/rabbitmq/data:/var/lib/rabbitmq
    extra_hosts:
      - "node1:192.168.2.135"  # 关键：让容器能解析node1
```



### 分别启动容器

```bash
docker-compose up -d
```



### 节点dns配置写入hosts

node1写入

```bash
echo "192.168.2.139 node2" | sudo tee -a /etc/hosts
```

node2写入

```bash
echo "192.168.2.135 node1" | sudo tee -a /etc/hosts
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

> docker启动的端口默认所有ip都能请求，不安全，但是docker 会覆盖 `firewalld` 的部分规则，需在 `DOCKER-USER` 链中添加规则，先禁用所有ip访问web管理端口再配置只允许指定ip访问，

```bash
sudo iptables -I DOCKER-USER -p tcp --dport 15672 -j DROP
sudo iptables -I DOCKER-USER -p tcp --dport 15672 -s 192.168.1.10 -j ACCEPT
```

