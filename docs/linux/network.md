# network

> 网络相关命令



### 查看网络实时流量

```bash
sudo iftop -i eno3
```

> -i 指定网卡

### 查看tcp、udp连接数

```bash
sudo netstat -an | grep tcp | wc -l
sudo netstat -anu | grep udp | wc -l
```

> 这个命令的含义是：
>
> - `netstat -an`：列出系统上的所有网络连接，包括 TCP 和 UDP 连接。
> - `grep tcp`：筛选出 TCP 连接的行。
> - `wc -l`：对筛选后的行数进行统计，即计算 TCP 连接的数量

### 查看tcp错误数

```bash
sudo netstat -s | grep -i error
```

### 抓包到指定端口的数据包

```bash
sudo tcpdump -i eno3 -nn -vvv 'host 192.168.2.134 and port 12000'
```

> 这个命令的含义是：
>
> - `-i <interface>`：指定监视的网络接口。
> - `-nn`：禁用域名解析，显示IP地址而不是主机名。
> - `-vvv`：增加详细级别，显示更多的信息。
> - `'host <host_ip> and port <port>'`：过滤出指定主机和端口的流量