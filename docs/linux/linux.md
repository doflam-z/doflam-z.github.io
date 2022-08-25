# 基础命令

### shell命令

```shell
#查看一级目录文件夹大小
sudo du -h --max-depth=1

#查看已删除文件进程
lsof | grep deleted 

#查看发行版
lsb_release -a 

#查看cpu核心数
nproc

#查看cpu型号 “| head -1”是只返回第一个
cat /proc/cpuinfo |grep "model name" | head -1

#循环执行一条命令
while true; do date; sleep 1; done
watch -n 1 -d netstat -ant

# 统计文本中出现关键字的次数
grep -o objStr  filename|wc -l

#kill掉所有符合关键字的进程
ps -ef | grep jobTypeRankDailyData| grep -v grep | cut -c 9-15 | xargs kill

ps -ef | grep rabbitmq| grep -v grep | cut -c 9-15 | xargs kill

#根据进程id查端口
netstat -nap | grep 进程pid

#根据监听端口查看进程
netstat -ntpl | grep ":8755"

#切换用户只执行一条命令的可以用: 
su - user -c command
#切换用户执行一个shell文件可以用: 
su - user -s /bin/bash shell.sh

#设置环境变量（临时）
export LIBZIP_LIBS="/web/software/libzip-1.3.2/lib"
#设置环境变量（永久）(尽量直接编辑，不要echo，容易不小心覆盖文件)
echo "export ONIG_CFLAGS=/usr/bin/onig-config" >> /etc/profile
#立即生效
source /etc/profile

#rpm查找包
rpm -q libcurl
#rpm安装包
rpm -ivh libcurl
#rpm卸载包 （ --nodeps忽略依赖）
rpm -e --nodeps libcurl
   

#搜索替换文件内容
sudo sed -i 's/track_errors = On/track_errors = Off/g' /web/software/php-7.4.23/lib/php.ini

sudo sed \
-e 's/jackson-dataformat-smile-2.8.6.jar/jackson-dataformat-smile-2.10.0.jar/' \
-e 's/jackson-dataformat-yaml-2.8.6.jar/jackson-dataformat-yaml-2.10.0.jar/' \
-e 's/jackson-dataformat-cbor-2.8.6.jar/jackson-dataformat-cbor-2.10.0.jar/' \
-e 's/jackson-core-2.8.6.jar/jackson-core-2.10.0.jar/' \
-e 's/snakeyaml-1.15.jar/snakeyaml-1.24.jar/' jobuiResumeV2.0_index/indexStart.sh

sudo sed -i 's/jackson-dataformat-smile-2.8.6.jar/jackson-dataformat-smile-2.10.0.jar/g' jobuiResumeV2.0_index/indexStart.sh
sudo sed -i 's/jackson-dataformat-yaml-2.8.6.jar.jar/jackson-dataformat-yaml-2.10.0.jar/g' jobuiResumeV2.0_index/indexStart.sh
sudo sed -i 's/jackson-dataformat-cbor-2.8.6.jar/jackson-dataformat-cbor-2.10.0.jar/g' jobuiResumeV2.0_index/indexStart.sh
sudo sed -i 's/jackson-core-2.8.6.jar/jackson-core-2.10.0.jar/g' jobuiResumeV2.0_index/indexStart.sh
sudo sed -i 's/snakeyaml-1.15.jar/snakeyaml-1.24.jar/g' jobuiResumeV2.0_index/indexStart.sh

jackson-dataformat-smile-2.8.6.jar
jackson-dataformat-yaml-2.8.6.jar
jackson-dataformat-cbor-2.8.6.jar
jackson-core-2.8.6.jar
snakeyaml-1.15.jar

#统计文件夹大小（包含文件）
du -h --max-depth=1 /mysql

#统计当前目录文件按大小排序
du -s * | sort -nr

#批量解压zip文件到指定文件夹
ls *.zip | xargs -n1 unzip -o -d unzip/

#批量解压tar压缩文件
ls *.tar.gz | xargs -n1 tar -zxvf

#xargs是给命令传递参数的一个过滤器，可以将前一个命令产生的输出作为后一个命令的参数
find test2/ -name '*.tes' |xargs rm -rf
#命令即将find产生的输出（test2目录下的所有tes文件），作为rm的参数，从而完全删除

```

### shell判断

```shell
if list then
	do something here
elif list then
	do another thing here
else
	do something else here
fi
  
#EX1:
#!/bin/sh

SYSTEM=`uname -s`    #获取操作系统类型，我本地是linux

if [ $SYSTEM = "Linux" ] ; then     #如果是linux的话打印linux字符串
echo "Linux"
elif [ $SYSTEM = "FreeBSD" ] ; then   
echo "FreeBSD"
elif [ $SYSTEM = "Solaris" ] ; then
echo "Solaris"
else
echo "What?"
fi     #ifend
```

基本上和其他脚本语言一样。没有太大区别。不过值得注意的是。[]里面的条件判断。[]内两边要有空格

1 字符串判断

```shell
str1 = str2　　　　　　当两个串有相同内容、长度时为真
str1 != str2　　　　　 当串str1和str2不等时为真
-n str1　　　　　　　 当串的长度大于0时为真(串非空)
-z str1　　　　　　　 当串的长度为0时为真(空串)
str1　　　　　　　　   当串str1为非空时为真
```

2 数字的判断

```shell
int1 -eq int2　　　　两数相等为真
int1 -ne int2　　　　两数不等为真
int1 -gt int2　　　　int1大于int2为真
int1 -ge int2　　　　int1大于等于int2为真
int1 -lt int2　　　　int1小于int2为真
int1 -le int2　　　　int1小于等于int2为真
```

3 文件的判断

```shell
-r file　　　　　用户可读为真
-w file　　　　　用户可写为真
-x file　　　　　用户可执行为真
-f file　　　　　文件为正规文件为真
-d file　　　　　文件为目录为真
-c file　　　　　文件为字符特殊文件为真
-b file　　　　　文件为块特殊文件为真
-s file　　　　　文件大小非0时为真
-t file　　　　　当文件描述符(默认为1)指定的设备为终端时为真
```

3 复杂逻辑判断

```shell
-a 　 　　　　　 与
-o　　　　　　　 或
!　　　　　　　　非
```

4 参数判断

```shell
$0 这个程式的执行名字
$n 这个程式的第n个参数值，n=1..9
$* 这个程式的所有参数,此选项参数可超过9个。
$# 这个程式的参数个数
$$ 这个程式的PID(脚本运行的当前进程ID号)
$! 执行上一个背景指令的PID(后台运行的最后一个进程的进程ID号)
$? 执行上一个指令的返回值 (显示最后命令的退出状态。0表示没有错误，其他任何值表明有错误)
$- 显示shell使用的当前选项，与set命令功能相同
$@ 跟$*类似，但是可以当作数组
```

### 判断目录文件数量

Linux下有三个命令：`ls`、`grep`、`wc`。通过这三个命令的组合可以统计目录下文件及文件夹的个数。

统计当前目录下文件的个数（不包括目录）

```shell
ls -l | grep "^-" | wc -l
```

统计当前目录下文件的个数（包括子目录）

```shell
ls -lR| grep "^-" | wc -l
```

查看某目录下文件夹(目录)的个数（包括子目录）

```shell
ls -lR | grep "^d" | wc -l
```

### vim

Vim中如何全选并复制？（区分大小写！！！）

1. 全部删除：按esc键后，先按gg（到达顶部），然后dG
2. 全部复制：按esc键后，先按gg，然后ggyG
3. 全选高亮显示：按esc键后，先按gg，然后ggvG或者ggVG
4. 单行复制：按esc键后，然后yy
5. 单行删除：按esc键后，然后dd
6. 粘贴：按esc键后，然后p

vim批量注释

1.按下v然后上下键选中内容

2.按下ctrl+v进入列模式，再按下大写I进入插入模式，输入注释符

3.最后按两次esc



vim批量取消注释

1.按ctrl+v，上下键选中后注释符号后按d



### ssh

```shell
#生成本机密钥
ssh-keygen -t rsa -C "zax"

#发送公钥到指定服务器账户
scp /home/zax/.ssh/id_rsa.pub zax@192.168.2.132:/home/zax/.ssh/authorized_keys

#使用mkpasswd可以根据自己的定义来随意生成密码，其中包括长度，包含内容的个数等。
#首先需要安装expect
yum -y install expect
#安装完成就可以使用了，以下为使用参数（这几个参数基本够用）：
-l #      (密码的长度定义, 默认是 9)
-d #      (数字个数, 默认是 2)
-c #      (小写字符, 默认是 3)
-C #      (大写字符, 默认是 2)
-s #      (特殊字符, 默认是  1)

mkpasswd -l 16 -d 2 -C 2 -s 2

#sshd_config配置只允许指定用户+ip登录
AllowUsers zax@192.168.1.63 zax@192.168.1.75

#iptables配置只允许指定ip登录
#禁止所有ip连接22端口
sudo iptables -I INPUT -p tcp --dport 22 -j DROP
#开启ip段192.168.1.0/24端的80口 可以改成别的端口号
sudo iptables -I INPUT -s 192.168.2.0/24 -p tcp --dport 22 -j ACCEPT
#保存
sservice iptables save

#删除规则
iptables -L INPUT --line-numbers
iptables -D INPUT 7

#安装telnet
yum -y install telnet-server.x86_64

#将disable = yes改为 disable = no，退出保存。
nano /etc/xinetd.d/telnet

#然后启动telnet服务：
service xinetd start

#查看启用的加密算法
sudo ssh -Q cipher

```



### linux 用 grep 查找单个或多个字符串（关键字)

单个字符串进行查找：

1. 查找当前目录文件名中的字符串：    grep  字符串  文件名

2. 查找某个文件中字符串，并输出行号：grep -n 字符串 文件名

3. 查找当前目录（包含子目录）的字符串：grep -r 字符串 *

4. 查找当前目录（包含子目录）的字符串，并输出行号：grep -rn 字符串 *

5. * :通配符，表示当前目录所有文件，也可以按照某种模式进行匹配，例如：

   grep 字符串 *.txt   匹配所有文件后缀名为txt的字符串

6. -r ：递归查找

7. -n ：显示行号

8. -R ：查找所有文件包含子目录

9. -i ：忽略大小写

10. 2、同时满足多个字符串查找：

11. grep 字符串1 文件名| grep 字符串2|grep 字符串3|grep ...

12. 3、满足多个关键字之一

13. grep -E "字符串1|字符串2|字符串3|"  文件名   或者

14. egrep  "字符串1|字符串2|字符串3|"  文件名

    

```shell
grep -v "^#" /etc/ssh/sshd_config	#不匹配#开头的行
egrep -v "^#|^$" /etc/ssh/sshd_config
```

### 查看实时网速

```shell
watch -n 1 "/sbin/ifconfig eth1 | grep bytes"
```

### 磁盘相关命令

```shell
#查看磁盘信息
sudo lsblk

sudo fdisk -l

sudo df -h

#查看分区uuid
sudo blkid

#更新磁盘分区表
partx -v -a /dev/sda

#新建分区
fdisk /dev/sda
n
w

#格式化
sudo mkfs.ext4 /dev/sdb1

#开机读取的挂载目录,可以在这里屏蔽有问题的分区
vim /etc/fstab

#安装smartmontools
------------ 在基于 Debian/Ubuntu 的系统上 ------------
sudo apt-get install smartmontools
------------ 在基于 RHEL/CentOS 的系统上 ------------
sudo yum install smartmontools
#检测
sudo smartctl -H /dev/sda

# 测试磁盘读写速度
# 测试写入速度
sudo dd if=/dev/zero of=/jobui/tempfile bs=1M count=1024
# 测试读取速度
sudo dd if=/jobui/tempfile of=/dev/null bs=1M count=1024

# 查看硬盘型号
hdparm -i /dev/hda
```

### 创建LVM磁盘

```shell
#将硬盘添加到pv分区
sudo pvcreate /dev/sda
sudo pvcreate /dev/sdb
sudo pvcreate /dev/sdc
sudo pvcreate /dev/sdd
#查看pv分区信息
sudo pvs

#创建并将sda加入VG_SSD1
sudo vgcreate VG_SSD1 /dev/sda
#将sdb加入VG_SSD1
sudo vgextend VG_SSD1 /dev/sdb

#创建并将sdc加入VG_SSD2
sudo vgcreate VG_SSD2 /dev/sdc
#将sdd加入VG_SSD2
sudo vgextend VG_SSD1 /dev/sdd

#查看vg分区信息
sudo vgs
#查看vg详情
sudo vgdisplay VG_SSD1

#创建lv分区
sudo lvcreate --extents 100%FREE VG_SSD1 -n LV_SSD1
sudo lvcreate --extents 100%FREE VG_SSD2 -n LV_SSD2
#查看lv分区
sudo lvs
#以上步骤创建完了逻辑卷接下来格式化分区
sudo mkfs.ext4 /dev/VG_SSD1/LV_SSD1
sudo mkfs.ext4 /dev/VG_SSD2/LV_SSD2

#挂载分区
mount -o noatime,nodiratime /dev/mapper/VG_SSD1-LV_SSD1 /ssd_jobui
mount -o noatime,nodiratime /dev/mapper/VG_SSD2-LV_SSD2 /ssd_company


lvm vgscan
lvm vgchange -ay
lvm lvs
最后使用e2fsck命令修复一下LVM磁盘：
e2fsck -f -y /dev/mapper/VolGroup00-LogVol00

```



# 运维日志



### 跑数据记录

```shell
nohup php -q jobuiV4/autoRun/company/vipCompanyFlushJobToList.php > /tmp/vipCompanyFlushJobToList.log &

nohup php -q jobuiV4/autoRun/rank/industryLastRankingMonth.php > /tmp/industryLastRankingMonth.log &

nohup php -q jobuiV4/autoRun/company/recommendCompanyClose.php > /tmp/recommendCompanyClose.log &
```



```shell
#公司招聘
nohup php -q jobuiV4/autoRun/siteMap/wxMiniCompanyJobPush.php >> /tmp/wxMiniCompanyJobPush.log & （重新提交完成）
#选专业
nohup php -q jobuiV4/autoRun/siteMap/wxMiniMajorPush.php >> /tmp/wxMiniMajorPush.log &(已完成)
#岗位职责
nohup php -q jobuiV4/autoRun/siteMap/wxMiniGangweiPush.php >> /tmp/wxMiniGangweiPush.log &（已完成）
#职位百科
nohup php -q jobuiV4/autoRun/siteMap/wxMiniDetailiPush.php > /tmp/wxMiniDetailiPush.log &（已完成）
#公司页
nohup php -q jobuiV4/autoRun/siteMap/wxMiniCredibleiCompanyPush.php >> /tmp/wxMiniCredibleiCompanyPush.log &（提交完成）
nohup php -q jobuiV4/autoRun/siteMap/delWxMiniCredibleiCompanyPush.php >> /tmp/delWxMiniCredibleiCompanyPush.log &（删除公司已完成）
#公司工资
nohup php -q jobuiV4/autoRun/siteMap/wxMiniCompanySalaryPush.php >> /tmp/wxMiniCompanySalaryPush.log & （正在跑数据）
#PHP Fatal error:  Allowed memory size of 2147483648 bytes exhausted (tried to allocate 82 bytes) in /web/php/projectPHP/baseClassV4/class/FormatClass.php on line 62
#公司产品
nohup php -q jobuiV4/autoRun/siteMap/wxMiniProductInfoPush.php >> /tmp/wxMiniProductInfoPush.log &
#薪酬页
nohup php -q jobuiV4/autoRun/siteMap/wxMiniSalaryPush.php >> /tmp/wxMiniSalaryPush.log &  （已完成）
#薪酬页按经验
nohup php -q jobuiV4/autoRun/siteMap/wxMiniSalaryExpPush.php >> /tmp/wxMiniSalaryExpPush.log & （正在跑数据）
#薪酬页小地区
nohup php -q jobuiV4/autoRun/siteMap/wxMiniSalarySmallCityPush.php >> /tmp/wxMiniSalarySmallCityPush.log &
#薪酬页学历
nohup php -q jobuiV4/autoRun/siteMap/wxMiniSalaryTypePush.php >> /tmp/wxMiniSalaryTypePush.log &

#职位搜索：城市
nohup php -q jobuiV4/autoRun/siteMap/bdJobSearchCityPush.php >> /tmp/bdJobSearchCityPush.log &(全部提交完毕)
#职位搜索：小地区
nohup php -q jobuiV4/autoRun/siteMap/bdJobSearchAreaPush.php >> /tmp/bdJobSearchAreaPush.log &（全部提交完毕）

#删除指定邮箱
nohup php -q jobuiV4/autoRun/data/updateCompanyContactway.php >> /tmp/updateCompanyContactway.log &

```



### ssdb有时无法重启

#### [ssdb有时无法重启](https://github.com/ideawu/ssdb/issues/701#)

```shell
#ssdb.conf 里面 pidfile的路径写的有问题, 不能写绝对路径,要写相对的
例如:
# relative to path of this file, directory must exists
work_dir = /data/ssdb/var
pidfile = ./ssdb.pid

```

