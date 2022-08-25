import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,b as p}from"./app.6fb11f83.js";const e={},i=p(`<h1 id="dockerfile\u7F16\u5199" tabindex="-1"><a class="header-anchor" href="#dockerfile\u7F16\u5199" aria-hidden="true">#</a> dockerfile\u7F16\u5199</h1><h3 id="debian10\u57FA\u7840\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#debian10\u57FA\u7840\u955C\u50CF" aria-hidden="true">#</a> debian10\u57FA\u7840\u955C\u50CF</h3><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> debian:buster-slim</span>

<span class="token instruction"><span class="token keyword">LABEL</span> maintainer=<span class="token string">&quot;debian base image&quot;</span></span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /usr/local/src/docker/</span>

<span class="token instruction"><span class="token keyword">COPY</span> sources.list /etc/apt/sources.list</span>

<span class="token instruction"><span class="token keyword">RUN</span> apt-get update &amp;&amp; <span class="token operator">\\</span>
	apt-get install --no-install-recommends -y gcc g++ make wget vim pkg-config autoconf unzip zlib1g-dev libxml2-dev libssl-dev libbz2-dev <span class="token operator">\\</span>
	libcurl4-openssl-dev libonig-dev libzip-dev cron &amp;&amp; <span class="token operator">\\</span>
	groupadd www &amp;&amp; useradd -g www -d /home/www -s /sbin/nologin www &amp;&amp; groupadd jobui &amp;&amp; <span class="token operator">\\</span>
	useradd -g jobui -d /home/jobui -s /sbin/nologin jobui &amp;&amp; <span class="token operator">\\</span>
	mkdir -p /web/php/local &amp;&amp; mkdir -p /web/nginx-data &amp;&amp; mkdir /web/jobui_file &amp;&amp; <span class="token operator">\\</span>
    cd /web/nginx-data &amp;&amp; mkdir {proxy_cache_dir,proxy_cache2_dir,proxy_temp_dir} &amp;&amp; <span class="token operator">\\</span>
    mkdir -p /web/php/tmp/mysql/ &amp;&amp; cd /web/php/tmp/mysql &amp;&amp; touch 100.txt 200.txt 400.txt &amp;&amp; <span class="token operator">\\</span>
    sed -i <span class="token string">&#39;s/# alias ll/alias ll/g&#39;</span> /root/.bashrc</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u751F\u6210\u955C\u50CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> debian_base:1.1 <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="php7-4\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#php7-4\u955C\u50CF" aria-hidden="true">#</a> php7.4\u955C\u50CF</h3><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> debian_base:1.1</span>

<span class="token instruction"><span class="token keyword">LABEL</span> maintainer=<span class="token string">&quot;PHP-7.4.24 base image &lt;3088037209@qq.com&gt;&quot;</span></span>

<span class="token instruction"><span class="token keyword">RUN</span> apt-get update &amp;&amp; <span class="token operator">\\</span>
	apt-get install --no-install-recommends -y libsqlite3-dev libmemcached-dev libmagickwand-dev libmagickcore-dev <span class="token operator">\\</span>
	libdatrie-dev libmcrypt-dev procps nfs-common &amp;&amp; rm -rf /var/lib/apt/lists/*</span>

<span class="token instruction"><span class="token keyword">ADD</span> package.tar.gz /usr/local/src/docker/php/</span>

<span class="token instruction"><span class="token keyword">ADD</span> php7/php-7.4.24.tar.gz /usr/local/src/docker/php/</span>

<span class="token instruction"><span class="token keyword">RUN</span> cd /usr/local/src/docker/php/php-7.4.24/ &amp;&amp; <span class="token operator">\\</span>
	./configure <span class="token operator">\\</span>
    --prefix=/web/software/php-7.4.24 <span class="token operator">\\</span>
    --with-config-file-path=/web/software/php-7.4.24/lib <span class="token operator">\\</span>
    --with-mysqli=mysqlnd <span class="token operator">\\</span>
    --with-pdo-mysql=mysqlnd <span class="token operator">\\</span>
    --with-zlib <span class="token operator">\\</span>
    --disable-ipv6 <span class="token operator">\\</span>
    --enable-sockets <span class="token operator">\\</span>
    --disable-debug <span class="token operator">\\</span>
    --enable-xml <span class="token operator">\\</span>
    --disable-rpath <span class="token operator">\\</span>
    --enable-bcmath <span class="token operator">\\</span>
    --enable-shmop <span class="token operator">\\</span>
    --enable-sysvsem <span class="token operator">\\</span>
    --enable-inline-optimization <span class="token operator">\\</span>
    --enable-sysvmsg <span class="token operator">\\</span>
    --enable-sysvshm <span class="token operator">\\</span>
    --enable-mbregex <span class="token operator">\\</span>
    --enable-mbstring <span class="token operator">\\</span>
    --with-bz2 <span class="token operator">\\</span>
    --with-libxml <span class="token operator">\\</span>
    --with-curl <span class="token operator">\\</span>
    --with-openssl <span class="token operator">\\</span>
    --with-mhash <span class="token operator">\\</span>
    --with-xmlrpc <span class="token operator">\\</span>
    --with-zip <span class="token operator">\\</span>
    --enable-soap <span class="token operator">\\</span>
    --enable-maintainer-zts \\ </span>
    --without-pear \\
    --enable-fpm &amp;&amp; \\
    make &amp;&amp; make install \\
<span class="token comment"># apcu</span>
    &amp;&amp; cd /usr/local/src/docker/php/package/apcu-5.1.19 \\
    &amp;&amp; /web/software/php-7.4.24/bin/phpize \\
    &amp;&amp; ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \\
    &amp;&amp; make &amp;&amp; make install \\
<span class="token comment"># blitz</span>
    &amp;&amp; cd /usr/local/src/docker/php/package/blitz-0.10.4-PHP7/ \\
    &amp;&amp; /web/software/php-7.4.24/bin/phpize \\
    &amp;&amp; ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \\
    &amp;&amp; make &amp;&amp; make install \\
<span class="token comment"># memcached</span>
    &amp;&amp; cd /usr/local/src/docker/php/package/memcached-3.1.5 \\
    &amp;&amp; /web/software/php-7.4.24/bin/phpize \\
    &amp;&amp; ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \\
    &amp;&amp; make &amp;&amp; make install \\
<span class="token comment"># memcache</span>
    &amp;&amp; cd /usr/local/src/docker/php/package/memcache-8.0 \\
    &amp;&amp; /web/software/php-7.4.24/bin/phpize \\
    &amp;&amp; ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \\
    &amp;&amp; make &amp;&amp; make install \\
<span class="token comment"># mongodb</span>
    &amp;&amp; cd /usr/local/src/docker/php/package/mongodb-1.10.0 \\
    &amp;&amp; /web/software/php-7.4.24/bin/phpize \\
    &amp;&amp; ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \\
    &amp;&amp; make &amp;&amp; make install \\
<span class="token comment"># igbinary</span>
    &amp;&amp; cd /usr/local/src/docker/php/package/igbinary-3.2.6 \\
    &amp;&amp; /web/software/php-7.4.24/bin/phpize \\
    &amp;&amp; ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \\
    &amp;&amp; make &amp;&amp; make install \\
<span class="token comment"># redis</span>
    &amp;&amp; cd /usr/local/src/docker/php/package/redis-4.3.0 \\
    &amp;&amp; /web/software/php-7.4.24/bin/phpize \\
    &amp;&amp; ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \\
    &amp;&amp; make &amp;&amp; make install \\
<span class="token comment"># imagick</span>
    &amp;&amp; cd /usr/local/src/docker/php/package/imagick-3.5.1 \\
    &amp;&amp; /web/software/php-7.4.24/bin/phpize \\
    &amp;&amp; ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \\
    &amp;&amp; make &amp;&amp; make install \\
<span class="token comment"># qqwry</span>
	&amp;&amp; cd /usr/local/src/docker/php/package \\
    &amp;&amp; cd /usr/local/src/docker/php/package/qqwry-master/php/qqwry/ \\
    &amp;&amp; /web/software/php-7.4.24/bin/phpize \\
    &amp;&amp; ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \\
    &amp;&amp; make &amp;&amp; make install \\
<span class="token comment"># xhprof</span>
    &amp;&amp; cd /usr/local/src/docker/php/package/xhprof-2.3.4/extension/ \\
    &amp;&amp; /web/software/php-7.4.24/bin/phpize \\
    &amp;&amp; ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \\
    &amp;&amp; make &amp;&amp; make install \\
<span class="token comment"># php-ext-trie-filter</span>
    &amp;&amp; cd /usr/local/src/docker/php/package/php-ext-trie-filter-php7 \\
    &amp;&amp; /web/software/php-7.4.24/bin/phpize \\
    &amp;&amp; ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \\
    &amp;&amp; make &amp;&amp; make install \\
<span class="token comment"># scws</span>
    &amp;&amp; cd /usr/local/src/docker/php/package/scws-1.2.3/ \\
    &amp;&amp; ./configure --prefix=/web/software/scws-1.2.3/ \\
    &amp;&amp; make &amp;&amp; make install \\
    &amp;&amp; cp -r /usr/local/src/docker/php/package/dict* /web/software/scws-1.2.3/etc/ \\
<span class="token comment"># scws-phpext</span>
    &amp;&amp; cd /usr/local/src/docker/php/package/scws-1.2.3/phpext \\
    &amp;&amp; /web/software/php-7.4.24/bin/phpize \\
    &amp;&amp; ./configure --with-scws=/web/software/scws-1.2.3 --with-php-config=/web/software/php-7.4.24/bin/php-config \\
    &amp;&amp; make &amp;&amp; make install \\
<span class="token comment"># mcrypt</span>
    &amp;&amp; cd /usr/local/src/docker/php/package/mcrypt-1.0.4 \\
    &amp;&amp; /web/software/php-7.4.24/bin/phpize \\
    &amp;&amp; aclocal \\
    &amp;&amp; ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \\
    &amp;&amp; make &amp;&amp; make install \\
<span class="token comment"># xdebug</span>
    &amp;&amp; cd /usr/local/src/docker/php/package/xdebug-3.1.3 \\
    &amp;&amp; /web/software/php-7.4.24/bin/phpize \\
    &amp;&amp; ./configure --with-php-config=/web/software/php-7.4.24/bin/php-config \\
    &amp;&amp; make &amp;&amp; make install \\
<span class="token comment"># gd</span>
    &amp;&amp; cd /usr/local/src/docker/php/php-7.4.24/ext/gd \\
    &amp;&amp; /web/software/php-7.4.24/bin/phpize \\
    &amp;&amp; ./configure -with-php-config=/web/software/php-7.4.24/bin/php-config --enable-gd --with-jpeg --with-freetype \\
    &amp;&amp; make &amp;&amp; make install \\
    &amp;&amp; rm -rf /usr/local/src/docker/php/*

<span class="token instruction"><span class="token keyword">COPY</span> conf/php-fpm.conf /web/software/php-7.4.24/etc/php-fpm.conf</span>

<span class="token instruction"><span class="token keyword">COPY</span> conf/php.ini /web/software/php-7.4.24/lib/php.ini</span>

<span class="token instruction"><span class="token keyword">COPY</span> conf/php-fpm /etc/init.d/php-fpm</span>

<span class="token instruction"><span class="token keyword">RUN</span> chmod 755 /etc/init.d/php-fpm &amp;&amp; ln -s /web/software/php-7.4.24/bin/* /usr/bin/</span>

<span class="token comment"># \u590D\u5236\u542F\u52A8\u811A\u672C</span>
<span class="token instruction"><span class="token keyword">COPY</span> php7/start.sh /root/start.sh</span>
<span class="token instruction"><span class="token keyword">RUN</span> chmod +x /root/start.sh</span>
<span class="token comment"># \u8BBE\u7F6E\u542F\u52A8\u76EE\u5F55\u4EE5\u53CA\u542F\u52A8\u811A\u672C</span>
<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> cd /root; ./php7/start.sh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-f</span> php7/Dockerfile <span class="token parameter variable">-t</span> php7.4:1.1 <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>php-fpm\u540E\u53F0\u542F\u52A8\u4F1A\u76F4\u63A5\u9000\u51FA\u5BB9\u5668\uFF0C\u4FEE\u6539php-fpm.conf \u91CC daemonize = yes \u6539\u4E3A no,</p><p>\u4E5F\u53EF\u4EE5 CMD [&quot;/web/software/php-7.4.24/sbin/php-fpm&quot;, &quot;-R&quot;, &quot;--nodaemonize&quot;]</p></blockquote><h3 id="php-8-0-16\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#php-8-0-16\u955C\u50CF" aria-hidden="true">#</a> php-8.0.16\u955C\u50CF</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>FROM debian_base:1.1

LABEL <span class="token assign-left variable">maintainer</span><span class="token operator">=</span><span class="token string">&quot;php-8.0.16 base image &lt;3088037209@qq.com&gt;&quot;</span>

RUN <span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
	<span class="token function">apt-get</span> <span class="token function">install</span> --no-install-recommends <span class="token parameter variable">-y</span> libsqlite3-dev libmemcached-dev libmagickwand-dev libmagickcore-dev <span class="token punctuation">\\</span>
	libdatrie-dev libmcrypt-dev procps nfs-common <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/apt/lists/*

ADD package.tar.gz /usr/local/src/docker/php/

ADD php7/php-7.4.24.tar.gz /usr/local/src/docker/php/

RUN <span class="token builtin class-name">cd</span> /usr/local/src/docker/php/php-7.4.24/ <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
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
    <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
<span class="token comment"># apcu</span>
    <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> /usr/local/src/docker/php/package/apcu-5.1.19 <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> /web/software/php-7.4.24/bin/phpize <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> ./configure --with-php-config<span class="token operator">=</span>/web/software/php-7.4.24/bin/php-config <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
<span class="token comment"># blitz</span>
    <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> /usr/local/src/docker/php/package/blitz-0.10.4-PHP7/ <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> /web/software/php-7.4.24/bin/phpize <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> ./configure --with-php-config<span class="token operator">=</span>/web/software/php-7.4.24/bin/php-config <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
<span class="token comment"># memcached</span>
    <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> /usr/local/src/docker/php/package/memcached-3.1.5 <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> /web/software/php-7.4.24/bin/phpize <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> ./configure --with-php-config<span class="token operator">=</span>/web/software/php-7.4.24/bin/php-config <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
<span class="token comment"># memcache</span>
    <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> /usr/local/src/docker/php/package/memcache-8.0 <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> /web/software/php-7.4.24/bin/phpize <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> ./configure --with-php-config<span class="token operator">=</span>/web/software/php-7.4.24/bin/php-config <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
<span class="token comment"># mongodb</span>
    <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> /usr/local/src/docker/php/package/mongodb-1.10.0 <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> /web/software/php-7.4.24/bin/phpize <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> ./configure --with-php-config<span class="token operator">=</span>/web/software/php-7.4.24/bin/php-config <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
<span class="token comment"># igbinary</span>
    <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> /usr/local/src/docker/php/package/igbinary-3.2.6 <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> /web/software/php-7.4.24/bin/phpize <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> ./configure --with-php-config<span class="token operator">=</span>/web/software/php-7.4.24/bin/php-config <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
<span class="token comment"># redis</span>
    <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> /usr/local/src/docker/php/package/redis-4.3.0 <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> /web/software/php-7.4.24/bin/phpize <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> ./configure --with-php-config<span class="token operator">=</span>/web/software/php-7.4.24/bin/php-config <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
<span class="token comment"># imagick</span>
    <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> /usr/local/src/docker/php/package/imagick-3.5.1 <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> /web/software/php-7.4.24/bin/phpize <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> ./configure --with-php-config<span class="token operator">=</span>/web/software/php-7.4.24/bin/php-config <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
<span class="token comment"># qqwry</span>
	<span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> /usr/local/src/docker/php/package <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> /usr/local/src/docker/php/package/qqwry-master/php/qqwry/ <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> /web/software/php-7.4.24/bin/phpize <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> ./configure --with-php-config<span class="token operator">=</span>/web/software/php-7.4.24/bin/php-config <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
<span class="token comment"># xhprof</span>
    <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> /usr/local/src/docker/php/package/xhprof-2.3.4/extension/ <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> /web/software/php-7.4.24/bin/phpize <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> ./configure --with-php-config<span class="token operator">=</span>/web/software/php-7.4.24/bin/php-config <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
<span class="token comment"># php-ext-trie-filter</span>
    <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> /usr/local/src/docker/php/package/php-ext-trie-filter-php7 <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> /web/software/php-7.4.24/bin/phpize <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> ./configure --with-php-config<span class="token operator">=</span>/web/software/php-7.4.24/bin/php-config <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
<span class="token comment"># scws</span>
    <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> /usr/local/src/docker/php/package/scws-1.2.3/ <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> ./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/web/software/scws-1.2.3/ <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> <span class="token function">cp</span> <span class="token parameter variable">-r</span> /usr/local/src/docker/php/package/dict* /web/software/scws-1.2.3/etc/ <span class="token punctuation">\\</span>
<span class="token comment"># scws-phpext</span>
    <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> /usr/local/src/docker/php/package/scws-1.2.3/phpext <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> /web/software/php-7.4.24/bin/phpize <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> ./configure --with-scws<span class="token operator">=</span>/web/software/scws-1.2.3 --with-php-config<span class="token operator">=</span>/web/software/php-7.4.24/bin/php-config <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
<span class="token comment"># mcrypt</span>
    <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> /usr/local/src/docker/php/package/mcrypt-1.0.4 <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> /web/software/php-7.4.24/bin/phpize <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> aclocal <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> ./configure --with-php-config<span class="token operator">=</span>/web/software/php-7.4.24/bin/php-config <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
<span class="token comment"># xdebug</span>
    <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> /usr/local/src/docker/php/package/xdebug-3.1.3 <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> /web/software/php-7.4.24/bin/phpize <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> ./configure --with-php-config<span class="token operator">=</span>/web/software/php-7.4.24/bin/php-config <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
<span class="token comment"># gd</span>
    <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> /usr/local/src/docker/php/php-7.4.24/ext/gd <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> /web/software/php-7.4.24/bin/phpize <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> ./configure -with-php-config<span class="token operator">=</span>/web/software/php-7.4.24/bin/php-config --enable-gd --with-jpeg --with-freetype <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/local/src/docker/php/*

COPY conf/php-fpm.conf /web/software/php-7.4.24/etc/php-fpm.conf

COPY conf/php.ini /web/software/php-7.4.24/lib/php.ini

COPY conf/php-fpm /etc/init.d/php-fpm

RUN <span class="token function">chmod</span> <span class="token number">755</span> /etc/init.d/php-fpm <span class="token operator">&amp;&amp;</span> <span class="token function">ln</span> <span class="token parameter variable">-s</span> /web/software/php-7.4.24/bin/* /usr/bin/

<span class="token comment"># \u590D\u5236\u542F\u52A8\u811A\u672C</span>
COPY start.sh /root/start.sh
RUN <span class="token function">chmod</span> +x /root/start.sh
<span class="token comment"># \u8BBE\u7F6E\u542F\u52A8\u76EE\u5F55\u4EE5\u53CA\u542F\u52A8\u811A\u672C</span>
ENTRYPOINT <span class="token builtin class-name">cd</span> /root<span class="token punctuation">;</span> ./start.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> php8.0.16 <span class="token parameter variable">-f</span> php8/Dockerfile <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="openresty\u7248\u672Cnginx\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#openresty\u7248\u672Cnginx\u955C\u50CF" aria-hidden="true">#</a> openresty\u7248\u672Cnginx\u955C\u50CF</h3><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> debian_base:1.1</span>

<span class="token instruction"><span class="token keyword">LABEL</span> maintainer=<span class="token string">&quot;openresty-1.15.8.3 base image &lt;3088037209@qq.com&gt;&quot;</span></span>

<span class="token instruction"><span class="token keyword">ADD</span> package.tar.gz /usr/local/src/docker/nginx/</span>

<span class="token instruction"><span class="token keyword">RUN</span> cd /usr/local/src/docker/nginx/package/openresty-1.15.8.3 &amp;&amp; <span class="token operator">\\</span>
    ./configure <span class="token operator">\\</span>
    --prefix=/web/software/openresty <span class="token operator">\\</span>
    --with-luajit <span class="token operator">\\</span>
    --user=www --group=www <span class="token operator">\\</span>
    --with-pcre=../pcre-8.44 <span class="token operator">\\</span>
    --with-pcre-jit <span class="token operator">\\</span>
    --with-zlib=../zlib-1.2.11 <span class="token operator">\\</span>
    --with-openssl=../openssl-OpenSSL_1_1_1l <span class="token operator">\\</span>
    --with-http_stub_status_module <span class="token operator">\\</span>
    --with-http_ssl_module <span class="token operator">\\</span>
    --add-module=../ngx_cache_purge-master &amp;&amp; <span class="token operator">\\</span>
    make &amp;&amp; make install &amp;&amp; <span class="token operator">\\</span>
    ln -s /web/software/openresty/nginx /web/software/nginx &amp;&amp; <span class="token operator">\\</span>
    ln -s /web/software/nginx/sbin/nginx /usr/bin/nginx &amp;&amp; <span class="token operator">\\</span>
    rm -rf /usr/local/src/docker/nginx/*</span>

<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;nginx&quot;</span>, <span class="token string">&quot;-g&quot;</span>, <span class="token string">&quot;daemon off;&quot;</span>]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u751F\u6210\u955C\u50CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> nginx:1.1 <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD0\u884C\u955C\u50CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> nginx_test <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token parameter variable">--rm</span> <span class="token parameter variable">-v</span> /home/zax/code/workspace/vagrant/nginx:/web/software/nginx/conf nginx:1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="docker-compose-yml" tabindex="-1"><a class="header-anchor" href="#docker-compose-yml" aria-hidden="true">#</a> docker-compose.yml</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">fpm</span><span class="token punctuation">:</span>
   <span class="token key atrule">image</span><span class="token punctuation">:</span> php7<span class="token punctuation">:</span><span class="token number">1.0</span>
   <span class="token key atrule">container_name</span><span class="token punctuation">:</span> fpm
   <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> .<span class="token punctuation">:</span>/web/php/projectHTML
      <span class="token punctuation">-</span> .<span class="token punctuation">:</span>/web/php/projectPHP
      <span class="token punctuation">-</span> ./docker/php<span class="token punctuation">:</span>/web/php
      <span class="token punctuation">-</span> ./docker/php/php<span class="token punctuation">-</span>fpm.conf<span class="token punctuation">:</span>/web/software/php<span class="token punctuation">-</span>7.4.24/etc/php<span class="token punctuation">-</span>fpm.conf
      <span class="token punctuation">-</span> ./docker/php/php.ini<span class="token punctuation">:</span>/web/software/php<span class="token punctuation">-</span>7.4.24/lib/php.ini
   <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">web</span><span class="token punctuation">:</span>
       <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 192.168.10.2

  <span class="token key atrule">nginx</span><span class="token punctuation">:</span>
   <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span><span class="token number">1.0</span>
   <span class="token key atrule">container_name</span><span class="token punctuation">:</span> nginx
   <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token datetime number">80:80</span>
      <span class="token punctuation">-</span> 443<span class="token punctuation">:</span><span class="token number">443</span>
   <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> .<span class="token punctuation">:</span>/web/php/projectHTML
      <span class="token punctuation">-</span> .<span class="token punctuation">:</span>/web/php/projectPHP
      <span class="token punctuation">-</span> ./docker/php<span class="token punctuation">:</span>/web/php
      <span class="token punctuation">-</span> ./jobuiV4/vagrant/nginx<span class="token punctuation">:</span>/web/software/nginx/conf
   <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">web</span><span class="token punctuation">:</span>
       <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 192.168.10.3

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">web</span><span class="token punctuation">:</span>
     <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge
     <span class="token key atrule">ipam</span><span class="token punctuation">:</span>
       <span class="token key atrule">config</span><span class="token punctuation">:</span> 
         <span class="token punctuation">-</span> <span class="token key atrule">subnet</span><span class="token punctuation">:</span> 192.168.10.0/24
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6302\u8F7D\u8FDC\u7A0B\u6587\u4EF6\u5939</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> nfs-common <span class="token parameter variable">-y</span>
<span class="token function">sudo</span> <span class="token function">mount</span> <span class="token parameter variable">-t</span> nfs <span class="token number">192.168</span>.1.13:/web/jobui_file jobui_file
<span class="token function">sudo</span> <span class="token function">mount</span> <span class="token parameter variable">-t</span> nfs <span class="token number">192.168</span>.1.13:/web/php/projectPHP/jobuiDic jobuiDic

<span class="token function">mount</span> <span class="token parameter variable">-vvvv</span> <span class="token parameter variable">-t</span> nfs <span class="token parameter variable">-o</span> <span class="token assign-left variable">vers</span><span class="token operator">=</span><span class="token number">3</span> <span class="token number">192.168</span>.1.13:/web/jobui_file jobui_file

<span class="token function">mount</span> <span class="token punctuation">[</span>-o <span class="token operator">&lt;</span>option<span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>-u:<span class="token operator">&lt;</span>username<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>-p:<span class="token punctuation">{</span><span class="token operator">&lt;</span>password<span class="token operator">&gt;</span> <span class="token operator">|</span> *<span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token operator">&lt;</span>computername<span class="token operator">&gt;</span><span class="token punctuation">\\</span><span class="token operator">&lt;</span>sharename<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token operator">&lt;</span>computername<span class="token operator">&gt;</span>:/<span class="token operator">&lt;</span>sharename<span class="token operator">&gt;</span><span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token operator">&lt;</span>devicename<span class="token operator">&gt;</span> <span class="token operator">|</span> *<span class="token punctuation">}</span>
<span class="token function">mount</span> <span class="token parameter variable">-t</span> nfs <span class="token punctuation">\\</span><span class="token number">192.168</span>.1.13:/web/jobui_file D:<span class="token punctuation">\\</span>workspace<span class="token punctuation">\\</span>jobui_file

<span class="token comment">#mac\u6302\u8F7D\u53C2\u6570</span>
<span class="token function">sudo</span> <span class="token function">mount</span> <span class="token parameter variable">-t</span> nfs <span class="token parameter variable">-o</span> resvport,rw  <span class="token number">192.168</span>.1.13:/web/php/projectPHP/jobuiDic jobuiDic
<span class="token function">sudo</span> <span class="token function">mount</span> <span class="token parameter variable">-t</span> nfs <span class="token parameter variable">-o</span> resvport,rw <span class="token number">192.168</span>.1.13:/web/jobui_file /jobui_file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),l=[i];function c(t,o){return s(),a("div",null,l)}var d=n(e,[["render",c],["__file","web_Dockerfile.html.vue"]]);export{d as default};
