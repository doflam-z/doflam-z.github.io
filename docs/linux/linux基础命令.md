# Linux基础命令

### shell命令

递归查询一个目录中所有文件中符合匹配的文档及行号

```sehll
grep -rnw '/etc/nginx' -e 'listen.*80'
```

查看一级目录文件夹大小

```shell
sudo du -h --max-depth=1
```

查看已删除文件进程

```shell
lsof | grep deleted 
```

按进程名称分组统计进程

```bash
ps -eo comm= | awk '{count[$1]++} END {for (name in count) print name ": " count[name] " processes"}'
```

查看发行版

```shell
lsb_release -a  # 这个命令将显示包括发行版本号、发行代号、发行说明等信息。
cat /etc/os-release		# 这个命令将显示操作系统的一些信息，包括发行版本和ID
cat /etc/issue		#这 个命令将显示发行版本的信息。
uname -a		# 这个命令将显示有关内核和操作系统的信息，包括发行版本。
```

查看cpu核心数

```sehll
nproc or lscpu
```

查看cpu型号 “| head -1”是只返回第一个

```shell
cat /proc/cpuinfo |grep "model name" | head -1
```

循环执行一条命令

```shell
while true; do date; sleep 1; done
watch -n 1 -d netstat -ant
```

统计文本中出现关键字的次数

```sehll
grep -o objStr  filename|wc -l
```

kill掉所有符合关键字的进程

```sehll
ps -ef | grep jobTypeRankDailyData| grep -v grep | cut -c 9-15 | xargs kill

ps -ef | grep rabbitmq| grep -v grep | cut -c 9-15 | xargs kill
```

根据进程id查端口

```shell
netstat -nap | grep 进程pid
```

根据监听端口查看进程

```shell
netstat -ntpl | grep ":8755"
```

切换用户只执行一条命令的可以用: 

```shell
su - user -c command
```

切换用户执行一个shell文件可以用: 

```shell
su - user -s /bin/bash shell.sh
```

设置环境变量（临时）

```shell
export LIBZIP_LIBS="/web/software/libzip-1.3.2/lib"
```

设置环境变量（永久）(尽量直接编辑，不要echo，容易不小心覆盖文件)

```shell
echo "export ONIG_CFLAGS=/usr/bin/onig-config" >> /etc/profile
source /etc/profile
```

rpm查找包

```shell
rpm -q libcurl
```

rpm安装包

```shell
rpm -ivh libcurl
```

rpm卸载包 （ --nodeps忽略依赖）

```sehll
rpm -e --nodeps libcurl
```

搜索替换文件内容

```shell
sudo sed -i 's/track_errors = On/track_errors = Off/g' /web/software/php-7.4.23/lib/php.ini
```

查找文件中指定内容，返回那一行

```shell
grep "oldSize:少于50," /tmp/updateCompanyErrorWorkerData_tmp3.log > /tmp/updateCompanyErrorWorkerData_tmp3_tmp.log
```

统计文件夹大小（包含文件）

```shell
du -h --max-depth=1 /mysql
```

统计当前目录文件按大小排序

```shell
du -s * | sort -nr
```

批量解压zip文件到指定文件夹

```shell
ls *.zip | xargs -n1 unzip -o -d unzip/
```

批量解压tar压缩文件

```shell
ls *.tar.gz | xargs -n1 tar -zxvf
```

xargs是给命令传递参数的一个过滤器，可以将前一个命令产生的输出作为后一个命令的参数

命令即将find产生的输出（test2目录下的所有tes文件），作为rm的参数，从而完全删除

