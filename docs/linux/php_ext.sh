#!/bin/bash
#php

cd /usr/local/src/soft/php
tar zxvf apcu-4.0.10.tgz
cd apcu-4.0.10
/web/software/php/bin/phpize
./configure --with-php-config=/web/software/php/bin/php-config
make && make install
cd ..

tar zxvf blitz-0.8.5.tar.gz
cd blitz-0.8.5
/web/software/php/bin/phpize
./configure --with-php-config=/web/software/php/bin/php-config
make && make install
cd ..

tar zxvf memcached-2.2.0.tgz
cd memcached-2.2.0
/web/software/php/bin/phpize
./configure --with-php-config=/web/software/php/bin/php-config --with-libmemcached-dir=/web/software/libmemcached
make && make install
cd ..

tar zxvf memcache-2.2.7.tgz
cd memcache-2.2.7
/web/software/php/bin/phpize
./configure --with-php-config=/web/software/php/bin/php-config
make && make install
cd ..

tar zxvf mongo-1.6.14.tgz
cd mongo-1.6.14
/web/software/php/bin/phpize
./configure --with-php-config=/web/software/php/bin/php-config
make && make install
cd ..

tar zxvf mongodb-1.5.3.tgz
cd mongodb-1.5.3
/web/software/php/bin/phpize
./configure --with-php-config=/web/software/php/bin/php-config
make && make install
cd ..

tar zxvf qqwry-0.1.0.tgz
cd qqwry-0.1.0
make clean
/web/software/php/bin/phpize
./configure --with-php-config=/web/software/php/bin/php-config
make && make install
cd ..

tar zxvf igbinary-1.2.1.tgz
cd igbinary-1.2.1
/web/software/php/bin/phpize
./configure --with-php-config=/web/software/php/bin/php-config
make && make install
cd ..

tar zxvf ImageMagick-6.9.4-0.tar.gz
cd ImageMagick-6.9.4-0/
./configure --prefix=/web/software/ImageMagick/
make && make install
cd ..

tar zxvf imagick-3.4.1.tgz
cd imagick-3.4.1
/web/software/php/bin/phpize
./configure --with-php-config=/web/software/php/bin/php-config --with-imagick=/web/software/ImageMagick
make && make install
cd ..

tar zxvf redis-2.2.8.tgz
cd redis-2.2.8
/web/software/php/bin/phpize
./configure --with-php-config=/web/software/php/bin/php-config
make && make install
cd ..

tar zxvf tokyocabinet-1.4.48.tar.gz
cd tokyocabinet-1.4.48/
./configure --prefix=/web/software/tokyocabinet/
make && make install
cd ..

tar zxvf  tokyotyrant-1.1.41.tar.gz
cd tokyotyrant-1.1.41/
./configure --prefix=/web/software/tokyotyrant --with-tc=/web/software/tokyocabinet/
make && make install
cd ..

tar zxvf tokyo_tyrant-0.7.0.tgz
cd tokyo_tyrant-0.7.0
/web/software/php/bin/phpize
./configure --with-php-config=/web/software/php/bin/php-config --with-tokyo-tyrant=/web/software/tokyotyrant/   --with-tokyo-cabinet-dir=/web/software/tokyocabinet/
make && make install
cd ..

tar zxvf libdatrie-0.2.4.tar.gz
cd libdatrie-0.2.4
./configure --prefix=/usr/local
make && make install
cd ..

unzip php-ext-trie-filter-master.zip
cd /usr/local/src/soft/php/php-ext-trie-filter-master
/web/software/php/bin/phpize
./configure --with-php-config=/web/software/php/bin/php-config --with-trie_filter=/usr/local
make && make install
cd ..

tar jxvf scws-1.2.3.tar.bz2
cd scws-1.2.3/
./configure --prefix=/web/software/scws/
make && make install
tar xjf scws-dict-chs-gbk.tar.bz2 -C /web/software/scws/etc/
tar xjf scws-dict-cht-utf8.tar.bz2 -C /web/software/scws/etc/
tar xjf scws-dict-chs-utf8.tar.bz2 -C /web/software/scws/etc/

cd /usr/local/src/soft/php/scws-1.2.3/phpext
/web/software/php/bin/phpize
./configure --with-scws=/web/software/scws --with-php-config=/web/software/php/bin/php-config
make && make install

cd /usr/local/src/soft/php/php-5.6.40/ext/mcrypt
/web/software/php/bin/phpize
aclocal
./configure --with-php-config=/web/software/php/bin/php-config  --with-mcrypt=/web/software/libmcrypt
make && make install

cd /usr/local/src/soft/php/php-5.6.40/ext/gd
/web/software/php/bin/phpize
./configure -with-php-config=/web/software/php/bin/php-config --with-jpeg-dir=/web/software/jpeg6/ --with-freetype-dir=/web/software/freetype2/ --with-png-dir=/web/software/libpng2/
make && make install