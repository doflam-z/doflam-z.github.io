# docker笔记

### 安装

> 注意！安装docker需要有创建用户的权限，既/etc/gshadow跟/etc/group不能+i

卸载旧版本

```shell
sudo apt-get remove docker docker-engine docker.io containerd runc
```

设置储存库

```shell
 sudo apt-get update
 sudo apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```

添加Docker官方的GPG密钥：

```shel
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

添加稳定储存库

```shell
echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

安装docker

```shell
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io
```

更换阿里云镜像加速

```shell
mkdir -p /etc/docker
tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://ang77htx.mirror.aliyuncs.com"]
}
EOF
systemctl daemon-reload
systemctl restart docker
```

添加可以操作docker的用户到docker组

```shell
sudo usermod -aG docker zax
```

### 命令

查看docker版本、信息

```shell
docker version
docker info
```

启动docker、设置开机自启

```shell
systemctl start docker
systemctl enable docker
```

搜索下载docker镜像

```shell
docker search nginx
docker pull nginx
```

查看镜像

```shell
docker images ls
```

创建容器（-d 后台运行 -v 映射路径 --name指定名称 -p指定端口 ）

```shell
docker run -d --name nginx_80 -p 80:80 -v /home/zax/test.txt:/root/test.txt nginx
```

操作容器

```shell
sudo docker start\stop\restart\kill nginx
```

查看docker日志

```shell
docker logs -tf --tail 10 nginx
```

查看docker容器内部进程

```shell
docker top nginx
```

查看镜像信息

```shell
docker image inspect nginx:latest
```

查看容器信息

```shell
docker inspect nginx
```

停止容器

```shell
docker stop nginx
```

进入容器

```shell
docker exec -it centos7_test1 /bin/bash
```

退出容器

```shell
exit(直接退出)
ctrl+P+Q(不停止退出)
```

删除容器(删除前需要先退出)

```shell
docker rm nginx
docker rm $(docker ps -qa)(删除全部容器)
```

删除镜像

```shell
docker rmi nginx(镜像名称)
docker rmi $(docker images -qa)(删除全部镜像)
```

### docker-commit

登录自己的账户

```shell
docker login -u doflamingozzz
```

生成一个镜像

```shell
docker commit -m="php7.4" -a="zax" a92f10ff5967 php7.4:1.0
```

添加tag

```shell
docker tag a92f10ff5967 doflamingozzz/php7.4:1.0
docker tag 5a467601e38d doflamingozzz/php7.4:1.1

docker tag 5d34d12b8470 doflamingozzz/nginx-1.15.8.3:1.0
docker tag d935db9ae9f6 doflamingozzz/nginx-1.15.8.3:1.1
```

提交镜像到仓库

```shell
docker push doflamingozzz/php7.4:1.1
docker push doflamingozzz/nginx-1.15.8.3:1.1
```

docker pull doflamingozzz/nginx-1.15.8.3:1.0

docker pull doflamingozzz/php7.4:1.0

### docker-compose

安装compaose

```shell
curl -L https://get.daocloud.io/docker/compose/releases/download/1.2/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
docker-compose --version
```

### docker swarrn

初始化一个主节点11，生成worker节点token，生成管理节点token

```shell
docker swarm init --advertise-addr 192.168.10.11
docker swarm join-token worker
docker swarm join-token manager
```

查看节点

```shell
docker node ls
```

创建一个服务

```shell
docker service create -p 8080:80 --name nginx_test1 nginx
```

查看服务

```shell
docker service ps nginx_test1
docker service ls
```

更新服务（弹性扩展3台nginx）

```shell
docker service update --replicas 3 nginx_test1
```

删除服务

```shell
docker service rm nginx_test1
```

### Docker 部署 V2Ray