### 重启Redis

```shell
#132
cd /web/bcshell/cache
sudo sh startRedis5_132.rc
sudo sh startTwemproxy.rc
```

### 重启职位搜索

```shell
#jobui
#重启145搜索
cd /web/java/jobuiV4.5/jobuiPosition4.5/
sudo sh search.sh
#重启132中间件
cd /web/java/transferSearch/transferSearch4.1/
sudo sh start.sh

#baicai
sudo sh /web/java/transferSearch/transferSearch4.1/startBaicai.sh
```

### 公司搜索

搜索程序名称：jobuiCompanyV4.8

**139**是代理，**192.168.2.136:8755** **192.168.2.135:8755**跑搜索程序

索引程序在145上，程序路径：/web/java/jobuiV4.8/jobuiCompany4.8_index

查看索引最后更新日期：/baicai/log/jobuiCompanyV4.8_/index-detail-20220324.log

搜索程序路径：/web/java/jobuiV4.8/jobuiCompany4.8/



### 关注还关注java程序

```shell
#本地23服务器
sh /web/java/JobuiCompanyRecommendCollect/start.sh
```





### 发布代码 拉取提交日志失败 rsync.php 获取不到最近提交文件日志

http://121.9.201.135/rsync.php
解决办法：用jobui用户执行 /web/shell/coding_rsync.sh



### 源码安装gcc报错

configure: error: Building GCC requires GMP 4.2+, MPFR 2.4.0+ and MPC 0.8.0+.

执行：./contrib/download_prerequisites



### rsync文件同步

```shell
rsync -av --delete /web/php/projectPHP/jobuiV4/app/site/demo/zax/demo.php '-e ssh -p 60011' zax@192.168.2.133:/web/php/projectPHP/jobuiV4/app/site/demo/zax/demo.php >> /tmp/rsyncTest.log

rsync -av  --delete /web/software/nginx/conf/jobui/http_jobui.conf '-e ssh -p 60011' jobui@192.168.2.145:/web/software/nginx/conf/jobui/http_jobui.conf >> /tmp/rsync.log


rsync -av  --delete /web/software/nginx/conf/jobui/http_jobui.conf '-e ssh -p 60011' jobui@192.168.2.145:/web/software/nginx/conf/jobui/http_jobui.conf   >> /tmp/rsync.log
```



### nginx 配置同步失败 

​	http://auto.jobui.com/mainAuto/nginx_online

* Nginx配置修改上线
1. 在autoConfig那个项目里面改代码
2. 手动在145用jobui用户  在/web/python/source/autoConfig  执行  git pull origin master 拉取最新代码
3. web界面 http://auto.jobui.com/mainAuto/nginx_online 同步 先同步到测试  没问题再同步到线上

### 209(145) 代码发布

用 jobui 账号
cd /web/php/workspace
git pull origin dev209
/web/shell/coding_rsync_209.sh



### 浏览量统计

> 旧的流程：
>
> 1. 页面js方法UIWebLogV2();访问weblog.jobui.com -> 请求到136:1818，队列名称：uw，队列配置：UISqsListLog，路径：baseClassV3/listen/_SqsListConnect.php
> 2. 消费队列存储数据进mysql，host：139，库名：log_jobui，表名：tb_webLog，自动脚本路径：baicaiV3/autoRun/UIList/UISqsListToDB.php 定时任务脚本：baicaiV3/autoRun/hourly_log.rc，执行定时任务机器：136
> 3. 本地24机器拉取线上数据库数据到本地数据库：log_UI_weblog，表名：tb_webLog , java程序启动路径：/web/java/java/DBSynchronized/start.sh
> 4. 16机器java程序处理数据到jobui_data_day数据库，表名jobui_data_company-(年份)-day
>

处理步骤：

1. 先解决客户的需求，写个自动脚本在跑浏览量月表数据之前把地区加进去
2. php重写浏览量统计：获取log_UI_webLog库tb_webLog表的当天数据，分析公司id，统计浏览次数，更新进jobui_data_day数据库，表名jobui_data_company-(年份)-day
3. 停掉16的java浏览量统计程序 /web/java/JobuiBatch/s_jobTop.sh



### 抓取服务重启

![image-20210706104315555](C:\Users\Z\AppData\Roaming\Typora\typora-user-images\image-20210706104315555.png)

![image-20210706140426180](C:\Users\Z\AppData\Roaming\Typora\typora-user-images\image-20210706140426180.png)



##### 先查看状态http://192.168.1.34:15672，输入snatPosition筛选，如果运行状态不是running的话，重启28的rabbitMQ：

```shell
#重启mq
ps aux |grep rabbitmq*
kill -9 pid
#或者
ps -ef | grep rabbitmq| grep -v grep | cut -c 9-15 | xargs kill
#rabbitmq启动
service rabbitmq-server start
#/web/software/rabbitmq_server-3.5.8/sbin/rabbitmq-server -detached
```

##### 如果deliver / get 速率是0的话，说明服务端有问题，重启13的服务端、17+34的客户端

```shell
#重启13的服务端
sh /web/java/snatch_new/snatchServer/start.sh > /dev/null &
#重启17跟34的客户端
sh /web/java/snatch_new/snatchClient/start.sh > /dev/null &
```

最后查看抓取数量http://192.168.1.7:8080/jobstatV1.0/stat.jsp，如果为0的话，重启13的映射端服务（可能有延迟）。

```shell
#重启13的mapping服务
sh /web/java/snatch_new/snatchMapping/start.sh > /dev/null &
```

 

### 职位抓取统计页面打不开

查看是否是本地1.7的tomcat没启动，启动脚本在：/web/software/tomcat-7.0.103/bin/startup.sh



### 新闻抓取服务启动

本地23：/web/java/snatchCompanyNew/start.sh



### 133 宕机

* php配置修改

1. mongo 配置去掉133   baseClassV4/listen/_ConnectMongo.php（恢复并新加了141）
2. cache配置修改 去掉133   baseClassV4/listen/_ConnectCache.php（恢复）
3. 趋势搜索修改 去掉133   baseClassV4/listen/_ConnectThriftSearch.php（恢复）
4. 133的定时任务加到134上去    /etc/crontab（恢复）

* session 去掉133：6379
  132、134、135、136、137、138、139

* lvs 删除133 的3个IP的负载均衡
  ipvsadm -d -t 121.9.201.130:443 -r 121.9.201.133:443
  ipvsadm -d -t 183.232.9.231:443 -r 183.232.9.227:443
  ipvsadm -d -t 120.31.62.194:443 -r 120.31.62.197:443

  

  ipvsadm -d -t 121.9.201.130:80 -r 121.9.201.133:80
  ipvsadm -d -t 183.232.9.231:80 -r 183.232.9.227:80



百才项目修改

去除133

baseClassV3/listen/_CacheConnection.php

baseClassV3/listen/_ConnectCache.php



### 备份所有服务器etc文件夹

tar -zcvf /tmp/etc_134.tar.gz /etc

chown jobui:jobui /tmp/etc_134.tar.gz



mv /tmp/etc_133.tar.gz /web/jobui_tmp/etc_bak/





### 硬盘错误记录

```shell
[zax@host134 ~]$ sudo smartctl --all /dev/sdc
smartctl 5.43 2012-06-30 r3573 [x86_64-linux-2.6.32-504.el6.x86_64] (local build)
Copyright (C) 2002-12 by Bruce Allen, http://smartmontools.sourceforge.net

=== START OF INFORMATION SECTION ===
Device Model:     INTEL SSDSC2BW240A4
Serial Number:    BTDA330608TY2403GN
LU WWN Device Id: 5 5cd2e4 04b4117ba
Firmware Version: DC12
User Capacity:    240,057,409,536 bytes [240 GB]
Sector Size:      512 bytes logical/physical
Device is:        Not in smartctl database [for details use: -P showall]
ATA Version is:   8
ATA Standard is:  ACS-2 (unknown minor revision code: 0xffff)
Local Time is:    Wed Aug 11 10:51:39 2021 CST
SMART support is: Available - device has SMART capability.
SMART support is: Enabled

=== START OF READ SMART DATA SECTION ===
SMART STATUS RETURN: incomplete response, ATA output registers missing
SMART overall-health self-assessment test result: FAILED!
Drive failure expected in less than 24 hours. SAVE ALL DATA.
See vendor-specific Attribute list for failed Attributes.

General SMART Values:
Offline data collection status:  (0x05) Offline data collection activity
                                        was aborted by an interrupting command from host.
                                        Auto Offline Data Collection: Disabled.
Self-test execution status:      (  33) The self-test routine was interrupted
                                        by the host with a hard or soft reset.
Total time to complete Offline 
data collection:                ( 5860) seconds.
Offline data collection
capabilities:                    (0x7f) SMART execute Offline immediate.
                                        Auto Offline data collection on/off support.
                                        Abort Offline collection upon new
                                        command.
                                        Offline surface scan supported.
                                        Self-test supported.
                                        Conveyance Self-test supported.
                                        Selective Self-test supported.
SMART capabilities:            (0x0003) Saves SMART data before entering
                                        power-saving mode.
                                        Supports SMART auto save timer.
Error logging capability:        (0x01) Error logging supported.
                                        General Purpose Logging supported.
Short self-test routine 
recommended polling time:        (   1) minutes.
Extended self-test routine
recommended polling time:        (  48) minutes.
Conveyance self-test routine
recommended polling time:        (   2) minutes.
SCT capabilities:              (0x0025) SCT Status supported.
                                        SCT Data Table supported.

SMART Attributes Data Structure revision number: 10
Vendor Specific SMART Attributes with Thresholds:
ID# ATTRIBUTE_NAME          FLAG     VALUE WORST THRESH TYPE      UPDATED  WHEN_FAILED RAW_VALUE
  5 Reallocated_Sector_Ct   0x0032   100   100   000    Old_age   Always       -       6
  9 Power_On_Hours          0x0032   100   100   000    Old_age   Always       -       45864 (19 8 0)
 12 Power_Cycle_Count       0x0032   100   100   000    Old_age   Always       -       13
170 Unknown_Attribute       0x0033   001   001   010    Pre-fail  Always   FAILING_NOW 0
171 Unknown_Attribute       0x0032   100   100   000    Old_age   Always       -       3
172 Unknown_Attribute       0x0032   100   100   000    Old_age   Always       -       0
174 Unknown_Attribute       0x0032   100   100   000    Old_age   Always       -       7
183 Runtime_Bad_Block       0x0032   100   100   000    Old_age   Always       -       0
184 End-to-End_Error        0x0033   100   100   090    Pre-fail  Always       -       0
187 Reported_Uncorrect      0x0032   100   100   000    Old_age   Always       -       0
190 Airflow_Temperature_Cel 0x0032   033   046   000    Old_age   Always       -       33 (Min/Max 21/46)
192 Power-Off_Retract_Count 0x0032   100   100   000    Old_age   Always       -       7
199 UDMA_CRC_Error_Count    0x0032   100   100   000    Old_age   Always       -       0
225 Load_Cycle_Count        0x0032   100   100   000    Old_age   Always       -       6386481
226 Load-in_Time            0x0032   100   100   000    Old_age   Always       -       65535
227 Torq-amp_Count          0x0032   100   100   000    Old_age   Always       -       76
228 Power-off_Retract_Count 0x0032   100   100   000    Old_age   Always       -       65535
232 Available_Reservd_Space 0x0033   001   001   010    Pre-fail  Always   FAILING_NOW 0
233 Media_Wearout_Indicator 0x0032   043   043   000    Old_age   Always       -       0
241 Total_LBAs_Written      0x0032   100   100   000    Old_age   Always       -       6386481
242 Total_LBAs_Read         0x0032   100   100   000    Old_age   Always       -       20505581
249 Unknown_Attribute       0x0032   100   100   000    Old_age   Always       -       418550

SMART Error Log not supported
SMART Self-test log structure revision number 1
Num  Test_Description    Status                  Remaining  LifeTime(hours)  LBA_of_first_error
# 1  Offline             Interrupted (host reset)      10%     28046         -
# 2  Offline             Interrupted (host reset)      10%     28046         -
# 3  Offline             Interrupted (host reset)      10%     18290         -
# 4  Offline             Interrupted (host reset)      10%     18238         -
# 5  Offline             Interrupted (host reset)      10%     18238         -
# 6  Offline             Interrupted (host reset)      10%     18236         -
# 7  Offline             Interrupted (host reset)      10%     18236         -
# 8  Offline             Interrupted (host reset)      10%     15079         -
# 9  Offline             Interrupted (host reset)      10%     15076         -
#10  Offline             Interrupted (host reset)      10%     10316         -
#11  Offline             Interrupted (host reset)      10%      5897         -
#12  Offline             Interrupted (host reset)      10%      5897         -
#13  Offline             Interrupted (host reset)      10%         0         -

Note: selective self-test log revision number (0) not 1 implies that no selective self-test has ever been run
SMART Selective self-test log data structure revision number 0
Note: revision number not 1 implies that no selective self-test has ever been run
 SPAN  MIN_LBA  MAX_LBA  CURRENT_TEST_STATUS
    1        0        0  Not_testing
    2        0        0  Not_testing
    3        0        0  Not_testing
    4        0        0  Not_testing
    5        0        0  Not_testing
Selective self-test flags (0x0):
  After scanning selected spans, do NOT read-scan remainder of disk.
If Selective self-test is pending on power-up, resume after 0 minute delay.




#138
Physical Disk: 3
Enclosure Device ID: 252
Slot Number: 7
Drive's postion: DiskGroup: 0, Span: 0, Arm: 3
Enclosure position: 0
Device Id: 11
WWN: 
Sequence Number: 2
Media Error Count: 0
Other Error Count: 0
Predictive Failure Count: 1
Last Predictive Failure Event Seq Number: 150528
PD Type: SAS
Raw Size: 279.396 GB [0x22ecb25c Sectors]
Non Coerced Size: 278.896 GB [0x22dcb25c Sectors]
Coerced Size: 278.464 GB [0x22cee000 Sectors]
Firmware state: Online, Spun Up
Device Firmware Level: 0006
Shield Counter: 0
Successful diagnostics completion on :  N/A
SAS Address(0): 0x5000c5001d1c5af5
SAS Address(1): 0x0
Connected Port Number: 7(path0) 
Inquiry Data: SEAGATE ST3300657SS     00063SJ0G3DE            
FDE Enable: Disable
Secured: Unsecured
Locked: Unlocked
Needs EKM Attention: No
Foreign State: None 
Device Speed: Unknown 
Link Speed: Unknown 
Media Type: Hard Disk Device
Drive Temperature :31C (87.80 F)
PI Eligibility:  No 
Drive is formatted for PI information:  No
PI: No PI
Drive's write cache : Disabled
Port-0 :
Port status: Active
Port's Linkspeed: Unknown 
Port-1 :
Port status: Active
Port's Linkspeed: Unknown 
Drive has flagged a S.M.A.R.T alert : Yes
```



### 更新136Elasticsearch证书

