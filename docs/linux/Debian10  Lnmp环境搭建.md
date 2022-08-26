# Debian10  Lnmp环境搭建



### 安装开发环境软件包

```
sudo apt-get install -y build-essential libexpat1-dev libgeoip-dev libpng-dev libpcre3-dev libssl-dev libxml2-dev rcs zlib1g-dev libmcrypt-dev libjpeg-dev libpng-dev libwebp-dev pkg-config libbz2-dev libcurl4-openssl-dev autoconf libmemcached-dev libmemcached11

sudo ln -s /usr/include/x86_64-linux-gnu/curl /usr/local/include/curl
```

### 下载软件源码包

```
cd /usr/local/src
sudo wget https://cdn.mysql.com/archives/mysql-5.6/mysql-5.6.20.tar.gz
sudo wget https://openresty.org/download/openresty-1.9.7.4.tar.gz
sudo wget https://www.php.net/distributions/php-5.6.20.tar.gz
```

### 创建用户nginx、mysql用户

```
sudo groupadd mysql
sudo useradd -g mysql -d /home/mysql -s /sbin/nologin mysql

sudo groupadd nginx
sudo useradd -g nginx -d /home/nginx -s /sbin/nologin nginx
```

### 安装nginx

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

### 安装openresty-1.9.7.1，包含nginx-1.9.7和插件

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

### 安装php5.6

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

### 编译安装php7.4

```shell
##/bin/bash

apt-get install -y libsqlite3-dev libmemcached-dev libmagickwand-dev libmagickcore-dev \
libdatrie-dev libmcrypt-dev procps libonig-dev libzip-dev

#apt-get install -y build-essential libexpat1-dev libgeoip-dev libpng-dev libpcre3-dev libssl-dev libxml2-dev rcs zlib1g-dev libmcrypt-dev libjpeg-dev libpng-dev libwebp-dev pkg-config libbz2-dev libcurl4-openssl-dev autoconf libmemcached-dev libmemcached11

cd /usr/local/src/package/php-7.4.24/ && \
	./configure \
    --prefix=/web/software/php-7.4.24 \
    --with-config-file-path=/web/software/php-7.4.24/lib \
    --with-mysqli=mysqlnd \
    --with-pdo-mysql=mysqlnd \
    --with-zlib \
    --disable-ipv6 \
    --enable-sockets \
    --disable-debug \
    --enable-xml \
    --disable-rpath \
    --enable-bcmath \
    --enable-shmop \
    --enable-sysvsem \
    --enable-inline-optimization \
    --enable-sysvmsg \
    --enable-sysvshm \
    --enable-mbregex \
    --enable-mbstring \
    --with-bz2 \
    --with-libxml \
    --with-curl \
    --with-openssl \
    --with-mhash \
    --with-xmlrpc \
    --with-zip \
    --enable-soap \
    --without-pear \
    --enable-fpm && \
    make && make install

# apcu
    cd /usr/local/src/package/apcu-5.1.19 \
    /web/software/php-7.4.24/bin/phpize \
    ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    make && make install \
# blitz
    cd /usr/local/src/package/blitz-0.10.4-PHP7/ \
    /web/software/php-7.4.24/bin/phpize \
    ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    make && make install \
# memcached
    cd /usr/local/src/package/memcached-3.1.5 \
    /web/software/php-7.4.24/bin/phpize \
    ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    make && make install \
# memcache
    cd /usr/local/src/package/memcache-8.0 \
    /web/software/php-7.4.24/bin/phpize \
    ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    make && make install \
# mongodb
    cd /usr/local/src/package/mongodb-1.10.0 \
    /web/software/php-7.4.24/bin/phpize \
    ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    make && make install \
# igbinary
    cd /usr/local/src/package/igbinary-3.2.6 \
    /web/software/php-7.4.24/bin/phpize \
    ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    make && make install \
# redis
    cd /usr/local/src/package/redis-4.3.0 \
    /web/software/php-7.4.24/bin/phpize \
    ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    make && make install \
# imagick
    cd /usr/local/src/package/imagick-3.5.1 \
    /web/software/php-7.4.24/bin/phpize \
    ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    make && make install \
# qqwry
	cd /usr/local/src/package \
    cd /usr/local/src/package/qqwry-master/php/qqwry/ \
    /web/software/php-7.4.24/bin/phpize \
    ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    make && make install \
# xhprof
    cd /usr/local/src/package/xhprof-2.3.4/extension/ \
    /web/software/php-7.4.24/bin/phpize \
    ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    make && make install \
# php-ext-trie-filter
    cd /usr/local/src/package/php-ext-trie-filter-php7 \
    /web/software/php-7.4.24/bin/phpize \
    ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    make && make install \
# scws
    cd /usr/local/src/package/scws-1.2.3/ \
    ./configure --prefix=/web/software/scws-1.2.3/ \
    make && make install \
    cp -r /usr/local/src/package/dict* /web/software/scws-1.2.3/etc/ \
# scws-phpext
    cd /usr/local/src/package/scws-1.2.3/phpext \
    /web/software/php-7.4.24/bin/phpize \
    ./configure --with-scws=/web/software/scws-1.2.3 --with-php-config=/web/software/php-7.4.24/bin/php-config \
    make && make install \
# mcrypt
    cd /usr/local/src/package/mcrypt-1.0.4 \
    /web/software/php-7.4.24/bin/phpize \
    aclocal \
    ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    make && make install \
# gd
    cd /usr/local/src/package/php-7.4.24/ext/gd \
    /web/software/php-7.4.24/bin/phpize \
    ./configure -with-php-config=/web/software/php-7.4.24/bin/php-config --enable-gd --with-jpeg --with-freetype \
    make && make install \

cp /usr/local/src/docker/php/php-fpm.conf /web/software/php-7.4.24/etc/php-fpm.conf

cp /usr/local/src/docker/php/php-fpm /etc/init.d/php-fpm

chmod 755 /etc/init.d/php-fpm

```

