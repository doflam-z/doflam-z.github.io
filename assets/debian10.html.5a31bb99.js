import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as e,d as a}from"./app.72cd900d.js";const i={},l=a(`<h1 id="debian10" tabindex="-1"><a class="header-anchor" href="#debian10" aria-hidden="true">#</a> debian10</h1><h3 id="\u7CFB\u7EDF\u76F8\u5173\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u7CFB\u7EDF\u76F8\u5173\u547D\u4EE4" aria-hidden="true">#</a> \u7CFB\u7EDF\u76F8\u5173\u547D\u4EE4</h3><p>\u7F16\u8F91\u7F51\u5361\u914D\u7F6E\u65B0\u589E\u914D\u7F6E</p><p>vim /etc/network/interfaces</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># This file describes the network interfaces available on your system</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u914D\u7F6Eapt\u8F6F\u4EF6\u6E90,\u66F4\u65B0sources.list</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mv</span> /etc/apt/sources.list /etc/apt/sources.list.bak
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h3><h3 id="\u5B89\u88C5iptables-persistent\u6765\u4F7F\u7528iptables\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5iptables-persistent\u6765\u4F7F\u7528iptables\u547D\u4EE4" aria-hidden="true">#</a> \u5B89\u88C5iptables-persistent\u6765\u4F7F\u7528iptables\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> iptables-persistent <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u6216\u8005\u5B89\u88C5\u4F7F\u7528-ufw-\u6765\u8BBE\u7F6E\u9632\u706B\u5899" tabindex="-1"><a class="header-anchor" href="#\u6216\u8005\u5B89\u88C5\u4F7F\u7528-ufw-\u6765\u8BBE\u7F6E\u9632\u706B\u5899" aria-hidden="true">#</a> \u6216\u8005\u5B89\u88C5\u4F7F\u7528 UFW \u6765\u8BBE\u7F6E\u9632\u706B\u5899</h3><p>\u5B89\u88C5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> ufw

<span class="token comment">#\u68C0\u67E5\u72B6\u6001\uFF0C\u9ED8\u8BA4\u662F\u5173\u95ED</span>
<span class="token function">sudo</span> ufw status verbose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>UFW\u9ED8\u8BA4\u7B56\u7565\u662F\u5173\u95ED\u6240\u6709\u8FDB\u6765\u7684\u8FDE\u63A5\uFF0C\u5F00\u542F\u6240\u6709\u51FA\u53BB\u7684\u8FDE\u63A5\uFF0C\u6587\u4EF6\u8DEF\u5F84\u5728\uFF1A</p><blockquote><p>/etc/default/ufw</p></blockquote><p>\u5141\u8BB8\u4E00\u4E2A\u7AEF\u53E3</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> ufw allow <span class="token number">7722</span>/tcp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6253\u5F00\u4E00\u6BB5\u7AEF\u53E3</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> ufw allow <span class="token number">7100</span>:7200/tcp
<span class="token function">sudo</span> ufw allow <span class="token number">7100</span>:7200/udp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5141\u8BB8\u6307\u5B9Aip\u8BBF\u95EE\u6240\u6709\u7AEF\u53E3</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> ufw allow from <span class="token number">10.10</span>.10.10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5141\u8BB8\u6307\u5B9Aip\u8BBF\u95EE\u6307\u5B9A\u7AEF\u53E3</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> ufw allow from <span class="token number">64.63</span>.62.61 to any port <span class="token number">22</span>

<span class="token function">sudo</span> ufw allow from <span class="token number">120.232</span>.65.223 to any port <span class="token number">5574,8080</span>,80,9080,443
<span class="token function">sudo</span> ufw allow from <span class="token number">157.148</span>.45.20 to any port <span class="token number">5574,8080</span>,80,9080,443
<span class="token function">sudo</span> ufw allow from <span class="token number">183.2</span>.143.163 to any port <span class="token number">5574,8080</span>,80,9080,443/tcp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5141\u8BB8\u6574\u4E2A\u7F51\u6BB5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> ufw allow from <span class="token number">192.168</span>.1.0/24 to any port <span class="token number">3306</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7981\u6B62\u8FDE\u63A5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> ufw deny from <span class="token number">23.24</span>.25.0/24 to any port <span class="token number">80</span>
<span class="token function">sudo</span> ufw deny from <span class="token number">23.24</span>.25.0/24 to any port <span class="token number">443</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u770B\u89C4\u5219</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> ufw status numbered
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5220\u9664\u89C4\u5219</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> ufw delete <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u542F\u52A8\u3001\u5173\u95ED\u3001\u91CD\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> ufw <span class="token builtin class-name">enable</span>
<span class="token function">sudo</span> ufw disable
<span class="token function">sudo</span> ufw reset
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5zabbix" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5zabbix" aria-hidden="true">#</a> \u5B89\u88C5zabbix</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">wget</span> https://repo.mysql.com//mysql-apt-config_0.8.17-1_all.deb
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lnmp\u73AF\u5883\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#lnmp\u73AF\u5883\u642D\u5EFA" aria-hidden="true">#</a> lnmp\u73AF\u5883\u642D\u5EFA</h2><h4 id="\u5B89\u88C5\u5F00\u53D1\u73AF\u5883\u8F6F\u4EF6\u5305" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u5F00\u53D1\u73AF\u5883\u8F6F\u4EF6\u5305" aria-hidden="true">#</a> \u5B89\u88C5\u5F00\u53D1\u73AF\u5883\u8F6F\u4EF6\u5305</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo apt-get install -y build-essential libexpat1-dev libgeoip-dev libpng-dev libpcre3-dev libssl-dev libxml2-dev rcs zlib1g-dev libmcrypt-dev libjpeg-dev libpng-dev libwebp-dev pkg-config libbz2-dev libcurl4-openssl-dev autoconf libmemcached-dev libmemcached11

sudo ln -s /usr/include/x86_64-linux-gnu/curl /usr/local/include/curl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="\u4E0B\u8F7D\u8F6F\u4EF6\u6E90\u7801\u5305" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u8F6F\u4EF6\u6E90\u7801\u5305" aria-hidden="true">#</a> \u4E0B\u8F7D\u8F6F\u4EF6\u6E90\u7801\u5305</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /usr/local/src
sudo wget https://cdn.mysql.com/archives/mysql-5.6/mysql-5.6.20.tar.gz
sudo wget https://openresty.org/download/openresty-1.9.7.4.tar.gz
sudo wget https://www.php.net/distributions/php-5.6.20.tar.gz


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="\u521B\u5EFA\u7528\u6237nginx\u3001mysql\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u7528\u6237nginx\u3001mysql\u7528\u6237" aria-hidden="true">#</a> \u521B\u5EFA\u7528\u6237nginx\u3001mysql\u7528\u6237</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo groupadd mysql
sudo useradd -g mysql -d /home/mysql -s /sbin/nologin mysql

sudo groupadd nginx
sudo useradd -g nginx -d /home/nginx -s /sbin/nologin nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5B89\u88C5nginx" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5nginx" aria-hidden="true">#</a> \u5B89\u88C5nginx</h4><h5 id="\u4E0B\u8F7D\u5B89\u88C5nginx\u9700\u8981\u7684\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u5B89\u88C5nginx\u9700\u8981\u7684\u6A21\u5757" aria-hidden="true">#</a> \u4E0B\u8F7D\u5B89\u88C5nginx\u9700\u8981\u7684\u6A21\u5757</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /usr/local/src
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="\u5B89\u88C5openresty-1-9-7-1-\u5305\u542Bnginx-1-9-7\u548C\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5openresty-1-9-7-1-\u5305\u542Bnginx-1-9-7\u548C\u63D2\u4EF6" aria-hidden="true">#</a> \u5B89\u88C5openresty-1.9.7.1\uFF0C\u5305\u542Bnginx-1.9.7\u548C\u63D2\u4EF6</h5><p>\u9884\u7F16\u8BD1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /usr/local/src/openresty-1.9.7.4
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5B89\u88C5php" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5php" aria-hidden="true">#</a> \u5B89\u88C5php</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u5B89\u88C5m</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5deepin\u7248\u5FAE\u4FE1" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5deepin\u7248\u5FAE\u4FE1" aria-hidden="true">#</a> \u5B89\u88C5deepin\u7248\u5FAE\u4FE1</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,68),d=[l];function c(t,o){return s(),e("div",null,d)}var u=n(i,[["render",c],["__file","debian10.html.vue"]]);export{u as default};
