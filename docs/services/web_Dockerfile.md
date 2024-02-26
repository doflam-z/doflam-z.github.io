# dockerfile编写

### debian10基础镜像

```dockerfile
FROM debian:buster-slim

LABEL maintainer="debian base image"

WORKDIR /usr/local/src/docker/

COPY sources.list /etc/apt/sources.list

RUN apt-get update && \
	apt-get install --no-install-recommends -y gcc g++ make wget vim pkg-config autoconf unzip zlib1g-dev libxml2-dev libssl-dev libbz2-dev \
	libcurl4-openssl-dev libonig-dev libzip-dev cron && \
	groupadd www && useradd -g www -d /home/www -s /sbin/nologin www && groupadd jobui && \
	useradd -g jobui -d /home/jobui -s /sbin/nologin jobui && \
	mkdir -p /web/php/local && mkdir -p /web/nginx-data && mkdir /web/jobui_file && \
    cd /web/nginx-data && mkdir {proxy_cache_dir,proxy_cache2_dir,proxy_temp_dir} && \
    mkdir -p /web/php/tmp/mysql/ && cd /web/php/tmp/mysql && touch 100.txt 200.txt 400.txt && \
    sed -i 's/# alias ll/alias ll/g' /root/.bashrc
```

生成镜像

```shell
docker build -t debian_base:1.1 .
```

### php7.4镜像

```dockerfile
FROM debian_base:1.1

LABEL maintainer="PHP-7.4.24 base image <3088037209@qq.com>"

WORKDIR /web/php/projectPHP/

RUN apt-get update -y && \
   apt-get install --no-install-recommends -y libsqlite3-dev libmemcached-dev libmagickwand-dev libmagickcore-dev \
   libdatrie-dev libmcrypt-dev procps nfs-common && apt-get clean; \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*

ADD package.tar.gz /usr/local/src/docker/php/

ADD php7/php-7.4.24.tar.gz /usr/local/src/docker/php/

RUN cd /usr/local/src/docker/php/php-7.4.24/ && \
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
    --enable-maintainer-zts \
    --without-pear \
    --enable-fpm && \
    make && make install \
# apcu
    && cd /usr/local/src/docker/php/package/apcu-5.1.21 \
    && /web/software/php-7.4.24/bin/phpize \
    && ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    && make && make install \
# blitz
    && cd /usr/local/src/docker/php/package/blitz-0.10.4-PHP7/ \
    && /web/software/php-7.4.24/bin/phpize \
    && ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    && make && make install \
# memcached
    && cd /usr/local/src/docker/php/package/memcached-3.2.0 \
    && /web/software/php-7.4.24/bin/phpize \
    && ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    && make && make install \
# memcache
    && cd /usr/local/src/docker/php/package/memcache-4.0.5.2 \
    && /web/software/php-7.4.24/bin/phpize \
    && ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    && make && make install \
# mongodb
    && cd /usr/local/src/docker/php/package/mongodb-1.10.0 \
    && /web/software/php-7.4.24/bin/phpize \
    && ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    && make && make install \
# igbinary
    && cd /usr/local/src/docker/php/package/igbinary-3.2.6 \
    && /web/software/php-7.4.24/bin/phpize \
    && ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    && make && make install \
# redis
    && cd /usr/local/src/docker/php/package/redis-4.3.0 \
    && /web/software/php-7.4.24/bin/phpize \
    && ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    && make && make install \
# imagick
    && cd /usr/local/src/docker/php/package/imagick-3.5.1 \
    && /web/software/php-7.4.24/bin/phpize \
    && ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    && make && make install \
# qqwry
   && cd /usr/local/src/docker/php/package \
    && cd /usr/local/src/docker/php/package/qqwry-master/php/qqwry/ \
    && /web/software/php-7.4.24/bin/phpize \
    && ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    && make && make install \
# xhprof
    && cd /usr/local/src/docker/php/package/xhprof-2.3.4/extension/ \
    && /web/software/php-7.4.24/bin/phpize \
    && ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    && make && make install \
# php-ext-trie-filter
    && cd /usr/local/src/docker/php/package/php-ext-trie-filter-php7 \
    && /web/software/php-7.4.24/bin/phpize \
    && ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    && make && make install \
# scws
    && cd /usr/local/src/docker/php/package/scws-1.2.3/ \
    && ./configure --prefix=/web/software/scws-1.2.3/ \
    && make && make install \
    && cp -r /usr/local/src/docker/php/package/dict* /web/software/scws-1.2.3/etc/ \
# scws-phpext
    && cd /usr/local/src/docker/php/package/scws-1.2.3/phpext \
    && /web/software/php-7.4.24/bin/phpize \
    && ./configure --with-scws=/web/software/scws-1.2.3 --with-php-config=/web/software/php-7.4.24/bin/php-config \
    && make && make install \
# mcrypt
    && cd /usr/local/src/docker/php/package/mcrypt-1.0.4 \
    && /web/software/php-7.4.24/bin/phpize \
    && aclocal \
    && ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    && make && make install \
# xdebug
    && cd /usr/local/src/docker/php/package/xdebug-3.1.3 \
    && /web/software/php-7.4.24/bin/phpize \
    && ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    && make && make install \
# parallel
    && cd /usr/local/src/docker/php/package/parallel-1.1.4 \
    && /web/software/php-7.4.24/bin/phpize \
    && ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    && make && make install \
# gd
    && cd /usr/local/src/docker/php/php-7.4.24/ext/gd \
    && /web/software/php-7.4.24/bin/phpize \
    && ./configure -with-php-config=/web/software/php-7.4.24/bin/php-config --enable-gd --with-jpeg --with-freetype \
    && make && make install \
    && rm -rf /usr/local/src/docker/php/*

COPY php7/conf/php-fpm.conf /web/software/php-7.4.24/etc/php-fpm.conf

COPY php7/conf/php.ini /web/software/php-7.4.24/lib/php.ini

COPY php7/conf/php-fpm /etc/init.d/php-fpm

RUN chmod 755 /etc/init.d/php-fpm && ln -s /web/software/php-7.4.24/bin/* /usr/bin/

# 复制启动脚本
COPY php7/start.sh /root/start.sh
RUN chmod +x /root/start.sh
# 设置启动目录以及启动脚本
ENTRYPOINT cd /root; ./start.sh
```

