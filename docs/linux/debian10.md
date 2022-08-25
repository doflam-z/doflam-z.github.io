# debian10

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

### 

### 安装iptables-persistent来使用iptables命令

```shell
sudo apt install iptables-persistent -y
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





## lnmp环境搭建

#### 安装开发环境软件包

```
sudo apt-get install -y build-essential libexpat1-dev libgeoip-dev libpng-dev libpcre3-dev libssl-dev libxml2-dev rcs zlib1g-dev libmcrypt-dev libjpeg-dev libpng-dev libwebp-dev pkg-config libbz2-dev libcurl4-openssl-dev autoconf libmemcached-dev libmemcached11

sudo ln -s /usr/include/x86_64-linux-gnu/curl /usr/local/include/curl
```

##### 下载软件源码包

```
cd /usr/local/src
sudo wget https://cdn.mysql.com/archives/mysql-5.6/mysql-5.6.20.tar.gz
sudo wget https://openresty.org/download/openresty-1.9.7.4.tar.gz
sudo wget https://www.php.net/distributions/php-5.6.20.tar.gz


```

##### 创建用户nginx、mysql用户

```
sudo groupadd mysql
sudo useradd -g mysql -d /home/mysql -s /sbin/nologin mysql

sudo groupadd nginx
sudo useradd -g nginx -d /home/nginx -s /sbin/nologin nginx
```

#### 安装nginx

##### 下载安装nginx需要的模块

```
cd /usr/local/src
#zlib库
sudo wget http://www.zlib.net/zlib-1.2.11.tar.gz
sudo tar -zxvf zlib-1.2.11.tar.gz
cd zlib-1.2.11
sudo ./configure --prefix=/web/software/zlib
sudo make
sudo make install

#PCRE库
sudo wget https://ftp.pcre.org/pub/pcre/pcre-8.21.tar.gz
sudo tar -zxvf pcre-8.21.tar.gz
cd pcre-8.21
sudo ./config --prefix=/web/software/pcre
sudo make
sudo make install

#openSSL库
#编译安装openssl报错：POD document had syntax errors at /usr/bin/pod2man line 69. make: *** [install_docs]
#解决方法：
rm -f /usr/bin/pod2man 

sudo wget https://www.openssl.org/source/old/1.0.1/openssl-1.0.1.tar.gz
sudo tar -zxvf openssl-1.0.1.tar.gz
cd openssl-1.0.1
sudo ./config shared --prefix=/usr/local/ssl
sudo make
sudo make install

sudo mv -f /usr/bin/openssl /usr/bin/openssl.old
sudo mv -f /usr/include/openssl /usr/include/openssl.old
sudo ln -s /usr/local/ssl/bin/openssl /usr/bin/openssl
sudo ln -s /usr/local/ssl/include/openssl /usr/include/openssl
sudo ln -s /usr/local/ssl/include/openssl /usr/local/include/openssl

#openSSL库
rm -f /usr/bin/pod2man 
sudo wget https://www.openssl.org/source/old/1.0.1/openssl-1.0.1.tar.gz
sudo tar -zxvf openssl-1.0.1.tar.gz
cd openssl-1.0.1
sudo ./config shared --prefix=/web/software/openssl
sudo make
sudo make install

#libunwind库
sudo wget http://download.savannah.gnu.org/releases/libunwind/libunwind-1.1.tar.gz
sudo tar -zxvf libunwind-1.1.tar.gz
cd libunwind-1.1
sudo CFLAGS=-fPIC ./configure
sudo make CFLAGS=-fPIC
sudo make CFLAGS=-fPIC install

#google-perftools
sudo wget https://github.com/gperftools/gperftools/releases/download/gperftools-2.7/gperftools-2.7.tar.gz
sudo tar -zxvf gperftools-2.7.tar.gz
cd gperftools-2.7
sudo ./configure  --enable-frame-pointers
sudo make
sudo make install
#使google-perftools生效:
sudo echo "/usr/local/lib" >> /etc/ld.so.conf.d/usr_local_lib.conf
sudo ldconfig

#ngx_cache_purge-2.3
sudo wget http://labs.frickle.com/files/ngx_cache_purge-2.3.tar.gz
sudo tar -zxvf ngx_cache_purge-2.3.tar.gz

