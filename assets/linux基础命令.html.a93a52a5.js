import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,b as e}from"./app.36b0e301.js";const i={},l=e(`<h1 id="linux\u57FA\u7840\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#linux\u57FA\u7840\u547D\u4EE4" aria-hidden="true">#</a> Linux\u57FA\u7840\u547D\u4EE4</h1><h3 id="shell\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#shell\u547D\u4EE4" aria-hidden="true">#</a> shell\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u67E5\u770B\u4E00\u7EA7\u76EE\u5F55\u6587\u4EF6\u5939\u5927\u5C0F</span>
<span class="token function">sudo</span> <span class="token function">du</span> <span class="token parameter variable">-h</span> --max-depth<span class="token operator">=</span><span class="token number">1</span>

<span class="token comment">#\u67E5\u770B\u5DF2\u5220\u9664\u6587\u4EF6\u8FDB\u7A0B</span>
<span class="token function">lsof</span> <span class="token operator">|</span> <span class="token function">grep</span> deleted 

<span class="token comment">#\u67E5\u770B\u53D1\u884C\u7248</span>
lsb_release <span class="token parameter variable">-a</span> 

<span class="token comment">#\u67E5\u770Bcpu\u6838\u5FC3\u6570</span>
nproc

<span class="token comment">#\u67E5\u770Bcpu\u578B\u53F7 \u201C| head -1\u201D\u662F\u53EA\u8FD4\u56DE\u7B2C\u4E00\u4E2A</span>
<span class="token function">cat</span> /proc/cpuinfo <span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&quot;model name&quot;</span> <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-1</span>

<span class="token comment">#\u5FAA\u73AF\u6267\u884C\u4E00\u6761\u547D\u4EE4</span>
<span class="token keyword">while</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">date</span><span class="token punctuation">;</span> <span class="token function">sleep</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token keyword">done</span>
<span class="token function">watch</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> <span class="token parameter variable">-d</span> <span class="token function">netstat</span> <span class="token parameter variable">-ant</span>

<span class="token comment"># \u7EDF\u8BA1\u6587\u672C\u4E2D\u51FA\u73B0\u5173\u952E\u5B57\u7684\u6B21\u6570</span>
<span class="token function">grep</span> <span class="token parameter variable">-o</span> objStr  filename<span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span>

<span class="token comment">#kill\u6389\u6240\u6709\u7B26\u5408\u5173\u952E\u5B57\u7684\u8FDB\u7A0B</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> jobTypeRankDailyData<span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-c</span> <span class="token number">9</span>-15 <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">kill</span>

<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> rabbitmq<span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-c</span> <span class="token number">9</span>-15 <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">kill</span>

<span class="token comment">#\u6839\u636E\u8FDB\u7A0Bid\u67E5\u7AEF\u53E3</span>
<span class="token function">netstat</span> <span class="token parameter variable">-nap</span> <span class="token operator">|</span> <span class="token function">grep</span> \u8FDB\u7A0Bpid

<span class="token comment">#\u6839\u636E\u76D1\u542C\u7AEF\u53E3\u67E5\u770B\u8FDB\u7A0B</span>
<span class="token function">netstat</span> <span class="token parameter variable">-ntpl</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;:8755&quot;</span>

<span class="token comment">#\u5207\u6362\u7528\u6237\u53EA\u6267\u884C\u4E00\u6761\u547D\u4EE4\u7684\u53EF\u4EE5\u7528: </span>
<span class="token function">su</span> - user <span class="token parameter variable">-c</span> <span class="token builtin class-name">command</span>
<span class="token comment">#\u5207\u6362\u7528\u6237\u6267\u884C\u4E00\u4E2Ashell\u6587\u4EF6\u53EF\u4EE5\u7528: </span>
<span class="token function">su</span> - user <span class="token parameter variable">-s</span> /bin/bash shell.sh

<span class="token comment">#\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\uFF08\u4E34\u65F6\uFF09</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">LIBZIP_LIBS</span><span class="token operator">=</span><span class="token string">&quot;/web/software/libzip-1.3.2/lib&quot;</span>
<span class="token comment">#\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\uFF08\u6C38\u4E45\uFF09(\u5C3D\u91CF\u76F4\u63A5\u7F16\u8F91\uFF0C\u4E0D\u8981echo\uFF0C\u5BB9\u6613\u4E0D\u5C0F\u5FC3\u8986\u76D6\u6587\u4EF6)</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;export ONIG_CFLAGS=/usr/bin/onig-config&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/profile
<span class="token comment">#\u7ACB\u5373\u751F\u6548</span>
<span class="token builtin class-name">source</span> /etc/profile

<span class="token comment">#rpm\u67E5\u627E\u5305</span>
<span class="token function">rpm</span> <span class="token parameter variable">-q</span> libcurl
<span class="token comment">#rpm\u5B89\u88C5\u5305</span>
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> libcurl
<span class="token comment">#rpm\u5378\u8F7D\u5305 \uFF08 --nodeps\u5FFD\u7565\u4F9D\u8D56\uFF09</span>
<span class="token function">rpm</span> <span class="token parameter variable">-e</span> <span class="token parameter variable">--nodeps</span> libcurl
   
<span class="token comment">#\u641C\u7D22\u66FF\u6362\u6587\u4EF6\u5185\u5BB9</span>
<span class="token function">sudo</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/track_errors = On/track_errors = Off/g&#39;</span> /web/software/php-7.4.23/lib/php.ini

<span class="token comment">#\u7EDF\u8BA1\u6587\u4EF6\u5939\u5927\u5C0F\uFF08\u5305\u542B\u6587\u4EF6\uFF09</span>
<span class="token function">du</span> <span class="token parameter variable">-h</span> --max-depth<span class="token operator">=</span><span class="token number">1</span> /mysql

<span class="token comment">#\u7EDF\u8BA1\u5F53\u524D\u76EE\u5F55\u6587\u4EF6\u6309\u5927\u5C0F\u6392\u5E8F</span>
<span class="token function">du</span> <span class="token parameter variable">-s</span> * <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-nr</span>

<span class="token comment">#\u6279\u91CF\u89E3\u538Bzip\u6587\u4EF6\u5230\u6307\u5B9A\u6587\u4EF6\u5939</span>
<span class="token function">ls</span> *.zip <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-n1</span> <span class="token function">unzip</span> <span class="token parameter variable">-o</span> <span class="token parameter variable">-d</span> unzip/

<span class="token comment">#\u6279\u91CF\u89E3\u538Btar\u538B\u7F29\u6587\u4EF6</span>
<span class="token function">ls</span> *.tar.gz <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-n1</span> <span class="token function">tar</span> <span class="token parameter variable">-zxvf</span>

<span class="token comment">#xargs\u662F\u7ED9\u547D\u4EE4\u4F20\u9012\u53C2\u6570\u7684\u4E00\u4E2A\u8FC7\u6EE4\u5668\uFF0C\u53EF\u4EE5\u5C06\u524D\u4E00\u4E2A\u547D\u4EE4\u4EA7\u751F\u7684\u8F93\u51FA\u4F5C\u4E3A\u540E\u4E00\u4E2A\u547D\u4EE4\u7684\u53C2\u6570</span>
<span class="token function">find</span> test2/ <span class="token parameter variable">-name</span> <span class="token string">&#39;*.tes&#39;</span> <span class="token operator">|</span><span class="token function">xargs</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span>
<span class="token comment">#\u547D\u4EE4\u5373\u5C06find\u4EA7\u751F\u7684\u8F93\u51FA\uFF08test2\u76EE\u5F55\u4E0B\u7684\u6240\u6709tes\u6587\u4EF6\uFF09\uFF0C\u4F5C\u4E3Arm\u7684\u53C2\u6570\uFF0C\u4ECE\u800C\u5B8C\u5168\u5220\u9664</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="shell\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#shell\u5224\u65AD" aria-hidden="true">#</a> shell\u5224\u65AD</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">if</span> list <span class="token keyword">then</span>
	<span class="token keyword">do</span> something here
<span class="token keyword">elif</span> list <span class="token keyword">then</span>
	<span class="token keyword">do</span> another thing here
<span class="token keyword">else</span>
	<span class="token keyword">do</span> something <span class="token keyword">else</span> here
<span class="token keyword">fi</span>
  
<span class="token comment">#EX1:</span>
<span class="token comment">#!/bin/sh</span>

<span class="token assign-left variable">SYSTEM</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">\`</span></span>    <span class="token comment">#\u83B7\u53D6\u64CD\u4F5C\u7CFB\u7EDF\u7C7B\u578B\uFF0C\u6211\u672C\u5730\u662Flinux</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$SYSTEM</span> <span class="token operator">=</span> <span class="token string">&quot;Linux&quot;</span> <span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>     <span class="token comment">#\u5982\u679C\u662Flinux\u7684\u8BDD\u6253\u5370linux\u5B57\u7B26\u4E32</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Linux&quot;</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$SYSTEM</span> <span class="token operator">=</span> <span class="token string">&quot;FreeBSD&quot;</span> <span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>   
<span class="token builtin class-name">echo</span> <span class="token string">&quot;FreeBSD&quot;</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$SYSTEM</span> <span class="token operator">=</span> <span class="token string">&quot;Solaris&quot;</span> <span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Solaris&quot;</span>
<span class="token keyword">else</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;What?&quot;</span>
<span class="token keyword">fi</span>     <span class="token comment">#ifend</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u57FA\u672C\u4E0A\u548C\u5176\u4ED6\u811A\u672C\u8BED\u8A00\u4E00\u6837\u3002\u6CA1\u6709\u592A\u5927\u533A\u522B\u3002\u4E0D\u8FC7\u503C\u5F97\u6CE8\u610F\u7684\u662F\u3002[]\u91CC\u9762\u7684\u6761\u4EF6\u5224\u65AD\u3002[]\u5185\u4E24\u8FB9\u8981\u6709\u7A7A\u683C</p><p>1 \u5B57\u7B26\u4E32\u5224\u65AD</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>str1 <span class="token operator">=</span> str2\u3000\u3000\u3000\u3000\u3000\u3000\u5F53\u4E24\u4E2A\u4E32\u6709\u76F8\u540C\u5185\u5BB9\u3001\u957F\u5EA6\u65F6\u4E3A\u771F
str1 <span class="token operator">!=</span> str2\u3000\u3000\u3000\u3000\u3000 \u5F53\u4E32str1\u548Cstr2\u4E0D\u7B49\u65F6\u4E3A\u771F
<span class="token parameter variable">-n</span> str1\u3000\u3000\u3000\u3000\u3000\u3000\u3000 \u5F53\u4E32\u7684\u957F\u5EA6\u5927\u4E8E0\u65F6\u4E3A\u771F<span class="token punctuation">(</span>\u4E32\u975E\u7A7A<span class="token punctuation">)</span>
<span class="token parameter variable">-z</span> str1\u3000\u3000\u3000\u3000\u3000\u3000\u3000 \u5F53\u4E32\u7684\u957F\u5EA6\u4E3A0\u65F6\u4E3A\u771F<span class="token punctuation">(</span>\u7A7A\u4E32<span class="token punctuation">)</span>
str1\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000   \u5F53\u4E32str1\u4E3A\u975E\u7A7A\u65F6\u4E3A\u771F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2 \u6570\u5B57\u7684\u5224\u65AD</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>int1 <span class="token parameter variable">-eq</span> int2\u3000\u3000\u3000\u3000\u4E24\u6570\u76F8\u7B49\u4E3A\u771F
int1 <span class="token parameter variable">-ne</span> int2\u3000\u3000\u3000\u3000\u4E24\u6570\u4E0D\u7B49\u4E3A\u771F
int1 <span class="token parameter variable">-gt</span> int2\u3000\u3000\u3000\u3000int1\u5927\u4E8Eint2\u4E3A\u771F
int1 <span class="token parameter variable">-ge</span> int2\u3000\u3000\u3000\u3000int1\u5927\u4E8E\u7B49\u4E8Eint2\u4E3A\u771F
int1 <span class="token parameter variable">-lt</span> int2\u3000\u3000\u3000\u3000int1\u5C0F\u4E8Eint2\u4E3A\u771F
int1 <span class="token parameter variable">-le</span> int2\u3000\u3000\u3000\u3000int1\u5C0F\u4E8E\u7B49\u4E8Eint2\u4E3A\u771F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3 \u6587\u4EF6\u7684\u5224\u65AD</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token parameter variable">-r</span> <span class="token function">file</span>\u3000\u3000\u3000\u3000\u3000\u7528\u6237\u53EF\u8BFB\u4E3A\u771F
<span class="token parameter variable">-w</span> <span class="token function">file</span>\u3000\u3000\u3000\u3000\u3000\u7528\u6237\u53EF\u5199\u4E3A\u771F
<span class="token parameter variable">-x</span> <span class="token function">file</span>\u3000\u3000\u3000\u3000\u3000\u7528\u6237\u53EF\u6267\u884C\u4E3A\u771F
<span class="token parameter variable">-f</span> <span class="token function">file</span>\u3000\u3000\u3000\u3000\u3000\u6587\u4EF6\u4E3A\u6B63\u89C4\u6587\u4EF6\u4E3A\u771F
<span class="token parameter variable">-d</span> <span class="token function">file</span>\u3000\u3000\u3000\u3000\u3000\u6587\u4EF6\u4E3A\u76EE\u5F55\u4E3A\u771F
<span class="token parameter variable">-c</span> <span class="token function">file</span>\u3000\u3000\u3000\u3000\u3000\u6587\u4EF6\u4E3A\u5B57\u7B26\u7279\u6B8A\u6587\u4EF6\u4E3A\u771F
<span class="token parameter variable">-b</span> <span class="token function">file</span>\u3000\u3000\u3000\u3000\u3000\u6587\u4EF6\u4E3A\u5757\u7279\u6B8A\u6587\u4EF6\u4E3A\u771F
<span class="token parameter variable">-s</span> <span class="token function">file</span>\u3000\u3000\u3000\u3000\u3000\u6587\u4EF6\u5927\u5C0F\u975E0\u65F6\u4E3A\u771F
<span class="token parameter variable">-t</span> <span class="token function">file</span>\u3000\u3000\u3000\u3000\u3000\u5F53\u6587\u4EF6\u63CF\u8FF0\u7B26<span class="token punctuation">(</span>\u9ED8\u8BA4\u4E3A1<span class="token punctuation">)</span>\u6307\u5B9A\u7684\u8BBE\u5907\u4E3A\u7EC8\u7AEF\u65F6\u4E3A\u771F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3 \u590D\u6742\u903B\u8F91\u5224\u65AD</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token parameter variable">-a</span> \u3000 \u3000\u3000\u3000\u3000\u3000 \u4E0E
<span class="token parameter variable">-o</span>\u3000\u3000\u3000\u3000\u3000\u3000\u3000 \u6216
<span class="token operator">!</span>\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u975E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4 \u53C2\u6570\u5224\u65AD</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$0</span> \u8FD9\u4E2A\u7A0B\u5F0F\u7684\u6267\u884C\u540D\u5B57
<span class="token variable">$n</span> \u8FD9\u4E2A\u7A0B\u5F0F\u7684\u7B2Cn\u4E2A\u53C2\u6570\u503C\uFF0Cn<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">9</span>
<span class="token variable">$*</span> \u8FD9\u4E2A\u7A0B\u5F0F\u7684\u6240\u6709\u53C2\u6570,\u6B64\u9009\u9879\u53C2\u6570\u53EF\u8D85\u8FC79\u4E2A\u3002
<span class="token variable">$#</span> \u8FD9\u4E2A\u7A0B\u5F0F\u7684\u53C2\u6570\u4E2A\u6570
<span class="token variable">$$</span> \u8FD9\u4E2A\u7A0B\u5F0F\u7684PID<span class="token punctuation">(</span>\u811A\u672C\u8FD0\u884C\u7684\u5F53\u524D\u8FDB\u7A0BID\u53F7<span class="token punctuation">)</span>
<span class="token variable">$!</span> \u6267\u884C\u4E0A\u4E00\u4E2A\u80CC\u666F\u6307\u4EE4\u7684PID<span class="token punctuation">(</span>\u540E\u53F0\u8FD0\u884C\u7684\u6700\u540E\u4E00\u4E2A\u8FDB\u7A0B\u7684\u8FDB\u7A0BID\u53F7<span class="token punctuation">)</span>
<span class="token variable">$?</span> \u6267\u884C\u4E0A\u4E00\u4E2A\u6307\u4EE4\u7684\u8FD4\u56DE\u503C <span class="token punctuation">(</span>\u663E\u793A\u6700\u540E\u547D\u4EE4\u7684\u9000\u51FA\u72B6\u6001\u30020\u8868\u793A\u6CA1\u6709\u9519\u8BEF\uFF0C\u5176\u4ED6\u4EFB\u4F55\u503C\u8868\u660E\u6709\u9519\u8BEF<span class="token punctuation">)</span>
$- \u663E\u793Ashell\u4F7F\u7528\u7684\u5F53\u524D\u9009\u9879\uFF0C\u4E0Eset\u547D\u4EE4\u529F\u80FD\u76F8\u540C
<span class="token variable">$@</span> \u8DDF<span class="token variable">$*</span>\u7C7B\u4F3C\uFF0C\u4F46\u662F\u53EF\u4EE5\u5F53\u4F5C\u6570\u7EC4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5224\u65AD\u76EE\u5F55\u6587\u4EF6\u6570\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5224\u65AD\u76EE\u5F55\u6587\u4EF6\u6570\u91CF" aria-hidden="true">#</a> \u5224\u65AD\u76EE\u5F55\u6587\u4EF6\u6570\u91CF</h3><p>Linux\u4E0B\u6709\u4E09\u4E2A\u547D\u4EE4\uFF1A<code>ls</code>\u3001<code>grep</code>\u3001<code>wc</code>\u3002\u901A\u8FC7\u8FD9\u4E09\u4E2A\u547D\u4EE4\u7684\u7EC4\u5408\u53EF\u4EE5\u7EDF\u8BA1\u76EE\u5F55\u4E0B\u6587\u4EF6\u53CA\u6587\u4EF6\u5939\u7684\u4E2A\u6570\u3002</p><p>\u7EDF\u8BA1\u5F53\u524D\u76EE\u5F55\u4E0B\u6587\u4EF6\u7684\u4E2A\u6570\uFF08\u4E0D\u5305\u62EC\u76EE\u5F55\uFF09</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;^-&quot;</span> <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7EDF\u8BA1\u5F53\u524D\u76EE\u5F55\u4E0B\u6587\u4EF6\u7684\u4E2A\u6570\uFF08\u5305\u62EC\u5B50\u76EE\u5F55\uFF09</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ls</span> -lR<span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;^-&quot;</span> <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u770B\u67D0\u76EE\u5F55\u4E0B\u6587\u4EF6\u5939(\u76EE\u5F55)\u7684\u4E2A\u6570\uFF08\u5305\u62EC\u5B50\u76EE\u5F55\uFF09</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-lR</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;^d&quot;</span> <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="vim" tabindex="-1"><a class="header-anchor" href="#vim" aria-hidden="true">#</a> vim</h3><p>Vim\u4E2D\u5982\u4F55\u5168\u9009\u5E76\u590D\u5236\uFF1F\uFF08\u533A\u5206\u5927\u5C0F\u5199\uFF01\uFF01\uFF01\uFF09</p><ol><li>\u5168\u90E8\u5220\u9664\uFF1A\u6309esc\u952E\u540E\uFF0C\u5148\u6309gg\uFF08\u5230\u8FBE\u9876\u90E8\uFF09\uFF0C\u7136\u540EdG</li><li>\u5168\u90E8\u590D\u5236\uFF1A\u6309esc\u952E\u540E\uFF0C\u5148\u6309gg\uFF0C\u7136\u540EggyG</li><li>\u5168\u9009\u9AD8\u4EAE\u663E\u793A\uFF1A\u6309esc\u952E\u540E\uFF0C\u5148\u6309gg\uFF0C\u7136\u540EggvG\u6216\u8005ggVG</li><li>\u5355\u884C\u590D\u5236\uFF1A\u6309esc\u952E\u540E\uFF0C\u7136\u540Eyy</li><li>\u5355\u884C\u5220\u9664\uFF1A\u6309esc\u952E\u540E\uFF0C\u7136\u540Edd</li><li>\u7C98\u8D34\uFF1A\u6309esc\u952E\u540E\uFF0C\u7136\u540Ep</li></ol><p>vim\u6279\u91CF\u6CE8\u91CA</p><p>1.\u6309\u4E0Bv\u7136\u540E\u4E0A\u4E0B\u952E\u9009\u4E2D\u5185\u5BB9</p><p>2.\u6309\u4E0Bctrl+v\u8FDB\u5165\u5217\u6A21\u5F0F\uFF0C\u518D\u6309\u4E0B\u5927\u5199I\u8FDB\u5165\u63D2\u5165\u6A21\u5F0F\uFF0C\u8F93\u5165\u6CE8\u91CA\u7B26</p><p>3.\u6700\u540E\u6309\u4E24\u6B21esc</p><p>vim\u6279\u91CF\u53D6\u6D88\u6CE8\u91CA</p><p>1.\u6309ctrl+v\uFF0C\u4E0A\u4E0B\u952E\u9009\u4E2D\u540E\u6CE8\u91CA\u7B26\u53F7\u540E\u6309d</p><h3 id="ssh" tabindex="-1"><a class="header-anchor" href="#ssh" aria-hidden="true">#</a> ssh</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u751F\u6210\u672C\u673A\u5BC6\u94A5</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;zax&quot;</span>

<span class="token comment">#\u53D1\u9001\u516C\u94A5\u5230\u6307\u5B9A\u670D\u52A1\u5668\u8D26\u6237</span>
<span class="token function">scp</span> /home/zax/.ssh/id_rsa.pub zax@192.168.2.132:/home/zax/.ssh/authorized_keys

<span class="token comment">#\u4F7F\u7528mkpasswd\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u5B9A\u4E49\u6765\u968F\u610F\u751F\u6210\u5BC6\u7801\uFF0C\u5176\u4E2D\u5305\u62EC\u957F\u5EA6\uFF0C\u5305\u542B\u5185\u5BB9\u7684\u4E2A\u6570\u7B49\u3002</span>
<span class="token comment">#\u9996\u5148\u9700\u8981\u5B89\u88C5expect</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">expect</span>
<span class="token comment">#\u5B89\u88C5\u5B8C\u6210\u5C31\u53EF\u4EE5\u4F7F\u7528\u4E86\uFF0C\u4EE5\u4E0B\u4E3A\u4F7F\u7528\u53C2\u6570\uFF08\u8FD9\u51E0\u4E2A\u53C2\u6570\u57FA\u672C\u591F\u7528\uFF09\uFF1A</span>
<span class="token parameter variable">-l</span> <span class="token comment">#      (\u5BC6\u7801\u7684\u957F\u5EA6\u5B9A\u4E49, \u9ED8\u8BA4\u662F 9)</span>
<span class="token parameter variable">-d</span> <span class="token comment">#      (\u6570\u5B57\u4E2A\u6570, \u9ED8\u8BA4\u662F 2)</span>
<span class="token parameter variable">-c</span> <span class="token comment">#      (\u5C0F\u5199\u5B57\u7B26, \u9ED8\u8BA4\u662F 3)</span>
<span class="token parameter variable">-C</span> <span class="token comment">#      (\u5927\u5199\u5B57\u7B26, \u9ED8\u8BA4\u662F 2)</span>
<span class="token parameter variable">-s</span> <span class="token comment">#      (\u7279\u6B8A\u5B57\u7B26, \u9ED8\u8BA4\u662F  1)</span>

mkpasswd <span class="token parameter variable">-l</span> <span class="token number">16</span> <span class="token parameter variable">-d</span> <span class="token number">2</span> <span class="token parameter variable">-C</span> <span class="token number">2</span> <span class="token parameter variable">-s</span> <span class="token number">2</span>

<span class="token comment">#sshd_config\u914D\u7F6E\u53EA\u5141\u8BB8\u6307\u5B9A\u7528\u6237+ip\u767B\u5F55</span>
AllowUsers zax@192.168.1.63 zax@192.168.1.75

<span class="token comment">#iptables\u914D\u7F6E\u53EA\u5141\u8BB8\u6307\u5B9Aip\u767B\u5F55</span>
<span class="token comment">#\u7981\u6B62\u6240\u6709ip\u8FDE\u63A522\u7AEF\u53E3</span>
<span class="token function">sudo</span> iptables <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">22</span> <span class="token parameter variable">-j</span> DROP
<span class="token comment">#\u5F00\u542Fip\u6BB5192.168.1.0/24\u7AEF\u768480\u53E3 \u53EF\u4EE5\u6539\u6210\u522B\u7684\u7AEF\u53E3\u53F7</span>
<span class="token function">sudo</span> iptables <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-s</span> <span class="token number">192.168</span>.2.0/24 <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">22</span> <span class="token parameter variable">-j</span> ACCEPT
<span class="token comment">#\u4FDD\u5B58</span>
sservice iptables save

<span class="token comment">#\u5220\u9664\u89C4\u5219</span>
iptables <span class="token parameter variable">-L</span> INPUT --line-numbers
iptables <span class="token parameter variable">-D</span> INPUT <span class="token number">7</span>

<span class="token comment">#\u5B89\u88C5telnet</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> telnet-server.x86_64

<span class="token comment">#\u5C06disable = yes\u6539\u4E3A disable = no\uFF0C\u9000\u51FA\u4FDD\u5B58\u3002</span>
<span class="token function">nano</span> /etc/xinetd.d/telnet

<span class="token comment">#\u7136\u540E\u542F\u52A8telnet\u670D\u52A1\uFF1A</span>
<span class="token function">service</span> xinetd start

<span class="token comment">#\u67E5\u770B\u542F\u7528\u7684\u52A0\u5BC6\u7B97\u6CD5</span>
<span class="token function">sudo</span> <span class="token function">ssh</span> <span class="token parameter variable">-Q</span> cipher

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="linux-\u7528-grep-\u67E5\u627E\u5355\u4E2A\u6216\u591A\u4E2A\u5B57\u7B26\u4E32-\u5173\u952E\u5B57" tabindex="-1"><a class="header-anchor" href="#linux-\u7528-grep-\u67E5\u627E\u5355\u4E2A\u6216\u591A\u4E2A\u5B57\u7B26\u4E32-\u5173\u952E\u5B57" aria-hidden="true">#</a> linux \u7528 grep \u67E5\u627E\u5355\u4E2A\u6216\u591A\u4E2A\u5B57\u7B26\u4E32\uFF08\u5173\u952E\u5B57)</h3><p>\u5355\u4E2A\u5B57\u7B26\u4E32\u8FDB\u884C\u67E5\u627E\uFF1A</p><ol><li><p>\u67E5\u627E\u5F53\u524D\u76EE\u5F55\u6587\u4EF6\u540D\u4E2D\u7684\u5B57\u7B26\u4E32\uFF1A grep \u5B57\u7B26\u4E32 \u6587\u4EF6\u540D</p></li><li><p>\u67E5\u627E\u67D0\u4E2A\u6587\u4EF6\u4E2D\u5B57\u7B26\u4E32\uFF0C\u5E76\u8F93\u51FA\u884C\u53F7\uFF1Agrep -n \u5B57\u7B26\u4E32 \u6587\u4EF6\u540D</p></li><li><p>\u67E5\u627E\u5F53\u524D\u76EE\u5F55\uFF08\u5305\u542B\u5B50\u76EE\u5F55\uFF09\u7684\u5B57\u7B26\u4E32\uFF1Agrep -r \u5B57\u7B26\u4E32 *</p></li><li><p>\u67E5\u627E\u5F53\u524D\u76EE\u5F55\uFF08\u5305\u542B\u5B50\u76EE\u5F55\uFF09\u7684\u5B57\u7B26\u4E32\uFF0C\u5E76\u8F93\u51FA\u884C\u53F7\uFF1Agrep -rn \u5B57\u7B26\u4E32 *</p></li><li><ul><li>:\u901A\u914D\u7B26\uFF0C\u8868\u793A\u5F53\u524D\u76EE\u5F55\u6240\u6709\u6587\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u6309\u7167\u67D0\u79CD\u6A21\u5F0F\u8FDB\u884C\u5339\u914D\uFF0C\u4F8B\u5982\uFF1A</li></ul><p>grep \u5B57\u7B26\u4E32 *.txt \u5339\u914D\u6240\u6709\u6587\u4EF6\u540E\u7F00\u540D\u4E3Atxt\u7684\u5B57\u7B26\u4E32</p></li><li><p>-r \uFF1A\u9012\u5F52\u67E5\u627E</p></li><li><p>-n \uFF1A\u663E\u793A\u884C\u53F7</p></li><li><p>-R \uFF1A\u67E5\u627E\u6240\u6709\u6587\u4EF6\u5305\u542B\u5B50\u76EE\u5F55</p></li><li><p>-i \uFF1A\u5FFD\u7565\u5927\u5C0F\u5199</p></li><li><p>2\u3001\u540C\u65F6\u6EE1\u8DB3\u591A\u4E2A\u5B57\u7B26\u4E32\u67E5\u627E\uFF1A</p></li><li><p>grep \u5B57\u7B26\u4E321 \u6587\u4EF6\u540D| grep \u5B57\u7B26\u4E322|grep \u5B57\u7B26\u4E323|grep ...</p></li><li><p>3\u3001\u6EE1\u8DB3\u591A\u4E2A\u5173\u952E\u5B57\u4E4B\u4E00</p></li><li><p>grep -E &quot;\u5B57\u7B26\u4E321|\u5B57\u7B26\u4E322|\u5B57\u7B26\u4E323|&quot; \u6587\u4EF6\u540D \u6216\u8005</p></li><li><p>egrep &quot;\u5B57\u7B26\u4E321|\u5B57\u7B26\u4E322|\u5B57\u7B26\u4E323|&quot; \u6587\u4EF6\u540D</p></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token string">&quot;^#&quot;</span> /etc/ssh/sshd_config	<span class="token comment">#\u4E0D\u5339\u914D#\u5F00\u5934\u7684\u884C</span>
<span class="token function">egrep</span> <span class="token parameter variable">-v</span> <span class="token string">&quot;^#|^$&quot;</span> /etc/ssh/sshd_config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u67E5\u770B\u5B9E\u65F6\u7F51\u901F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u5B9E\u65F6\u7F51\u901F" aria-hidden="true">#</a> \u67E5\u770B\u5B9E\u65F6\u7F51\u901F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">watch</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> <span class="token string">&quot;/sbin/ifconfig eth1 | grep bytes&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u78C1\u76D8\u76F8\u5173\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u78C1\u76D8\u76F8\u5173\u547D\u4EE4" aria-hidden="true">#</a> \u78C1\u76D8\u76F8\u5173\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u67E5\u770B\u78C1\u76D8\u4FE1\u606F</span>
<span class="token function">sudo</span> lsblk

<span class="token function">sudo</span> <span class="token function">fdisk</span> <span class="token parameter variable">-l</span>

<span class="token function">sudo</span> <span class="token function">df</span> <span class="token parameter variable">-h</span>

<span class="token comment">#\u67E5\u770B\u5206\u533Auuid</span>
<span class="token function">sudo</span> blkid

<span class="token comment">#\u66F4\u65B0\u78C1\u76D8\u5206\u533A\u8868</span>
partx <span class="token parameter variable">-v</span> <span class="token parameter variable">-a</span> /dev/sda

<span class="token comment">#\u65B0\u5EFA\u5206\u533A</span>
<span class="token function">fdisk</span> /dev/sda
n
w

<span class="token comment">#\u683C\u5F0F\u5316</span>
<span class="token function">sudo</span> mkfs.ext4 /dev/sdb1

<span class="token comment">#\u5F00\u673A\u8BFB\u53D6\u7684\u6302\u8F7D\u76EE\u5F55,\u53EF\u4EE5\u5728\u8FD9\u91CC\u5C4F\u853D\u6709\u95EE\u9898\u7684\u5206\u533A</span>
<span class="token function">vim</span> /etc/fstab

<span class="token comment">#\u5B89\u88C5smartmontools</span>
------------ \u5728\u57FA\u4E8E Debian/Ubuntu \u7684\u7CFB\u7EDF\u4E0A ------------
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> smartmontools
------------ \u5728\u57FA\u4E8E RHEL/CentOS \u7684\u7CFB\u7EDF\u4E0A ------------
<span class="token function">sudo</span> yum <span class="token function">install</span> smartmontools
<span class="token comment">#\u68C0\u6D4B</span>
<span class="token function">sudo</span> smartctl <span class="token parameter variable">-H</span> /dev/sda

<span class="token comment"># \u6D4B\u8BD5\u78C1\u76D8\u8BFB\u5199\u901F\u5EA6</span>
<span class="token comment"># \u6D4B\u8BD5\u5199\u5165\u901F\u5EA6</span>
<span class="token function">sudo</span> <span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/zero <span class="token assign-left variable">of</span><span class="token operator">=</span>/jobui/tempfile <span class="token assign-left variable">bs</span><span class="token operator">=</span>1M <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1024</span>
<span class="token comment"># \u6D4B\u8BD5\u8BFB\u53D6\u901F\u5EA6</span>
<span class="token function">sudo</span> <span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/jobui/tempfile <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/null <span class="token assign-left variable">bs</span><span class="token operator">=</span>1M <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1024</span>

<span class="token comment"># \u67E5\u770B\u786C\u76D8\u578B\u53F7</span>
hdparm <span class="token parameter variable">-i</span> /dev/hda
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u521B\u5EFAlvm\u78C1\u76D8" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFAlvm\u78C1\u76D8" aria-hidden="true">#</a> \u521B\u5EFALVM\u78C1\u76D8</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u5C06\u786C\u76D8\u6DFB\u52A0\u5230pv\u5206\u533A</span>
<span class="token function">sudo</span> pvcreate /dev/sda
<span class="token function">sudo</span> pvcreate /dev/sdb
<span class="token function">sudo</span> pvcreate /dev/sdc
<span class="token function">sudo</span> pvcreate /dev/sdd
<span class="token comment">#\u67E5\u770Bpv\u5206\u533A\u4FE1\u606F</span>
<span class="token function">sudo</span> pvs

<span class="token comment">#\u521B\u5EFA\u5E76\u5C06sda\u52A0\u5165VG_SSD1</span>
<span class="token function">sudo</span> vgcreate VG_SSD1 /dev/sda
<span class="token comment">#\u5C06sdb\u52A0\u5165VG_SSD1</span>
<span class="token function">sudo</span> vgextend VG_SSD1 /dev/sdb

<span class="token comment">#\u521B\u5EFA\u5E76\u5C06sdc\u52A0\u5165VG_SSD2</span>
<span class="token function">sudo</span> vgcreate VG_SSD2 /dev/sdc
<span class="token comment">#\u5C06sdd\u52A0\u5165VG_SSD2</span>
<span class="token function">sudo</span> vgextend VG_SSD1 /dev/sdd

<span class="token comment">#\u67E5\u770Bvg\u5206\u533A\u4FE1\u606F</span>
<span class="token function">sudo</span> vgs
<span class="token comment">#\u67E5\u770Bvg\u8BE6\u60C5</span>
<span class="token function">sudo</span> vgdisplay VG_SSD1

<span class="token comment">#\u521B\u5EFAlv\u5206\u533A</span>
<span class="token function">sudo</span> lvcreate <span class="token parameter variable">--extents</span> <span class="token number">100</span>%FREE VG_SSD1 <span class="token parameter variable">-n</span> LV_SSD1
<span class="token function">sudo</span> lvcreate <span class="token parameter variable">--extents</span> <span class="token number">100</span>%FREE VG_SSD2 <span class="token parameter variable">-n</span> LV_SSD2
<span class="token comment">#\u67E5\u770Blv\u5206\u533A</span>
<span class="token function">sudo</span> lvs
<span class="token comment">#\u4EE5\u4E0A\u6B65\u9AA4\u521B\u5EFA\u5B8C\u4E86\u903B\u8F91\u5377\u63A5\u4E0B\u6765\u683C\u5F0F\u5316\u5206\u533A</span>
<span class="token function">sudo</span> mkfs.ext4 /dev/VG_SSD1/LV_SSD1
<span class="token function">sudo</span> mkfs.ext4 /dev/VG_SSD2/LV_SSD2

<span class="token comment">#\u6302\u8F7D\u5206\u533A</span>
<span class="token function">mount</span> <span class="token parameter variable">-o</span> noatime,nodiratime /dev/mapper/VG_SSD1-LV_SSD1 /ssd_jobui
<span class="token function">mount</span> <span class="token parameter variable">-o</span> noatime,nodiratime /dev/mapper/VG_SSD2-LV_SSD2 /ssd_company


lvm vgscan
lvm vgchange <span class="token parameter variable">-ay</span>
lvm lvs
\u6700\u540E\u4F7F\u7528e2fsck\u547D\u4EE4\u4FEE\u590D\u4E00\u4E0BLVM\u78C1\u76D8\uFF1A
e2fsck <span class="token parameter variable">-f</span> <span class="token parameter variable">-y</span> /dev/mapper/VolGroup00-LogVol00

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,45),p=[l];function t(c,r){return s(),a("div",null,p)}var v=n(i,[["render",t],["__file","linux\u57FA\u7840\u547D\u4EE4.html.vue"]]);export{v as default};
