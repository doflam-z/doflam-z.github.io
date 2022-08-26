# iptables



> debian管理iptables需要用到iptables-persistent ，或者ufw
>
> 通过iptables-persistent生成的规则默认将被存储在以下文件中
>
> /etc/iptables/rules.v4    /etc/iptables/rules.v6

### 安装iptables-persistent来使用iptables命令

```shell
sudo apt install iptables-persistent -y
# 保存重载
sudo netfilter-persistent save
sudo netfilter-persistent reload
```

### 或者安装使用 UFW 来设置防火墙

安装

```shell
sudo apt update
sudo apt install ufw

#检查状态，默认是关闭
sudo ufw status verbose
```

UFW默认策略是关闭所有进来的连接，开启所有出去的连接，文件路径在：

> /etc/default/ufw

允许一个端口

```shell
sudo ufw allow 7722/tcp
```

打开一段端口

```shell
sudo ufw allow 7100:7200/tcp
sudo ufw allow 7100:7200/udp
```

允许指定ip访问所有端口

```shell
sudo ufw allow from 10.10.10.10
```

允许指定ip访问指定端口

```shell
sudo ufw allow from 64.63.62.61 to any port 22

sudo ufw allow from 120.232.65.223 to any port 5574,8080,80,9080,443
sudo ufw allow from 157.148.45.20 to any port 5574,8080,80,9080,443
sudo ufw allow from 183.2.143.163 to any port 5574,8080,80,9080,443/tcp
```

允许整个网段

```shell
sudo ufw allow from 192.168.1.0/24 to any port 3306
```

禁止连接

```shell
sudo ufw deny from 23.24.25.0/24 to any port 80
sudo ufw deny from 23.24.25.0/24 to any port 443
```

查看规则

```shell
sudo ufw status numbered
```

删除规则

```shell
sudo ufw delete 3
```

启动、关闭、重置

```shell
sudo ufw enable
sudo ufw disable
sudo ufw reset
```



### 更换默认ssh端口

```shell
#1.开启一个ssh端口

vi /etc/ssh/sshd_config

#把#Port 22
#修改为

Port 22
Port 2222

service sshd restart

#防火墙开启2222端口（如果开启了selinux，记得一定要关闭）

#去测试一下2222端口是否开启，这点很重要

#2.设置方法一：只允许192.168.5.231访问

#运行完下面这一行，你已经不能访问了，改用2222去设置下面一行
iptables -I INPUT -p tcp --dport 22 -j DROP

#用2222端口去运行下面一行，运行完，22端口就可以使用
iptables -I INPUT -s x.x.x.x -p tcp --dport 22 -j ACCEPT

#保存
service iptables save

#重启
service iptables restart
```



### iptables配置脚本

```SHELL
#!/bin/sh

# 先备份iptables规则
mkdir /web/shell/iptables_bak
cp /etc/sysconfig/iptables /web/shell/iptables_bak/iptables

# 设置之前关闭防火墙才是最安全的办法，否则会发生连接不上的问题
service iptables stop

# 禁止所有ip访问22端口
iptables -I INPUT -p tcp --dport 22 -j DROP

# 开放指定ip可以连接22端口
iptables -A INPUT -i 127.0.0.1 -p tcp --dport 22 -j ACCEPT
iptables -I INPUT -s x.x.x.x,192.168.2.0/24 -p tcp --dport 22 -j ACCEPT

# 允许部分出去的网络  			
iptables -A OUTPUT -d 192.168.2.0/24,x.x.x.x,121.201.88.88,114.114.114.114 -j ACCEPT    
   
# 允许访问的外网
iptables -A OUTPUT -d open.work.weixin.qq.com,v0.api.upyun.com,v1.api.upyun.com,v2.api.upyun.com,v3.api.upyun.com,graph.qq.com,apis.map.qq.com,api.weixin.qq.com,login.weixin.qq.com,wx.qq.com,api.weibo.com,js4.jobui.com,css4.jobui.com,m.jobui.com,www.jobui.com,apis.jobui.com -j ACCEPT


#允许icmp包通过,也就是允许ping
iptables -A INPUT -p icmp -m icmp --icmp-type 8 -j ACCEPT

#本机对外请求相当于OUTPUT,对于返回数据包必须接收啊，这相当于INPUT了
iptables -I INPUT -i lo -j ACCEPT
iptables -I INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT

# 禁用所有出去的网络
iptables -P OUTPUT DROP

# 保存iptbales规则
service iptables save

# 重新启动
service iptables restart 


```



### iptables操作

```bash
# 查看所有规则列表并打印编号
iptables -L -n --line-numbers

# 删除一条规则
iptables -D INPUT 7
# 或
iptables -D OUTPUT 7

# 允许所有出口访问
sudo iptables -A OUTPUT -j ACCEPT

#允许所有入口访问
sudo iptables -A INPUT -j ACCEPT

```



### 更换ssh端口脚本

```shell
#!/bin/sh

# 先备份iptables规则
mkdir /web/shell/iptables_bak
cp /etc/sysconfig/iptables /web/shell/iptables_bak/iptables

sed -i "s|#Port 22|Port 22|g" /etc/ssh/sshd_config

# 设置之前关闭防火墙才是最安全的办法，否则会发生连接不上的问题
#service iptables stop

# 禁止所有ip访问22端口
iptables -I INPUT -p tcp --dport 22 -j DROP

# 开放指定ip可以连接22端口
iptables -A INPUT -i 127.0.0.1 -p tcp --dport 22 -j ACCEPT
iptables -I INPUT -s x.x.x.x,192.168.2.0/24 -p tcp --dport 22 -j ACCEPT

service iptables save
service sshd restart
```
