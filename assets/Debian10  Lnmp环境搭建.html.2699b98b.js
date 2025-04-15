import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.c079ba62.js";const i={},l=e(`<h1 id="lnmp\u73AF\u5883\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#lnmp\u73AF\u5883\u642D\u5EFA" aria-hidden="true">#</a> Lnmp\u73AF\u5883\u642D\u5EFA</h1><h3 id="\u5B89\u88C5\u5F00\u53D1\u73AF\u5883\u8F6F\u4EF6\u5305" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u5F00\u53D1\u73AF\u5883\u8F6F\u4EF6\u5305" aria-hidden="true">#</a> \u5B89\u88C5\u5F00\u53D1\u73AF\u5883\u8F6F\u4EF6\u5305</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo apt-get install -y build-essential libexpat1-dev libgeoip-dev libpng-dev libpcre3-dev libssl-dev libxml2-dev rcs zlib1g-dev libmcrypt-dev libjpeg-dev libpng-dev libwebp-dev pkg-config libbz2-dev libcurl4-openssl-dev autoconf libmemcached-dev libmemcached11

sudo ln -s /usr/include/x86_64-linux-gnu/curl /usr/local/include/curl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E0B\u8F7D\u8F6F\u4EF6\u6E90\u7801\u5305" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u8F6F\u4EF6\u6E90\u7801\u5305" aria-hidden="true">#</a> \u4E0B\u8F7D\u8F6F\u4EF6\u6E90\u7801\u5305</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /usr/local/src
sudo wget https://cdn.mysql.com/archives/mysql-5.6/mysql-5.6.20.tar.gz
sudo wget https://openresty.org/download/openresty-1.9.7.4.tar.gz
sudo wget https://www.php.net/distributions/php-5.6.20.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u521B\u5EFA\u7528\u6237nginx\u3001mysql\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u7528\u6237nginx\u3001mysql\u7528\u6237" aria-hidden="true">#</a> \u521B\u5EFA\u7528\u6237nginx\u3001mysql\u7528\u6237</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo groupadd mysql
sudo useradd -g mysql -d /home/mysql -s /sbin/nologin mysql

sudo groupadd nginx
sudo useradd -g nginx -d /home/nginx -s /sbin/nologin nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5nginx" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5nginx" aria-hidden="true">#</a> \u5B89\u88C5nginx</h3><h5 id="\u4E0B\u8F7D\u5B89\u88C5nginx\u9700\u8981\u7684\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u5B89\u88C5nginx\u9700\u8981\u7684\u6A21\u5757" aria-hidden="true">#</a> \u4E0B\u8F7D\u5B89\u88C5nginx\u9700\u8981\u7684\u6A21\u5757</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /usr/local/src
#zlib\u5E93
sudo wget http://www.zlib.net/zlib-1.2.11.tar.gz
sudo tar -zxvf zlib-1.2.11.tar.gz
cd zlib-1.2.11
sudo ./configure --prefix=/web/software/zlib
sudo make
sudo make install

#PCRE\u5E93
sudo wget https://ftp.pcre.org/pub/pcre/pcre-8.21.tar.gz
sudo tar -zxvf pcre-8.21.tar.gz
cd pcre-8.21
sudo ./config --prefix=/web/software/pcre
sudo make
sudo make install

#openSSL\u5E93
#\u7F16\u8BD1\u5B89\u88C5openssl\u62A5\u9519\uFF1APOD document had syntax errors at /usr/bin/pod2man line 69. make: *** [install_docs]
#\u89E3\u51B3\u65B9\u6CD5\uFF1A
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

#openSSL\u5E93
rm -f /usr/bin/pod2man 
sudo wget https://www.openssl.org/source/old/1.0.1/openssl-1.0.1.tar.gz
sudo tar -zxvf openssl-1.0.1.tar.gz
cd openssl-1.0.1
sudo ./config shared --prefix=/web/software/openssl
sudo make
sudo make install

#libunwind\u5E93
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
#\u4F7Fgoogle-perftools\u751F\u6548:
sudo echo &quot;/usr/local/lib&quot; &gt;&gt; /etc/ld.so.conf.d/usr_local_lib.conf
sudo ldconfig

