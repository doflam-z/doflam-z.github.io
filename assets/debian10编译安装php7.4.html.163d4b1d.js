import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,d as p}from"./app.967b4e7a.js";const e={},i=p(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">##/bin/bash</span>

<span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> libsqlite3-dev libmemcached-dev libmagickwand-dev libmagickcore-dev <span class="token punctuation">\\</span>
libdatrie-dev libmcrypt-dev procps libonig-dev libzip-dev

<span class="token comment">#apt-get install -y build-essential libexpat1-dev libgeoip-dev libpng-dev libpcre3-dev libssl-dev libxml2-dev rcs zlib1g-dev libmcrypt-dev libjpeg-dev libpng-dev libwebp-dev pkg-config libbz2-dev libcurl4-openssl-dev autoconf libmemcached-dev libmemcached11</span>

<span class="token builtin class-name">cd</span> /usr/local/src/package/php-7.4.24/ <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
	./configure <span class="token punctuation">\\</span>
    <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/web/software/php-7.4.24 <span class="token punctuation">\\</span>
    --with-config-file-path<span class="token operator">=</span>/web/software/php-7.4.24/lib <span class="token punctuation">\\</span>
    --with-mysqli<span class="token operator">=</span>mysqlnd <span class="token punctuation">\\</span>
    --with-pdo-mysql<span class="token operator">=</span>mysqlnd <span class="token punctuation">\\</span>
    --with-zlib <span class="token punctuation">\\</span>
    --disable-ipv6 <span class="token punctuation">\\</span>
    --enable-sockets <span class="token punctuation">\\</span>
    --disable-debug <span class="token punctuation">\\</span>
    --enable-xml <span class="token punctuation">\\</span>
    --disable-rpath <span class="token punctuation">\\</span>
    --enable-bcmath <span class="token punctuation">\\</span>
    --enable-shmop <span class="token punctuation">\\</span>
    --enable-sysvsem <span class="token punctuation">\\</span>
    --enable-inline-optimization <span class="token punctuation">\\</span>
    --enable-sysvmsg <span class="token punctuation">\\</span>
    --enable-sysvshm <span class="token punctuation">\\</span>
    --enable-mbregex <span class="token punctuation">\\</span>
    --enable-mbstring <span class="token punctuation">\\</span>
    --with-bz2 <span class="token punctuation">\\</span>
    --with-libxml <span class="token punctuation">\\</span>
    --with-curl <span class="token punctuation">\\</span>
    --with-openssl <span class="token punctuation">\\</span>
    --with-mhash <span class="token punctuation">\\</span>
    --with-xmlrpc <span class="token punctuation">\\</span>
    --with-zip <span class="token punctuation">\\</span>
    --enable-soap <span class="token punctuation">\\</span>
    --without-pear <span class="token punctuation">\\</span>
    --enable-fpm <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
    <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>

<span class="token comment"># apcu</span>
    <span class="token builtin class-name">cd</span> /usr/local/src/package/apcu-5.1.19 <span class="token punctuation">\\</span>
    /web/software/php-7.4.24/bin/phpize <span class="token punctuation">\\</span>
    ./configure --with-php-config<span class="token operator">=</span>/web/software/php-7.4.24/bin/php-config <span class="token punctuation">\\</span>
    <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
<span class="token comment"># blitz</span>
    <span class="token builtin class-name">cd</span> /usr/local/src/package/blitz-0.10.4-PHP7/ <span class="token punctuation">\\</span>
    /web/software/php-7.4.24/bin/phpize <span class="token punctuation">\\</span>
    ./configure --with-php-config<span class="token operator">=</span>/web/software/php-7.4.24/bin/php-config <span class="token punctuation">\\</span>
    <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
<span class="token comment"># memcached</span>
    <span class="token builtin class-name">cd</span> /usr/local/src/package/memcached-3.1.5 <span class="token punctuation">\\</span>
    /web/software/php-7.4.24/bin/phpize <span class="token punctuation">\\</span>
    ./configure --with-php-config<span class="token operator">=</span>/web/software/php-7.4.24/bin/php-config <span class="token punctuation">\\</span>
    <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
<span class="token comment"># memcache</span>
    <span class="token builtin class-name">cd</span> /usr/local/src/package/memcache-8.0 <span class="token punctuation">\\</span>
    /web/software/php-7.4.24/bin/phpize <span class="token punctuation">\\</span>
    ./configure --with-php-config<span class="token operator">=</span>/web/software/php-7.4.24/bin/php-config <span class="token punctuation">\\</span>
    <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
<span class="token comment"># mongodb</span>
    <span class="token builtin class-name">cd</span> /usr/local/src/package/mongodb-1.10.0 <span class="token punctuation">\\</span>
    /web/software/php-7.4.24/bin/phpize <span class="token punctuation">\\</span>
    ./configure --with-php-config<span class="token operator">=</span>/web/software/php-7.4.24/bin/php-config <span class="token punctuation">\\</span>
    <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
<span class="token comment"># igbinary</span>
    <span class="token builtin class-name">cd</span> /usr/local/src/package/igbinary-3.2.6 <span class="token punctuation">\\</span>
    /web/software/php-7.4.24/bin/phpize <span class="token punctuation">\\</span>
    ./configure --with-php-config<span class="token operator">=</span>/web/software/php-7.4.24/bin/php-config <span class="token punctuation">\\</span>
    <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
<span class="token comment"># redis</span>
    <span class="token builtin class-name">cd</span> /usr/local/src/package/redis-4.3.0 <span class="token punctuation">\\</span>
    /web/software/php-7.4.24/bin/phpize <span class="token punctuation">\\</span>
    ./configure --with-php-config<span class="token operator">=</span>/web/software/php-7.4.24/bin/php-config <span class="token punctuation">\\</span>
    <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
<span class="token comment"># imagick</span>
    <span class="token builtin class-name">cd</span> /usr/local/src/package/imagick-3.5.1 <span class="token punctuation">\\</span>
    /web/software/php-7.4.24/bin/phpize <span class="token punctuation">\\</span>
    ./configure --with-php-config<span class="token operator">=</span>/web/software/php-7.4.24/bin/php-config <span class="token punctuation">\\</span>
    <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
<span class="token comment"># qqwry</span>
	<span class="token builtin class-name">cd</span> /usr/local/src/package <span class="token punctuation">\\</span>
    <span class="token builtin class-name">cd</span> /usr/local/src/package/qqwry-master/php/qqwry/ <span class="token punctuation">\\</span>
    /web/software/php-7.4.24/bin/phpize <span class="token punctuation">\\</span>
    ./configure --with-php-config<span class="token operator">=</span>/web/software/php-7.4.24/bin/php-config <span class="token punctuation">\\</span>
    <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
<span class="token comment"># xhprof</span>
    <span class="token builtin class-name">cd</span> /usr/local/src/package/xhprof-2.3.4/extension/ <span class="token punctuation">\\</span>
    /web/software/php-7.4.24/bin/phpize <span class="token punctuation">\\</span>
    ./configure --with-php-config<span class="token operator">=</span>/web/software/php-7.4.24/bin/php-config <span class="token punctuation">\\</span>
    <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
<span class="token comment"># php-ext-trie-filter</span>
    <span class="token builtin class-name">cd</span> /usr/local/src/package/php-ext-trie-filter-php7 <span class="token punctuation">\\</span>
    /web/software/php-7.4.24/bin/phpize <span class="token punctuation">\\</span>
    ./configure --with-php-config<span class="token operator">=</span>/web/software/php-7.4.24/bin/php-config <span class="token punctuation">\\</span>
    <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
<span class="token comment"># scws</span>
    <span class="token builtin class-name">cd</span> /usr/local/src/package/scws-1.2.3/ <span class="token punctuation">\\</span>
    ./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/web/software/scws-1.2.3/ <span class="token punctuation">\\</span>
    <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
    <span class="token function">cp</span> <span class="token parameter variable">-r</span> /usr/local/src/package/dict* /web/software/scws-1.2.3/etc/ <span class="token punctuation">\\</span>
<span class="token comment"># scws-phpext</span>
    <span class="token builtin class-name">cd</span> /usr/local/src/package/scws-1.2.3/phpext <span class="token punctuation">\\</span>
    /web/software/php-7.4.24/bin/phpize <span class="token punctuation">\\</span>
    ./configure --with-scws<span class="token operator">=</span>/web/software/scws-1.2.3 --with-php-config<span class="token operator">=</span>/web/software/php-7.4.24/bin/php-config <span class="token punctuation">\\</span>
    <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
<span class="token comment"># mcrypt</span>
    <span class="token builtin class-name">cd</span> /usr/local/src/package/mcrypt-1.0.4 <span class="token punctuation">\\</span>
    /web/software/php-7.4.24/bin/phpize <span class="token punctuation">\\</span>
    aclocal <span class="token punctuation">\\</span>
    ./configure --with-php-config<span class="token operator">=</span>/web/software/php-7.4.24/bin/php-config <span class="token punctuation">\\</span>
    <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
<span class="token comment"># gd</span>
    <span class="token builtin class-name">cd</span> /usr/local/src/package/php-7.4.24/ext/gd <span class="token punctuation">\\</span>
    /web/software/php-7.4.24/bin/phpize <span class="token punctuation">\\</span>
    ./configure -with-php-config<span class="token operator">=</span>/web/software/php-7.4.24/bin/php-config --enable-gd --with-jpeg --with-freetype <span class="token punctuation">\\</span>
    <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token punctuation">\\</span>

<span class="token function">cp</span> /usr/local/src/docker/php/php-fpm.conf /web/software/php-7.4.24/etc/php-fpm.conf

<span class="token function">cp</span> /usr/local/src/docker/php/php-fpm /etc/init.d/php-fpm

<span class="token function">chmod</span> <span class="token number">755</span> /etc/init.d/php-fpm

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[i];function t(l,o){return s(),a("div",null,c)}var d=n(e,[["render",t],["__file","debian10\u7F16\u8BD1\u5B89\u88C5php7.4.html.vue"]]);export{d as default};
