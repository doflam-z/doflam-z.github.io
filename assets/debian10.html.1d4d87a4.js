import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as e,e as a}from"./app.c81d5c88.js";const i={},l=a(`<h1 id="debian10\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#debian10\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> Debian10\u5E38\u7528\u547D\u4EE4</h1><h3 id="\u7CFB\u7EDF\u76F8\u5173\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u7CFB\u7EDF\u76F8\u5173\u547D\u4EE4" aria-hidden="true">#</a> \u7CFB\u7EDF\u76F8\u5173\u547D\u4EE4</h3><p>\u7F16\u8F91\u7F51\u5361\u914D\u7F6E\u65B0\u589E\u914D\u7F6E</p><p>vim /etc/network/interfaces</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># This file describes the network interfaces available on your system</span>
<span class="token comment"># and how to activate them. For more information, see interfaces(5).</span>

<span class="token builtin class-name">source</span> /etc/network/interfaces.d/*

<span class="token comment"># The loopback network interface</span>

auto lo
iface lo inet loopback

<span class="token comment"># The primary network interface</span>
allow-hotplug eno1
iface eno1 inet static
        address <span class="token number">192.168</span>.100.123/24
        gateway <span class="token number">192.168</span>.100.1
        <span class="token comment"># dns-* options are implemented by the resolvconf package, if installed</span>
        dns-nameservers <span class="token number">127.0</span>.0.1

auto eno1:1
iface eno1:1 inet static
        address <span class="token number">192.168</span>.103.125
        netmask <span class="token number">255.255</span>.255.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u542F\u52A8\u65B0\u914D\u7F6E\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ifup</span> eno1:1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u91CD\u542F\u7F51\u7EDC</span>
/etc/init.d/networking restart
<span class="token comment">#\u91CD\u542F\u7F51\u7EDC(\u9632\u6B62\u914D\u7F6E\u51FA\u9519\u65AD\u7F51)</span>
<span class="token function">service</span> networking restart <span class="token operator">&amp;&amp;</span> <span class="token function">ifup</span> enp2s0 
<span class="token function">sudo</span> <span class="token function">ifup</span> enp3s0:0
<span class="token function">sudo</span> <span class="token function">ifdown</span> enp3s0:0
<span class="token comment">#\u91CD\u542Fssh</span>
/etc/init.d/ssh restart

<span class="token comment">#\u5B89\u88C5sudo</span>
<span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">sudo</span> <span class="token parameter variable">-y</span>
<span class="token comment">#\u5C06\u7528\u6237\u6DFB\u52A0\u5230sudo\u7EC4</span>
<span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token function">sudo</span> z

<span class="token comment">#\u65B0\u5EFA\u4E0D\u5141\u8BB8\u767B\u5F55\u7528\u6237</span>
<span class="token function">useradd</span> <span class="token parameter variable">-s</span> /sbin/nologin jobui

<span class="token comment">#\u65B0\u5EFA\u666E\u901A\u7528\u6237\u5E76\u521B\u5EFAhome\u76EE\u5F55\u6307\u5B9Abash</span>
<span class="token function">useradd</span> <span class="token parameter variable">-m</span> <span class="token parameter variable">-s</span> /bin/bash jobui

<span class="token comment">#debian\u672A\u6307\u5B9Ashell\u95EE\u9898</span>
<span class="token comment">#\u4F7F\u7528usermod\u547D\u4EE4\u4FEE\u6539shell\u7C7B\u578B</span>
<span class="token function">usermod</span> <span class="token parameter variable">-s</span> /bin/bash zax

<span class="token comment">#vbox\u865A\u62DF\u673A\u8BBE\u7F6E\u5206\u8FA8\u7387</span>
cvt <span class="token number">1920</span> <span class="token number">1080</span>
xrandr <span class="token parameter variable">--newmode</span> <span class="token string">&quot;1920X1080_60.00&quot;</span> <span class="token number">173.00</span>  <span class="token number">1920</span> <span class="token number">2048</span> <span class="token number">2248</span> <span class="token number">2576</span>  <span class="token number">1080</span> <span class="token number">1083</span> <span class="token number">1088</span> <span class="token number">1120</span> <span class="token parameter variable">-hsync</span> +vsync
xrandr <span class="token parameter variable">--addmode</span> Virtual1 <span class="token string">&quot;1920X1080_60.00&quot;</span>
xrandr <span class="token parameter variable">--output</span> Virtual1 <span class="token parameter variable">--mode</span> <span class="token string">&quot;1920X1080_60.00&quot;</span>

<span class="token comment">#\u5C06\u4EE5\u4E0A\u5185\u5BB9\u6DFB\u52A0\u5230/etc/profile\u6587\u4EF6</span>

<span class="token comment">#\u6DFB\u52A0ll\u5FEB\u6377\u547D\u4EE4</span>
<span class="token function">vi</span> ~/.bashrc

<span class="token comment">#\u8BBE\u7F6Essh\u5F00\u673A\u542F\u52A8</span>
update-rc.d <span class="token function">ssh</span> <span class="token builtin class-name">enable</span>

<span class="token comment">#\u7981\u6B62\u5F00\u673A\u542F\u52A8</span>
update-rc.d <span class="token function">ssh</span> disabled

<span class="token comment">#\u5B89\u88C5im-config</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> im-config

<span class="token comment">#\u8FD0\u884Cim-config\uFF0C\u9009\u62E9fcitx\u8F93\u5165\u6CD5</span>
im-config <span class="token parameter variable">-c</span>

<span class="token comment">#\u89E3\u51B3\u4F9D\u8D56\u95EE\u9898</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-f</span>

<span class="token comment">#\u67E5\u627Edep\u5305</span>
<span class="token function">sudo</span> dpkg <span class="token parameter variable">-l</span> sog*

<span class="token comment">#\u641C\u7D22\u5B89\u88C5\u5305</span>
<span class="token function">sudo</span> <span class="token function">apt-cache</span> search openlda

<span class="token comment">#\u5378\u8F7D</span>
<span class="token function">sudo</span> dpkg <span class="token parameter variable">-P</span> sogopinyin

<span class="token comment">#\u6302\u8F7D\u5931\u8D25\u95EE\u9898\uFF08 bad option; for several filesystems (e.g. nfs, cifs) you might need a /sbin/mount.&lt;type&gt; helper program.\uFF09</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> nfs-common

<span class="token comment"># vim\u4E0D\u80FD\u590D\u5236</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u914D\u7F6Eapt\u8F6F\u4EF6\u6E90,\u66F4\u65B0sources.list</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mv</span> /etc/apt/sources.list /etc/apt/sources.list.bak
<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/apt/sources.list <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
deb http://mirrors.cloud.tencent.com/debian/ buster main non-free contrib
deb http://mirrors.cloud.tencent.com/debian-security buster/updates main
deb http://mirrors.cloud.tencent.com/debian/ buster-updates main non-free contrib
deb http://mirrors.cloud.tencent.com/debian/ buster-backports main non-free contrib

deb-src http://mirrors.cloud.tencent.com/debian-security buster/updates main
deb-src http://mirrors.cloud.tencent.com/debian/ buster main non-free contrib
deb-src http://mirrors.cloud.tencent.com/debian/ buster-updates main non-free contrib
deb-src http://mirrors.cloud.tencent.com/debian/ buster-backports main non-free contrib
EOF</span>

<span class="token function">apt-get</span> update <span class="token parameter variable">-y</span>
<span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">vim</span> <span class="token function">wget</span>

<span class="token builtin class-name">source</span> ~/.bashrce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4FEE\u6539\u65F6\u533A\u4E3A\u4E0A\u6D77" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u65F6\u533A\u4E3A\u4E0A\u6D77" aria-hidden="true">#</a> \u4FEE\u6539\u65F6\u533A\u4E3A\u4E0A\u6D77</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cp</span> /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5zabbix" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5zabbix" aria-hidden="true">#</a> \u5B89\u88C5zabbix</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">wget</span> https://repo.mysql.com//mysql-apt-config_0.8.17-1_all.deb
<span class="token function">sudo</span> dpkg <span class="token parameter variable">-i</span> mysql-apt-config_0.8.17-1_all.deb
<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> libmysqld-devecho libevent-dev libsnmp-dev libopenipmi-dev

./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/web/software/zabbix --enable-server --enable-agent --with-mysql --enable-ipv6 --with-libcurl --with-libxml2 --with-mysql<span class="token operator">=</span>/usr/bin/mysql_config

<span class="token function">sudo</span> ./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/web/software/zabbix --enable-server --enable-agent --with-mysql --enable-ipv6 --with-net-snmp --with-libcurl --with-libxml2 --with-openipmi --with-mysql<span class="token operator">=</span>/usr/bin/mysql_config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B89\u88C5zabbix\u65F6,\u51FA\u73B0\u62A5\u9519Unsupported charset or collation for tables: ,\u5E94\u8BE5\u662Fmsyql\u521B\u5EFAzabbix\u6570\u636E\u5E93\u662F,\u5B57\u7B26\u7F16\u7801\u51FA\u73B0\u4E86\u95EE\u9898,\u53C2\u8003\u4E0B\u5217\u65B9\u6CD5\u4FEE\u590D: 1.\u5220\u9664\u539F\u6709\u7684\u6570\u636E\u5E93. drop database zabbix; 2.\u521B\u5EFA\u65B0\u7684zabbix\u6570\u636E\u5E93,\u547D\u4EE4:create database zabbix character set utf8 collate utf8_bin; 3.\u91CD\u65B0\u6253\u5165zabbix\u7684\u6570\u636E\u5E93\u8868\u5185\u5BB9; mysql -uroot -p123456 zabbix &lt; schema.sql mysql -uroot -p123456 zabbix &lt; images.sql mysql -uroot -p123456 zabbix &lt; data.sql 4.\u7136\u540E\u91CD\u65B0\u8FDB\u5165zabbix GUI\u7684web \u5B89\u88C5\u754C\u9762\u5C31OK\u4E86</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chown</span> <span class="token parameter variable">-R</span> jobui:jobui /web/php/local/zabbix/
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">755</span> /web/php/local/zabbix/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="debian10\u7F8E\u5316" tabindex="-1"><a class="header-anchor" href="#debian10\u7F8E\u5316" aria-hidden="true">#</a> debian10\u7F8E\u5316</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u5B89\u88C5\u8C37\u6B4Cnoto\u5B57\u4F53</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> fonts-noto-cjk
<span class="token comment">#\u5B89\u88C5\u4F9D\u8D56</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> gtk2-engines-murrine
<span class="token comment">#\u4E0B\u8F7DOrchis-theme\u4E3B\u9898</span>
<span class="token function">sudo</span> <span class="token function">wget</span> https://github.com/vinceliuice/Orchis-theme/archive/refs/heads/master.zip
<span class="token comment">#\u4E0B\u8F7D\u56FE\u6807</span>
<span class="token function">sudo</span> <span class="token function">wget</span>  https://github.com/vinceliuice/Tela-icon-theme/archive/refs/heads/master.zip

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5deepin\u7248\u5FAE\u4FE1" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5deepin\u7248\u5FAE\u4FE1" aria-hidden="true">#</a> \u5B89\u88C5deepin\u7248\u5FAE\u4FE1</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token function">mkdir</span> ./deepintemp
<span class="token builtin class-name">cd</span> ./deepintemp
<span class="token function">wget</span> http://packages.deepin.com/deepin/pool/non-free/d/deepin-wine/deepin-wine_2.18-22~rc0_all.deb
<span class="token function">wget</span> http://packages.deepin.com/deepin/pool/non-free/d/deepin-wine/deepin-wine32_2.18-22~rc0_i386.deb
<span class="token function">wget</span> http://packages.deepin.com/deepin/pool/non-free/d/deepin-wine/deepin-wine32-preloader_2.18-22~rc0_i386.deb
<span class="token function">wget</span> http://packages.deepin.com/deepin/pool/non-free/d/deepin-wine-helper/deepin-wine-helper_1.2deepin8_i386.deb
<span class="token function">wget</span> http://packages.deepin.com/deepin/pool/non-free/d/deepin-wine-plugin/deepin-wine-plugin_1.0deepin2_amd64.deb
<span class="token function">wget</span> http://packages.deepin.com/deepin/pool/non-free/d/deepin-wine-plugin-virtual/deepin-wine-plugin-virtual_1.0deepin3_all.deb
<span class="token function">wget</span> http://packages.deepin.com/deepin/pool/non-free/d/deepin-wine-uninstaller/deepin-wine-uninstaller_0.1deepin2_i386.deb
<span class="token function">wget</span> http://packages.deepin.com/deepin/pool/non-free/u/udis86/udis86_1.72-2_i386.deb
<span class="token function">wget</span> http://packages.deepin.com/deepin/pool/non-free/d/deepin-wine/deepin-fonts-wine_2.18-22~rc0_all.deb
<span class="token function">wget</span> http://packages.deepin.com/deepin/pool/non-free/d/deepin-wine/deepin-libwine_2.18-22~rc0_i386.deb
<span class="token function">wget</span> https://packages.deepin.com/deepin/pool/main/libj/libjpeg-turbo/libjpeg62-turbo_1.5.1-2_amd64.deb --no-check-certificate
<span class="token function">wget</span> https://packages.deepin.com/deepin/pool/main/libj/libjpeg-turbo/libjpeg62-turbo_1.5.1-2_i386.deb --no-check-certificate
<span class="token function">wget</span> http://packages.deepin.com/deepin/pool/non-free/d/deepin.com.wechat/deepin.com.wechat_2.6.8.65deepin0_i386.deb

<span class="token builtin class-name">echo</span> <span class="token string">&#39;\u51C6\u5907\u6DFB\u52A032\u4F4D\u652F\u6301&#39;</span>
dpkg --add-architecture i386
<span class="token builtin class-name">echo</span> <span class="token string">&#39;\u6DFB\u52A0\u6210\u529F\uFF0C\u51C6\u5907\u5237\u65B0apt\u7F13\u5B58\u4FE1\u606F...&#39;</span>
<span class="token function">apt</span> update
<span class="token builtin class-name">echo</span> <span class="token string">&#39;\u5373\u5C06\u5F00\u59CB\u5B89\u88C5...&#39;</span>
dpkg <span class="token parameter variable">-i</span> *.deb
<span class="token builtin class-name">echo</span> <span class="token string">&#39;\u5B89\u88C5\u5B8C\u6210\uFF0C\u6B63\u5728\u81EA\u52A8\u5B89\u88C5\u4F9D\u8D56...&#39;</span>
<span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-fy</span>
dpkg <span class="token parameter variable">-i</span> deepin.com.wechat_2.6.8.65deepin0_i386.deb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E2D\u6587\u95EE\u9898\uFF0C\u8FDB\u5165/opt/deepinwine/tools\u6587\u4EF6\u5939</p><p>\u5728run.sh \u548C run_v2.sh \u4E2D\u4FEE\u6539\u4E3A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#WINE_CMD=&quot;deepin-wine&quot;\u6539\u4E3A\u4E0B\u884C</span>
<span class="token assign-left variable">WINE_CMD</span><span class="token operator">=</span><span class="token string">&quot;LC_ALL=zh_CN.UTF-8 deepin-wine&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5navicat" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5navicat" aria-hidden="true">#</a> \u5B89\u88C5navicat</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> https://download3.navicat.com/download/navicat15-premium-en.AppImage --no-check-certificate
<span class="token function">chmod</span> +x navicat15-premium-en.AppImage
./navicat15-premium-en.AppImage
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),c=[l];function t(d,p){return s(),e("div",null,c)}var u=n(i,[["render",t],["__file","debian10.html.vue"]]);export{u as default};
