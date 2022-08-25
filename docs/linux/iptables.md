# iptables

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
iptables -I INPUT -s 14.23.97.250 -p tcp --dport 22 -j ACCEPT

#保存
service iptables save

#重启
service iptables restart
```



```SHELL
#!/bin/sh

# 先备份iptables规则
mkdir /web/shell/iptables_bak
cp /etc/sysconfig/iptables /web/shell/iptables_bak/iptables

# 设置之前关闭防火墙才是最安全的办法，否则会发生连接不上的问题
service iptables stop

# 禁止所有ip访问60011端口
iptables -I INPUT -p tcp --dport 60011 -j DROP

# 开放指定ip可以连接60011端口
iptables -A INPUT -i 127.0.0.1 -p tcp --dport 60011 -j ACCEPT
iptables -I INPUT -s 14.23.97.250,192.168.2.0/24 -p tcp --dport 60011 -j ACCEPT

# 允许部分出去的网络  			
iptables -A OUTPUT -d 192.168.2.0/24,14.23.97.250,121.201.88.88,114.114.114.114 -j ACCEPT    
   
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

```shell
#!/bin/sh

# 先备份iptables规则
mkdir /web/shell/iptables_bak
cp /etc/sysconfig/iptables /web/shell/iptables_bak/iptables

sed -i "s|#Port 22|Port 60011|g" /etc/ssh/sshd_config

# 设置之前关闭防火墙才是最安全的办法，否则会发生连接不上的问题
#service iptables stop

# 禁止所有ip访问60011端口
iptables -I INPUT -p tcp --dport 60011 -j DROP

# 开放指定ip可以连接60011端口
iptables -A INPUT -i 127.0.0.1 -p tcp --dport 60011 -j ACCEPT
iptables -I INPUT -s 14.23.97.250,192.168.2.0/24 -p tcp --dport 60011 -j ACCEPT

service iptables save
service sshd restart
```



> debian管理iptables需要用到iptables-persistent 
>
> 通过iptables-persistent生成的规则默认将被存储在以下文件中
>
> /etc/iptables/rules.v4    /etc/iptables/rules.v6

```shell
apt install iptables-persistent -y

# 保存重载
 sudo netfilter-persistent save
 sudo netfilter-persistent reload
```

iptables -A INPUT -i 14.23.97.250 -p tcp --dport 80 -j ACCEPT

iptables -A INPUT -i 14.23.97.250 -p tcp --dport 443 -j ACCEPT



### 服务器处理

1. 限制登陆ip只有14.23.97.250才能登陆
2. 防火墙限制访问外网ip
3. 修改默认ssh端口为60011
4. 修改全部账号密码，root、jobui及个人账号，删除可疑账号