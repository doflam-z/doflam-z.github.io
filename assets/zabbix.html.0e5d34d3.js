import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,b as e}from"./app.7b891c15.js";const i={},t=e(`<h1 id="\u6E90\u7801\u5B89\u88C5zabbix5-4-centos6" tabindex="-1"><a class="header-anchor" href="#\u6E90\u7801\u5B89\u88C5zabbix5-4-centos6" aria-hidden="true">#</a> \u6E90\u7801\u5B89\u88C5zabbix5.4\uFF08centos6\uFF09</h1><p>\u5B89\u88C5\u4F9D\u8D56</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> libevent-devel OpenIPMI OpenIPMI-devel mysql-devel pcre*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u65B0\u5EFAzabbix\u7528\u6237\uFF08\u4E0D\u80FD\u7528root\u8D26\u6237\u542F\u52A8\uFF09</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>chattr <span class="token parameter variable">-i</span> /etc/group /etc/passwd /etc/shadow /etc/gshadow
<span class="token function">groupadd</span> <span class="token parameter variable">--system</span> zabbix
<span class="token function">useradd</span> <span class="token parameter variable">--system</span> <span class="token parameter variable">-g</span> zabbix <span class="token parameter variable">-d</span> /usr/lib/zabbix <span class="token parameter variable">-s</span> /sbin/nologin <span class="token parameter variable">-c</span> <span class="token string">&quot;Zabbix Monitoring System&quot;</span> zabbix
chattr +i /etc/group /etc/passwd /etc/shadow /etc/gshadow
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540E\u53F0php\u914D\u7F6E\u6587\u4EF6</p><p>/web/php/local/zabbix/conf/zabbix.conf.php</p><p>\u4E0B\u8F7D\u5B89\u88C5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> https://cdn.zabbix.com/zabbix/sources/stable/5.4/zabbix-5.4.4.tar.gz
<span class="token function">tar</span> zxvf zabbix-5.4.4.tar.gz
<span class="token builtin class-name">cd</span> zabbix-5.4.4
<span class="token comment">#\u5B89\u88C5zabbix-server</span>
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/web/software/zabbix  --enable-server --enable-agent --with-mysql --enable-ipv6  --with-libcurl --with-libxml2 --with-openipmi
<span class="token comment">#\u53EA\u5B89\u88C5zabbix-agent</span>
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/web/software/zabbix --enable-agent

<span class="token comment">#\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84</span>
<span class="token comment">#server\uFF1A/web/software/zabbix/etc/zabbix_server.conf</span>
<span class="token comment">#agent\uFF1A/web/software/zabbix/etc/zabbix_agentd.conf</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EA\u5B89\u88C5zabbix-agent</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">##/bin/bash</span>
<span class="token builtin class-name">cd</span> /usr/local/src
<span class="token function">wget</span> https://cdn.zabbix.com/zabbix/sources/stable/5.4/zabbix-5.4.4.tar.gz

<span class="token comment">#\u521B\u5EFAzabbix\u7528\u6237</span>
chattr <span class="token parameter variable">-i</span> /etc/group /etc/passwd /etc/shadow /etc/gshadow
<span class="token function">groupadd</span> <span class="token parameter variable">--system</span> zabbix
<span class="token function">useradd</span> <span class="token parameter variable">--system</span> <span class="token parameter variable">-g</span> zabbix <span class="token parameter variable">-d</span> /usr/lib/zabbix <span class="token parameter variable">-s</span> /sbin/nologin <span class="token parameter variable">-c</span> <span class="token string">&quot;Zabbix Monitoring System&quot;</span> zabbix
chattr +i /etc/group /etc/passwd /etc/shadow /etc/gshadow

<span class="token function">tar</span> zxvf zabbix-5.4.4.tar.gz
<span class="token builtin class-name">cd</span> zabbix-5.4.4
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/web/software/zabbix --enable-agent
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/Server=127.0.0.1/Server=192.168.2.145/g&#39;</span> /web/software/zabbix/etc/zabbix_agentd.conf
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/ServerActive=127.0.0.1/ServerActive=192.168.2.145/g&#39;</span> /web/software/zabbix/etc/zabbix_agentd.conf
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/Hostname=Zabbix server/Hostname=host141/g&#39;</span> /web/software/zabbix/etc/zabbix_agentd.conf
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5B89\u88C5\u6210\u529F&quot;</span>
/web/software/zabbix/sbin/zabbix_agentd
<span class="token keyword">else</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5B89\u88C5\u5931\u8D25&quot;</span>
<span class="token keyword">fi</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u521B\u5EFA\u78C1\u76D8io\u76D1\u63A7" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u78C1\u76D8io\u76D1\u63A7" aria-hidden="true">#</a> \u521B\u5EFA\u78C1\u76D8io\u76D1\u63A7</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">##/bin/bash</span>

<span class="token comment">#\u521B\u5EFA\u6587\u4EF6\u5939</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /web/shell/zabbix/scripts
<span class="token builtin class-name">cd</span> /web/shell/zabbix/scripts

<span class="token comment">#\u521B\u5EFAio\u76D1\u63A7\u811A\u672C</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> disk_io.sh <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
##!/bin/bash
############################################################
# <span class="token variable">$Name</span>:         disk_io.sh
# <span class="token variable">$Function</span>:     DISK IO
# <span class="token variable">$Author</span>:       zax
# <span class="token variable">$Create</span> Date:  2021/10/26
# <span class="token variable">$Description</span>:  Monitor DISK IO
############################################################
Device=<span class="token variable">$1</span>
DISK=<span class="token variable">$2</span>
case <span class="token variable">$DISK</span> in
#\u6BCF\u79D2\u8BFB\u8BF7\u6C42\u88AB\u5408\u5E76\u6B21\u6570
rrqm_s)
        iostat -dxkt 1 2 | grep &quot;<span class="token entity" title="\\b">\\b</span><span class="token variable">$Device</span><span class="token entity" title="\\b">\\b</span>&quot; | awk &#39;NR==2{print <span class="token variable">$2</span>}&#39;
;;
#\u6BCF\u79D2\u5199\u8BF7\u6C42\u88AB\u5408\u5E76\u6B21\u6570
wrqm_s)
        iostat -dxkt 1 2 | grep &quot;<span class="token entity" title="\\b">\\b</span><span class="token variable">$Device</span><span class="token entity" title="\\b">\\b</span>&quot; | awk &#39;NR==2{print <span class="token variable">$3</span>}&#39;
;;
#\u6BCF\u79D2\u5B8C\u6210\u7684\u8BFB\u6B21\u6570
r_s)
        iostat -dxkt 1 2 | grep &quot;<span class="token entity" title="\\b">\\b</span><span class="token variable">$Device</span><span class="token entity" title="\\b">\\b</span>&quot; | awk &#39;NR==2{print <span class="token variable">$4</span>}&#39;
;;
#\u6BCF\u79D2\u5B8C\u6210\u7684\u5199\u6B21\u6570
w_s)
        iostat -dxkt 1 2 | grep &quot;<span class="token entity" title="\\b">\\b</span><span class="token variable">$Device</span><span class="token entity" title="\\b">\\b</span>&quot; | awk &#39;NR==2{print <span class="token variable">$5</span>}&#39;
;;
#\u6BCF\u79D2\u8BFB\u6570\u636E\u91CF(kb)
rkb_s)
        iostat -dxkt 1 2 | grep &quot;<span class="token entity" title="\\b">\\b</span><span class="token variable">$Device</span><span class="token entity" title="\\b">\\b</span>&quot; | awk &#39;NR==2{print <span class="token variable">$6</span>}&#39;
;;
#\u6BCF\u79D2\u5199\u6570\u636E\u91CF(kb)
wkb_s)
        iostat -dxkt 1 2 | grep &quot;<span class="token entity" title="\\b">\\b</span><span class="token variable">$Device</span><span class="token entity" title="\\b">\\b</span>&quot; | awk &#39;NR==2{print <span class="token variable">$7</span>}&#39;
;;
#\u5E73\u5747\u6BCF\u6B21IO\u8BF7\u6C42\u7684\u6247\u533A\u5927\u5C0F
avgrq_sz)
        iostat -dxkt 1 2 | grep &quot;<span class="token entity" title="\\b">\\b</span><span class="token variable">$Device</span><span class="token entity" title="\\b">\\b</span>&quot; | awk &#39;NR==2{print <span class="token variable">$8</span>}&#39;
;;
#\u5E73\u5747\u6BCF\u6B21IO\u8BF7\u6C42\u7684\u961F\u5217\u957F\u5EA6(\u8D8A\u77ED\u8D8A\u597D)
avgqu_sz)
        iostat -dxkt 1 2 | grep &quot;<span class="token entity" title="\\b">\\b</span><span class="token variable">$Device</span><span class="token entity" title="\\b">\\b</span>&quot; | awk &#39;NR==2{print <span class="token variable">$9</span>}&#39;
;;
#\u5E73\u5747\u6BCF\u6B21IO\u8BF7\u6C42\u7B49\u5F85\u65F6\u95F4(\u6BEB\u79D2)
await)
        iostat -dxkt 1 2 | grep &quot;<span class="token entity" title="\\b">\\b</span><span class="token variable">$Device</span><span class="token entity" title="\\b">\\b</span>&quot; | awk &#39;NR==2{print <span class="token variable">$10</span>}&#39;
;;
#\u8BFB\u7684\u5E73\u5747\u8017\u65F6(\u6BEB\u79D2)
r_await)
        iostat -dxkt 1 2 | grep &quot;<span class="token entity" title="\\b">\\b</span><span class="token variable">$Device</span><span class="token entity" title="\\b">\\b</span>&quot; | awk &#39;NR==2{print <span class="token variable">$11</span>}&#39;
;;
#\u5199\u5165\u5E73\u5747\u8017\u65F6(\u6BEB\u79D2)
w_await)
        iostat -dxkt 1 2 | grep &quot;<span class="token entity" title="\\b">\\b</span><span class="token variable">$Device</span><span class="token entity" title="\\b">\\b</span>&quot; | awk &#39;NR==2{print <span class="token variable">$12</span>}&#39;
;;
#\u5E73\u5747\u6BCF\u6B21IO\u8BF7\u6C42\u5904\u7406\u65F6\u95F4(\u6BEB\u79D2)
svctm)
        iostat -dxkt 1 2 | grep &quot;<span class="token entity" title="\\b">\\b</span><span class="token variable">$Device</span><span class="token entity" title="\\b">\\b</span>&quot; | awk &#39;NR==2{print <span class="token variable">$13</span>}&#39;
;;
#IO\u961F\u5217\u975E\u7A7A\u6BD4\u4F8B
util)
        iostat -dxkt 1 2 | grep &quot;<span class="token entity" title="\\b">\\b</span><span class="token variable">$Device</span><span class="token entity" title="\\b">\\b</span>&quot; | awk &#39;NR==2{print <span class="token variable">$14</span>}&#39;
;;
esac
EOF</span>

<span class="token comment">#\u521B\u5EFA\u78C1\u76D8\u53D1\u73B0\u811A\u672C</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> disk_discovery.sh <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
#!/bin/bash
############################################################
# <span class="token variable">$Name</span>:         disk_discovery.sh
# <span class="token variable">$Function</span>:     DISK DISCOVERY
# <span class="token variable">$Author</span>:       zax
# <span class="token variable">$Create</span> Date:  2021/10/26
# <span class="token variable">$Description</span>:  Monitor DISK DISCOVERY
############################################################
disk_array=(<span class="token variable"><span class="token variable">\`</span><span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token string">&quot;(vd[a-z]$|sd[a-z]$)&quot;</span> /proc/partitions <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $4}&#39;</span><span class="token variable">\`</span></span>)
length=<span class="token variable">\${<span class="token operator">#</span>disk_array<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
printf &quot;{<span class="token entity" title="\\n">\\n</span>&quot;
printf  &#39;<span class="token entity" title="\\t">\\t</span>&#39;&quot;<span class="token entity" title="\\&quot;">\\&quot;</span>data<span class="token entity" title="\\&quot;">\\&quot;</span>:[&quot;
for <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>$length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">))</span></span>
do
        printf &#39;<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\t">\\t</span><span class="token entity" title="\\t">\\t</span>{&#39;
        printf &quot;<span class="token entity" title="\\&quot;">\\&quot;</span>{#DISK_NAME}<span class="token entity" title="\\&quot;">\\&quot;</span>:<span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">\${disk_array<span class="token punctuation">[</span>$i<span class="token punctuation">]</span>}</span><span class="token entity" title="\\&quot;">\\&quot;</span>}&quot;
        if [ <span class="token variable">$i</span> -lt $[<span class="token variable">$length</span>-1] ];then
                printf &#39;,&#39;
        fi
done
printf  &quot;<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\t">\\t</span>]<span class="token entity" title="\\n">\\n</span>&quot;
printf &quot;}<span class="token entity" title="\\n">\\n</span>&quot;
EOF</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),l=[t];function p(c,r){return s(),a("div",null,l)}var d=n(i,[["render",p],["__file","zabbix.html.vue"]]);export{d as default};
