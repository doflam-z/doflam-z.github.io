import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as p}from"./app.8a8e374c.js";const e={},t=p(`<h1 id="php" tabindex="-1"><a class="header-anchor" href="#php" aria-hidden="true">#</a> PHP</h1><h3 id="\u5E38\u7528\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u51FD\u6570" aria-hidden="true">#</a> \u5E38\u7528\u51FD\u6570</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>parse_str \u2014 \u5C06\u5B57\u7B26\u4E32\u89E3\u6790\u6210\u591A\u4E2A\u53D8\u91CF
<span class="token function">parse_str</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;name=Bill&amp;age=60&quot;</span><span class="token punctuation">,</span><span class="token variable">$arr</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u67E5\u8BE2\u5B57\u7B26\u4E32\uFF0C\u7B2C\u4E8C\u4E2A\u4E3A\u7ED3\u679C\u6570\u7EC4</span>

<span class="token function">array_filter</span><span class="token punctuation">(</span> <span class="token keyword type-hint">array</span> <span class="token variable">$input</span><span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token keyword type-hint">callable</span> <span class="token variable">$callback</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">)</span> 
<span class="token comment">// \u7528\u56DE\u8C03\u51FD\u6570\u8FC7\u6EE4\u6570\u7EC4\u4E2D\u7684\u5355\u5143 \u4F9D\u6B21\u5C06 input \u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u503C\u4F20\u9012\u5230 callback \u51FD\u6570\u3002\u5982\u679C callback \u51FD\u6570\u8FD4\u56DE TRUE\uFF0C\u5219 input \u6570\u7EC4\u7684\u5F53\u524D\u503C\u4F1A\u88AB\u5305\u542B\u5728\u8FD4\u56DE\u7684\u7ED3\u679C\u6570\u7EC4\u4E2D\u3002\u6570\u7EC4\u7684\u952E\u540D\u4FDD\u7559\u4E0D\u53D8\uFF0C\u5982\u679C\u6CA1\u6709\u63D0\u4F9B callback \u51FD\u6570\uFF0C\u5C06\u5220\u9664 input \u4E2D\u6240\u6709\u7B49\u503C\u4E3A FALSE \u7684\u6761\u76EE</span>

explode <span class="token comment">//\u7528\u4E00\u4E2A\u5B57\u7B26\u4E32\u5206\u5272\u53E6\u4E00\u4E2A\u5B57\u7B26\u4E32</span>
range <span class="token comment">//\u5EFA\u7ACB\u4E00\u4E2A\u6307\u5B9A\u8303\u56F4\u7684\u6570\u7EC4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fpm" tabindex="-1"><a class="header-anchor" href="#fpm" aria-hidden="true">#</a> fpm</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#1\u3001\u67E5\u770Bphp-fpm\u7684\u8FDB\u7A0B\u4E2A\u6570</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&quot;php-fpm&quot;</span><span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&quot;pool&quot;</span><span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span>
<span class="token comment">#2\u3001\u67E5\u770B\u6BCF\u4E2Aphp-fpm\u5360\u7528\u7684\u5185\u5B58\u5927\u5C0F</span>
<span class="token function">ps</span> <span class="token parameter variable">-ylC</span> php-fpm <span class="token parameter variable">--sort:rss</span>
<span class="token comment">#3.\u67E5\u770BPHP-FPM\u5728\u4F60\u7684\u673A\u5668\u4E0A\u7684\u5E73\u5747\u5185\u5B58\u5360\u7528</span>
<span class="token function">ps</span> --no-headers <span class="token parameter variable">-o</span> <span class="token string">&quot;rss,cmd&quot;</span> <span class="token parameter variable">-C</span> php-fpm <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{ sum+=$1 } END { printf (&quot;%d%s\\n&quot;, sum/NR/1024,&quot;M&quot;) }&#39;</span>
<span class="token comment">#4.\u67E5\u770B\u5355\u4E2Aphp-fpm\u8FDB\u7A0B\u6D88\u8017\u5185\u5B58\u7684\u660E\u7EC6</span>
pmap <span class="token variable"><span class="token variable">$(</span>pgrep php-fpm<span class="token variable">)</span></span> <span class="token operator">|</span> <span class="token function">less</span>


<span class="token comment">#\u67E5\u770Bphp\u3001nginx\u7F16\u8BD1\u53C2\u6570</span>
nginx <span class="token parameter variable">-V</span>
php <span class="token parameter variable">-i</span> <span class="token operator">|</span><span class="token function">grep</span> configure

<span class="token comment">#grep\u4E0D\u8F93\u51FA\u6CE8\u91CA\u7684\u884C</span>
<span class="token function">grep</span> <span class="token string">&quot;^[^#;]&quot;</span> smb.conf

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u91CD\u542F\u591A\u4E2Aphp-fpm</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#php-fpm\u6DFB\u52A0service\u670D\u52A1</span>
<span class="token function">cp</span> /usr/local/src/php5.6.40/sapi/fpm/init.d.php-fpm /etc/init.d/php-fpm

update-rc.d php-fpm defaults
 
<span class="token comment"># \u6DFB\u52A0</span>
update-rc.d ServiceName defaults
 
<span class="token comment"># \u5220\u9664</span>
update-rc.d ServiceName remove

<span class="token comment">#\u5173\u95EDphp-fpm</span>
<span class="token function">pkill</span> php-fpm \u6216\u8005 <span class="token function">killall</span> php-fpm

<span class="token comment">#\u67E5\u770Bphp-fpm\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84</span>
<span class="token function">ps</span> aux <span class="token operator">|</span><span class="token function">grep</span> php-fpm

<span class="token comment">#\u67E5\u770B\u914D\u7F6E\u6587\u4EF6\uFF0C\u627E\u5230pid\u8DEF\u5F84</span>
pid <span class="token operator">=</span> /dev/shm/php-fpm-9001.pid

<span class="token comment">#\u6839\u636Epid\u91CD\u542Fphp-fpm</span>
<span class="token function">sudo</span> <span class="token function">kill</span> <span class="token parameter variable">-USR2</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /dev/shm/php-fpm-9001.pid<span class="token variable">\`</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="php\u591A\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#php\u591A\u7EBF\u7A0B" aria-hidden="true">#</a> php\u591A\u7EBF\u7A0B</h3><p>\u5F00\u542Fparallel\u591A\u7EBF\u7A0B\u6269\u5C55 --enable-maintainer-zts</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#parallel</span>
 <span class="token builtin class-name">cd</span> /usr/local/src/php7/parallel-1.1.4 <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
 /web/software/php-7.4.28/bin/phpize <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
 ./configure --with-php-config<span class="token operator">=</span>/web/software/php-7.4.28/bin/php-config <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
 <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u793A\u4F8B\uFF1A</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">require_once</span> <span class="token string single-quoted-string">&#39;baseClassV4/listen/BaseCache.php&#39;</span><span class="token punctuation">;</span>
<span class="token variable">$redis</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BaseCache</span> <span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;redis&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;default&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$startTime</span> <span class="token operator">=</span> <span class="token function">time</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$num</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token variable">$j</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token variable">$list</span> <span class="token operator">=</span> <span class="token function">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$path</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;baseClassV4/listen/BaseCache.php&#39;</span><span class="token punctuation">;</span>

<span class="token variable">$producer</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$parameters</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u7EBF\u7A0B\u8C03\u7528\u56DE\u8C03\u51FD\u6570\u4F53</span>
	<span class="token variable">$i</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token function">extract</span><span class="token punctuation">(</span><span class="token variable">$parameters</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
	<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$list</span> <span class="token keyword">as</span> <span class="token variable">$item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token variable">$r</span> <span class="token operator">=</span> <span class="token variable">$redis</span><span class="token operator">-&gt;</span><span class="token function">zIncrBy</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;test&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token variable">$threadNum</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$r</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">echo</span> <span class="token variable">$threadNum</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;:&#39;</span> <span class="token operator">.</span> <span class="token variable">$item</span> <span class="token operator">.</span> <span class="token constant">PHP_EOL</span><span class="token punctuation">;</span>
		<span class="token function">usleep</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token variable">$i</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function-definition function">start_threads</span><span class="token punctuation">(</span><span class="token variable">$list</span><span class="token punctuation">,</span> <span class="token variable">$producer</span><span class="token punctuation">,</span> <span class="token variable">$threadNum</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token variable">$parameters</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token variable">$path</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token variable">$sleep</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token variable">$list</span> <span class="token operator">=</span> <span class="token function">array_chunk</span><span class="token punctuation">(</span><span class="token variable">$list</span><span class="token punctuation">,</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token variable">$list</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token variable">$threadNum</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$list</span> <span class="token keyword">as</span> <span class="token variable">$key</span> <span class="token operator">=&gt;</span> <span class="token variable">$item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token variable">$parameters</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;list&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$item</span><span class="token punctuation">;</span>
		<span class="token variable">$parameters</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;threadNum&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$key</span><span class="token punctuation">;</span>
		<span class="token variable">$threads</span><span class="token punctuation">[</span><span class="token variable">$key</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>parallel<span class="token punctuation">\\</span>Runtime</span><span class="token punctuation">(</span><span class="token variable">$path</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token variable">$producer</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token variable">$parameters</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">empty</span><span class="token punctuation">(</span><span class="token variable">$threads</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$threads</span> <span class="token keyword">as</span> <span class="token variable">$key</span> <span class="token operator">=&gt;</span> <span class="token operator">&amp;</span><span class="token variable">$thread</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$thread</span><span class="token operator">-&gt;</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u68C0\u6D4B\u7EBF\u7A0B\u72B6\u6001\uFF0C\u8FD4\u56DEtrue\u65F6\u7EBF\u7A0B\u8FD0\u884C\u5B8C\u6BD5</span>
				<span class="token variable">$result</span> <span class="token operator">=</span> <span class="token variable">$thread</span><span class="token operator">-&gt;</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u83B7\u53D6\u7EBF\u7A0B\u5185\u51FD\u6570\u6267\u884C\u8FD4\u56DE\u7684\u7ED3\u679C</span>
				<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;ThreadId: <span class="token interpolation"><span class="token variable">$key</span></span> =&gt; result: <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$result</span><span class="token punctuation">}</span></span> (End)\\n&quot;</span><span class="token punctuation">;</span>
				<span class="token keyword">unset</span><span class="token punctuation">(</span><span class="token variable">$threads</span><span class="token punctuation">[</span><span class="token variable">$key</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token function">sleep</span><span class="token punctuation">(</span><span class="token variable">$sleep</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token function">start_threads</span><span class="token punctuation">(</span><span class="token variable">$list</span><span class="token punctuation">,</span> <span class="token variable">$producer</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;redis&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$redis</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token variable">$path</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),l=[t];function o(c,i){return s(),a("div",null,l)}var k=n(e,[["render",o],["__file","php.html.vue"]]);export{k as default};