```shell
find test2/ -name '*.tes' |xargs rm -rf
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

## vim

> Vim中如何全选并复制？（区分大小写！！！）
>
> 1. 全部删除：按esc键后，先按gg（到达顶部），然后dG
> 2. 全部复制：按esc键后，先按gg，然后ggyG
> 3. 全选高亮显示：按esc键后，先按gg，然后ggvG或者ggVG
> 4. 单行复制：按esc键后，然后yy
> 5. 单行删除：按esc键后，然后dd
> 6. 粘贴：按esc键后，然后p
>
> vim批量注释
>
> 1.按下v然后上下键选中内容
>
> 2.按下ctrl+v进入列模式，再按下大写I进入插入模式，输入注释符
>
> 3.最后按两次esc
>
> 
>
> vim批量取消注释
>
> 1.按ctrl+v，上下键选中后注释符号后按d

## ssh

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



## grep

 查找单个或多个字符串（关键字)

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

## 查看实时网速

```shell
watch -n 1 "/sbin/ifconfig eth1 | grep bytes"
```

## 磁盘相关命令

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

#关闭swap分区
# 永久
sed -ri 's/.*swap.*/#&/' /etc/fstab
# 临时
swapoff -a
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

## rsync

`rsync` 是一个非常强大的文件同步工具，支持本地和远程文件同步。以下是常用参数的详细说明：

---

### 1. **基本参数**
| 参数                  | 说明                                                         |
| --------------------- | ------------------------------------------------------------ |
| `-a` 或 `--archive`   | 归档模式，等价于 `-rlptgoD`，保留文件属性（权限、时间戳等）。 |
| `-v` 或 `--verbose`   | 显示详细输出，便于查看同步过程。                             |
| `-z` 或 `--compress`  | 在传输过程中压缩文件数据，减少网络带宽占用。                 |
| `-r` 或 `--recursive` | 递归同步目录及其子目录。                                     |
| `-P`                  | 等价于 `--partial --progress`，支持断点续传并显示进度。      |

---

### 2. **文件属性相关**
| 参数              | 说明                                         |
| ----------------- | -------------------------------------------- |
| `-p` 或 `--perms` | 保留文件权限。                               |
| `-t` 或 `--times` | 保留文件修改时间。                           |
| `-o` 或 `--owner` | 保留文件属主（需要 root 权限）。             |
| `-g` 或 `--group` | 保留文件属组（需要 root 权限）。             |
| `--chmod`         | 修改目标文件的权限，例如 `--chmod=755`。     |
| `--size-only`     | 仅根据文件大小判断是否需要同步，忽略时间戳。 |
| `--ignore-times`  | 忽略时间戳，强制同步所有文件。               |

---

### 3. **传输控制**
| 参数                    | 说明                                     |
| ----------------------- | ---------------------------------------- |
| `-b` 或 `--backup`      | 在目标目录中备份已存在的文件。           |
| `--backup-dir=DIR`      | 指定备份文件的存储目录。                 |
| `--delete`              | 删除目标目录中源目录不存在的文件。       |
| `--ignore-existing`     | 跳过目标目录中已存在的文件。             |
| `--remove-source-files` | 传输完成后删除源文件（相当于移动文件）。 |
| `--exclude=PATTERN`     | 排除匹配的文件或目录。                   |
| `--exclude-from=FILE`   | 从文件中读取排除规则。                   |
| `--include=PATTERN`     | 包含匹配的文件或目录。                   |
| `--include-from=FILE`   | 从文件中读取包含规则。                   |

---

### 4. **断点续传与进度**
| 参数              | 说明                               |
| ----------------- | ---------------------------------- |
| `--partial`       | 保留部分传输的文件，支持断点续传。 |
| `--progress`      | 显示传输进度。                     |
| `--append`        | 在已存在的文件末尾追加数据。       |
| `--append-verify` | 追加数据并验证文件完整性。         |

---

### 5. **网络传输**
| 参数                    | 说明                              |
| ----------------------- | --------------------------------- |
| `-e` 或 `--rsh=COMMAND` | 指定远程 Shell 命令（如 `ssh`）。 |
| `--port=PORT`           | 指定远程端口。                    |
| `--bwlimit=RATE`        | 限制传输带宽（单位为 KB/s）。     |
| `--timeout=TIME`        | 设置 I/O 超时时间（单位为秒）。   |
| `--contimeout=TIME`     | 设置连接超时时间（单位为秒）。    |

---

### 6. **日志与调试**
| 参数                       | 说明                           |
| -------------------------- | ------------------------------ |
| `--log-file=FILE`          | 将日志输出到指定文件。         |
| `--log-file-format=FMT`    | 自定义日志格式。               |
| `--dry-run`                | 模拟运行，不实际执行任何操作。 |
| `--stats`                  | 显示传输统计信息。             |
| `-h` 或 `--human-readable` | 以易读格式显示文件大小。       |

---

### 7. **高级功能**
| 参数                 | 说明                                   |
| -------------------- | -------------------------------------- |
| `--checksum`         | 使用校验和判断文件是否需要同步。       |
| `--compare-dest=DIR` | 将目标文件与指定目录中的文件进行比较。 |
| `--link-dest=DIR`    | 使用硬链接优化增量备份。               |
| `--max-size=SIZE`    | 仅同步小于指定大小的文件。             |
| `--min-size=SIZE`    | 仅同步大于指定大小的文件。             |

---

### 8. **常用命令示例**
1. **本地同步**：
   ```bash
   rsync -avz /source/ /destination/
   ```

2. **远程同步**：
   ```bash
   rsync -avz -e ssh user@remote:/source/ /destination/
   ```

3. **断点续传**：
   ```bash
   rsync -avzP /source/ /destination/
   ```

4. **排除指定目录**：
   ```bash
   rsync -avz --exclude='subdir1' --exclude='subdir2' /source/ /destination/
   ```

5. **删除目标多余文件**：
   ```bash
   rsync -avz --delete /source/ /destination/
   ```

6. **限制带宽**：
   ```bash
   rsync -avz --bwlimit=1000 /source/ /destination/
   ```



>  断点续传
>
>  - -a: 归档模式，保留权限、符号链接等。
>  - -v: 显示详细信息。
>  - --progress: 显示传输进度。
>  - --partial: 保留部分传输的文件，支持断点续传。
>  - --delete: 

```shell
rsync -av --progress --partial /mnt/source/ /mnt/destination/
```

> 跳过指定目录参数--exclude，可以有多个

```shell
nohup rsync -avzP --append-verify --exclude='log_UI_webLog' --exclude='log_ui_returnMail_system' /mysql/mysql/data/ /data23/mysql_log/ > /tmp/cpMysql.log &
```

> 远程传输，指定用户+ip

```shell
rsync -av --delete elasticsearch.tar.gz '-e ssh -p 60011' zax@192.168.2.138:/web/php/projectPHP/jobuiV4/app/site/demo/zax/demo.php >> /tmp/rsyncTest.log
```