先注册[下载](https://register.elastic.co/)证书

将证书上传到服务器，然后[更新](https://www.elastic.co/guide/en/x-pack/5.6/installing-license.html)证书

查看证书状态命令

```shell
GET /_xpack?pretty
```

更新证书，默认账号elastic，密码changeme

```shell
curl -XPUT -u elastic 'http://192.168.2.136:9201/_xpack/license' -H "Content-Type: application/json" -d @zax-zhong-83578715-b1f9-492e-b916-651a42f232ce-v5.json
```

### 百度蜘蛛ip

百度搜索引擎蜘蛛IP地址段大全
220.181.108.75~220.181.108.123（百度蜘蛛电信段IP）

123.125.71.12~123.125.71.117（百度蜘蛛联通段IP）

220.181.107.*

220.181.38.177

220.181.19.*

159.226.50.*

202.108.11.*

202.108.22.*

202.108.23.*

202.108.249.*

202.108.250.*

61.135.145.*

61.135.146.*



### 141（debian10）添加多地址

编辑网卡配置新增配置

vim /etc/network/interfaces

```shell
# This file describes the network interfaces available on your system
# and how to activate them. For more information, see interfaces(5).

source /etc/network/interfaces.d/*

# The loopback network interface

auto lo
iface lo inet loopback

# The primary network interface
allow-hotplug eno1
iface eno1 inet static
        address 192.168.100.123/24
        gateway 192.168.100.1
        # dns-* options are implemented by the resolvconf package, if installed
        dns-nameservers 127.0.0.1

auto eno1:1
iface eno1:1 inet static
        address 192.168.103.125
        netmask 255.255.255.0
```

启动新配置命令

```shell
ifup eno1:1
```



### 禁止一个ip段访问

```shell
sudo iptables -I INPUT -s 114.64.243.0/24 -j DROP
sudo iptables -I INPUT -s 114.64.244.0/24 -j DROP
```



### 自动跑更新mongodb

```shell
#134定时任务文件：jobuiV4/jobuiAutoRun/hourlyCompanyBean.rc
```

### 本地35配置

mount /dev/sdc1 /data

mount /dev/sdb /data/mongo

mount /dev/sdb1 /ssb_data



# shll脚本



### 常用命令

```shell
#在匹配到的一行后面加字符串 Match（需要匹配的字符） addStr(添加的字符)
sed -i '/Match/a\addStr' test.txt
#在匹配到的一行前面加字符串
sed -i '/Match/i\addStr' test.txt

#在某一行前后添加字符，这里指定的行号是第四行 。
sed -i 'N;4a\addStr' a.txt
sed -i 'N;4i\addStr' a.txt

#匹配某一行添加字符
sed -i '/Match/ s/$/addStr/'
```



### 监控进程脚本

```shell
#!/bin/bash
proc_name="webLogKeyWordImport"
proc_num()
{
        num=`ps -ef | grep $proc_name | grep -v grep | wc -l`
        return $num
}
proc_num
number=$?
echo $number
if [ $number -eq 0 ]
then
. /web/java/JobuiBatch/s_jobTop.sh
fi
```



### 更换yum源

```shell
#!/bin/bash
#z

#更新centos6yum配置
yum_config(){
echo "更换阿里centos-vault源"
  cd /etc/yum.repos.d/ && mkdir bak && mv -f *.repo bak/
  echo '[base]
name=CentOS-6.6 - Base - mirrors.aliyun.com
failovermethod=priority
baseurl=http://mirrors.aliyun.com/centos-vault yum源/6.6/os/$basearch/
gpgcheck=1
gpgkey=http://mirrors.aliyun.com/centos-vault/RPM-GPG-KEY-CentOS-6

[updates]
name=CentOS-6.6 - Updates - mirrors.aliyun.com
failovermethod=priority
baseurl=http://mirrors.aliyun.com/centos-vault/6.6/updates/$basearch/
gpgcheck=1
gpgkey=http://mirrors.aliyun.com/centos-vault/RPM-GPG-KEY-CentOS-6

[extras]
name=CentOS-6.6 - Extras - mirrors.aliyun.com
failovermethod=priority
baseurl=http://mirrors.aliyun.com/centos-vault/6.6/extras/$basearch/
gpgcheck=1
gpgkey=http://mirrors.aliyun.com/centos-vault/RPM-GPG-KEY-CentOS-6

[centosplus]
name=CentOS-6.6 - Plus - mirrors.aliyun.com
failovermethod=priority
baseurl=http://mirrors.aliyun.com/centos-vault/6.6/centosplus/$basearch/
gpgcheck=1
enabled=0
gpgkey=http://mirrors.aliyun.com/centos-vault/RPM-GPG-KEY-CentOS-6

[contrib]
name=CentOS-6.6 - Contrib - mirrors.aliyun.com
failovermethod=priority
baseurl=http://mirrors.aliyun.com/centos-vault/6.6/contrib/$basearch/
gpgcheck=1
enabled=0
gpgkey=http://mirrors.aliyun.com/centos-vault/RPM-GPG-KEY-CentOS-6' >/etc/yum.repos.d/CentOS-Base.repo
  yum clean all && yum makecache
}

#添加用户公钥
sshd_config(){
echo "创建用户"
chattr -i /etc/group /etc/passwd /etc/shadow /etc/gshadow

useradd zax
useradd wilson
useradd jobui

mkdir -p /home/zax/.ssh/
mkdir -p /home/jobui/.ssh/
mkdir -p /home/wilson/.ssh/
cp /home/jobui/.ssh/authorized_keys /home/jobui/.ssh/authorized_keys.bak

chattr +i /etc/group /etc/passwd /etc/shadow /etc/gshadow

echo "添加pubkey"
echo "###zax" >>/home/zax/.ssh/authorized_keys
echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC+0DXsUMNqCHUGlxEGRfZwHMM/EP5AmklB4cNeYaH4JE27A8+xAqYH4OKPdrbIeEnwDiylhPRRdGE2A2Zug8e7NijENxbSE0SCanvuR1VyFRC0AYFBGp5iw0BqBNaMc+nRh5/oqfTlmlnKuGMXw2JDB9y2elN2naI/5w/BnCQeKtFoYmXR7wxSB9ttpEAa9vLnUK/34uRzTIWE0xkgIhR1HtVcutv6gQ+S3B+/K998DPhpJ9igPhRM9w9CnrZTjagz5FlsGTbC7sC6TRd98y1TTpZV/3RNC90PLOsD/tmZ01PiZhRsbYbubzFD6qob2TV/eq++ijs+eLmVVVl1k165" >>/home/zax/.ssh/authorized_keys

echo "###jobui" >>/home/jobui/.ssh/authorized_keys
echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC+JrlRm7DE6Ws9eASC3nXEBkSehv3yHlN8YGbQwqr7JhYVLLLNYuOQ+FRRZmduqu9tFcW33Q75WMhdrn0tJBksZXS/6S8hnmN25F9Bqwa9cNGchWlDvyBoBjQpc5lyTsViH4u6fqBciioCmFlZbXJQw3hoNk9HGjOPONU/TvF4j/CIizFZtmpttl87RM8G92RLLEOP1jwP0qsIij1wLdqD+BOYFsIzNHKpPLkSoLskorgm7AN5f8CjzXK7/+bdlOz5FTfqJ/W7c8AbCkWQ4eAz/+asdVnRgy4bLEnS7w6U11iH11kNpTEHw/WjiRa039PNmR0JxxWqZoC01A1waQdv" >>/home/jobui/.ssh/authorized_keys

echo "###wilson" >>/home/wilson/.ssh/authorized_keys
echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCtwkYIakd5qxzVvL8FNvSUqCC3UUZk0IXJbh6Vch2SL7R1+EuZ2Ggz08CG4+pSH1/M1VXgSlaDWnFHI2JqeqagIGVzdvWHtj+2eHIAxuyGbhOIYOF8Ydt72jZhZJ+l7ZOCrmXVz4BRgM8EnLaLlKGMqnklGF0POQBw3GjsAjwMqJNYsm0vxshOt3nEPWSjJ2K+c5ztJ8W9vVvvqht4se+oy1tD2uCJ67/QM7MncbIhXNnrVFgdZIBL9+b81P94m6j2389fuI88GU5AwB9CyJY3yXqlf911StUUz5g1x2P7H6PbXruxiOuLt7xRirERjSk3nYtggghQeMohFbiNjfbB" >>/home/wilson/.ssh/authorized_keys

chown zax:zax -R /home/zax/.ssh/
chown wilson:wilson -R /home/wilson/.ssh/
chown jobui:jobui -R /home/jobui/.ssh/
}

main(){
  sshd_config
  yum_config
}
main
```





### 141服务器部署脚本

```shell
#!/bin/bash
#Author：zax
#date：20210526
#description：141（debian10）安装nginx+php及相关扩展脚本

echo "开始安装依赖包"
apt-get install -y build-essential libexpat1-dev libgeoip-dev libpng-dev libpcre3-dev libssl-dev libxml2-dev rcs zlib1g-dev libmcrypt-dev libjpeg-dev libpng-dev libwebp-dev pkg-config libbz2-dev libcurl4-openssl-dev autoconf libmemcached-dev libmemcached11

if [ ! -f /usr/local/include/curl ]; then
    ln -s /usr/include/x86_64-linux-gnu/curl /usr/local/include/curl
fi

echo "创建用户"
groupadd mysql && useradd -g mysql -d /home/mysql -s /sbin/nologin mysql
groupadd www && useradd -g www -d /home/www -s /sbin/nologin www
groupadd jobui && useradd -g jobui -d /home/jobui -s /sbin/nologin jobui

echo "安装nginx模块"
cd /usr/local/src/soft/nginx/

#zlib
tar -zxvf zlib-1.2.11.tar.gz
cd zlib-1.2.11/
./configure
make && make install
if [ "$?" -eq 0 ]; then
    echo "zlib安装成功"
    export LDFLAGS="-L/usr/local/zlib/lib"
    export CPPFLAGS="-I/usr/local/zlib/include"
else
    echo "zlib安装失败"
    exit 1
fi
cd ..

#PCRE
tar -zxvf pcre-8.36.tar.gz
cd pcre-8.36/
./configure --prefix=/web/software/pcre
make && make install
if [ "$?" -eq 0 ]; then
    echo "pcre安装成功"
else
    echo "pcre安装失败"
    exit 1
fi
cd ..

#libunwind
tar -zxvf libunwind-1.1.tar.gz
cd libunwind-1.1/
CFLAGS=-fPIC ./configure
make CFLAGS=-fPIC
make CFLAGS=-fPIC install
if [ "$?" -eq 0 ]; then
    echo "libunwind安装成功"
else
    echo "libunwind安装失败"
    exit 1
fi
cd ..

#google-perftools
tar -zxvf gperftools-2.7.tar.gz
cd gperftools-2.7/
./configure --enable-frame-pointers
make && make install
if [ "$?" -eq 0 ]; then
    echo "gperftools安装成功"
    echo "/usr/local/lib" >>/etc/ld.so.conf.d/usr_local_lib.conf
    ldconfig
else
    echo "gperftools安装失败"
    exit 1
fi
cd ..

#openssl
if [ -f /usr/bin/pod2man ]; then
    rm -f /usr/bin/pod2man
fi
tar -zxvf openssl-1.0.1.tar.gz
cd openssl-1.0.1
./config shared --prefix=/web/software/openssl
make && make install
if [ "$?" -eq 0 ]; then
    echo "openssl安装成功"
    ldconfig
else
    echo "openssl安装失败"
    exit 1
fi
cd ..

#ngx_cache_purge-2.3
tar -zxvf ngx_cache_purge-2.3.tar.gz

echo "开始安装openresty-1.9.7.3"
#安装openresty-1.9.7.3
cd /usr/local/src/soft/nginx/
tar -zxvf openresty-1.9.7.3.tar.gz
cd openresty-1.9.7.3/
./configure \
    --prefix=/web/software/openresty \
    --user=www \
    --group=www \
    --with-google_perftools_module \
    --with-pcre=../pcre-8.36 \
    --with-pcre-jit \
    --with-zlib=../zlib-1.2.11 \
    --with-openssl=../openssl-1.0.1 \
    --add-module=../ngx_cache_purge-2.3 \
    --with-http_stub_status_module \
    --with-http_ssl_module \
    --with-stream
make && make install
if [ "$?" -eq 0 ]; then
    echo "openresty安装成功"
    ln -s /web/software/openresty/nginx /web/software/nginx
    ln -s /web/software/nginx/sbin/nginx /usr/bin/nginx
else
    echo "openresty安装失败"
    exit 1
fi
cd ..

echo "开始安装php"
cd /usr/local/src/soft/php/

#jpeg6
#先创建目录，否则会报错
tar -zxvf jpegsrc.v6b.tar.gz
cd jpeg-6b/
mkdir /web/software/jpeg6/
mkdir -p /web/software/jpeg6/bin
mkdir -p /web/software/jpeg6/lib
mkdir -p /web/software/jpeg6/include
mkdir -p /web/software/jpeg6/man/man1
./configure --prefix=/web/software/jpeg6
make && make install
if [ "$?" -eq 0 ]; then
    echo "jpeg安装成功"
else
    echo "jpeg安装失败"
    exit 1
fi
cd ..

#libpng2
tar -zxvf libpng-1.5.26.tar.gz
cd libpng-1.5.26/
./configure --prefix=/web/software/libpng2
make && make install
if [ "$?" -eq 0 ]; then
    echo "libpng安装成功"
else
    echo "libpng安装失败"
    exit 1
fi
cd ..

#freetype2
tar -zxvf freetype-2.4.10.tar.gz
cd freetype-2.4.10/
./configure --prefix=/web/software/freetype2
make && make install
if [ "$?" -eq 0 ]; then
    echo "freetype安装成功"
else
    echo "freetype安装失败"
    exit 1
fi
cd ..

#libxml2
tar -zxvf libxml2-2.8.0.tar.gz libxml2-2.8.0/
cd libxml2-2.8.0/
./configure --prefix=/web/software/libxml2
make && make install
if [ "$?" -eq 0 ]; then
    echo "libxml2安装成功"
else
    echo "libxml2安装失败"
    exit 1
fi
cd ..

#curl
tar -zxvf curl-7.28.0.tar.gz
cd curl-7.28.0/
./configure --prefix=/web/software/curl
make && make install
if [ "$?" -eq 0 ]; then
    echo "curl安装成功"
else
    echo "curl安装失败"
    exit 1
fi
cd ..

echo "开始安装php"
tar -zxvf php-7.1.30.tar.gz
cd php-7.1.30/

./configure  \
--prefix=/web/software/php-7.1.30 \
--with-config-file-path=/web/software/php-7.1.30/lib \
--with-mysql=mysqlnd \
--with-mysqli=mysqlnd \
--with-pdo-mysql=mysqlnd \
--with-jpeg-dir=/web/software/jpeg6 \
--with-png-dir=/web/software/libpng2 \
--with-freetype-dir=/web/software/freetype2 \
--with-zlib-dir=/web/software/zlib \
--disable-ipv6 \
--enable-sockets \
--disable-debug \
--enable-xml \
--disable-rpath \
--enable-bcmath \
--enable-shmop \
--enable-sysvsem \
--enable-inline-optimization \
--with-curl \
--enable-sysvmsg \
--enable-sysvshm \
--enable-mbregex \
--enable-mbstring \
--with-bz2=/usr \
--with-libxml-dir=/web/software/libxml2 \
--with-curl=/web/software/curl \
--enable-gd-native-ttf \
--with-openssl \
--with-mhash \
--with-xmlrpc \
--enable-zip \
--enable-soap \
--without-pear \
--enable-fpm \

make && make install
if [ "$?" -eq 0 ]; then
    echo "php安装成功"
    mkdir -p/web/php/tmp/
    ln -s /web/software/php-7.1.30 /web/software/php
    ln -s /web/software/php/bin/php /usr/bin/php
    cp /usr/local/src/soft/php/php-7.1.30/sapi/fpm/init.d.php-fpm /etc/init.d/php-fpm-9001
    chmod 755 /etc/init.d/php-fpm-9001
    update-rc.d php-fpm defaults
    mv /web/software/php-7.1.30/etc/ /web/software/php-7.1.30/etc_old
    cp -r /usr/local/src/soft/php/php_conf/etc/ /web/software/php-7.1.30/etc/
    cp /usr/local/src/soft/php/php_conf/php.ini /web/software/php-7.1.30/lib/php.ini
else
    echo "php安装失败"
    exit 1
fi
cd ..

echo "开始安装php扩展"
cd /usr/local/src/soft/php
tar zxvf apcu-5.1.20.tgz
cd apcu-5.1.20/
/web/software/php/bin/phpize
./configure --with-php-config=/web/software/php/bin/php-config
make && make install
if [ "$?" -eq 0 ]; then
    echo "apcu安装成功"
else
    echo "apcu安装失败"
    exit 1
fi
cd ..

tar zxvf blitz-0.10.4.tar.gz
cd blitz-0.10.4-PHP7/
/web/software/php/bin/phpize
./configure --with-php-config=/web/software/php/bin/php-config
make && make install
if [ "$?" -eq 0 ]; then
    echo "blitz安装成功"
else
    echo "blitz安装失败"
    exit 1
fi
cd ..

tar zxvf memcached-3.0.4.tgz
cd memcached-3.0.4/
/web/software/php/bin/phpize
./configure --with-php-config=/web/software/php/bin/php-config
make && make install
if [ "$?" -eq 0 ]; then
    echo "memcached安装成功"
else
    echo "memcached安装失败"
    exit 1
fi
cd ..

tar zxvf memcache-4.0.5.2.tgz
cd memcache-4.0.5.2/
/web/software/php/bin/phpize
./configure --with-php-config=/web/software/php/bin/php-config
make && make install
if [ "$?" -eq 0 ]; then
    echo "memcache安装成功"
else
    echo "memcache安装失败"
    exit 1
fi
cd ..

tar zxvf mongodb-1.5.3.tgz
cd mongodb-1.5.3
/web/software/php/bin/phpize
./configure --with-php-config=/web/software/php/bin/php-config
make && make install
if [ "$?" -eq 0 ]; then
    echo "mongodb安装成功"
else
    echo "mongodb安装失败"
    exit 1
fi
cd ..

tar zxvf igbinary-3.2.1.tgz
cd igbinary-3.2.1/
/web/software/php/bin/phpize
./configure --with-php-config=/web/software/php/bin/php-config
make && make install
if [ "$?" -eq 0 ]; then
    echo "igbinary安装成功"
else
    echo "igbinary安装失败"
    exit 1
fi
cd ..

tar zxvf redis-5.3.4.tgz
cd redis-5.3.4
/web/software/php/bin/phpize
./configure --with-php-config=/web/software/php/bin/php-config
make && make install
if [ "$?" -eq 0 ]; then
    echo "redis安装成功"
else
    echo "redis安装失败"
    exit 1
fi
cd ..

tar zxvf ImageMagick-6.9.4-0.tar.gz
cd ImageMagick-6.9.4-0/
./configure --prefix=/web/software/ImageMagick/
make && make install
if [ "$?" -eq 0 ]; then
    echo "ImageMagick安装成功"
else
    echo "ImageMagick安装失败"
    exit 1
fi
cd ..

tar zxvf imagick-3.4.3.tgz
cd imagick-3.4.3/
/web/software/php/bin/phpize
./configure --with-php-config=/web/software/php/bin/php-config --with-imagick=/web/software/ImageMagick
make && make install
if [ "$?" -eq 0 ]; then
    echo "imagick安装成功"
else
    echo "imagick安装失败"
    exit 1
fi
cd ..

unzip qqwry-master.zip
cd qqwry-master/php/qqwry/
/web/software/php/bin/phpize
./configure --with-php-config=/web/software/php/bin/php-config
make && make install
if [ "$?" -eq 0 ]; then
    echo "qqwry安装成功"
else
    echo "qqwry安装失败"
    exit 1
fi
cd /usr/local/src/soft/php

tar zxvf xhprof-2.2.3.tgz
cd xhprof-2.2.3/extension/
/web/software/php/bin/phpize
./configure --with-php-config=/web/software/php/bin/php-config
make && make install
if [ "$?" -eq 0 ]; then
    echo "xhprof安装成功"
else
    echo "xhprof安装失败"
    exit 1
fi
cd /usr/local/src/soft/php

tar zxvf libdatrie-0.2.4.tar.gz
cd libdatrie-0.2.4
./configure --prefix=/usr/local
make && make install
if [ "$?" -eq 0 ]; then
    echo "libdatrie安装成功"
else
    echo "libdatrie安装失败"
    exit 1
fi
cd ..

unzip php-ext-trie-filter-master.zip
cd /usr/local/src/soft/php/php-ext-trie-filter-master
/web/software/php/bin/phpize
./configure --with-php-config=/web/software/php/bin/php-config --with-trie_filter=/usr/local
make && make install
if [ "$?" -eq 0 ]; then
    echo "php-ext-trie-filter-master安装成功"
else
    echo "php-ext-trie-filter-master安装失败"
    exit 1
fi
cd ..

tar jxvf scws-1.2.3.tar.bz2
cd scws-1.2.3/
./configure --prefix=/web/software/scws/
make && make install
if [ "$?" -eq 0 ]; then
    echo "scws安装成功"
    tar xjf scws-dict-chs-gbk.tar.bz2 -C /web/software/scws/etc/
    tar xjf scws-dict-cht-utf8.tar.bz2 -C /web/software/scws/etc/
    tar xjf scws-dict-chs-utf8.tar.bz2 -C /web/software/scws/etc/
else
    echo "scws安装失败"
    exit 1
fi

cd /usr/local/src/soft/php/scws-1.2.3/phpext
/web/software/php/bin/phpize
./configure --with-scws=/web/software/scws --with-php-config=/web/software/php/bin/php-config
make && make install
if [ "$?" -eq 0 ]; then
    echo "scws-1.2.3安装成功"
else
    echo "scws-1.2.3安装失败"
    exit 1
fi

cd /usr/local/src/soft/php/php-7.1.30/ext/mcrypt
/web/software/php/bin/phpize
aclocal
./configure --with-php-config=/web/software/php/bin/php-config --with-mcrypt=/web/software/libmcrypt
make && make install
if [ "$?" -eq 0 ]; then
    echo "mcrypt安装成功"
else
    echo "mcrypt安装失败"
    exit 1
fi

cd /usr/local/src/soft/php/php-7.1.30/ext/gd
/web/software/php/bin/phpize
./configure -with-php-config=/web/software/php/bin/php-config --with-jpeg-dir=/web/software/jpeg6/ --with-freetype-dir=/web/software/freetype2/ --with-png-dir=/web/software/libpng2/
make && make install
if [ "$?" -eq 0 ]; then
    echo "gd安装成功"
else
    echo "gd安装失败"
    exit 1
fi
```



# 软件服务



### 编译redis

```shell
make PREFIX=/web/software/redis-5.0.14 install

```



### redis

启动redis-server

```shell
# 配置后台启动，且端口是 1123redis-server ./redis.conf --daemonize yes --port 1123
```

连接redis

```shell
redis-cli -h 192.168.2.134 -p 6379
```

查看redis信息

```shell
192.168.2.134:6379>info
```

查看所有key

```
127.0.0.1:6379>KEYS pattern
```

查看当前redis的配置文件

```shell
redis-cli info | grep config
```

设置、获取内容

```shell
127.0.0.1:6379> MSET key1 "Hello" key2 "World"127.0.0.1:6379> GET key1"Hello"
```

查看redis状态

```shell
sudo systemctl status redis-server
```

创建集群

```shell
redis-cli --cluster create 192.168.1.35:7001 192.168.1.35:7002 192.168.1.35:7003 192.168.1.35:7004 192.168.1.35:7005 192.168.1.35:7006 --cluster-replicas 1
```



### supervisor

##### yum安装

```shell
yum install epel-release
yum install -y supervisor
systemctl enable supervisord # 开机自启动
systemctl start supervisord # 启动supervisord服务

systemctl status supervisord # 查看supervisord服务状态
ps -ef|grep supervisord # 查看是否存在supervisord进程
```



```shell
下载安装python3.6.8
wget https://www.python.org/ftp/python/3.6.8/Python-3.6.8.tgz

tar -zxvf Python-3.6.8.tgz

./configure --prefix=/usr/local/python3

make && make install

ln -s /usr/local/python3/bin/python3.6 /usr/bin/python3.6
ln -s /usr/local/python3/bin/pip3 /usr/bin/pip3

安装依赖
yum install gcc zlib-devel bzip2-devel openssl openssl-devel ncurses-devel sqlite-devel -y


源码安装supervisor

cd /usr/local/src

wget -c https://files.pythonhosted.org/packages/11/35/eab03782aaf70d87303b21a67c345b953d3b59d4e3971a568c51e523f5c0/supervisor-4.2.1.tar.gz

tar -zxvf supervisor-4.2.1.tar.gz

cd supervisor-4.2.1

Python3.6 setup.py install

安装python-setuptools yum install python-setuptools
下面的结果表示supervisor安装成功


创建软连接：

ln -s /usr/local/python3/bin/supervisorctl /usr/bin/supervisorctl
ln -s /usr/local/python3/bin/supervisord /usr/bin/supervisord
ln -s /usr/local/python3/bin/echo_supervisord_conf /usr/bin/echo_supervisord_conf

mkdir /etc/supervisord.d

创建启动脚本

vi /etc/init.d/supervisord
写入如下配置

#!/bin/bash
#
# supervisord   This scripts turns supervisord on
#
# Author:       Mike McGrath <mmcgrath@redhat.com> (based off yumupdatesd)
#               Jason Koppe <jkoppe@indeed.com> adjusted to read sysconfig,
#                   use supervisord tools to start/stop, conditionally wait
#                   for child processes to shutdown, and startup later
#               Mikhail Mingalev <mingalevme@gmail.com> Merged
#                   redhat-init-jkoppe and redhat-sysconfig-jkoppe, and
#                   made the script "simple customizable".
#               Brendan Maguire <maguire.brendan@gmail.com> Added OPTIONS to
#                   SUPERVISORCTL status call
#
# chkconfig:    345 83 04
#
# description:  supervisor is a process control utility.  It has a web based
#               xmlrpc interface as well as a few other nifty features.
#               Script was originally written by Jason Koppe <jkoppe@indeed.com>.
#

# source function library
. /etc/rc.d/init.d/functions

set -a

PREFIX=/usr

SUPERVISORD=$PREFIX/bin/supervisord
SUPERVISORCTL=$PREFIX/bin/supervisorctl

PIDFILE=/var/run/supervisord.pid
LOCKFILE=/var/lock/subsys/supervisord

OPTIONS="-c /etc/supervisord.conf"

# unset this variable if you don't care to wait for child processes to shutdown before removing the $LOCKFILE-lock
WAIT_FOR_SUBPROCESSES=yes

# remove this if you manage number of open files in some other fashion
ulimit -n 96000

RETVAL=0


running_pid()
{
    # Check if a given process pid's cmdline matches a given name
    pid=$1
    name=$2
    [ -z "$pid" ] && return 1
    [ ! -d /proc/$pid ] && return 1
    (cat /proc/$pid/cmdline | tr "\000" "\n"|grep -q $name) || return 1
    return 0
}

running()
{
# Check if the process is running looking at /proc
# (works for all users)

    # No pidfile, probably no daemon present
    [ ! -f "$PIDFILE" ] && return 1
    # Obtain the pid and check it against the binary name
    pid=`cat $PIDFILE`
    running_pid $pid $SUPERVISORD || return 1
    return 0
}

start() {
        echo "Starting supervisord: "
	
        if [ -e $PIDFILE ]; then 
		echo "ALREADY STARTED"
		return 1
	fi

	# start supervisord with options from sysconfig (stuff like -c)
        $SUPERVISORD $OPTIONS
	
	# show initial startup status
	$SUPERVISORCTL $OPTIONS status
	
	# only create the subsyslock if we created the PIDFILE
        [ -e $PIDFILE ] && touch $LOCKFILE
}

stop() {
        echo -n "Stopping supervisord: "
        $SUPERVISORCTL $OPTIONS shutdown
	if [ -n "$WAIT_FOR_SUBPROCESSES" ]; then 
            echo "Waiting roughly 60 seconds for $PIDFILE to be removed after child processes exit"
            for sleep in  2 2 2 2 4 4 4 4 8 8 8 8 last; do
                if [ ! -e $PIDFILE ] ; then
                    echo "Supervisord exited as expected in under $total_sleep seconds"
                    break
                else
                    if [[ $sleep -eq "last" ]] ; then
                        echo "Supervisord still working on shutting down. We've waited roughly 60 seconds, we'll let it do its thing from here"
                        return 1
                    else
                        sleep $sleep
                        total_sleep=$(( $total_sleep + $sleep ))
                    fi

                fi
            done
        fi

        # always remove the subsys. We might have waited a while, but just remove it at this point.
        rm -f $LOCKFILE
}

restart() {
        stop
        start
}

case "$1" in
    start)
        start
        RETVAL=$?
        ;;
    stop)
        stop
        RETVAL=$?
        ;;
    restart|force-reload)
        restart
        RETVAL=$?
        ;;
    reload)
        $SUPERVISORCTL $OPTIONS reload
        RETVAL=$?
        ;;
    condrestart)
        [ -f $LOCKFILE ] && restart
        RETVAL=$?
        ;;
    status)
        $SUPERVISORCTL $OPTIONS status
        if running ; then
            RETVAL=0
        else
            RETVAL=1
        fi
        ;;
    *)
        echo $"Usage: $0 {start|stop|status|restart|reload|force-reload|condrestart}"
        exit 1
esac

exit $RETVAL

加入服务
chkconfig --add supervisord

设置权限
chmod 755 /etc/init.d/supervisord

开机启动
chkconfig supervisord on

生成配置文件
echo_supervisord_conf > /etc/supervisord.conf
vim /etc/supervisord.conf

修改以下几处

file=/var/run/supervisor.sock

logfile=/var/log/supervisord.log

pidfile=/var/run/supervisord.pid

serverurl=unix:///var/run/supervisor.sock

[inet_http_server]         ; inet (TCP) server disabled by default
port=0.0.0.0:9100        ; ip_address:port specifier, *:port for all iface
username=jobui              ; default is no username (open server)
password=jobui123              ; default is no password (open server)

[include]
files = supervisord.d/*.conf

新建子文档：
vi /etc/supervisord.d/test.conf

[program:test1]
command= php /root/download/test/test1.php
process_name=%(program_name)s_%(process_num)02d
autorestart=false
autostart=false
numprocs=1
startsecs=1
stderr_logfile=/var/log/test1.err.log
stdout_logfile=/var/log/test1.out.log

[program:test2]
command= php /root/download/test/test2.php
process_name=%(program_name)s_%(process_num)02d
autorestart=false
autostart=false
numprocs=1
startsecs=1
stderr_logfile=/var/log/test2.err.log
stdout_logfile=/var/log/test2.out.log


[program:test3]
command= php /root/download/test/test3.php
process_name=%(program_name)s_%(process_num)02d
autorestart=false
autostart=false
numprocs=1
startsecs=1
stderr_logfile=/var/log/test3.err.log
stdout_logfile=/var/log/test3.out.log

启动
supervisord -c /etc/supervisord.conf

查看进程
ps aux | grep supervisord



查看子进程
supervisorctl status

控制进程
supervisord 启动成功后，可以通过 supervisorctl 客户端控制进程，启动、停止、重启。运行 supervisorctl 命令，不加参数，会进入 supervisor 客户端的交互终端，并会列出当前所管理的所有进程。

输入help可以查看可以执行的命令列表，如果想看某个命令的作用，运行 help 命令名称，如：help stop

stop tomcat // 表示停止tomcat进程
stop all // 表示停止所有进程
bash终端
supervisorctl status
supervisorctl stop name
supervisorctl start name
supervisorctl restart name
supervisorctl reload
supervisorctl update

#配置参数说明
[unix_http_server]
file=/tmp/supervisor.sock   ;UNIX socket 文件，supervisorctl 会使用
;chmod=0700                 ;socket文件的mode，默认是0700
;chown=nobody:nogroup       ;socket文件的owner，格式：uid:gid

;[inet_http_server]         ;HTTP服务器，提供web管理界面
;port=127.0.0.1:9001        ;Web管理后台运行的IP和端口，如果开放到公网，需要注意安全性
;username=user              ;登录管理后台的用户名
;password=123               ;登录管理后台的密码

[supervisord]
logfile=/tmp/supervisord.log ;日志文件，默认是 $CWD/supervisord.log
logfile_maxbytes=50MB        ;日志文件大小，超出会rotate，默认 50MB，如果设成0，表示不限制大小
logfile_backups=10           ;日志文件保留备份数量默认10，设为0表示不备份
loglevel=info                ;日志级别，默认info，其它: debug,warn,trace
pidfile=/tmp/supervisord.pid ;pid 文件
nodaemon=false               ;是否在前台启动，默认是false，即以 daemon 的方式启动
minfds=1024                  ;可以打开的文件描述符的最小值，默认 1024
minprocs=200                 ;可以打开的进程数的最小值，默认 200

[supervisorctl]
serverurl=unix:///tmp/supervisor.sock ;通过UNIX socket连接supervisord，路径与unix_http_server部分的file一致
;serverurl=http://127.0.0.1:9001 ; 通过HTTP的方式连接supervisord

; [program:xx]是被管理的进程配置参数，xx是进程的名称
[program:xx]
command=/opt/apache-tomcat-8.0.35/bin/catalina.sh run  ; 程序启动命令
autostart=true       ; 在supervisord启动的时候也自动启动
startsecs=10         ; 启动10秒后没有异常退出，就表示进程正常启动了，默认为1秒
autorestart=true     ; 程序退出后自动重启,可选值：[unexpected,true,false]，默认为unexpected，表示进程意外杀死后才重启
startretries=3       ; 启动失败自动重试次数，默认是3
user=tomcat          ; 用哪个用户启动进程，默认是root
priority=999         ; 进程启动优先级，默认999，值小的优先启动
redirect_stderr=true ; 把stderr重定向到stdout，默认false
stdout_logfile_maxbytes=20MB  ; stdout 日志文件大小，默认50MB
stdout_logfile_backups = 20   ; stdout 日志文件备份数，默认是10
; stdout 日志文件，需要注意当指定目录不存在时无法正常启动，所以需要手动创建目录（supervisord 会自动创建日志文件）
stdout_logfile=/opt/apache-tomcat-8.0.35/logs/catalina.out
stopasgroup=false     ;默认为false,进程被杀死时，是否向这个进程组发送stop信号，包括子进程
killasgroup=false     ;默认为false，向进程组发送kill信号，包括子进程

;包含其它配置文件
[include]
files = relative/directory/*.ini    ;可以指定一个或多个以.ini结束的配置文件
include示例：

[include]
files = /opt/absolute/filename.ini /opt/absolute/*.ini foo.conf config??.ini

```

子配置文件示例

```shell
[program:queue_MultiTask] ;项目名称
directory = /www/wwwroot/www.site.net ; 程序的启动目录
command = php think queue:listen --queue MultiTask --tries 3  ; 启动命令
process_name=%(program_name)s_%(process_num)02d
numprocs = 3           ; 开启的进程数量
autostart = true     ; 在 supervisord 启动的时候也自动启动
startsecs = 5        ; 启动 5 秒后没有异常退出，就当作已经正常启动了
autorestart = true   ; 程序异常退出后自动重启
startretries = 3     ; 启动失败自动重试次数，默认是 3
user = www          ; 用哪个用户启动
redirect_stderr = true  ; 把 stderr 重定向到 stdout，默认 false
stdout_logfile_maxbytes = 50MB  ; stdout 日志文件大小，默认 50MB
stdout_logfile_backups = 20     ; stdout 日志文件备份数
; stdout 日志文件,需要手动创建目录（supervisord 会自动创建日志文件）
stdout_logfile = /www/wwwroot/www.site.net/queue_MultiTask.log
loglevel=info
```



### mongo

#### 配置复制集

```shell
>rs.initiate()>rs.add("hostname:120000")
>rs.status()
>rs.add({host:'hostname:12000'})(添加一个复制集)
>rs.addArb("hostnamet:30000")(添加一个投票节点)
>rs.remove("hostname:30000")(删除节点)
/web/software/mongodb-3.0.7/bin/mongod -f /web/bcshell/mongodb/mongodbWT12000.conf --rest --logpath=/tmp/mongod.log(输出日志)
```

#### 修改优先级

通过改动priority的值来实现（默认的优先级是1（0-100）。priority的值设的越大，就优先成为主）

```shell
PRIMARY> config=rs.conf()PRIMARY>config.members[0].priority = 2       这里要注意：0表示第一个节点，1表示第二个节点，以此类推PRIMARY> rs.reconfig(config)
```

#### 启动命令

```shell
/web/software/mongodb-3.0.7/bin/mongod -f /web/bcshell/mongodb/mongodbWT12002.conf --rest --logpath=/tmp/mongod2.log/web/software/mongodb-3.0.7/bin/mongod -f /web/bcshell/mongodb/mongodbWT12000.conf --rest --logpath=/tmp/mongod.log
```



### nagios

配置文件位置： /web/software/nagios/etc/objects/

修改配置后要重启服务：sudo service nagios restart

| **文件名或目录名**      | **用途**                                                     |
| ----------------------- | ------------------------------------------------------------ |
| cgi.cfg                 | 控制CGI访问的配置文件                                        |
| nagios.cfg              | Nagios 主配置文件                                            |
| resource.cfg            | 变量定义文件，又称为资源文件，在些文件中定义变量，以便由其他配置文件引用，如$USER1$ |
| objects                 | objects 是一个目录，在此目录下有很多配置文件模板，用于定义Nagios 对象 |
| objects/commands.cfg    | 命令定义配置文件，其中定义的命令可以被其他配置文件引用       |
| objects/contacts.cfg    | 定义联系人和联系人组的配置文件                               |
| objects/localhost.cfg   | 定义监控本地主机的配置文件                                   |
| objects/printer.cfg     | 定义监控打印机的一个配置文件模板，默认没有启用此文件         |
| objects/switch.cfg      | 定义监控路由器的一个配置文件模板，默认没有启用此文件         |
| objects/templates.cfg   | 定义主机和服务的一个模板配置文件，可以在其他配置文件中引用   |
| objects/timeperiods.cfg | 定义Nagios 监控时间段的配置文件                              |
| objects/windows.cfg     | 监控Windows 主机的一个配置文件模板，默认没有启用此文件       |



==================系统监控：===========================
本地：
抓取统计：http://192.168.1.7:8080/jobstatV1.0/stat.jsp
抓取队列：http://192.168.1.28:15672 账号密码：snatch

nagios：http://192.168.1.24:84/
账号：nagiosadmin
密码：baicai007#

线上：
nagios：http://121.9.201.135:84/
账号：nagiosadmin
密码：baicai007#



### MegaCli

```shell
#软件安装
wget https://raw.githubusercontent.com/crazy-zhangcong/tools/master/MegaCli8.07.10.tar.gz --no-check-certificate
tar -zxf MegaCli8.07.10.tar.gzcd MegaCli8.07.10/Linux/
rpm -ivh Lib_Utils-1.00-09.noarch.rpm
rpm -ivh MegaCli-8.02.21-1.noarch.rpm
ln -s /opt/MegaRAID/MegaCli/MegaCli64 /usr/bin/MegaCliMegaCli -v
```

```shell
#MegaCli常用参数介绍 
MegaCli -adpCount 【显示适配器个数】
MegaCli -AdpGetTime –aALL 【显示适配器时间】
MegaCli -AdpAllInfo -aAll 【显示所有适配器信息】
MegaCli -LDInfo -LALL -aAll 【显示所有逻辑磁盘组信息】
MegaCli -PDList -aAll 【显示所有的物理信息】
MegaCli -AdpBbuCmd -GetBbuStatus -aALL |grep ‘Charger Status’ 【查看充电状态】
MegaCli -AdpBbuCmd -GetBbuStatus -aALL【显示BBU状态信息】
MegaCli -AdpBbuCmd -GetBbuCapacityInfo -aALL【显示BBU容量信息】
MegaCli -AdpBbuCmd -GetBbuDesignInfo -aALL 【显示BBU设计参数】
MegaCli -AdpBbuCmd -GetBbuProperties -aALL 【显示当前BBU属性】
MegaCli -cfgdsply -aALL 【显示Raid卡型号，Raid设置，Disk相关信息】 

sudo MegaCli -PDList -aAll |grep "Predictive Failure Count"
sudo MegaCli -PDList -aAll |grep "Media Error Count"
sudo MegaCli -PDList -aAll |grep "Other Error Count"
sudo MegaCli -PDList -aAll |grep "Drive has flagged a S.M.A.R.T alert"
```

一般通过几个值，来判断磁盘是否应该报修：
1，Media Error
磁盘存在错误，可能是磁盘有坏道。值越大，越危险。根据磁盘状况，一般大于100报修更换。

2，Other Error
磁盘存在未知的错误，可能是磁盘松动，需要重新再插入。根据磁盘状况，一般大于100报修更换。

3，Predictive Failure Count（重点）
磁盘的预警数。一般大于0，就报修更换。

4，Last Predictive Failure Event Seq Number
最后一条预警的时间序列号。这个值不为0，肯定Predictive Failure Count也不为0



### smartctl

centos下smartctl安装配置

```shell
#安装yum install smartmontools
#使用#显示设备的身份信息，检查硬盘是否打开了SMART支持。
smartctl -i <device> 
#看到有：SMART support is: Enabled #说明硬盘支持SMART。#如果为Disabled，使用：
smartctl --smart=on --offlineauto=on --saveauto=on <device>#启用SMART。
#查看硬盘的健康状况。(df -h 查看硬盘 如：/dev/sda ) 
smartctl -H <device>
=== START OF READ SMART DATA SECTION ===   SMART overall-health self-assessment test result: PASSED #PASSED表示硬盘健康状态良好，如果为Failure那就要立刻更换硬盘。
#显示设备SMART厂商属性和值。
smartctl -A <device>
#显示硬盘历史错误信息。
smartctl -l error <device>
#硬盘自测。smartctl --test=TEST <device>
#EST可取值：offline, short, long, conveyance, select,M-N, pending,N, afterselect,[on|off], scttempint,N[,p]#时可以用smartctl -X中断后台测试。
#显示硬盘测试信息。
smartctl -l selftest <device>
#显示硬盘SMART的全部信息
smartctl -a <device>
#显示硬盘SMART的全部信息
smartctl --all /dev/sda
```



### rsync

```shell
#安装软件
sudo apt install rsync
#或者
sudo yum install rsync
#查看版本
rsync --version

#同步文件到远程服务器（配置了密钥登陆）
rsync -av  --delete test/  jobui@192.168.2.141:/home/jobui/test/  >> /tmp/rc-host141.log
```

### lvs

```shell
lvs 删除133 的3个IP的负载均衡(20220727)
ipvsadm -d -t 121.9.201.130:443 -r 121.9.201.133:443
ipvsadm -d -t 183.232.9.231:443 -r 183.232.9.227:443
ipvsadm -d -t 120.31.62.194:443 -r 120.31.62.197:443

ipvsadm -a -t 121.9.201.130:443 -r 121.9.201.133:443 -w 1
ipvsadm -a -t 183.232.9.231:443 -r 183.232.9.227:443 -w 1
ipvsadm -a -t 120.31.62.194:443 -r 120.31.62.197:443 -w 1

ipvsadm -d -t 121.9.201.130:80 -r 121.9.201.133:80
ipvsadm -d -t 183.232.9.231:80 -r 183.232.9.227:80


ipvsadm -e -t 121.9.201.130:443 -r 121.9.201.134:443 -w 1
ipvsadm -e -t 121.9.201.130:80 -r 121.9.201.134:80 -w 1
ipvsadm -e -t 121.9.201.142:443 -r 121.9.201.138:443 -w 1
ipvsadm -e -t 121.9.201.142:80 -r 121.9.201.138:80 -w 1


ipvsadm -d -t 121.9.201.143:80 -r 121.9.201.141:80
ipvsadm -d -t 121.9.201.143:4 -r 121.9.201.141:443

保存lvs配置
ipvsadm-save –n > /etc/sysconfig/ipvsadm
恢复lvs配置
ipvsadm-restore < /etc/sysconfig/ipvsadm
```

#### lvs配置

```shell
cat /etc/sysconfig/ipvsadm 
-A -t 121.9.201.142:https -s rr
-a -t 121.9.201.142:https -r ns1.eflydns.net:https -g -w 1
-a -t 121.9.201.142:https -r ns1.eflydns.net:https -g -w 1
-a -t 121.9.201.142:https -r ns2.eflydns.net:https -g -w 1
-a -t 121.9.201.142:https -r 121.9.201.139:https -g -w 1
-a -t 121.9.201.142:https -r 121.9.201.138:https -g -w 1
-a -t 121.9.201.142:https -r 121.9.201.136:https -g -w 1
-A -t 121.9.201.143:https -s wlc -p 1800
-a -t 121.9.201.143:https -r 121.9.201.141:https -g -w 1
-a -t 121.9.201.143:https -r 121.9.201.144:https -g -w 1
-A -t 121.9.201.130:https -s wlc -p 1800
-a -t 121.9.201.130:https -r 121.9.201.132:https -g -w 1
-a -t 121.9.201.130:https -r 121.9.201.133:https -g -w 1
-a -t 121.9.201.130:https -r 121.9.201.134:https -g -w 1
-a -t 121.9.201.130:https -r 121.9.201.137:https -g -w 1
-A -t 183.232.9.231:https -s wlc -p 1800
-a -t 183.232.9.231:https -r 183.232.9.227:https -g -w 1
-a -t 183.232.9.231:https -r 183.232.9.228:https -g -w 1
-a -t 183.232.9.231:https -r 183.232.9.229:https -g -w 1
-A -t ns1.eflydns.net:https -s rr
-a -t ns1.eflydns.net:https -r ns1.eflydns.net:https -g -w 1
-a -t ns1.eflydns.net:https -r ns1.eflydns.net:https -g -w 1
-a -t ns1.eflydns.net:https -r ns1.eflydns.net:https -g -w 1
-A -t ns2.eflydns.net:https -s wlc -p 1800
-a -t ns2.eflydns.net:https -r ns1.eflydns.net:https -g -w 1
-a -t ns2.eflydns.net:https -r ns1.eflydns.net:https -g -w 1
-a -t ns2.eflydns.net:https -r ns2.eflydns.net:https -g -w 1
-A -t ns2.eflydns.net:https -s wlc -p 1800
-a -t ns2.eflydns.net:https -r ns2.eflydns.net:https -g -w 1
-a -t ns2.eflydns.net:https -r ns2.eflydns.net:https -g -w 1
-a -t ns2.eflydns.net:https -r ns2.eflydns.net:https -g -w 1
-A -t ns2.eflydns.net:http -s wlc -p 1800
-a -t ns2.eflydns.net:http -r ns1.eflydns.net:http -g -w 1
-a -t ns2.eflydns.net:http -r ns2.eflydns.net:http -g -w 1
-a -t ns2.eflydns.net:http -r ns2.eflydns.net:http -g -w 1
-A -t ns1.eflydns.net:http -s rr
-a -t ns1.eflydns.net:http -r ns1.eflydns.net:http -g -w 1
-a -t ns1.eflydns.net:http -r ns1.eflydns.net:http -g -w 1
-a -t ns1.eflydns.net:http -r ns1.eflydns.net:http -g -w 1
-A -t ns2.eflydns.net:http -s wlc -p 1800
-a -t ns2.eflydns.net:http -r ns1.eflydns.net:http -g -w 1
-a -t ns2.eflydns.net:http -r ns1.eflydns.net:http -g -w 1
-A -t 183.232.9.230:http -s wlc -p 1800
-a -t 183.232.9.230:http -r 183.232.9.229:http -g -w 1
-a -t 183.232.9.230:http -r 183.232.9.227:http -g -w 1
-a -t 183.232.9.230:http -r 183.232.9.228:http -g -w 1
-A -t 183.232.9.231:http -s wlc -p 1800
-a -t 183.232.9.231:http -r 183.232.9.227:http -g -w 1
-a -t 183.232.9.231:http -r 183.232.9.228:http -g -w 1
-a -t 183.232.9.231:http -r 183.232.9.229:http -g -w 1
-A -t 121.9.201.146:http -s wlc -p 1800
-a -t 121.9.201.146:http -r 121.9.201.137:http -g -w 1
-a -t 121.9.201.146:http -r 121.9.201.133:http -g -w 1
-a -t 121.9.201.146:http -r 121.9.201.132:http -g -w 1
-a -t 121.9.201.146:http -r 121.9.201.134:http -g -w 1
-A -t 121.9.201.130:http -s wlc -p 1800
-a -t 121.9.201.130:http -r 121.9.201.132:http -g -w 1
-a -t 121.9.201.130:http -r 121.9.201.133:http -g -w 1
-a -t 121.9.201.130:http -r 121.9.201.134:http -g -w 1
-a -t 121.9.201.130:http -r 121.9.201.137:http -g -w 1
-A -t 121.9.201.142:http -s rr
-a -t 121.9.201.142:http -r 121.9.201.139:http -g -w 1
-a -t 121.9.201.142:http -r 121.9.201.138:http -g -w 1
-a -t 121.9.201.142:http -r 121.9.201.136:http -g -w 1
-A -t 121.9.201.143:http -s wlc -p 1800
-a -t 121.9.201.143:http -r 121.9.201.138:http -g -w 1
-a -t 121.9.201.143:http -r 121.9.201.144:http -g -w 1
-a -t 121.9.201.143:http -r 121.9.201.141:http -g -w 1

```

### mysql

```mysql
-- 查看同步状态
mysql >show slave status\G
mysql >show master status\G

-- 主要看这两个
Slave_IO_Running: Yes
Slave_SQL_Running: Yes

-- 如果是Slave_IO_Running: no 查看错误信息，
-- 解决：could not find first log file name in binary log index file
-- 从库先停止slave
mysql >stop slave;

-- 主库中关闭当前的二进制日志文件并创建一个新文件，新的二进制日志文件的名字在当前的二进制文件的编号上加1.
mysql >flush logs;

-- 查看主库新的日志文件名称
mysql >show master status\G;
 
-- 回到从库中，执行命令，使日志文件和位置对应主库：
mysql >CHANGE MASTER TO MASTER_LOG_FILE='log-bin.000005',MASTER_LOG_POS=0;
start slave;

-- 然后再检查一下 slave status
show slave status\G; 

-- 如果是Slave_SQL_Running: no 查看错误信息，如果是从库缺失表，则新建表即可



```

#### 基础命令

```mysql
#检查root账户登录权限
SELECT host FROM mysql.user WHERE User = 'root';
#添加指定ip权限
CREATE USER 'root'@'ip_address' IDENTIFIED BY 'some_pass';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'ip_address';
#添加任意地点访问权限
CREATE USER 'root'@'%' IDENTIFIED BY 'some_pass';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%';
#刷新权限
FLUSH PRIVILEGES;

#查看所有库
show databases;
use dataBase_name;
show tables;
```

#### 索引损坏修复

```shell
#Table 'jobui_company_view_year-recent' is marked as crashed and should be repaired
/web/software/mysql/bin/myisamchk -c -r jobui_company_view_year@002drecent.MYI
```

### iperf网络性能测试

```shell
 yum -y install  epel-release
yum install -y iperf3

# -s 表示启动服务端，-i 表示汇报间隔，-p 表示监听端口
iperf3 -s -i 1 -p 10000

# -c 表示启动客户端，192.168.0.30 为目标服务器的 IP
# -b 表示目标带宽 (单位是 bits/s)
# -t 表示测试时间
# -P 表示并发数，-p 表示目标服务器监听端口
$ iperf3 -c 192.168.2.132 -b 1G -t 15 -P 2 -p 10000

```

### ab压力测试

```shell
yum -y install httpd-tools
ab -n 1000 -c 200 https://www.jobui.com/
```

### Redis压力测试

```shell
redis-benchmark  -h 192.168.2.137 -p 6379 -c 100 -n 100000
```

-c 并发数量，-n请求数量

# 服务器服务



### 本地服务器 

| IP地址                                                       | 服务                                                         | 备注                                                         |      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ---- |
| 192.168.1.5                                                  | 1、抓取客户端（已暂停，改为15）  2、主要运行的服务：memcached,  kt（11213：抓取客户端用）, php, nginx  3、数据：职位置顶刷新 |                                                              |      |
| 192.168.1.7                                                  | 1、单独抓取，抓取监控系统  2、主要运行的服务：php,  nginx, mongodb（抓取客户端使用）  3、数据：公司关注还关注，职位看过还看过 | 开机后需要手动执行开机启动脚本里面的任务                     |      |
| 192.168.1.9(已坏，迁移到36)svn://192.168.1.36/javaProject/javaProject | 1、网站浏览量统计  2、svn，内部samba资源共享  3、主要运行的服务：mysql，apachectl | 开机需要接键盘按F1  主机里面接着光驱，有一个启动盘，开机需要用到 |      |
| 192.168.1.13                                                 | 1、百才职友集本地测试机  2、定时任务里php自动跑文件，负责把数据同步到mongodb（26）  3、主要运行的服务：memcached，redis，kt，php，nginx，mysql，httpsqs，twemproxy  4、从coding拉取新代码  5、抓取服务端，抓取数据映射  6、抓取日志统计：统计职位、公司的过滤日志数据  7、删除mongo的旧数据（抓取映射数据） | web测试机（jobui、baicai）                                   |      |
| 192.168.1.14                                                 | 1、mysql抓取主库  2、主要运行的服务：mysql，kt（抓取客户端impression（11313）、备：抓取服务端映射（11312）），php，nginx | 80G的SSD（系统）、250G的SSD（MySQL）  断电会导致表损坏可能需要修复 |      |
| 192.168.1.16                                                 | 1、比较空闲  2、主要运行的服务：mongodb（作为抓取客户端的备用），kt（11213：抓取映射、服务端使用），     rabbitmq（备） | SSD（用于缓存）  断电后kt需要几个小时才能恢复                |      |
| 192.168.1.17                                                 | 1、抓取客户端（网关为192.168.1.2）  2、主要运行的服务：memcached，redis，mysql（不提供服务），     php，nginx | SSD                                                          |      |
| 192.168.1.23                                                 | 1、新闻抓取，公司印象、环境logo抓取，公司融资抓取、APP抓取  2、数据：职友集/百才公司看过还看过  3、邮件日志处理系统  4、主要运行的服务：mongodb（抓取服务端和映射备用、  公司看过还看过、公司关注还关注、职位看过还看过），redis，php，nginx |                                                              |      |
| 192.168.1.24                                                 | 1、数据搬运  2、邮件收集系统  3、本地nagios监控服务端  4、网站访问日志数据库                                   5、主要运行的服务：memcached，mongodb（公司浏览数统计），php，nginx，nagios，mysql | 断电会导致表损坏可能需要修复                                 |      |
| 192.168.1.25                                                 | 1、14mysql的从库（mariadb）  2、openvpn与线上145连接  3、主要运行的服务：mongodb，mysql，nginx，     php，openvpn，rabbitmq（主） | 无法开机已坏                                                 |      |
| 192.168.1.26                                                 | 1、多系统代理  2、数据：公司/大学编辑日志搬运  3、主要运行的服务：mongodb（PHP测试使用），nginx，php，ssdb（PHP测试使用） |                                                              |      |
| 192.168.1.10                                                 | 1、MongoDB（抓取服务端和映射使用）  2、ElasticSearch、Kibana | SSD                                                          |      |
| 192.168.1.15                                                 | 1、抓取客户端（暂停）  2、MongoDB（27017，抓取客户端使用）   | SSD                                                          |      |
| 192.168.1.34                                                 | 1、抓取客户端  2、ElasticSearch                              |                                                              |      |
| 192.168.1.28                                                 | 1、MySQL（14的从库）  2、ElasticSearch本地测试用、Kibana  3、rabbitmq（主） | RAID5、SSD                                                   |      |
| 192.168.1.35                                                 | svnserve -d -r /mnt/data/sdb9/svn_dir/&       mount /dev/sdb9 /mnt/data/sdb9 |                                                              |      |

####  java相关

抓取

| 项目名称       | SVN地址                                                     | 项目部署                                               | 项目说明                                                     | 是否开机启动          | 注意事项                                                     |
| -------------- | ----------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------ | --------------------- | ------------------------------------------------------------ |
| 抓取服务端     | svn://192.168.1.9/javaSnatch/javaSnatch/snatchServer        | 192.168.1.13     /web/java/snatch_new/snatchServer     | 负责把抓取的数据从队列取出来放进mongo     启动脚本是start.sh ，启动用户为positionSnatch | 否                    | 1.在/web/java/error目录下观察错误日志  例如，SERVER-err.txt     2.注意观察mongo/memcache的使用情况 |
| 抓取数据映射端 | svn://192.168.1.9/javaSnatch/javaSnatch/snatchMapping       | 192.168.1.13     /web/java/snatch_new/snatchMapping    | 负责把抓取的数据从mongo搬运到数据库     启动脚本是start.sh ，启动用户为positionSnatch | 否                    | 1.在/web/java/error目录下观察错误日志  例如，SERVER-mapping-err.txt     2.注意观察mongo/memcache的使用情况 |
| 抓取客户端     | svn://192.168.1.9/javaSnatch/javaSnatch/snatchClient        | 192.168.1.34/17      /web/java/snatch_new/snatchClient | 负责抓取各大招聘网站数据入队列     启动脚本是start.sh ，启动用户为positionSnatch | 否（6小时定时重启）   | 在/web/java/error目录下观察错误日志                          |
| 单独抓取       | svn://192.168.1.9/javaSnatch/javaSnatch/manualSnatch        | 192.168.1.7     /web/java/snatch_new/manualSnatch      | 负责抓取可信企业招聘数据     启动脚本是start.sh ，启动用户为positionSnatch | 否（每天9点定时重启） | 1.查看每日抓取监控邮件     2.观察项目部署路径logs下的日志    |
| 多代理系统     | svn://192.168.1.9/javaSnatch/javaSnatch/MultiProxySystem    | 192.168.1.26     /web/java/MultiProxySystem            | 为抓取客户端提供代理，解决部分网站防抓取     启动脚本是proxy.sh ，启动用户为positionSnatch | 否（6小时定时重启）   | 观察项目部署路径log下的日志                                  |
| 新闻抓取       | svn://192.168.1.9/javaSnatch/javaSnatch/snatchCompanyNew    | 192.168.1.23     /web/java/snatchCompanyNew            | 通过百度新闻抓取可信公司的新闻     启动脚本是start.sh ，启动用户为positionSnatch | 否（每天8点定时重启） | 1.查看每日抓取监控邮件     2.观察项目部署路径log下的日志     |
| 抓取监控系统   | svn://192.168.1.9/javaSnatch/javaSnatch/snatchMonitorSystem | 192.168.1.7     /web/java/snatchMonitorSystem          | 统计每天抓取情况，以邮件形式发送到监控     启动脚本是start.sh ，启动用户为positionSnatch | 否（每天9点定时重启） | 1.查看每日抓取监控邮件     2.在/web/java/error目录下观察错误日志 |
| 公司印象抓取   | svn://192.168.1.9/javaSnatch/javaSnatch/snatchServer        | 192.168.1.23     /web/java/snatch_new/snatchServer     | 公司Logo/环境/印象 抓取     启动脚本是start.sh ，启动用户为positionSnatch | 否                    | 1.查看每日抓取监控邮件     2.观察项目部署路径log下的日志     |

搜索

| 项目名称                                                     | SVN地址                                                      | 项目部署                                                     | 项目说明                                                     | 是否开机启动 | 注意事项                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------ | ------------------------------------------------------------ |
| 说明：     1.搜索项目统一在145建索引，可查看/etc/crontab     2.错误日志路径可通过查看搜索项目路径下conf/path.xml查看 |                                                              |                                                              |                                                              |              |                                                              |
| 职位搜索                                                     | svn://192.168.1.9/jobuiSearch/jobuiSearch/jobuiPosition4.5   | 121.9.201.134/135/136/141/145     /web/java/jobuiV4.5/jobuiPosition4.5 | 搜索启动脚本search.sh                                        | 否           | 1.可通过144/145看过lvs调用情况，若活跃链接及时释放，则正常     2.查看错误日志 |
| 职位小搜索                                                   | svn://192.168.1.9/jobuiSearch/jobuiSearch/jobuiSmallPosition4.5 | 121.9.201.133/135/141     /web/java/jobuiV4.5/jobuiSmallPosition4.5 | 否                                                           |              |                                                              |
| 附近职位搜索                                                 | svn://192.168.1.9/jobuiSearch/jobuiSearch/jobuiPositionMap4.5 | 121.9.201.133/141     /web/java/jobuiV4.5/jobuiPositionMap4.5 | 否                                                           |              |                                                              |
| 附近公司搜索                                                 | svn://192.168.1.9/jobuiSearch/jobuiSearch/JobuiCompanyMap4.5 | 121.9.201.135/141     /web/java/jobuiV4.5/jobuiCompanyMap4.5 | 否                                                           |              |                                                              |
| 公司搜索                                                     | svn://192.168.1.9/jobuiSearch/jobuiSearch/jobuiCompany4.8    | 121.9.201.134/135/136     /web/java/jobuiV4.8/jobuiCompany4.8 | 否                                                           |              |                                                              |
| 薪酬搜索                                                     | svn://192.168.1.9/jobuiSearch/jobuiSearch/jobuiSalary4.8     | 121.9.201.134/136/137     /web/java/jobuiV4.8/jobuiSalary4.8 | 否                                                           |              |                                                              |
| 公司薪酬搜索                                                 | svn://192.168.1.9/jobuiSearch/jobuiSearch/jobuiCompanySalary4.5 | 121.9.201.134/136/137     /web/java/jobuiV4.5/jobuiCompanySalary4.5 | 否                                                           |              |                                                              |
| 趋势搜索                                                     | svn://192.168.1.9/jobuiSearch/jobuiSearch/jobuiTrend4.8      | 121.9.201.133/134/141     /web/java/jobuiV4.8/jobuiTrend4.8  | 否                                                           |              |                                                              |
| 历年薪酬搜索                                                 | svn://192.168.1.9/jobuiSearch/jobuiSearch/jobuiBigSalary4.5  | 192.168.1.27     /web/java/jobuiV4.5/jobuiBigSalary4.8       | 索引/搜索均在本地27     每年12月最后一个星期启动index.sh更新索引，27性能低，项目和索引须迁移到本地其他配置高的机子 | 否           | 查看错误日志                                                 |
| 关键词提示                                                   | svn://192.168.1.9/jobuiSearch/jobuiSearch/KwIndex4.5     svn://192.168.1.9/jobuiSearch/jobuiSearch/KwSearchServer4.5 | 121.9.201.145（建索引）     /web/java/jobuiV4.5/KwIndex4.5     121.9.201.140/136（搜索）     /web/java/jobuiV4.5/KwSearchServer4.5 | 职友集职位/公司关键词提示     搜索启动脚本search.sh          | 否           | 1.查看错误日志     2.查看/web/java/jobuiV4.5/KwIndex4.5/continue.xml 续读节点是否是一天内的 |
| 百才职位搜索                                                 | svn://192.168.1.9/baicaiSearch/baicaiSearch/baicaiPosition3.5 | 121.9.201.137/138/144     /web/java/baicaiV4.1/baicaiPosition4.1 | 搜索启动脚本startSearch.sh                                   | 否           | 1.可通过144看过lvs调用情况，若活跃链接及时释放，则正常     2.查看错误日志     3.若产生邮件报警延时或版本不正常，查看错误日志，若出现“打开的文件过多”，重启搜索程序     4.索引会暂用磁盘空间不释放，如果磁盘空间不足可以重启搜索 |
| 百才简历搜索                                                 | svn://192.168.1.9/baicaiSearch/baicaiSearch/baicaiApplyResume | 121.9.201.137/138/144     /web/java/baicaiV4.1/baicaiResume4.1 | 否                                                           |              |                                                              |
| 百才公司搜索                                                 | svn://192.168.1.9/baicaiSearch/baicaiSearch/baicaiCompany3.2 | 121.9.201.137/138/144     /web/java/baicaiV4.1/baicaiCompany4.1 | 否                                                           |              |                                                              |
| 百才应聘搜索                                                 | svn://192.168.1.9/baicaiSearch/baicaiSearch/baicaiApplySearch3.5 | 121.9.201.137/138/144     /web/java/baicaiV4.1/baicaiApplyJob4.1 | 否                                                           |              |                                                              |
| 中间件                                                       | svn://192.168.1.9/transferSearch/TransferSearch4.0     svn://192.168.1.9/transferSearch/TransferSearch4.0_Redis | 121.9.201.132/121.9.201.139/121.9.201.140     /web/java/transferSearch/transferSearch4.1     /web/java/transferSearch/transferSearch4.2     /web/java/transferSearch/transferSearch5.0 | 百才搜索调用transferSearch4.1,启动脚本为startBaicai.sh     职友集搜索调用transferSearch4.1、transferSearch4.2，启动脚本为startJobui.sh | 否           | 查看错误日志     /baicai/log/transferSearch4.1     /jobui/log/transferSearch4.1     4.1和4.2的区别是thrift版本不一样：分别是libthrift-0.9.0和libthrift-0.10.0     主要使用132和139两台上的中间件     5.0和4.x的区别是5.0使用的缓存是SSDB，已经暂停使用了 |
| 搜索监控系统                                                 | svn://192.168.1.9/javaProject/javaProject/JavaMonitorSystem  | 121.9.201.139     /web/java/JavaMonitorSystem                | 搜索报警邮件系统                                             | 否           | 调整搜索监控的配置在项目下的conf目录     可查看项目部署路径下的log下的错误日志 |
| 选大学                                                       | svn://192.168.1.9/jobuiSearch/jobuiSearch/jobuiCollege4.8    | 121.9.201.138     /web/java/jobuiV4.8/jobuiCollege4.8        | 搜索启动脚本search.sh                                        | 否           | 没有使用LVS和中间件，只在138启动了，136上有备份              |
| 历年大学录取分数搜索                                         | svn://192.168.1.9/jobuiSearch/jobuiSearch/jobuiCollegeAdmissionScore4.8 | 121.9.201.138     /web/java/jobuiV4.8/jobuiCollegeAdmissionScore4.8 | 否                                                           |              |                                                              |
| 历年大学专业录取分数搜索                                     | svn://192.168.1.9/jobuiSearch/jobuiSearch/jobuiCollegeSubjectScore4.8 | 121.9.201.138     /web/java/jobuiV4.8/jobuiCollegeSubjectScore4.8 | 否                                                           |              |                                                              |
| 专业搜索                                                     | svn://192.168.1.9/jobuiSearch/jobuiSearch/jobuiCollegeSubject4.8 | 121.9.201.138     /web/java/jobuiV4.8/jobuiCollegeSubject4.8 | 否                                                           |              |                                                              |
| 简历搜索                                                     | svn://192.168.1.9/jobuiSearch/jobuiSearch/jobuiResume4.8     | 121.9.201.136     /web/java/jobuiV4.8/jobuiResume4.8         | 搜索启动脚本search.sh                                        | 否           | 没有使用LVS和中间件，只在136部署了                           |

数据

| 项目名称           | SVN地址                                                      | 项目部署                                                | 项目说明                                                     | 是否开机启动              | 注意事项                                                     | 备注                             |      |      |      |      |      |      |      |
| ------------------ | ------------------------------------------------------------ | ------------------------------------------------------- | ------------------------------------------------------------ | ------------------------- | ------------------------------------------------------------ | -------------------------------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 数据搬运           | svn://192.168.1.9/javaProject/javaProject/DBSynchronized     | 192.168.1.24     /web/java/java/DBSynchronized          | 搬运线上职友集、百才用户浏览日志/用户点击日志到本地24     邮件回执和发送日志没搬运回本地，转由php处理     启动脚本startUI.sh/startBaicaiWebLog.sh，启动用户root | 否（每天早上9点定时重启） | 公司浏览数报邮件监控延迟异常时，可查看本地24位于log_UI_webLog浏览日志表数据是否是最新的，如果是新的，则要考虑公司浏览数统计程序JobuiBatch是否正常 |                                  |      |      |      |      |      |      |      |
| 公司编辑日志搬运   | svn://192.168.1.9/javaProject/javaProject/TransportCompanyEditLog | 192.168.1.26     /web/java/TransportCompanyEditLog      | 搬运线上公司编辑表、合并表、图片状态表等     启动脚本为start.sh，启动用户root | 是                        | 可查看continue.xml每个表的同步时间是否是一天内的             |                                  |      |      |      |      |      |      |      |
| 大学编辑日志搬运   |                                                              | 192.168.1.26     /web/java/TransportCollegeEditLog      | 搬运线上大学LOGO图片状态表     启动脚本为start.sh，启动用户root | 是                        | 26的停止了,迁移到10(20191121)                                |                                  |      |      |      |      |      |      |      |
| 公司浏览数统计     | svn://192.168.1.9/javaProject/javaProject/JobuiBatch         | 192.168.1.16     /web/java/JobuiBatch                   | 统计职友集公司浏览数     启动脚本为s_jobTop.sh，启动用户root | 是                        | 1.可查看项目路径下的log/cout_top.properties观察统计时间       2.可通过公司浏览数统计报警邮件预警 | 26的停止了,迁移到10(20191121)    |      |      |      |      |      |      |      |
| 职友集数据导入百才 | svn://192.168.1.9/javaProject/javaProject/jobuiPositionToBaicai | 121.9.201.140     /web/java/jobuiPositionToBaicai       | 职友集职位/公司有选择导入百才数据库     启动脚本start.sh，启动用户edward     可查看/etc/crontab | 否（每天定时启动）        | 可通过     tail -n 1   /baicai/log/jobuiPositionToBaicai/statistics.txt     查看导入数据情况     职位数据导入依赖132中间件2303端口 | 已停（20180608备注）             |      |      |      |      |      |      |      |
| 公司看过还看过     | svn://192.168.1.9/javaProject/javaProject/JobuiCompanyRecommendCollect | 192.168.1.23     /web/java/JobuiCompanyRecommendCollect | 通过统计职友集用户浏览日志来推荐公司     启动脚本为start.sh，启动用户root | 是                        | 1.可查看项目路径下的logs下的日志     2.可查看项目路径下的log/continue.xml续读节点是否是今天的 | transport.jar包代码与SVN的不一致 |      |      |      |      |      |      |      |
| 公司关注还关注     | svn://192.168.1.9/javaProject/javaProject/JobuiCompanyRecommendCollect | 192.168.1.7     /web/java/JobuiCompanyRecommendCollect  | 通过用户关注记录来推荐公司     启动脚本为start.sh，启动用户root | 是                        | 1.可查看项目路径下的logs下的日志     2.可查看项目路径下的continue.xml续读节点是否是今天的 |                                  |      |      |      |      |      |      |      |
| 职位看过还看过     | svn://192.168.1.9/javaProject/javaProject/JobuiPositionRecommendCollect | 192.168.1.7     /web/java/JobuiPositionRecommendCollect | 通过统计职友集用户浏览日志来推荐职位     启动脚本为start.sh，启动用户root | 是                        | 1.可查看项目路径下的logs下的日志     2.可查看项目路径下的log/continue.xml续读节点是否是今天的 |                                  |      |      |      |      |      |      |      |
| 百才公司看过还看过 | svn://192.168.1.9/javaProject/javaProject/JobuiCompanyRecommendCollect | 192.168.1.23     /web/java/BaicaiCompanyRecommendCollec | 通过统计百才用户浏览日志来推荐公司     启动脚本为start.sh，启动用户root | 是                        | 1.可查看项目路径下的logs下的日志     2.可查看项目路径下的log/continue.xml续读节点是否是今天的 |                                  |      |      |      |      |      |      |      |

邮件

| 项目名称         | SVN地址                                                    | 项目部署                                                     | 项目说明                                   | 是否开机启动                           | 注意事项                                                     |      |      |      |
| ---------------- | ---------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------ | -------------------------------------- | ------------------------------------------------------------ | ---- | ---- | ---- |
| 职友集邮件       | svn://192.168.1.9/javaProject/javaProject/jobuiMail        | 121.9.201.135     /web/java/mail/JobuiMail 系统邮件     /web/java/mail/JobuiMail_market 营销邮件     /web/java/mail/JobuiMail_subscribe 订阅邮件 | 邮件发送程序     启动脚本startMail.sh      | 否                                     | 可通过conf/config.txt，查看邮件日志路径来查看日志            |      |      |      |
| 邮件API          | svn://192.168.1.9/javaProject/javaProject/MailSystem_V1.2  | 121.9.201.140     /web/java/mail/MailSystem_API              | 启动脚本start.sh                           | 否                                     | 日志位于/jobui/log/mailApi/     过滤日志位于/jobui/log/mailApi/FilterLogs |      |      |      |
| 邮件收集系统     | svn://192.168.1.9/javaProject/javaProject/MailReceiverSys  | 192.168.1.24     /web/java/java/mail/MailRecevierSys     /web/java/java/mail/jobui_MailRecevierSys | 启动脚本jobuiStart.sh                      | 否（每天定时启动，可查看/etc/crontab） | 日志可查看项目部署路径下Error里的日志                        |      |      |      |
| 邮件日志处理系统 | svn://192.168.1.9/javaProject/javaProject/MailLogCollecter | 192.168.1.23     /web/java/MailLogCollecter                  | 启动脚本start.sh（目前只处理收集职友集的） | 是                                     | 开启了监控，日志可查看项目部署路径下log里的日志              |      |      |      |



###  线上服务器

| 应用               | 部署                                              | 说明                                                         | 注意                                                         |
| ------------------ | ------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| LVS                | 121.9.201.130                                     | 网站负载均衡，单机  虚拟主机IP：120.31.62.206/207/194（联通）  121.9.201.130/142/143（电信130~145）  183.232.9.230（移动） | 121.9.201.131、120.31.62.195、183.232.9.226，这些IP用于和其他服务器通信，如果这台服务器故障需要手动转移负载均衡IP到其他服务器 |
| 192.168.2.139      | 邮件负载均衡，单机  虚拟主机IP：192.168.4.150     |                                                              |                                                              |
| 192.168.2.144      | 搜索负载均衡，主备架构  虚拟主机IP：192.168.3.150 |                                                              |                                                              |
| 192.168.2.145      |                                                   |                                                              |                                                              |
| Nginx/Openresty    | 132~145                                           | 132、133、134、135、136、137部署的是Openresty                | 145为web测试机，135为预发布机                                |
| PHP                | 132~145                                           | 基本上都是5.6版本，138、141、144还是5.5，部署了百才的项目，PHP-FPM使用9001端口，职友集使用9000端口 | 145为web测试机，135为预发布机                                |
| MongoDB            | 132~134                                           | 搭建了复制集分别是12000和12002端口两个集群，132是仲裁机，133和134分别是Primary和Secondary | 硬盘使用SSD，如果服务器需要停机维护，要查看是否Primary节点，如果是需要先降级为Secondary |
| MySQL              | 144、136、137                                     | 职友集主从，144为主库                                        | 144是5.1版本，136和137是5.5版本                              |
| 140、145           | 百才主从，140为主库                               | 140的MySQL应该是存在内存泄露的情况，需要定期重启             |                                                              |
| 145                | 抓取库，使用3307端口  和本地的14互为主从          | 数据更新量比较大，有时候主从会出现延迟                       |                                                              |
| ElasticSearch      | 133、134、137                                     | 索引量比较小，版本为5.1  http://kb133.jobui.com              |                                                              |
| 136、145           | 索引量比较大，版本为5.6  http://kb136.jobui.com   | 数据不安全，集群至少需要3个节点，可以考虑增加一个节点        |                                                              |
| 135                | 存储收集的日志，版本为2.3  http://elk.jobui.com/  |                                                              |                                                              |
| SSDB               | 134、135                                          | 9997端口互为主从架构                                         |                                                              |
| 135、136           | 9999端口为单机                                    | 暂时没有使用                                                 |                                                              |
| Pika               | 134、145                                          | 使用单机方式，用于页面缓存                                   | 结合twemproxy使用，提高可用性                                |
| ktserver           | 145                                               | 使用单机方式                                                 | 数据是由本地的Java程序进行更新，PHP只是读                    |
| Redis              | 132、137、135、139、134、                         | 搜索缓存端口6801，使用单机方式                               | 结合twemproxy使用                                            |
| memcached          | 132、137、140                                     | 页面缓存端口6905                                             | 结合twemproxy使用                                            |
| 132、135、137、139 | PHP模块缓存端口6902                               | 结合twemproxy使用                                            |                                                              |
| 132、135、137、139 | 薪酬缓存端口6903                                  | 结合twemproxy使用                                            |                                                              |
| 132、134、135、137 | MongoDB缓存端口6904                               | 结合twemproxy使用                                            |                                                              |
| twemproxy          | 132、133、134、135、136、137                      | 端口：6911、6912、6913、6914为memcached使用  端口：6800为Redis使用 |                                                              |
| httpsqs / ucmq     | 132                                               | 端口：1218为百才访问日志收集用                               | 访问日志在Nginx上直接入队列                                  |
| 135、136、137      | 端口：1818                                        |                                                              |                                                              |
| 邮件               | 133、134、135、137、138、141、144                 | 端口：25                                                     | 136没有安装，139报错                                         |
|                    |                                                   |                                                              |                                                              |

# 服务器ip列表	

### 121.9.201.131

> 配置：
>
> [zax@host131 ~]$ cat /proc/cpuinfo |grep "model name" | head -1
> model name      : Intel(R) Pentium(R) D CPU 3.00GHz
> [zax@host131 ~]$ free
>              total       used       free     shared    buffers     cached
> Mem:       1032968     988560      44408          0      52108     149912
> -/+ buffers/cache:     786540     246428
> Swap:      2040244        208    2040036

```shell
[root@host131 ~]
ip addr
1: lo: <LOOPBACK,UP> mtu 16436 qdisc noqueue     
	link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00    
	inet 127.0.0.1/8 brd 127.255.255.255 scope host lo    
	inet6 ::1/128 scope host        valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP> mtu 1500 qdisc pfifo_fast qlen 1000    link/ether 00:1d:7d:42:57:0e brd ff:ff:ff:ff:ff:ff    
    inet 121.9.201.131/27 brd 121.9.201.159 scope global eth0    
    inet 10.10.10.245/24 brd 10.10.10.255 scope global eth0:245    
    inet 121.9.201.142/27 brd 121.9.201.159 scope global secondary eth0:3    
    inet 121.9.201.143/27 brd 121.9.201.159 scope global secondary eth0:2    
    inet 121.9.201.130/27 brd 121.9.201.159 scope global secondary eth0:1    
    inet6 fe80::21d:7dff:fe42:570e/64 scope link        valid_lft forever preferred_lft forever
3: eth1: <BROADCAST,MULTICAST,UP> mtu 1500 qdisc pfifo_fast qlen 1000    
    link/ether 00:1d:7d:42:57:0f brd ff:ff:ff:ff:ff:ff    
    inet 120.31.62.195/27 brd 120.31.62.223 scope global eth1    
    inet 58.255.253.99/27 brd 58.255.253.127 scope global eth1:0    
    inet 183.232.9.226/28 brd 183.232.9.239 scope global eth1:5    
    inet 183.232.9.231/32 brd 183.232.9.231 scope global eth1:4    
    inet 120.31.62.207/27 brd 120.31.62.223 scope global secondary eth1:2    
    inet 120.31.62.206/27 brd 120.31.62.223 scope global secondary eth1:3    
    inet 120.31.62.194/27 brd 120.31.62.223 scope global secondary eth1:1    
    inet6 fe80::21d:7dff:fe42:570f/64 scope link        valid_lft forever preferred_lft forever
4: sit0: <NOARP> mtu 1480 qdisc noop     link/sit 0.0.0.0 brd 0.0.0.0
```

### 121.9.201.132

>  配置：
>
> [zax@host132 ~]$ nproc
> 16
> [zax@host132 ~]$ cat /proc/cpuinfo |grep "model name" | head -1
> model name      : Intel(R) Xeon(R) CPU           E5620  @ 2.40GHz
> [zax@host132 ~]$ free
>              total       used       free     shared    buffers     cached
> Mem:      99058988   66716468   32342520          0     623304    3984468
> -/+ buffers/cache:   62108696   36950292
> Swap:     65763320          0   65763320

```shell
[zax@host132 ~]$ ip addr1: lo: <LOOPBACK,UP,LOWER_UP> mtu 16436 qdisc noqueue state UNKNOWN     link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00    inet 127.0.0.1/8 scope host lo    inet 121.9.201.130/32 brd 121.9.201.130 scope global lo:0    inet 120.31.62.194/32 brd 120.31.62.194 scope global lo:1    inet6 ::1/128 scope host        valid_lft forever preferred_lft forever2: eth0: <BROADCAST,MULTICAST,SLAVE,UP,LOWER_UP> mtu 1500 qdisc mq master bond0 state UP qlen 1000    link/ether 84:2b:2b:fe:68:30 brd ff:ff:ff:ff:ff:ff3: eth1: <BROADCAST,MULTICAST,SLAVE,UP,LOWER_UP> mtu 1500 qdisc mq master bond0 state UP qlen 1000    link/ether 84:2b:2b:fe:68:30 brd ff:ff:ff:ff:ff:ff4: eth2: <BROADCAST,MULTICAST,SLAVE,UP,LOWER_UP> mtu 1500 qdisc mq master bond0 state UP qlen 1000    link/ether 84:2b:2b:fe:68:30 brd ff:ff:ff:ff:ff:ff5: eth3: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP qlen 1000    link/ether 84:2b:2b:fe:68:36 brd ff:ff:ff:ff:ff:ff    inet 121.9.201.132/27 brd 121.9.201.159 scope global eth3    inet 120.31.62.196/27 brd 120.31.62.223 scope global eth3:1    inet6 fe80::862b:2bff:fefe:6836/64 scope link        valid_lft forever preferred_lft forever6: bond0: <BROADCAST,MULTICAST,MASTER,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP     link/ether 84:2b:2b:fe:68:30 brd ff:ff:ff:ff:ff:ff    inet 192.168.2.132/24 brd 192.168.2.255 scope global bond0    inet 192.168.3.100/24 brd 192.168.3.255 scope global bond0:1    inet6 fe80::862b:2bff:fefe:6830/64 scope link        valid_lft forever preferred_lft forever
```

### 121.9.201.133

>  配置
>
> [zax@host133 ~]$ nproc
> 16
> [zax@host133 ~]$ cat /proc/cpuinfo |grep "model name" | head -1
> model name      : Intel(R) Xeon(R) CPU           E5620  @ 2.40GHz
> [zax@host133 ~]$ free
>              total       used       free     shared    buffers     cached
> Mem:      32869996   32629152     240844          0     103904    4631332
> -/+ buffers/cache:   27893916    4976080
> Swap:     16386260    7395884    8990376

```shell
[zax@host133 ~]$ ip addr1: lo: <LOOPBACK,UP,LOWER_UP> mtu 16436 qdisc noqueue state UNKNOWN     link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00    inet 127.0.0.1/8 scope host lo    inet 120.31.62.194/32 brd 120.31.62.194 scope global lo:1    inet 192.168.3.150/32 brd 192.168.3.150 scope global lo:2    inet 192.168.4.150/32 brd 192.168.4.150 scope global lo:3    inet 183.232.9.231/32 brd 183.232.9.231 scope global lo:4    inet 121.9.201.130/32 brd 121.9.201.130 scope global lo:0    inet6 ::1/128 scope host        valid_lft forever preferred_lft forever2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP qlen 1000    link/ether 00:e0:81:d2:f0:64 brd ff:ff:ff:ff:ff:ff    inet 192.168.2.133/24 brd 192.168.2.255 scope global eth0    inet 192.168.3.101/24 brd 192.168.3.255 scope global eth0:1    inet 192.168.4.101/24 brd 192.168.4.255 scope global eth0:2    inet6 fe80::2e0:81ff:fed2:f064/64 scope link        valid_lft forever preferred_lft forever3: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP qlen 1000    link/ether 00:e0:81:d2:f0:65 brd ff:ff:ff:ff:ff:ff    inet 121.9.201.133/27 brd 121.9.201.159 scope global eth1    inet 120.31.62.197/27 brd 120.31.62.223 scope global eth1:1    inet 183.232.9.227/28 brd 183.232.9.239 scope global eth1:2    inet6 fe80::2e0:81ff:fed2:f065/64 scope link        valid_lft forever preferred_lft forever
```



### 121.9.201.134

```shell
[zax@host134 ~]$ ip addr1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN     link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00    inet 127.0.0.1/8 scope host lo    inet 120.31.62.194/32 brd 120.31.62.194 scope global lo:1    inet 192.168.3.150/32 brd 192.168.3.150 scope global lo:2    inet 192.168.4.150/32 brd 192.168.4.150 scope global lo:3    inet 183.232.9.231/32 brd 183.232.9.231 scope global lo:4    inet 121.9.201.130/32 brd 121.9.201.130 scope global lo:0    inet6 ::1/128 scope host        valid_lft forever preferred_lft forever2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP qlen 1000    link/ether 14:18:77:27:f7:71 brd ff:ff:ff:ff:ff:ff    inet 192.168.2.134/24 brd 192.168.2.255 scope global eth0    inet 192.168.3.102/24 brd 192.168.3.255 scope global eth0:1    inet 192.168.4.102/24 brd 192.168.4.255 scope global eth0:2    inet6 fe80::1618:77ff:fe27:f771/64 scope link        valid_lft forever preferred_lft forever3: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP qlen 1000    link/ether 14:18:77:27:f7:72 brd ff:ff:ff:ff:ff:ff    inet 121.9.201.134/27 brd 121.9.201.159 scope global eth1    inet 120.31.62.198/27 brd 120.31.62.223 scope global eth1:1    inet 183.232.9.228/28 brd 183.232.9.239 scope global eth1:2    inet6 fe80::1618:77ff:fe27:f772/64 scope link        valid_lft forever preferred_lft forever4: eth2: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN qlen 1000    link/ether 14:18:77:27:f7:73 brd ff:ff:ff:ff:ff:ff5: eth3: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN qlen 1000    link/ether 14:18:77:27:f7:74 brd ff:ff:ff:ff:ff:ff   
```

### 121.9.201.135

```shell
[zax@host135 ~]$ ip addr1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN     link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00    inet 127.0.0.1/8 scope host lo    inet 121.9.201.130/32 brd 121.9.201.130 scope global lo:0    inet 120.31.62.194/32 brd 120.31.62.194 scope global lo:1    inet 192.168.3.150/32 brd 192.168.3.150 scope global lo:2    inet 192.168.4.150/32 brd 192.168.4.150 scope global lo:3    inet 121.9.201.142/32 brd 121.9.201.142 scope global lo:4    inet 120.31.62.206/32 brd 120.31.62.206 scope global lo:5    inet6 ::1/128 scope host        valid_lft forever preferred_lft forever2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP qlen 1000    link/ether 14:18:77:6f:6f:e3 brd ff:ff:ff:ff:ff:ff    inet 192.168.2.135/24 brd 192.168.2.255 scope global eth0    inet 192.168.3.103/24 brd 192.168.3.255 scope global eth0:1    inet 192.168.4.103/24 brd 192.168.4.255 scope global eth0:2    inet6 fe80::1618:77ff:fe6f:6fe3/64 scope link        valid_lft forever preferred_lft forever3: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP qlen 1000    link/ether 14:18:77:6f:6f:e4 brd ff:ff:ff:ff:ff:ff    inet 121.9.201.135/27 brd 121.9.201.159 scope global eth1    inet 120.31.62.199/27 brd 120.31.62.223 scope global eth1:1    inet6 fe80::1618:77ff:fe6f:6fe4/64 scope link        valid_lft forever preferred_lft forever4: em3: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN qlen 1000    link/ether 14:18:77:6f:6f:e5 brd ff:ff:ff:ff:ff:ff5: em4: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN qlen 1000    link/ether 14:18:77:6f:6f:e6 brd ff:ff:ff:ff:ff:ff
```

### 121.9.201.136

```shell
[zax@host145 ~]$ ssh 192.168.2.136Last login: Tue May 11 16:03:09 2021 from 192.168.2.145[zax@host136 ~]$ ip addr1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN     link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00    inet 127.0.0.1/8 scope host lo    inet 121.9.201.142/32 brd 121.9.201.142 scope global lo:0    inet 120.31.62.206/32 brd 120.31.62.206 scope global lo:1    inet 192.168.3.150/32 brd 192.168.3.150 scope global lo:2    inet 192.168.4.150/32 brd 192.168.4.150 scope global lo:3    inet6 ::1/128 scope host        valid_lft forever preferred_lft forever2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP qlen 1000    link/ether 18:66:da:9f:a6:ea brd ff:ff:ff:ff:ff:ff    inet 192.168.2.136/24 brd 192.168.2.255 scope global eth0    inet 192.168.3.104/24 brd 192.168.3.255 scope global eth0:1    inet 192.168.4.104/24 brd 192.168.4.255 scope global eth0:2    inet6 fe80::1a66:daff:fe9f:a6ea/64 scope link        valid_lft forever preferred_lft forever3: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP qlen 1000    link/ether 18:66:da:9f:a6:eb brd ff:ff:ff:ff:ff:ff    inet 121.9.201.136/27 brd 121.9.201.159 scope global eth1    inet 120.31.62.200/27 brd 120.31.62.223 scope global eth1:1    inet6 fe80::1a66:daff:fe9f:a6eb/64 scope link        valid_lft forever preferred_lft forever4: eth2: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN qlen 1000    link/ether 18:66:da:9f:a6:ec brd ff:ff:ff:ff:ff:ff5: eth3: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN qlen 1000    link/ether 18:66:da:9f:a6:ed brd ff:ff:ff:ff:ff:ff
```

### 121.9.201.137

```shell
[zax@Host137 ~]$ ip addr1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN     link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00    inet 127.0.0.1/8 scope host lo    inet 120.31.62.194/32 brd 120.31.62.194 scope global lo:1    inet 192.168.3.150/32 brd 192.168.3.150 scope global lo:2    inet 192.168.4.150/32 brd 192.168.4.150 scope global lo:3    inet 183.232.9.231/32 brd 183.232.9.231 scope global lo:4    inet 121.9.201.130/32 brd 121.9.201.130 scope global lo:0    inet6 ::1/128 scope host        valid_lft forever preferred_lft forever2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP qlen 1000    link/ether 14:18:77:54:e1:3e brd ff:ff:ff:ff:ff:ff    inet 192.168.2.137/24 brd 192.168.2.255 scope global eth0    inet 192.168.3.105/24 brd 192.168.3.255 scope global eth0:1    inet 192.168.4.105/24 brd 192.168.4.255 scope global eth0:2    inet6 fe80::1618:77ff:fe54:e13e/64 scope link        valid_lft forever preferred_lft forever3: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP qlen 1000    link/ether 14:18:77:54:e1:3f brd ff:ff:ff:ff:ff:ff    inet 121.9.201.137/27 brd 121.9.201.159 scope global eth1    inet 120.31.62.201/27 brd 120.31.62.223 scope global eth1:1    inet 183.232.9.229/28 brd 183.232.9.239 scope global eth1:2    inet6 fe80::1618:77ff:fe54:e13f/64 scope link        valid_lft forever preferred_lft forever4: eth2: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN qlen 1000    link/ether 14:18:77:54:e1:40 brd ff:ff:ff:ff:ff:ff5: eth3: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state
```

### 121.9.201.138

```shell
[zax@host138 ~]$ ip addr1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN     link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00    
inet 127.0.0.1/8 scope host lo    
inet 121.9.201.142/32 brd 121.9.201.142 scope global lo:0    
inet 120.31.62.206/32 brd 120.31.62.206 scope global lo:1    
inet 192.168.3.150/32 brd 192.168.3.150 scope global lo:2    
inet 121.9.201.143/32 brd 121.9.201.143 scope global lo:3    
inet 120.31.62.207/32 brd 120.31.62.207 scope global lo:4    
inet 192.168.4.150/32 brd 192.168.4.150 scope global lo:5    
inet6 ::1/128 scope host        valid_lft forever preferred_lft forever2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP qlen 1000    link/ether 00:30:48:34:eb:88 brd ff:ff:ff:ff:ff:ff    
inet 192.168.2.138/24 brd 192.168.2.255 scope global eth0    
inet 192.168.3.106/24 brd 192.168.3.255 scope global eth0:1    
inet6 fe80::230:48ff:fe34:eb88/64 scope link        valid_lft forever preferred_lft forever3: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP qlen 1000    link/ether 00:30:48:34:eb:89 brd ff:ff:ff:ff:ff:ff    
inet 121.9.201.138/27 brd 121.9.201.159 scope global eth1    
inet 120.31.62.202/27 brd 120.31.62.223 scope global eth1:1    
inet6 fe80::230:48ff:fe34:eb89/64 scope link        valid_lft forever preferred_lft forever
```

### 121.9.201.139

```shell
[zax@host139 ~]$ ip addr1: lo: <LOOPBACK,UP,LOWER_UP> mtu 16436 qdisc noqueue state UNKNOWN     link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00    
inet 127.0.0.1/8 scope host lo    
inet 121.9.201.142/32 brd 121.9.201.142 scope global lo:0    
inet 120.31.62.206/32 brd 120.31.62.206 scope global lo:1    
inet 120.31.62.194/32 brd 120.31.62.194 scope global lo:3    
inet 121.9.201.146/32 brd 121.9.201.146 scope global lo:2    
inet6 ::1/128 scope host        valid_lft forever preferred_lft forever2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP qlen 1000    link/ether 00:30:48:62:2c:f0 brd ff:ff:ff:ff:ff:ff    
inet 192.168.2.139/24 brd 192.168.2.255 scope global eth0    
inet 192.168.3.107/24 brd 192.168.3.255 scope global eth0:1    
inet 192.168.4.107/24 brd 192.168.4.255 scope global eth0:2    
inet 192.168.4.150/32 brd 192.168.4.150 scope global eth0:3    
inet6 fe80::230:48ff:fe62:2cf0/64 scope link        
valid_lft forever preferred_lft forever3: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP qlen 1000    link/ether 00:30:48:62:2c:f1 brd ff:ff:ff:ff:ff:ff    
inet 121.9.201.139/27 brd 121.9.201.159 scope global eth1    
inet 120.31.62.203/27 brd 120.31.62.223 scope global eth1:1    
inet6 fe80::230:48ff:fe62:2cf1/64 scope link        valid_lft forever preferred_lft forever
```

### 121.9.201.144

```shell
[zax@host144 ~]$ ip addr1: lo: <LOOPBACK,UP,LOWER_UP> mtu 16436 qdisc noqueue state UNKNOWN     link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00    inet 127.0.0.1/8 scope host lo    inet 121.9.201.143/32 brd 121.9.201.143 scope global lo:0    inet 120.31.62.207/32 brd 120.31.62.207 scope global lo:1    inet 192.168.3.150/32 brd 192.168.3.150 scope global lo:2    inet 120.31.62.194/32 brd 120.31.62.194 scope global lo:4    inet 192.168.4.151/32 brd 192.168.4.151 scope global lo:5    inet 192.168.4.150/32 brd 192.168.4.150 scope global lo:6    inet 121.9.201.146/32 brd 121.9.201.146 scope global lo:3    inet6 ::1/128 scope host        valid_lft forever preferred_lft forever2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP qlen 1000    link/ether 00:30:48:65:76:cc brd ff:ff:ff:ff:ff:ff    inet 192.168.2.144/24 brd 192.168.2.255 scope global eth0    inet 192.168.3.112/24 brd 192.168.3.255 scope global eth0:1    inet 192.168.4.112/24 brd 192.168.4.255 scope global eth0:3    inet6 fe80::230:48ff:fe65:76cc/64 scope link        valid_lft forever preferred_lft forever3: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP qlen 1000    link/ether 00:30:48:65:76:cd brd ff:ff:ff:ff:ff:ff    inet 121.9.201.144/27 brd 121.9.201.159 scope global eth1    inet 120.31.62.208/27 brd 120.31.62.223 scope global eth1:1    inet6 fe80::230:48ff:fe65:76cd/64 scope link        valid_lft forever preferred_lft forever
```

### 121.9.201.145

```shell
[zax@host145 ~]$ ip addr1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN     link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00    inet 127.0.0.1/8 scope host lo    inet6 ::1/128 scope host        valid_lft forever preferred_lft forever2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP qlen 1000    link/ether 80:18:44:e2:82:4c brd ff:ff:ff:ff:ff:ff    inet 192.168.2.145/24 brd 192.168.2.255 scope global eth0    inet 192.168.3.113/24 brd 192.168.3.255 scope global eth0:1    inet 192.168.4.113/24 brd 192.168.4.255 scope global eth0:3    inet 192.168.3.150/32 brd 192.168.3.150 scope global eth0:2    inet6 fe80::8218:44ff:fee2:824c/64 scope link        valid_lft forever preferred_lft forever3: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP qlen 1000    link/ether 80:18:44:e2:82:4d brd ff:ff:ff:ff:ff:ff    inet 121.9.201.145/27 brd 121.9.201.159 scope global eth1    inet 120.31.62.209/27 brd 120.31.62.223 scope global eth1:1    inet6 fe80::8218:44ff:fee2:824d/64 scope link        valid_lft forever preferred_lft forever4: eth2: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN qlen 1000    link/ether 80:18:44:e2:82:4e brd ff:ff:ff:ff:ff:ff5: eth3: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN qlen 1000    link/ether 80:18:44:e2:82:4f brd ff:ff:ff:ff:ff:ff
```





# Centos6使用阿里云centos-vault的yum源.md

```shell
#1、备份原有yum文件sudo mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bak#2、vim /etc/yum.repos.d/CentOS-Base.repo，把下面内容粘贴到CentOS-Base.repo里面[base]name=CentOS-6.6 - Base - mirrors.aliyun.comfailovermethod=prioritybaseurl=http://mirrors.aliyun.com/centos-vault/6.6/os/$basearch/gpgcheck=1gpgkey=http://mirrors.aliyun.com/centos-vault/RPM-GPG-KEY-CentOS-6[updates]name=CentOS-6.6 - Updates - mirrors.aliyun.comfailovermethod=prioritybaseurl=http://mirrors.aliyun.com/centos-vault/6.6/updates/$basearch/gpgcheck=1gpgkey=http://mirrors.aliyun.com/centos-vault/RPM-GPG-KEY-CentOS-6[extras]name=CentOS-6.6 - Extras - mirrors.aliyun.comfailovermethod=prioritybaseurl=http://mirrors.aliyun.com/centos-vault/6.6/extras/$basearch/gpgcheck=1gpgkey=http://mirrors.aliyun.com/centos-vault/RPM-GPG-KEY-CentOS-6[centosplus]name=CentOS-6.6 - Plus - mirrors.aliyun.comfailovermethod=prioritybaseurl=http://mirrors.aliyun.com/centos-vault/6.6/centosplus/$basearch/gpgcheck=1enabled=0gpgkey=http://mirrors.aliyun.com/centos-vault/RPM-GPG-KEY-CentOS-6[contrib]name=CentOS-6.6 - Contrib - mirrors.aliyun.comfailovermethod=prioritybaseurl=http://mirrors.aliyun.com/centos-vault/6.6/contrib/$basearch/gpgcheck=1enabled=0gpgkey=http://mirrors.aliyun.com/centos-vault/RPM-GPG-KEY-CentOS-6#3、更新yum源信息yum clean allyum makecache
```



# 查看编译参数

1、nginx编译参数：

```
nginx -V(大写)#注意:需保证nginx在环境变量中，或者使用这样的形式：/user/local/nginx/sbin/nginx -V
```

2、apache编译参数

```
cat your_apache_dir/build/config.nice
```

3、php编译参数：

```
php -i |grep configure#或者 /user/local/php/bin/php -i |grep configure
```

4、mysql编译参数：

```
cat /user/local/mysql/bin/mysqlbug |grep configure
```



```shell
[zax@Host137 Linux]$ nginx -Vnginx version: openresty/1.9.7.3built by gcc 4.4.7 20120313 (Red Hat 4.4.7-11) (GCC) built with OpenSSL 1.0.1e-fips 11 Feb 2013TLS SNI support enabledconfigure arguments: --prefix=/web/software/openresty/nginx --with-cc-opt=-O2 --add-module=../ngx_devel_kit-0.2.19 --add-module=../iconv-nginx-module-0.13 --add-module=../echo-nginx-module-0.58 --add-module=../xss-nginx-module-0.05 --add-module=../ngx_coolkit-0.2rc3 --add-module=../set-misc-nginx-module-0.29 --add-module=../form-input-nginx-module-0.11 --add-module=../encrypted-session-nginx-module-0.04 --add-module=../ngx_postgres-1.0rc7 --add-module=../srcache-nginx-module-0.30 --add-module=../ngx_lua-0.10.0 --add-module=../ngx_lua_upstream-0.04 --add-module=../headers-more-nginx-module-0.29 --add-module=../array-var-nginx-module-0.04 --add-module=../memc-nginx-module-0.16 --add-module=../redis-nginx-module-0.3.7 --add-module=../rds-json-nginx-module-0.14 --add-module=../rds-csv-nginx-module-0.07 --with-ld-opt=-Wl,-rpath,/web/software/openresty/luajit/lib --user=www --group=www --with-google_perftools_module --with-pcre=/root/baicai-V6/web/nginx/pcre-8.36 --with-pcre-jit --with-zlib=/root/baicai-V6/web/nginx/zlib-1.2.8 --add-module=/root/baicai-V6/web/nginx/openresty-1.9.7.3/../ngx_cache_purge-2.3 --with-http_stub_status_module --with-http_ssl_module[zax@Host137 Linux]$ php -i |grep configureConfigure Command =>  './configure'  '--prefix=/web/software/php-5.6.31' '--with-config-file-path=/web/software/php-5.6.31/lib' '--with-mysql=mysqlnd' '--with-mysqli=mysqlnd' '--with-pdo-mysql=mysqlnd' '--with-jpeg-dir=/web/software/jpeg6' '--with-png-dir=/web/software/libpng2' '--with-freetype-dir=/web/software/freetype2' '--with-zlib-dir=/web/software/zlib' '--disable-ipv6' '--enable-sockets' '--disable-debug' '--enable-xml' '--disable-rpath' '--enable-bcmath' '--enable-shmop' '--enable-sysvsem' '--enable-inline-optimization' '--with-curl' '--enable-sysvmsg' '--enable-sysvshm' '--enable-mbregex' '--enable-mbstring' '--with-bz2=/usr' '--with-libxml-dir=/web/software/libxml2' '--with-curl=/web/software/curl' '--enable-gd-native-ttf' '--with-openssl' '--with-mhash' '--with-xmlrpc' '--enable-zip' '--enable-soap' '--without-pear' '--enable-fpm' '--with-libdir=lib64'
```