#nginx编译参数（线上）
--prefix=/web/software/openresty/nginx \
--with-cc-opt=-O2 \
--add-module=../ngx_devel_kit-0.3.0 \
--add-module=../iconv-nginx-module-0.14 \
--add-module=../echo-nginx-module-0.59 \
--add-module=../xss-nginx-module-0.05 \
--add-module=../ngx_coolkit-0.2rc3 \
--add-module=../set-misc-nginx-module-0.30 \
--add-module=../form-input-nginx-module-0.12 \
--add-module=../encrypted-session-nginx-module-0.05 \
--add-module=../ngx_postgres-1.0rc7 \
--add-module=../srcache-nginx-module-0.31 \
--add-module=../ngx_lua-0.10.5 \
--add-module=../ngx_lua_upstream-0.05 \
--add-module=../headers-more-nginx-module-0.30 \
--add-module=../array-var-nginx-module-0.05 \
--add-module=../memc-nginx-module-0.17 \
--add-module=../redis-nginx-module-0.3.7 \
--add-module=../rds-json-nginx-module-0.14 \
--add-module=../rds-csv-nginx-module-0.07 \
--with-ld-opt=-Wl,-rpath,/web/software/openresty/luajit/lib \
--user=www \
--group=www \
--with-google_perftools_module \
--with-pcre=/root/baicai-V6/web/nginx/pcre-8.36 \
--with-pcre-jit \
--with-zlib=/root/baicai-V6/web/nginx/zlib-1.2.8 \
--add-module=/root/baicai-V6/web/nginx/openresty-1.9.15.1/../ngx_cache_purge-2.3 \
--with-http_stub_status_module \
--with-http_ssl_module
```

##### 安装openresty-1.9.7.1，包含nginx-1.9.7和插件

预编译

```
cd /usr/local/src/openresty-1.9.7.4
sudo ./configure \
--prefix=/web/software/openresty \
--user=www \
--group=www \
--with-google_perftools_module \
--with-pcre=../pcre-8.21 \
--with-pcre-jit \
--with-zlib=../zlib-1.2.11 \
--with-openssl=../openssl-1.0.1 \
--add-module=../ngx_cache_purge-2.3 \
--with-http_stub_status_module \
--with-http_ssl_module \
--with-stream
```

编译安装

```
sudo make
sudo make install
#为了统一nginx与其他服务的同步，给nginx目录做软连接
sudo ln -s  /web/software/openresty/nginx  /web/software/nginx
```



#### 安装php

```shell
#安装m
#zlib
sudo ./configure
sudo make
sudo make install
export LDFLAGS="-L/usr/local/zlib/lib"
export CPPFLAGS="-I/usr/local/zlib/include"

#jpeg6
#先创建目录，否则会报错
cd /usr/local/src/php/jpeg-6b
sudo mkdir /web/software/jpeg6/
sudo mkdir {/web/software/jpeg6/bin,/web/software/jpeg6/lib,/web/software/jpeg6/include}
sudo mkdir -p  /web/software/jpeg6/man/man1
sudo ./configure --prefix=/web/software/jpeg6
sudo make
sudo make install

#libpng2
#安装libpng出现configure: error: ZLib not installed
#1.进入zlib的源文件目录，执行命令 make clean,清除zlib；
#2.重新配置 ./configure,后面不要接--prefix参数；
#然后执行以下命令
export LDFLAGS="-L/usr/local/zlib/lib"
export CPPFLAGS="-I/usr/local/zlib/include"

sudo ./configure --prefix=/web/software/libpng2
sudo make
sudo make install

#freetype2
sudo ./configure --prefix=/web/software/freetype2
sudo make
sudo make install

#libxml2
sudo ./configure --prefix=/web/software/libxml2
sudo make
sudo make install

#curl
sudo ./configure --prefix=/web/software/curl
sudo make
sudo make install


#php编译参数（线上）
sudo ./configure --prefix=/web/software/php-5.6.40 \
--with-config-file-path=/web/software/php-5.6.40/lib \
--with-mysql=mysqlnd \
--with-mysqli=mysqlnd \
--with-pdo-mysql=mysqlnd \
--with-jpeg-dir=/web/software/jpeg6 \
--with-png-dir=/web/software/libpng2 \
--with-freetype-dir=/web/software/freetype2 \
--with-libxml-dir=/web/software/libxml2 \
--with-zlib-dir=/usr/local/zlib/ \
--with-curl=/web/software/curl \
--with-openssl=/usr/local/ssl \
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
--enable-gd-native-ttf \
--with-mhash \
--with-xmlrpc \
--enable-zip \
--enable-soap \
--without-pear \
--enable-fpm \
--with-libdir=lib64

#php编译参数（141）
sudo ./configure --prefix=/web/software/php-5.6.40 \
--with-config-file-path=/web/software/php-5.6.40/lib \
--with-mysql=mysqlnd \
--with-mysqli=mysqlnd \
--with-pdo-mysql=mysqlnd \
--with-jpeg-dir=/web/software/jpeg6 \
--with-png-dir=/web/software/libpng2 \
--with-freetype-dir=/web/software/freetype2 \
--with-libxml-dir=/web/software/libxml2 \
--with-zlib-dir=/usr/local/zlib/ \
--with-curl=/web/software/curl \
--with-openssl=/usr/local/ssl \
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
--enable-gd-native-ttf \
--with-mhash \
--with-xmlrpc \
--enable-zip \
--enable-soap \
--without-pear \
--enable-fpm \
--enable-pcntl

#编译php时，遇到“Please reinstall the libcurl distribution...”
#sudo apt-get install libcurl4-gnutls-dev
sudo ln -s /usr/include/x86_64-linux-gnu/curl /usr/local/include/curl

#make: *** [Makefile:590：ext/openssl/openssl.lo] 错误 1 (php5.6不兼容openssl1.1.1)
#openssl降级

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



