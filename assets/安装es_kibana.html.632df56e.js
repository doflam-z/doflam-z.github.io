import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as n,b as e}from"./app.eb749dcb.js";const i={},l=e(`<h1 id="es-kibana\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#es-kibana\u90E8\u7F72" aria-hidden="true">#</a> es+kibana\u90E8\u7F72</h1><p><strong>\u57FA\u7840\u73AF\u5883\uFF1Ajdk8</strong></p><h3 id="\u5B89\u88C5jdk" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5jdk" aria-hidden="true">#</a> \u5B89\u88C5jdk</h3><p>\u4E0B\u8F7Djdk\u5305</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /usr/local/java 
<span class="token builtin class-name">cd</span> /usr/local/java 
<span class="token function">wget</span> https://download.oracle.com/otn/java/jdk/8u321-b07/df5ad55fdd604472a86a45a217032c7d/jdk-8u321-linux-x64.tar.gz?AuthParam<span class="token operator">=</span>1647915953_6b486a8019a80931d2b2bdca8b505d6a
<span class="token function">tar</span> zxvf jdk-8u321-linux-x64.tar.gz <span class="token parameter variable">-C</span> /usr/local/java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u914D\u7F6Ejdk\u73AF\u5883\u53D8\u91CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /etc/profile
<span class="token comment">#\u6DFB\u52A0</span>
<span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/local/java/jdk1.8.0_311/
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>$:CLASSPATH:<span class="token variable">$JAVA_HOME</span>/lib/ 
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOME</span>/bin 

<span class="token comment">#\u52A0\u8F7D\u6587\u4EF6\u751F\u6548</span>
<span class="token builtin class-name">source</span> /etc/profile
<span class="token comment">#\u67E5\u770B\u7248\u672C</span>
<span class="token function">java</span> <span class="token parameter variable">-version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B89\u88C5elasticsearch5.6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-5.6.16.tar.gz
sha1sum elasticsearch-5.6.16.tar.gz 
<span class="token function">tar</span> <span class="token parameter variable">-xzf</span> elasticsearch-5.6.16.tar.gz

<span class="token comment">#\u540E\u53F0\u542F\u52A8\u5E76\u8BB0\u5F55pid</span>
<span class="token builtin class-name">cd</span> elasticsearch-5.6.16/ 
./bin/elasticsearch <span class="token parameter variable">-p</span> /mysql/elasticsearch/elasticsearch-pid <span class="token parameter variable">-d</span>

<span class="token comment">#\u8FDE\u63A5\u6D4B\u8BD5</span>
<span class="token function">curl</span> <span class="token parameter variable">-XGET</span> <span class="token number">192.168</span>.1.36:9200

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B89\u88C5kibana5.6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> https://artifacts.elastic.co/downloads/kibana/kibana-5.6.16-linux-x86_64.tar.gz
sha1sum kibana-5.6.16-linux-x86_64.tar.gz 
<span class="token function">tar</span> <span class="token parameter variable">-xzf</span> kibana-5.6.16-linux-x86_64.tar.gz
<span class="token builtin class-name">cd</span> kibana-5.6.16-linux-x86_64/ 

<span class="token comment">#\u540E\u53F0\u542F\u52A8</span>
./bin/kibana <span class="token operator">&gt;&gt;</span> /mysql/elasticsearch/kibana.stdout <span class="token operator"><span class="token file-descriptor important">2</span>&gt;&gt;</span> /mysql/elasticsearch/kibana.stderr <span class="token operator">&amp;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),c=[l];function t(r,d){return s(),n("div",null,c)}var v=a(i,[["render",t],["__file","\u5B89\u88C5es+kibana.html.vue"]]);export{v as default};
