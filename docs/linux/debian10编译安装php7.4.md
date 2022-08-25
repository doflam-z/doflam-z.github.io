# debian10编译安装php7.4

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

