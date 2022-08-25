import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as e,b as a}from"./app.6fb11f83.js";const i={},l=a(`<h1 id="iptables" tabindex="-1"><a class="header-anchor" href="#iptables" aria-hidden="true">#</a> iptables</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#1.\u5F00\u542F\u4E00\u4E2Assh\u7AEF\u53E3</span>

<span class="token function">vi</span> /etc/ssh/sshd_config

<span class="token comment">#\u628A#Port 22</span>
<span class="token comment">#\u4FEE\u6539\u4E3A</span>

Port <span class="token number">22</span>
Port <span class="token number">2222</span>

<span class="token function">service</span> sshd restart

<span class="token comment">#\u9632\u706B\u5899\u5F00\u542F2222\u7AEF\u53E3\uFF08\u5982\u679C\u5F00\u542F\u4E86selinux\uFF0C\u8BB0\u5F97\u4E00\u5B9A\u8981\u5173\u95ED\uFF09</span>

<span class="token comment">#\u53BB\u6D4B\u8BD5\u4E00\u4E0B2222\u7AEF\u53E3\u662F\u5426\u5F00\u542F\uFF0C\u8FD9\u70B9\u5F88\u91CD\u8981</span>

<span class="token comment">#2.\u8BBE\u7F6E\u65B9\u6CD5\u4E00\uFF1A\u53EA\u5141\u8BB8192.168.5.231\u8BBF\u95EE</span>

<span class="token comment">#\u8FD0\u884C\u5B8C\u4E0B\u9762\u8FD9\u4E00\u884C\uFF0C\u4F60\u5DF2\u7ECF\u4E0D\u80FD\u8BBF\u95EE\u4E86\uFF0C\u6539\u75282222\u53BB\u8BBE\u7F6E\u4E0B\u9762\u4E00\u884C</span>
iptables <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">22</span> <span class="token parameter variable">-j</span> DROP

<span class="token comment">#\u75282222\u7AEF\u53E3\u53BB\u8FD0\u884C\u4E0B\u9762\u4E00\u884C\uFF0C\u8FD0\u884C\u5B8C\uFF0C22\u7AEF\u53E3\u5C31\u53EF\u4EE5\u4F7F\u7528</span>
iptables <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-s</span> x.x.x.x <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">22</span> <span class="token parameter variable">-j</span> ACCEPT

<span class="token comment">#\u4FDD\u5B58</span>
<span class="token function">service</span> iptables save

<span class="token comment">#\u91CD\u542F</span>
<span class="token function">service</span> iptables restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-SHELL ext-SHELL line-numbers-mode"><pre class="language-SHELL"><code>#!/bin/sh

# \u5148\u5907\u4EFDiptables\u89C4\u5219
mkdir /web/shell/iptables_bak
cp /etc/sysconfig/iptables /web/shell/iptables_bak/iptables

# \u8BBE\u7F6E\u4E4B\u524D\u5173\u95ED\u9632\u706B\u5899\u624D\u662F\u6700\u5B89\u5168\u7684\u529E\u6CD5\uFF0C\u5426\u5219\u4F1A\u53D1\u751F\u8FDE\u63A5\u4E0D\u4E0A\u7684\u95EE\u9898
service iptables stop

# \u7981\u6B62\u6240\u6709ip\u8BBF\u95EE60011\u7AEF\u53E3
iptables -I INPUT -p tcp --dport 60011 -j DROP

# \u5F00\u653E\u6307\u5B9Aip\u53EF\u4EE5\u8FDE\u63A560011\u7AEF\u53E3
iptables -A INPUT -i 127.0.0.1 -p tcp --dport 60011 -j ACCEPT
iptables -I INPUT -s x.x.x.x,192.168.2.0/24 -p tcp --dport 60011 -j ACCEPT

# \u5141\u8BB8\u90E8\u5206\u51FA\u53BB\u7684\u7F51\u7EDC  			
iptables -A OUTPUT -d 192.168.2.0/24,x.x.x.x,121.201.88.88,114.114.114.114 -j ACCEPT    
   
# \u5141\u8BB8\u8BBF\u95EE\u7684\u5916\u7F51
iptables -A OUTPUT -d open.work.weixin.qq.com,v0.api.upyun.com,v1.api.upyun.com,v2.api.upyun.com,v3.api.upyun.com,graph.qq.com,apis.map.qq.com,api.weixin.qq.com,login.weixin.qq.com,wx.qq.com,api.weibo.com,js4.jobui.com,css4.jobui.com,m.jobui.com,www.jobui.com,apis.jobui.com -j ACCEPT


#\u5141\u8BB8icmp\u5305\u901A\u8FC7,\u4E5F\u5C31\u662F\u5141\u8BB8ping
iptables -A INPUT -p icmp -m icmp --icmp-type 8 -j ACCEPT

#\u672C\u673A\u5BF9\u5916\u8BF7\u6C42\u76F8\u5F53\u4E8EOUTPUT,\u5BF9\u4E8E\u8FD4\u56DE\u6570\u636E\u5305\u5FC5\u987B\u63A5\u6536\u554A\uFF0C\u8FD9\u76F8\u5F53\u4E8EINPUT\u4E86
iptables -I INPUT -i lo -j ACCEPT
iptables -I INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT

# \u7981\u7528\u6240\u6709\u51FA\u53BB\u7684\u7F51\u7EDC
iptables -P OUTPUT DROP

# \u4FDD\u5B58iptbales\u89C4\u5219
service iptables save

# \u91CD\u65B0\u542F\u52A8
service iptables restart 


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u6240\u6709\u89C4\u5219\u5217\u8868\u5E76\u6253\u5370\u7F16\u53F7</span>
iptables <span class="token parameter variable">-L</span> <span class="token parameter variable">-n</span> --line-numbers

<span class="token comment"># \u5220\u9664\u4E00\u6761\u89C4\u5219</span>
iptables <span class="token parameter variable">-D</span> INPUT <span class="token number">7</span>
<span class="token comment"># \u6216</span>
iptables <span class="token parameter variable">-D</span> OUTPUT <span class="token number">7</span>

<span class="token comment"># \u5141\u8BB8\u6240\u6709\u51FA\u53E3\u8BBF\u95EE</span>
<span class="token function">sudo</span> iptables <span class="token parameter variable">-A</span> OUTPUT <span class="token parameter variable">-j</span> ACCEPT

<span class="token comment">#\u5141\u8BB8\u6240\u6709\u5165\u53E3\u8BBF\u95EE</span>
<span class="token function">sudo</span> iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-j</span> ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>

<span class="token comment"># \u5148\u5907\u4EFDiptables\u89C4\u5219</span>
<span class="token function">mkdir</span> /web/shell/iptables_bak
<span class="token function">cp</span> /etc/sysconfig/iptables /web/shell/iptables_bak/iptables

<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s|#Port 22|Port 60011|g&quot;</span> /etc/ssh/sshd_config

<span class="token comment"># \u8BBE\u7F6E\u4E4B\u524D\u5173\u95ED\u9632\u706B\u5899\u624D\u662F\u6700\u5B89\u5168\u7684\u529E\u6CD5\uFF0C\u5426\u5219\u4F1A\u53D1\u751F\u8FDE\u63A5\u4E0D\u4E0A\u7684\u95EE\u9898</span>
<span class="token comment">#service iptables stop</span>

<span class="token comment"># \u7981\u6B62\u6240\u6709ip\u8BBF\u95EE60011\u7AEF\u53E3</span>
iptables <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">60011</span> <span class="token parameter variable">-j</span> DROP

<span class="token comment"># \u5F00\u653E\u6307\u5B9Aip\u53EF\u4EE5\u8FDE\u63A560011\u7AEF\u53E3</span>
iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-i</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">60011</span> <span class="token parameter variable">-j</span> ACCEPT
iptables <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-s</span> x.x.x.x,192.168.2.0/24 <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">60011</span> <span class="token parameter variable">-j</span> ACCEPT

<span class="token function">service</span> iptables save
<span class="token function">service</span> sshd restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>debian\u7BA1\u7406iptables\u9700\u8981\u7528\u5230iptables-persistent</p><p>\u901A\u8FC7iptables-persistent\u751F\u6210\u7684\u89C4\u5219\u9ED8\u8BA4\u5C06\u88AB\u5B58\u50A8\u5728\u4EE5\u4E0B\u6587\u4EF6\u4E2D</p><p>/etc/iptables/rules.v4 /etc/iptables/rules.v6</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> iptables-persistent <span class="token parameter variable">-y</span>

<span class="token comment"># \u4FDD\u5B58\u91CD\u8F7D</span>
 <span class="token function">sudo</span> netfilter-persistent save
 <span class="token function">sudo</span> netfilter-persistent reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>iptables -A INPUT -i x.x.x.x -p tcp --dport 80 -j ACCEPT</p><p>iptables -A INPUT -i x.x.x.x -p tcp --dport 443 -j ACCEPT</p><h3 id="\u670D\u52A1\u5668\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u5668\u5904\u7406" aria-hidden="true">#</a> \u670D\u52A1\u5668\u5904\u7406</h3><ol><li>\u9650\u5236\u767B\u9646ip\u53EA\u6709x.x.x.x\u624D\u80FD\u767B\u9646</li><li>\u9632\u706B\u5899\u9650\u5236\u8BBF\u95EE\u5916\u7F51ip</li><li>\u4FEE\u6539\u9ED8\u8BA4ssh\u7AEF\u53E3\u4E3A60011</li><li>\u4FEE\u6539\u5168\u90E8\u8D26\u53F7\u5BC6\u7801\uFF0Croot\u3001jobui\u53CA\u4E2A\u4EBA\u8D26\u53F7\uFF0C\u5220\u9664\u53EF\u7591\u8D26\u53F7</li></ol>`,11),p=[l];function c(r,t){return n(),e("div",null,p)}var b=s(i,[["render",c],["__file","iptables.html.vue"]]);export{b as default};
