# Debian10常用命令

### 系统相关命令

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

```shell
#重启网络
/etc/init.d/networking restart
#重启网络(防止配置出错断网)
service networking restart && ifup enp2s0 
sudo ifup enp3s0:0
sudo ifdown enp3s0:0
#重启ssh
/etc/init.d/ssh restart

#安装sudo
apt-get install sudo -y
#将用户添加到sudo组
usermod -aG sudo z

#新建不允许登录用户
useradd -s /sbin/nologin jobui

#新建普通用户并创建home目录指定bash
useradd -m -s /bin/bash jobui

#debian未指定shell问题
#使用usermod命令修改shell类型
usermod -s /bin/bash zax

#vbox虚拟机设置分辨率
cvt 1920 1080
xrandr --newmode "1920X1080_60.00" 173.00  1920 2048 2248 2576  1080 1083 1088 1120 -hsync +vsync
xrandr --addmode Virtual1 "1920X1080_60.00"
xrandr --output Virtual1 --mode "1920X1080_60.00"

#将以上内容添加到/etc/profile文件

#添加ll快捷命令
vi ~/.bashrc

#设置ssh开机启动
update-rc.d ssh enable

#禁止开机启动
update-rc.d ssh disabled

#安装im-config
sudo apt install im-config

#运行im-config，选择fcitx输入法
im-config -c

#解决依赖问题
sudo apt install -f

#查找dep包
sudo dpkg -l sog*

#搜索安装包
sudo apt-cache search openlda

#卸载
sudo dpkg -P sogopinyin

#挂载失败问题（ bad option; for several filesystems (e.g. nfs, cifs) you might need a /sbin/mount.<type> helper program.）
sudo apt install nfs-common

# vim不能复制

```

配置apt软件源,更新sources.list

```shell
mv /etc/apt/sources.list /etc/apt/sources.list.bak
cat > /etc/apt/sources.list << EOF
deb http://mirrors.cloud.tencent.com/debian/ buster main non-free contrib
deb http://mirrors.cloud.tencent.com/debian-security buster/updates main
deb http://mirrors.cloud.tencent.com/debian/ buster-updates main non-free contrib
deb http://mirrors.cloud.tencent.com/debian/ buster-backports main non-free contrib

deb-src http://mirrors.cloud.tencent.com/debian-security buster/updates main
deb-src http://mirrors.cloud.tencent.com/debian/ buster main non-free contrib
deb-src http://mirrors.cloud.tencent.com/debian/ buster-updates main non-free contrib
deb-src http://mirrors.cloud.tencent.com/debian/ buster-backports main non-free contrib
EOF

apt-get update -y
apt-get install -y vim wget

source ~/.bashrce
```

### 修改时区为上海

```shell
cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```

### 安装zabbix

```shell
sudo wget https://repo.mysql.com//mysql-apt-config_0.8.17-1_all.deb
sudo dpkg -i mysql-apt-config_0.8.17-1_all.deb
sudo apt update
sudo apt-get install libmysqld-devecho libevent-dev libsnmp-dev libopenipmi-dev

./configure --prefix=/web/software/zabbix --enable-server --enable-agent --with-mysql --enable-ipv6 --with-libcurl --with-libxml2 --with-mysql=/usr/bin/mysql_config

sudo ./configure --prefix=/web/software/zabbix --enable-server --enable-agent --with-mysql --enable-ipv6 --with-net-snmp --with-libcurl --with-libxml2 --with-openipmi --with-mysql=/usr/bin/mysql_config
```



安装zabbix时,出现报错Unsupported charset or collation for tables: ,应该是msyql创建zabbix数据库是,字符编码出现了问题,参考下列方法修复:
1.删除原有的数据库. drop database zabbix;
2.创建新的zabbix数据库,命令:create database zabbix character set utf8 collate utf8_bin;
3.重新打入zabbix的数据库表内容;
mysql -uroot -p123456 zabbix < schema.sql
mysql -uroot -p123456 zabbix < images.sql
mysql -uroot -p123456 zabbix < data.sql
4.然后重新进入zabbix GUI的web 安装界面就OK了

```shell
sudo chown -R jobui:jobui /web/php/local/zabbix/
sudo chmod -R 755 /web/php/local/zabbix/
```



### debian10美化

```shell
#安装谷歌noto字体
sudo apt install fonts-noto-cjk
#安装依赖
sudo apt install -y gtk2-engines-murrine
#下载Orchis-theme主题
sudo wget https://github.com/vinceliuice/Orchis-theme/archive/refs/heads/master.zip
#下载图标
sudo wget  https://github.com/vinceliuice/Tela-icon-theme/archive/refs/heads/master.zip

```

### 安装deepin版微信

```shell
#!/bin/bash
mkdir ./deepintemp
cd ./deepintemp
wget http://packages.deepin.com/deepin/pool/non-free/d/deepin-wine/deepin-wine_2.18-22~rc0_all.deb
wget http://packages.deepin.com/deepin/pool/non-free/d/deepin-wine/deepin-wine32_2.18-22~rc0_i386.deb
wget http://packages.deepin.com/deepin/pool/non-free/d/deepin-wine/deepin-wine32-preloader_2.18-22~rc0_i386.deb
wget http://packages.deepin.com/deepin/pool/non-free/d/deepin-wine-helper/deepin-wine-helper_1.2deepin8_i386.deb
wget http://packages.deepin.com/deepin/pool/non-free/d/deepin-wine-plugin/deepin-wine-plugin_1.0deepin2_amd64.deb
wget http://packages.deepin.com/deepin/pool/non-free/d/deepin-wine-plugin-virtual/deepin-wine-plugin-virtual_1.0deepin3_all.deb
wget http://packages.deepin.com/deepin/pool/non-free/d/deepin-wine-uninstaller/deepin-wine-uninstaller_0.1deepin2_i386.deb
wget http://packages.deepin.com/deepin/pool/non-free/u/udis86/udis86_1.72-2_i386.deb
wget http://packages.deepin.com/deepin/pool/non-free/d/deepin-wine/deepin-fonts-wine_2.18-22~rc0_all.deb
wget http://packages.deepin.com/deepin/pool/non-free/d/deepin-wine/deepin-libwine_2.18-22~rc0_i386.deb
wget https://packages.deepin.com/deepin/pool/main/libj/libjpeg-turbo/libjpeg62-turbo_1.5.1-2_amd64.deb --no-check-certificate
wget https://packages.deepin.com/deepin/pool/main/libj/libjpeg-turbo/libjpeg62-turbo_1.5.1-2_i386.deb --no-check-certificate
wget http://packages.deepin.com/deepin/pool/non-free/d/deepin.com.wechat/deepin.com.wechat_2.6.8.65deepin0_i386.deb

echo '准备添加32位支持'
dpkg --add-architecture i386
echo '添加成功，准备刷新apt缓存信息...'
apt update
echo '即将开始安装...'
dpkg -i *.deb
echo '安装完成，正在自动安装依赖...'
apt install -fy
dpkg -i deepin.com.wechat_2.6.8.65deepin0_i386.deb
```

中文问题，进入/opt/deepinwine/tools文件夹

在run.sh 和 run_v2.sh 中修改为

```bash
#WINE_CMD="deepin-wine"改为下行
WINE_CMD="LC_ALL=zh_CN.UTF-8 deepin-wine"
```

### 安装navicat

```shell
wget https://download3.navicat.com/download/navicat15-premium-en.AppImage --no-check-certificate
chmod +x navicat15-premium-en.AppImage
./navicat15-premium-en.AppImage
```