```shell
#安装docker
https://www.v2ray.com/chapter_00/install.html
https://toutyrater.github.io/app/docker-deploy-v2ray.html

Docker 技术是一种新的虚拟化技术，和传统的虚拟化技术不同。V2Ray 同样提供 Docker 部署方式，并且通过 Docker 来部署 V2Ray 会非常轻松高效。

Docker 只能部署在 KVM 或者 XEN 架构的 VPS中

首先安装 Docker：
$ sudo apt-get install -y docker
安装完 Docker 后我们从 DockerHub 通过搜索找到 V2Ray 官方提供的镜像， 链接在此. 找到拉取镜像的的命令并复制下来，在网页右侧我们可以看到命令为 docker pull v2ray/official ，我们将其复制下来回到命令行中粘贴并执行：

$ sudo docker pull v2ray/official
待 V2Ray 的 Docker 镜像拉取完成后就可以进入下一个部署阶段. 在此之前，你需要在 /etc 目录下新建一个文件夹 v2ray， 并把你的配置写好后命名为 config.json 放入 v2ray 文件夹内. 待配置文件准备就绪后键入以下命令进行部署，部署前请记下配置文件中你所设置的端口号，在部署时需要将其映射到宿主机上. 否则将无法访问. 此处假设设定的端口号为8888，需要映射到宿主机的8888端口上. 则命令为：

$ sudo docker run -d --name v2ray -v /etc/v2ray:/etc/v2ray -p 8888:8888 v2ray/official  v2ray -config=/etc/v2ray/config.json
键入以上命令后，命令行会出现一串字符，代表容器部署成功，可以立即通过客户端连接并开始使用了. 如果还不放心，键入以下命令来查看容器的运行状态：

$ sudo docker container ls
如果看到输出的结果中有以下字段代表容器成功运行：

$ docker container ls
CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS                     NAMES
2a7sdo87kdf3        v2ray/official        "v2ray -config=/et..."   3 minutes ago       Up 3 minutes        0.0.0.0:8888->8888/tcp    v2ray
通过以下命令来启动 V2Ray：

$ sudo docker container start v2ray
停止 V2Ray：

$ sudo docker container stop v2ray
重启 V2Ray：

$ sudo docker container restart v2ray
查看日志：

$ sudo docker container logs v2ray
更新配置后，需要重新部署容器，命令如下：

$ sudo docker container stop v2ray
$ sudo docker container rm v2ray
$ sudo docker run -d --name v2ray -v /etc/v2ray:/etc/v2ray -p 8888:8888 v2ray/official  v2ray -config=/etc/v2ray/config.json
假如你的配置换了端口号，那么相应的端口映射也要更改，假如你在配置文件中把监听端口改为了9999，则'-p'参数应该这样写：

-p  9999:9999
假如你想将容器中的端口映射到本机的端口，则命令应该这样写

-p 127.0.0.1:端口号:端口号
如果 V2Ray 用的传输层协议是 mKCP，由于 mKCP 基于 UDP，那么需要指定映射的端口是 UDP：

-p  9999:9999/udp
除非你打算使用Nginx来转发Websocket否则不需要映射到本地，直接填写端口号:端口号的形式即可

另外，如果开启了动态端口，-p 标记可以多次使用来绑定多个端口. 具体用法是在指令中再加上多个 -p 标记即可。

更新 V2Ray 的 Docker 镜像：

$ docker pull v2ray/official
更新完之后，你需要重新部署容器，方法见上。
```



-e导致命令停止任何[错误](https://www.jb51.cc/tag/cuowu/).更典型的语法是用&&和/或停止任何[错误](https://www.jb51.cc/tag/cuowu/).

-x使shell[输出](https://www.jb51.cc/tag/shuchu/)正在运行的每个命令.这对于调试脚本很有用.



### docker按配置启动redis

```shell
docker run -v /myredis/conf:/usr/local/etc/redis --name myredis redis redis-server /usr/local/etc/redis/redis.conf
```

### docker启动mysql，并设置初始root密码

```shell
docker pull mysql:5.7
docker run --name mysql -e MYSQL_ROOT_PASSWORD=123456 -p 3307:3306 -d mysql/mysql-server
```

```shell
 docker run --name mysql01 -d -p 3310:3306 -v /home/mysql/conf:/etc/mysql/conf.d -v /home/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 mysql:5.7
docker run --name mysql-5.5.57 -d -p 3306:3306 -v /mysql/docker/mysql-5.5.57/conf:/etc/mysql/conf. -v /mysql/docker/mysql-5.5.57/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD='P#H^}d@+5mp1ifg>' mysql:5.5.57
```

> 解析：
> --name mysql01                                       	  #  对容器的命名
> -d                                                              		#后台运行
> -p 3310:3306                                           		#对外暴露端口号3310
> -v /home/mysql/conf:/etc/mysql/conf.d    #配置文件挂载到当前宿主机的/home/mysql/conf
> -v /home/mysql/data:/var/lib/mys ql          #数据挂载到当前宿主机的 /home/mysql/data
> -e MYSQL_ROOT_PASSWORD=123456       #设置mysql的root用户的密码是：·123456

> docker 18.03 加入了一个 feature，在容器中可以通过 host.docker.internal 来访问主机