#ngx_cache_purge-2.3
sudo wget http://labs.frickle.com/files/ngx_cache_purge-2.3.tar.gz
sudo tar -zxvf ngx_cache_purge-2.3.tar.gz

#nginx\u7F16\u8BD1\u53C2\u6570\uFF08\u7EBF\u4E0A\uFF09
--prefix=/web/software/openresty/nginx \\
--with-cc-opt=-O2 \\
--add-module=../ngx_devel_kit-0.3.0 \\
--add-module=../iconv-nginx-module-0.14 \\
--add-module=../echo-nginx-module-0.59 \\
--add-module=../xss-nginx-module-0.05 \\
--add-module=../ngx_coolkit-0.2rc3 \\
--add-module=../set-misc-nginx-module-0.30 \\
--add-module=../form-input-nginx-module-0.12 \\
--add-module=../encrypted-session-nginx-module-0.05 \\
--add-module=../ngx_postgres-1.0rc7 \\
--add-module=../srcache-nginx-module-0.31 \\
--add-module=../ngx_lua-0.10.5 \\
--add-module=../ngx_lua_upstream-0.05 \\
--add-module=../headers-more-nginx-module-0.30 \\
--add-module=../array-var-nginx-module-0.05 \\
--add-module=../memc-nginx-module-0.17 \\
--add-module=../redis-nginx-module-0.3.7 \\
--add-module=../rds-json-nginx-module-0.14 \\
--add-module=../rds-csv-nginx-module-0.07 \\
--with-ld-opt=-Wl,-rpath,/web/software/openresty/luajit/lib \\
--user=www \\
--group=www \\
--with-google_perftools_module \\
--with-pcre=/root/baicai-V6/web/nginx/pcre-8.36 \\
--with-pcre-jit \\
--with-zlib=/root/baicai-V6/web/nginx/zlib-1.2.8 \\
--add-module=/root/baicai-V6/web/nginx/openresty-1.9.15.1/../ngx_cache_purge-2.3 \\
--with-http_stub_status_module \\
--with-http_ssl_module
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5openresty-1-9-7-1-\u5305\u542Bnginx-1-9-7\u548C\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5openresty-1-9-7-1-\u5305\u542Bnginx-1-9-7\u548C\u63D2\u4EF6" aria-hidden="true">#</a> \u5B89\u88C5openresty-1.9.7.1\uFF0C\u5305\u542Bnginx-1.9.7\u548C\u63D2\u4EF6</h3><p>\u9884\u7F16\u8BD1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /usr/local/src/openresty-1.9.7.4
sudo ./configure \\
--prefix=/web/software/openresty \\
--user=www \\
--group=www \\
--with-google_perftools_module \\
--with-pcre=../pcre-8.21 \\
--with-pcre-jit \\
--with-zlib=../zlib-1.2.11 \\
--with-openssl=../openssl-1.0.1 \\
--add-module=../ngx_cache_purge-2.3 \\
--with-http_stub_status_module \\
--with-http_ssl_module \\
--with-stream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7F16\u8BD1\u5B89\u88C5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo make
sudo make install
#\u4E3A\u4E86\u7EDF\u4E00nginx\u4E0E\u5176\u4ED6\u670D\u52A1\u7684\u540C\u6B65\uFF0C\u7ED9nginx\u76EE\u5F55\u505A\u8F6F\u8FDE\u63A5
sudo ln -s  /web/software/openresty/nginx  /web/software/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5php5-6" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5php5-6" aria-hidden="true">#</a> \u5B89\u88C5php5.6</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u5B89\u88C5m</span>
<span class="token comment">#zlib</span>
<span class="token function">sudo</span> ./configure
<span class="token function">sudo</span> <span class="token function">make</span>
<span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">LDFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-L/usr/local/zlib/lib&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CPPFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-I/usr/local/zlib/include&quot;</span>

<span class="token comment">#jpeg6</span>
<span class="token comment">#\u5148\u521B\u5EFA\u76EE\u5F55\uFF0C\u5426\u5219\u4F1A\u62A5\u9519</span>
<span class="token builtin class-name">cd</span> /usr/local/src/php/jpeg-6b
<span class="token function">sudo</span> <span class="token function">mkdir</span> /web/software/jpeg6/
<span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token punctuation">{</span>/web/software/jpeg6/bin,/web/software/jpeg6/lib,/web/software/jpeg6/include<span class="token punctuation">}</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span>  /web/software/jpeg6/man/man1
<span class="token function">sudo</span> ./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/web/software/jpeg6
<span class="token function">sudo</span> <span class="token function">make</span>
<span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span>

