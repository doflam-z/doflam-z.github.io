# supervisor

### yum安装

```shell
yum install epel-release
yum install -y supervisor
systemctl enable supervisord # 开机自启动
systemctl start supervisord # 启动supervisord服务

systemctl status supervisord # 查看supervisord服务状态
ps -ef|grep supervisord # 查看是否存在supervisord进程
```

### 编译安装，需要python3支持

```shell
# 下载安装python3.6.8
wget https://www.python.org/ftp/python/3.6.8/Python-3.6.8.tgz

tar -zxvf Python-3.6.8.tgz

./configure --prefix=/usr/local/python3

make && make install

ln -s /usr/local/python3/bin/python3.6 /usr/bin/python3.6
ln -s /usr/local/python3/bin/pip3 /usr/bin/pip3

# 安装依赖
yum install gcc zlib-devel bzip2-devel openssl openssl-devel ncurses-devel sqlite-devel -y

#源码安装supervisor

cd /usr/local/src
wget -c https://files.pythonhosted.org/packages/11/35/eab03782aaf70d87303b21a67c345b953d3b59d4e3971a568c51e523f5c0/supervisor-4.2.1.tar.gz

tar -zxvf supervisor-4.2.1.tar.gz
cd supervisor-4.2.1

Python3.6 setup.py install

#创建软连接：

ln -s /usr/local/python3/bin/supervisorctl /usr/bin/supervisorctl
ln -s /usr/local/python3/bin/supervisord /usr/bin/supervisord
ln -s /usr/local/python3/bin/echo_supervisord_conf /usr/bin/echo_supervisord_conf

mkdir /etc/supervisord.d

#创建启动脚本

vi /etc/init.d/supervisord
#写入如下配置

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

# 加入服务
chkconfig --add supervisord

# 设置权限
chmod 755 /etc/init.d/supervisord

# 开机启动
chkconfig supervisord on

# 生成配置文件
echo_supervisord_conf > /etc/supervisord.conf
vim /etc/supervisord.conf

# 修改以下几处

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

# 新建子文档：
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

# 启动
supervisord -c /etc/supervisord.conf

# 查看进程
ps aux | grep supervisord



# 查看子进程
supervisorctl status

# 控制进程
#supervisord 启动成功后，可以通过 supervisorctl 客户端控制进程，启动、停止、重启。运行 supervisorctl 命令，不加参数，会进入 supervisor 客户端的交互终端，并会列出当前所管理的所有进程。
#输入help可以查看可以执行的命令列表，如果想看某个命令的作用，运行 help 命令名称，如：help stop

stop tomcat # 表示停止tomcat进程
stop all # 表示停止所有进程
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

