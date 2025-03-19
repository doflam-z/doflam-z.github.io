import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as a,e}from"./app.393e2086.js";const t={},p=e(`<p>Jenkins</p><p>Job Pll</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">jobuiphpdir</span><span class="token operator">=</span><span class="token string">&quot;jobuiV4 baseClassV4 Thrift captcha&quot;</span>
<span class="token assign-left variable">jobuihtmldir</span><span class="token operator">=</span><span class="token string">&quot;jobuiV4_html&quot;</span>

<span class="token builtin class-name">cd</span> /web/software/jenkins/workspace/jobui

<span class="token comment">#\u66F4\u65B0\u672C\u5730\u4ED3\u5E93\u5230\u6700\u65B0\u6539\u52A8</span>
<span class="token assign-left variable">process</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>pgrep <span class="token function">git</span><span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;###################&quot;</span> <span class="token operator">&gt;&gt;</span> /tmp/coding.log
<span class="token function">date</span> <span class="token string">&quot;+%Y%m%d %H:%M:%S&quot;</span> <span class="token operator">&gt;&gt;</span> /tmp/coding.log
<span class="token comment">#\u5224\u65ADgit pull\u8FDB\u7A0B\u662F\u5426\u5B58\u5728</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$process</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;git pull is exist&quot;</span> <span class="token operator">&gt;&gt;</span> /tmp/coding.log
        <span class="token builtin class-name">exit</span>
<span class="token keyword">fi</span>
<span class="token function">git</span> pull origin master <span class="token operator">&gt;&gt;</span> /tmp/coding.log  <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>

<span class="token function">sleep</span> <span class="token number">1</span>

<span class="token comment">#\u5224\u65ADgit pull\u547D\u4EE4\u662F\u5426\u8FD0\u884C\u5B8C\u6210</span>
<span class="token keyword">while</span> <span class="token boolean">true</span>
<span class="token keyword">do</span>
        <span class="token assign-left variable">process</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>pgrep <span class="token function">git</span><span class="token variable">\`</span></span>
        <span class="token comment">#[ -n str] \u5F53\u5B57\u7B26\u4E32\u957F\u5EA6\u5927\u4E8E0\u8FD4\u56DE\u771F </span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$process</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;git pull is running&quot;</span> <span class="token operator">&gt;&gt;</span> /tmp/coding.log
        <span class="token function">sleep</span> <span class="token number">2</span>
<span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;git pull is over&quot;</span> <span class="token operator">&gt;&gt;</span> /tmp/coding.log
        <span class="token builtin class-name">break</span>
        <span class="token keyword">fi</span>
<span class="token keyword">done</span>


<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token environment constant">$USER</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;jobui&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token keyword">for</span> <span class="token for-or-select variable">jpdir</span> <span class="token keyword">in</span> <span class="token variable">$jobuiphpdir</span>
    <span class="token keyword">do</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$jpdir</span>&quot;</span> <span class="token punctuation">]</span> <span class="token punctuation">;</span><span class="token keyword">then</span>
            <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>-------------------- /projectPHP/<span class="token variable">$jpdir</span> \u7684\u540C\u6B65\u5185\u5BB9\u5982\u4E0B --------------------<span class="token entity" title="\\n">\\n</span>&quot;</span>
            <span class="token function">rsync</span> <span class="token parameter variable">-av</span> <span class="token parameter variable">--delete</span> --exclude-from<span class="token operator">=</span>/web/software/jenkins/workspace/jobui/.gitignore <span class="token variable">$jpdir</span> /web/php/projectPHP/
        <span class="token keyword">fi</span>
    <span class="token keyword">done</span>

    <span class="token keyword">for</span> <span class="token for-or-select variable">jhdir</span> <span class="token keyword">in</span> <span class="token variable">$jobuihtmldir</span>
    <span class="token keyword">do</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$jhdir</span>&quot;</span> <span class="token punctuation">]</span> <span class="token punctuation">;</span><span class="token keyword">then</span>
            <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>-------------------- /projectHTML/<span class="token variable">$jhdir</span> \u7684\u540C\u6B65\u5185\u5BB9\u5982\u4E0B --------------------<span class="token entity" title="\\n">\\n</span>&quot;</span>
            <span class="token function">rsync</span> <span class="token parameter variable">-av</span> <span class="token parameter variable">--delete</span> --exclude-from<span class="token operator">=</span>/web/software/jenkins/workspace/jobui/.gitignore <span class="token variable">$jhdir</span> /web/php/projectHTML/
        <span class="token keyword">fi</span>
    <span class="token keyword">done</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;you are <span class="token environment constant">$USER</span> not jobui,change to the user and run it <span class="token entity" title="\\n">\\n</span>&quot;</span>
    <span class="token builtin class-name">exit</span>
<span class="token keyword">fi</span>

<span class="token comment">#rm -rf /dev/shm/nginx-data/proxy_cache_dir/*</span>

<span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Jobui pub</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">jobuiphpdir</span><span class="token operator">=</span><span class="token string">&quot;jobuiV4 baseClassV4 captcha&quot;</span>
<span class="token assign-left variable">jobuihtmldir</span><span class="token operator">=</span><span class="token string">&quot;jobuiV4_html&quot;</span>

<span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span><span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;start at <span class="token variable">$time</span> ######################<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;####### rsync jobui start #######<span class="token entity" title="\\n">\\n</span>&quot;</span>

<span class="token assign-left variable">ip</span><span class="token operator">=</span><span class="token string">&quot;132 133 134 135 136 137 138 141 144&quot;</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">var</span> <span class="token keyword">in</span> <span class="token variable">$ip</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\n">\\n</span>=======================================<span class="token entity" title="\\n">\\n</span>jobuiV4\u540C\u6B65\u76EE\u6807\u673A\u5668:192.168.2.<span class="token variable">$var</span> <span class="token entity" title="\\n">\\n</span>&quot;</span>
    <span class="token builtin class-name">cd</span> /web/php/projectPHP
    <span class="token keyword">for</span> <span class="token for-or-select variable">jpdir</span> <span class="token keyword">in</span> <span class="token variable">$jobuiphpdir</span>
    <span class="token keyword">do</span>
        <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>-------------------- /projectPHP/<span class="token variable">$jpdir</span> \u540C\u6B65\u5F00\u59CB --------------------<span class="token entity" title="\\n">\\n</span>&quot;</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$jpdir</span>&quot;</span> <span class="token punctuation">]</span> <span class="token punctuation">;</span><span class="token keyword">then</span>
                <span class="token function">rsync</span> <span class="token parameter variable">-av</span>  <span class="token parameter variable">--delete</span> <span class="token variable">$jpdir</span> <span class="token string">&#39;-e ssh -p 60011&#39;</span> jobui@192.168.2.<span class="token variable">$var</span>:/web/php/projectPHP/ <span class="token operator">&gt;&gt;</span> /tmp/jobui_rxync_remote.log
        <span class="token keyword">fi</span>
    <span class="token keyword">done</span>
    <span class="token builtin class-name">cd</span> /web/php/projectHTML
    <span class="token keyword">for</span> <span class="token for-or-select variable">jhdir</span> <span class="token keyword">in</span> <span class="token variable">$jobuihtmldir</span>
    <span class="token keyword">do</span>
        <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\n">\\n</span>------------------ /projectHTML/<span class="token variable">$jhdir</span> \u540C\u6B65\u5F00\u59CB --------------------<span class="token entity" title="\\n">\\n</span>&quot;</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$jhdir</span>&quot;</span> <span class="token punctuation">]</span> <span class="token punctuation">;</span><span class="token keyword">then</span>
                <span class="token function">rsync</span> <span class="token parameter variable">-av</span>  <span class="token parameter variable">--delete</span> <span class="token variable">$jhdir</span> <span class="token string">&#39;-e ssh -p 60011&#39;</span> jobui@192.168.2.<span class="token variable">$var</span>:/web/php/projectHTML/ <span class="token operator">&gt;&gt;</span> /tmp/jobui_rxync_remote.log
        <span class="token keyword">fi</span>
    <span class="token keyword">done</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;####### rsync jobui end #######&quot;</span>
<span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[p];function i(o,c){return n(),a("div",null,l)}var k=s(t,[["render",i],["__file","jenkins.html.vue"]]);export{k as default};