<span class="token comment">#libpng2</span>
<span class="token comment">#\u5B89\u88C5libpng\u51FA\u73B0configure: error: ZLib not installed</span>
<span class="token comment">#1.\u8FDB\u5165zlib\u7684\u6E90\u6587\u4EF6\u76EE\u5F55\uFF0C\u6267\u884C\u547D\u4EE4 make clean,\u6E05\u9664zlib\uFF1B</span>
<span class="token comment">#2.\u91CD\u65B0\u914D\u7F6E ./configure,\u540E\u9762\u4E0D\u8981\u63A5--prefix\u53C2\u6570\uFF1B</span>
<span class="token comment">#\u7136\u540E\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">LDFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-L/usr/local/zlib/lib&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CPPFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-I/usr/local/zlib/include&quot;</span>

<span class="token function">sudo</span> ./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/web/software/libpng2
<span class="token function">sudo</span> <span class="token function">make</span>
<span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span>

<span class="token comment">#freetype2</span>
<span class="token function">sudo</span> ./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/web/software/freetype2
<span class="token function">sudo</span> <span class="token function">make</span>
<span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span>

<span class="token comment">#libxml2</span>
<span class="token function">sudo</span> ./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/web/software/libxml2
<span class="token function">sudo</span> <span class="token function">make</span>
<span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span>

<span class="token comment">#curl</span>
<span class="token function">sudo</span> ./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/web/software/curl
<span class="token function">sudo</span> <span class="token function">make</span>
<span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span>


<span class="token comment">#php\u7F16\u8BD1\u53C2\u6570\uFF08\u7EBF\u4E0A\uFF09</span>
<span class="token function">sudo</span> ./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/web/software/php-5.6.40 <span class="token punctuation">\\</span>
--with-config-file-path<span class="token operator">=</span>/web/software/php-5.6.40/lib <span class="token punctuation">\\</span>
--with-mysql<span class="token operator">=</span>mysqlnd <span class="token punctuation">\\</span>
--with-mysqli<span class="token operator">=</span>mysqlnd <span class="token punctuation">\\</span>
--with-pdo-mysql<span class="token operator">=</span>mysqlnd <span class="token punctuation">\\</span>
--with-jpeg-dir<span class="token operator">=</span>/web/software/jpeg6 <span class="token punctuation">\\</span>
--with-png-dir<span class="token operator">=</span>/web/software/libpng2 <span class="token punctuation">\\</span>
--with-freetype-dir<span class="token operator">=</span>/web/software/freetype2 <span class="token punctuation">\\</span>
--with-libxml-dir<span class="token operator">=</span>/web/software/libxml2 <span class="token punctuation">\\</span>
--with-zlib-dir<span class="token operator">=</span>/usr/local/zlib/ <span class="token punctuation">\\</span>
--with-curl<span class="token operator">=</span>/web/software/curl <span class="token punctuation">\\</span>
--with-openssl<span class="token operator">=</span>/usr/local/ssl <span class="token punctuation">\\</span>
--disable-ipv6 <span class="token punctuation">\\</span>
--enable-sockets <span class="token punctuation">\\</span>
--disable-debug <span class="token punctuation">\\</span>
--enable-xml <span class="token punctuation">\\</span>
--disable-rpath <span class="token punctuation">\\</span>
--enable-bcmath <span class="token punctuation">\\</span>
--enable-shmop <span class="token punctuation">\\</span>
--enable-sysvsem <span class="token punctuation">\\</span>
--enable-inline-optimization <span class="token punctuation">\\</span>
--with-curl <span class="token punctuation">\\</span>
--enable-sysvmsg <span class="token punctuation">\\</span>
--enable-sysvshm <span class="token punctuation">\\</span>
--enable-mbregex <span class="token punctuation">\\</span>
--enable-mbstring <span class="token punctuation">\\</span>
--with-bz2<span class="token operator">=</span>/usr <span class="token punctuation">\\</span>
--enable-gd-native-ttf <span class="token punctuation">\\</span>
--with-mhash <span class="token punctuation">\\</span>
--with-xmlrpc <span class="token punctuation">\\</span>
--enable-zip <span class="token punctuation">\\</span>
--enable-soap <span class="token punctuation">\\</span>
--without-pear <span class="token punctuation">\\</span>
--enable-fpm <span class="token punctuation">\\</span>
--with-libdir<span class="token operator">=</span>lib64

