# 源码安装zabbix5.4（centos6）

安装依赖

```shell
yum install libevent-devel OpenIPMI OpenIPMI-devel mysql-devel pcre*
```

新建zabbix用户（不能用root账户启动）

```shell
chattr -i /etc/group /etc/passwd /etc/shadow /etc/gshadow
groupadd --system zabbix
useradd --system -g zabbix -d /usr/lib/zabbix -s /sbin/nologin -c "Zabbix Monitoring System" zabbix
chattr +i /etc/group /etc/passwd /etc/shadow /etc/gshadow
```

后台php配置文件

/web/php/local/zabbix/conf/zabbix.conf.php

下载安装

```shell
wget https://cdn.zabbix.com/zabbix/sources/stable/5.4/zabbix-5.4.4.tar.gz
tar zxvf zabbix-5.4.4.tar.gz
cd zabbix-5.4.4
#安装zabbix-server
./configure --prefix=/web/software/zabbix  --enable-server --enable-agent --with-mysql --enable-ipv6  --with-libcurl --with-libxml2 --with-openipmi
#只安装zabbix-agent
./configure --prefix=/web/software/zabbix --enable-agent

#配置文件路径
#server：/web/software/zabbix/etc/zabbix_server.conf
#agent：/web/software/zabbix/etc/zabbix_agentd.conf
```



只安装zabbix-agent

```shell
##/bin/bash
cd /usr/local/src
wget https://cdn.zabbix.com/zabbix/sources/stable/5.4/zabbix-5.4.4.tar.gz

#创建zabbix用户
chattr -i /etc/group /etc/passwd /etc/shadow /etc/gshadow
groupadd --system zabbix
useradd --system -g zabbix -d /usr/lib/zabbix -s /sbin/nologin -c "Zabbix Monitoring System" zabbix
chattr +i /etc/group /etc/passwd /etc/shadow /etc/gshadow

tar zxvf zabbix-5.4.4.tar.gz
cd zabbix-5.4.4
./configure --prefix=/web/software/zabbix --enable-agent
make && make install
if [ $? -eq 0 ];then
sed -i 's/Server=127.0.0.1/Server=192.168.2.145/g' /web/software/zabbix/etc/zabbix_agentd.conf
sed -i 's/ServerActive=127.0.0.1/ServerActive=192.168.2.145/g' /web/software/zabbix/etc/zabbix_agentd.conf
sed -i 's/Hostname=Zabbix server/Hostname=host141/g' /web/software/zabbix/etc/zabbix_agentd.conf
echo "安装成功"
/web/software/zabbix/sbin/zabbix_agentd
else
echo "安装失败"
fi

```



### 创建磁盘io监控

```shell
##/bin/bash

#创建文件夹
mkdir -p /web/shell/zabbix/scripts
cd /web/shell/zabbix/scripts

#创建io监控脚本
cat > disk_io.sh << EOF
##!/bin/bash
############################################################
# $Name:         disk_io.sh
# $Function:     DISK IO
# $Author:       zax
# $Create Date:  2021/10/26
# $Description:  Monitor DISK IO
############################################################
Device=$1
DISK=$2
case $DISK in
#每秒读请求被合并次数
rrqm_s)
        iostat -dxkt 1 2 | grep "\b$Device\b" | awk 'NR==2{print $2}'
;;
#每秒写请求被合并次数
wrqm_s)
        iostat -dxkt 1 2 | grep "\b$Device\b" | awk 'NR==2{print $3}'
;;
#每秒完成的读次数
r_s)
        iostat -dxkt 1 2 | grep "\b$Device\b" | awk 'NR==2{print $4}'
;;
#每秒完成的写次数
w_s)
        iostat -dxkt 1 2 | grep "\b$Device\b" | awk 'NR==2{print $5}'
;;
#每秒读数据量(kb)
rkb_s)
        iostat -dxkt 1 2 | grep "\b$Device\b" | awk 'NR==2{print $6}'
;;
#每秒写数据量(kb)
wkb_s)
        iostat -dxkt 1 2 | grep "\b$Device\b" | awk 'NR==2{print $7}'
;;
#平均每次IO请求的扇区大小
avgrq_sz)
        iostat -dxkt 1 2 | grep "\b$Device\b" | awk 'NR==2{print $8}'
;;
#平均每次IO请求的队列长度(越短越好)
avgqu_sz)
        iostat -dxkt 1 2 | grep "\b$Device\b" | awk 'NR==2{print $9}'
;;
#平均每次IO请求等待时间(毫秒)
await)
        iostat -dxkt 1 2 | grep "\b$Device\b" | awk 'NR==2{print $10}'
;;
#读的平均耗时(毫秒)
r_await)
        iostat -dxkt 1 2 | grep "\b$Device\b" | awk 'NR==2{print $11}'
;;
#写入平均耗时(毫秒)
w_await)
        iostat -dxkt 1 2 | grep "\b$Device\b" | awk 'NR==2{print $12}'
;;
#平均每次IO请求处理时间(毫秒)
svctm)
        iostat -dxkt 1 2 | grep "\b$Device\b" | awk 'NR==2{print $13}'
;;
#IO队列非空比例
util)
        iostat -dxkt 1 2 | grep "\b$Device\b" | awk 'NR==2{print $14}'
;;
esac
EOF

#创建磁盘发现脚本
cat > disk_discovery.sh << EOF
#!/bin/bash
############################################################
# $Name:         disk_discovery.sh
# $Function:     DISK DISCOVERY
# $Author:       zax
# $Create Date:  2021/10/26
# $Description:  Monitor DISK DISCOVERY
############################################################
disk_array=(`grep -E "(vd[a-z]$|sd[a-z]$)" /proc/partitions | awk '{print $4}'`)
length=${#disk_array[@]}
printf "{\n"
printf  '\t'"\"data\":["
for ((i=0;i<$length;i++))
do
        printf '\n\t\t{'
        printf "\"{#DISK_NAME}\":\"${disk_array[$i]}\"}"
        if [ $i -lt $[$length-1] ];then
                printf ','
        fi
done
printf  "\n\t]\n"
printf "}\n"
EOF


```

