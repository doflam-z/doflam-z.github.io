import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as a,e}from"./app.1d7c6309.js";const i={},t=e(`<h1 id="tp6\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#tp6\u7B14\u8BB0" aria-hidden="true">#</a> tp6\u7B14\u8BB0</h1><h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><p>\u5148\u5B89\u88C5composer</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-sS</span> https://getcomposer.org/installer <span class="token operator">|</span> php
<span class="token function">mv</span> composer.phar /usr/local/bin/composer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B89\u88C5\u9879\u76EE</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> create-project topthink/think tp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6D4B\u8BD5\u8FD0\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php think run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B89\u88C5\u6269\u5C55</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> require topthink/think-migration
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u521B\u5EFA\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php think migrate:create ArticleTable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FDB\u5165database\u76EE\u5F55\u4FEE\u6539\u4EE3\u7801</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>public <span class="token keyword">function</span> <span class="token function-name function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    // create the table
    <span class="token variable">$table</span>  <span class="token operator">=</span>  <span class="token variable">$this</span>-<span class="token operator">&gt;</span>table<span class="token punctuation">(</span><span class="token string">&#39;article&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$table</span>-<span class="token operator">&gt;</span>addColumn<span class="token punctuation">(</span><span class="token string">&#39;title&#39;</span>, <span class="token string">&#39;string&#39;</span>, <span class="token punctuation">[</span><span class="token string">&#39;comment&#39;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;\u6587\u7AE0\u6807\u9898&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    -<span class="token operator">&gt;</span>addColumn<span class="token punctuation">(</span><span class="token string">&#39;body&#39;</span>, <span class="token string">&#39;text&#39;</span>, <span class="token punctuation">[</span><span class="token string">&#39;comment&#39;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;\u6587\u7AE0\u5185\u5BB9&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    -<span class="token operator">&gt;</span>addTimestamps<span class="token punctuation">(</span><span class="token punctuation">)</span>
    -<span class="token operator">&gt;</span>create<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u5EFA\u8868</p><div class="language-sehll ext-sehll line-numbers-mode"><pre class="language-sehll"><code>php think migrate:run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u751F\u6210\u63A7\u5236\u5668\u3001\u6A21\u578B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> php think make:controller index@Demo 
 php think make:model Demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B89\u88C5\u5305</p><div class="language-sehll ext-sehll line-numbers-mode"><pre class="language-sehll"><code>composer install --ignore-platform-reqs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u591A\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u591A\u5E94\u7528" aria-hidden="true">#</a> \u591A\u5E94\u7528</h4><p>\u5B89\u88C5\u591A\u5E94\u7528\u6269\u5C55\uFF0C\u521B\u5EFA\u5E94\u7528\u76EE\u5F55</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> require topthink/think-multi-app 
php think build adimn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,23),p=[t];function l(c,o){return n(),a("div",null,p)}var u=s(i,[["render",l],["__file","tp6.html.vue"]]);export{u as default};