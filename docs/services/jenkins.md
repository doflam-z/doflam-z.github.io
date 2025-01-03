Jenkins



Job Pll

```bash
#!/bin/bash

jobuiphpdir="jobuiV4 baseClassV4 Thrift captcha"
jobuihtmldir="jobuiV4_html"

cd /web/software/jenkins/workspace/jobui

#更新本地仓库到最新改动
process=`pgrep git`
echo "###################" >> /tmp/coding.log
date "+%Y%m%d %H:%M:%S" >> /tmp/coding.log
#判断git pull进程是否存在
if [ -n "$process" ];then
        echo "git pull is exist" >> /tmp/coding.log
        exit
fi
git pull origin master >> /tmp/coding.log  2>&1 &

sleep 1

#判断git pull命令是否运行完成
while true
do
        process=`pgrep git`
        #[ -n str] 当字符串长度大于0返回真 
        if [ -n "$process" ]; then
        echo "git pull is running" >> /tmp/coding.log
        sleep 2
else
        echo "git pull is over" >> /tmp/coding.log
        break
        fi
done


if [ "$USER" = "jobui" ];then
    for jpdir in $jobuiphpdir
    do
        if [ ! -z "$jpdir" ] ;then
            echo -e "\n-------------------- /projectPHP/$jpdir 的同步内容如下 --------------------\n"
            rsync -av --delete --exclude-from=/web/software/jenkins/workspace/jobui/.gitignore $jpdir /web/php/projectPHP/
        fi
    done

    for jhdir in $jobuihtmldir
    do
        if [ ! -z "$jhdir" ] ;then
            echo -e "\n-------------------- /projectHTML/$jhdir 的同步内容如下 --------------------\n"
            rsync -av --delete --exclude-from=/web/software/jenkins/workspace/jobui/.gitignore $jhdir /web/php/projectHTML/
        fi
    done
else
    echo "you are $USER not jobui,change to the user and run it \n"
    exit
fi

#rm -rf /dev/shm/nginx-data/proxy_cache_dir/*

exit
```

Jobui pub

```bash
#!/bin/bash

jobuiphpdir="jobuiV4 baseClassV4 captcha"
jobuihtmldir="jobuiV4_html"

time=`date`
echo "start at $time ######################\n"
echo "####### rsync jobui start #######\n"

ip="132 133 134 135 136 137 138 141 144"

for var in $ip
do
    echo -e "\n\n=======================================\njobuiV4同步目标机器:192.168.2.$var \n"
    cd /web/php/projectPHP
    for jpdir in $jobuiphpdir
    do
        echo -e "\n-------------------- /projectPHP/$jpdir 同步开始 --------------------\n"
        if [ ! -z "$jpdir" ] ;then
                rsync -av  --delete $jpdir '-e ssh -p 60011' jobui@192.168.2.$var:/web/php/projectPHP/ >> /tmp/jobui_rxync_remote.log
        fi
    done
    cd /web/php/projectHTML
    for jhdir in $jobuihtmldir
    do
        echo -e "\n\n------------------ /projectHTML/$jhdir 同步开始 --------------------\n"
        if [ ! -z "$jhdir" ] ;then
                rsync -av  --delete $jhdir '-e ssh -p 60011' jobui@192.168.2.$var:/web/php/projectHTML/ >> /tmp/jobui_rxync_remote.log
        fi
    done
done
echo "####### rsync jobui end #######"
exit
```