<span class="token comment">#php\u7F16\u8BD1\u53C2\u6570\uFF08141\uFF09</span>
<span class="token function">sudo</span> ./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/web/software/php-5.6.40 <span class="token punctuation">\\</span>
--with-config-file-path<span class="token operator">=</span>/web/software/php-5.6.40/lib <span class="token punctuation">\\</span>
--with-mysql<span class="token operator">=</span>mysqlnd <span class="token punctuation">\\</span>
--with-mysqli<span class="token operator">=</span>mysqlnd <span class="token punctuation">\\</span>
--with-pdo-mysql<span class="token operator">=</span>mysqlnd <span class="token punctuation">\\</span>
--with-jpeg-dir<span class="token operator">=</span>/web/software/jpeg6 <span class="token punctuation">\\</span>
--with-png-dir<span class="token operator">=</span>/web/software/libpng2 <span class="token punctuation">\\</span>
--with-freetype-dir<span class="token operator">=</span>/web/software/freetype2 <span class="token punctuation">\\</span>
--with-libxml-dir<span class="token operator">=</span>/web/software/libxml2 <span class="token punctuation">\\</span>
--with-zlib-dir<span class="token operator">=</span>/usr/local/zlib/ <span class="token punctuation">\\</span>
--with-curl<span class="token operator">=</span>/web/software/curl <span class="token punctuation">\\</span>
--with-openssl<span class="token operator">=</span>/usr/local/ssl <span class="token punctuation">\\</span>
--disable-ipv6 <span class="token punctuation">\\</span>
--enable-sockets <span class="token punctuation">\\</span>
--disable-debug <span class="token punctuation">\\</span>
--enable-xml <span class="token punctuation">\\</span>
--disable-rpath <span class="token punctuation">\\</span>
--enable-bcmath <span class="token punctuation">\\</span>
--enable-shmop <span class="token punctuation">\\</span>
--enable-sysvsem <span class="token punctuation">\\</span>
--enable-inline-optimization <span class="token punctuation">\\</span>
--with-curl <span class="token punctuation">\\</span>
--enable-sysvmsg <span class="token punctuation">\\</span>
--enable-sysvshm <span class="token punctuation">\\</span>
--enable-mbregex <span class="token punctuation">\\</span>
--enable-mbstring <span class="token punctuation">\\</span>
--with-bz2<span class="token operator">=</span>/usr <span class="token punctuation">\\</span>
--enable-gd-native-ttf <span class="token punctuation">\\</span>
--with-mhash <span class="token punctuation">\\</span>
--with-xmlrpc <span class="token punctuation">\\</span>
--enable-zip <span class="token punctuation">\\</span>
--enable-soap <span class="token punctuation">\\</span>
--without-pear <span class="token punctuation">\\</span>
--enable-fpm <span class="token punctuation">\\</span>
--enable-pcntl

<span class="token comment">#\u7F16\u8BD1php\u65F6\uFF0C\u9047\u5230\u201CPlease reinstall the libcurl distribution...\u201D</span>
<span class="token comment">#sudo apt-get install libcurl4-gnutls-dev</span>
<span class="token function">sudo</span> <span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/include/x86_64-linux-gnu/curl /usr/local/include/curl

<span class="token comment">#make: *** [Makefile:590\uFF1Aext/openssl/openssl.lo] \u9519\u8BEF 1 (php5.6\u4E0D\u517C\u5BB9openssl1.1.1)</span>
<span class="token comment">#openssl\u964D\u7EA7</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7F16\u8BD1\u5B89\u88C5php7-4" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u5B89\u88C5php7-4" aria-hidden="true">#</a> \u7F16\u8BD1\u5B89\u88C5php7.4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">##/bin/bash</span>

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),p=[l];function c(t,o){return s(),a("div",null,p)}var r=n(i,[["render",c],["__file","Debian10  Lnmp\u73AF\u5883\u642D\u5EFA.html.vue"]]);export{r as default};