```shell
docker build -f php7/Dockerfile -t php7.4:1.1 .
```



> php-fpm后台启动会直接退出容器，修改php-fpm.conf 里 daemonize = yes 改为 no,
>
> 也可以  CMD ["/web/software/php-7.4.24/sbin/php-fpm", "-R", "--nodaemonize"]



### php-8.0.16镜像

```shell
FROM debian_base:1.1

LABEL maintainer="php-8.0.16 base image <3088037209@qq.com>"

RUN apt-get update && \
	apt-get install --no-install-recommends -y libsqlite3-dev libmemcached-dev libmagickwand-dev libmagickcore-dev \
	libdatrie-dev libmcrypt-dev procps nfs-common && rm -rf /var/lib/apt/lists/*

ADD package.tar.gz /usr/local/src/docker/php/

ADD php7/php-7.4.24.tar.gz /usr/local/src/docker/php/

RUN cd /usr/local/src/docker/php/php-7.4.24/ && \
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
    make && make install \
# apcu
    && cd /usr/local/src/docker/php/package/apcu-5.1.19 \
    && /web/software/php-7.4.24/bin/phpize \
    && ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    && make && make install \
# blitz
    && cd /usr/local/src/docker/php/package/blitz-0.10.4-PHP7/ \
    && /web/software/php-7.4.24/bin/phpize \
    && ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    && make && make install \
# memcached
    && cd /usr/local/src/docker/php/package/memcached-3.1.5 \
    && /web/software/php-7.4.24/bin/phpize \
    && ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    && make && make install \
# memcache
    && cd /usr/local/src/docker/php/package/memcache-8.0 \
    && /web/software/php-7.4.24/bin/phpize \
    && ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    && make && make install \
# mongodb
    && cd /usr/local/src/docker/php/package/mongodb-1.10.0 \
    && /web/software/php-7.4.24/bin/phpize \
    && ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    && make && make install \
# igbinary
    && cd /usr/local/src/docker/php/package/igbinary-3.2.6 \
    && /web/software/php-7.4.24/bin/phpize \
    && ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    && make && make install \
# redis
    && cd /usr/local/src/docker/php/package/redis-4.3.0 \
    && /web/software/php-7.4.24/bin/phpize \
    && ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    && make && make install \
# imagick
    && cd /usr/local/src/docker/php/package/imagick-3.5.1 \
    && /web/software/php-7.4.24/bin/phpize \
    && ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    && make && make install \
# qqwry
	&& cd /usr/local/src/docker/php/package \
    && cd /usr/local/src/docker/php/package/qqwry-master/php/qqwry/ \
    && /web/software/php-7.4.24/bin/phpize \
    && ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    && make && make install \
# xhprof
    && cd /usr/local/src/docker/php/package/xhprof-2.3.4/extension/ \
    && /web/software/php-7.4.24/bin/phpize \
    && ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    && make && make install \
# php-ext-trie-filter
    && cd /usr/local/src/docker/php/package/php-ext-trie-filter-php7 \
    && /web/software/php-7.4.24/bin/phpize \
    && ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    && make && make install \
# scws
    && cd /usr/local/src/docker/php/package/scws-1.2.3/ \
    && ./configure --prefix=/web/software/scws-1.2.3/ \
    && make && make install \
    && cp -r /usr/local/src/docker/php/package/dict* /web/software/scws-1.2.3/etc/ \
# scws-phpext
    && cd /usr/local/src/docker/php/package/scws-1.2.3/phpext \
    && /web/software/php-7.4.24/bin/phpize \
    && ./configure --with-scws=/web/software/scws-1.2.3 --with-php-config=/web/software/php-7.4.24/bin/php-config \
    && make && make install \
# mcrypt
    && cd /usr/local/src/docker/php/package/mcrypt-1.0.4 \
    && /web/software/php-7.4.24/bin/phpize \
    && aclocal \
    && ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    && make && make install \
# xdebug
    && cd /usr/local/src/docker/php/package/xdebug-3.1.3 \
    && /web/software/php-7.4.24/bin/phpize \
    && ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \
    && make && make install \
# gd
    && cd /usr/local/src/docker/php/php-7.4.24/ext/gd \
    && /web/software/php-7.4.24/bin/phpize \
    && ./configure -with-php-config=/web/software/php-7.4.24/bin/php-config --enable-gd --with-jpeg --with-freetype \
    && make && make install \
    && rm -rf /usr/local/src/docker/php/*

COPY conf/php-fpm.conf /web/software/php-7.4.24/etc/php-fpm.conf

COPY conf/php.ini /web/software/php-7.4.24/lib/php.ini

COPY conf/php-fpm /etc/init.d/php-fpm

RUN chmod 755 /etc/init.d/php-fpm && ln -s /web/software/php-7.4.24/bin/* /usr/bin/

# 复制启动脚本
COPY start.sh /root/start.sh
RUN chmod +x /root/start.sh
# 设置启动目录以及启动脚本
ENTRYPOINT cd /root; ./start.sh
```

```shell
docker build -t php8.0.16 -f php8/Dockerfile .
```

### openresty版本nginx镜像

```dockerfile
FROM debian_base:1.1

LABEL maintainer="openresty-1.15.8.3 base image <3088037209@qq.com>"

ADD package.tar.gz /usr/local/src/docker/nginx/

RUN cd /usr/local/src/docker/nginx/package/openresty-1.15.8.3 && \
    ./configure \
    --prefix=/web/software/openresty \
    --with-luajit \
    --user=www --group=www \
    --with-pcre=../pcre-8.44 \
    --with-pcre-jit \
    --with-zlib=../zlib-1.2.11 \
    --with-openssl=../openssl-OpenSSL_1_1_1l \
    --with-http_stub_status_module \
    --with-http_ssl_module \
    --add-module=../ngx_cache_purge-master && \
    make && make install && \
    ln -s /web/software/openresty/nginx /web/software/nginx && \
    ln -s /web/software/nginx/sbin/nginx /usr/bin/nginx && \
    rm -rf /usr/local/src/docker/nginx/*

CMD ["nginx", "-g", "daemon off;"]

```

生成镜像

```shell
docker build -t nginx:1.1 .
```

运行镜像

```shell
docker run --name nginx_test -d -p 80:80 --rm -v /home/zax/code/workspace/vagrant/nginx:/web/software/nginx/conf nginx:1.0
```



### docker-compose.yml

```yaml
version: "3"
services:
  fpm:
   image: php7.4:1.2
   container_name: fpm
   privileged: true
   volumes:
      - .:/web/php/projectHTML
      - .:/web/php/projectPHP
      - ./docker/php:/web/php
      - ./docker/php/php7/conf/php-fpm.conf:/web/software/php-7.4.24/etc/php-fpm.conf
      - ./docker/php/php7/conf/php.ini:/web/software/php-7.4.24/lib/php.ini
   networks:
      web:
       ipv4_address: 192.168.10.2

  nginx:
   image: nginx:1.2
   container_name: nginx
   ports:
      - 80:80
      - 443:443
   volumes:
      - .:/web/php/projectHTML
      - .:/web/php/projectPHP
      - ./docker/php:/web/php
      - ./jobuiV4/vagrant/nginx:/web/software/nginx/conf
   networks:
      web:
       ipv4_address: 192.168.10.3

#  redis:
#   image: redis:5.0.14
#   container_name: redis
#   ports:
#     - 6379:6379
#   networks:
#      web:
#       ipv4_address: 192.168.10.4

networks:
  web:
     driver: bridge
     ipam:
       config: 
         - subnet: 192.168.10.0/24

```

挂载远程文件夹

```shell
apt install nfs-common -y
sudo mount -t nfs 192.168.1.13:/web/jobui_file jobui_file
sudo mount -t nfs 192.168.1.13:/web/php/projectPHP/jobuiDic jobuiDic

mount -vvvv -t nfs -o vers=3 192.168.1.13:/web/jobui_file jobui_file

mount [-o <option>[...]] [-u:<username>] [-p:{<password> | *}] {\\<computername>\<sharename> | <computername>:/<sharename>} {<devicename> | *}
mount -t nfs \192.168.1.13:/web/jobui_file D:\workspace\jobui_file

#mac挂载参数
sudo mount -t nfs -o resvport,rw  192.168.1.13:/web/php/projectPHP/jobuiDic jobuiDic
sudo mount -t nfs -o resvport,rw 192.168.1.13:/web/jobui_file /jobui_file
```

### supervisor镜像

```dockerfile
FROM doflamingozzz/php7_line:1.0
RUN apt-get update -y && \
	apt install supervisor cron -y && service cron start
RUN tee /etc/supervisor/supervisord.conf <<-'EOF'
[inet_http_server]         ; inet (TCP) server disabled by default
port=*:9001        ; ip_address:port specifier, *:port for all iface
username=jobui              ; default is no username (open server)
password=DZK9UfBEMqA               ; default is no password (open server)
EOF
```

