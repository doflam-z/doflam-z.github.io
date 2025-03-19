import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.393e2086.js";const i={},l=e(`<h1 id="python\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#python\u7B14\u8BB0" aria-hidden="true">#</a> Python\u7B14\u8BB0</h1><h3 id="\u5B89\u88C5virtualenv\u865A\u62DF\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5virtualenv\u865A\u62DF\u73AF\u5883" aria-hidden="true">#</a> \u5B89\u88C5virtualenv\u865A\u62DF\u73AF\u5883</h3><p>\u5B89\u88C5virtualenv</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pip3 <span class="token function">install</span> virtualenv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u521B\u5EFA\u9879\u76EE\u76EE\u5F55app\u540C\u65F6\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3Avenv\u7684\u865A\u62DF\u73AF\u5883\uFF0C\u8FDB\u5165\u73AF\u5883</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#mac</span>
pip <span class="token function">install</span> virtualenv
python3 <span class="token parameter variable">-m</span> venv venv
<span class="token builtin class-name">source</span> venv/bin/activate

<span class="token comment">#win</span>
<span class="token comment">#\u6253\u5F00\u547D\u4EE4\u884C\u8F93\u5165 Set-ExecutionPolicy RemoteSigned</span>
pip <span class="token function">install</span> virtualenv
pip <span class="token function">install</span> virtualenvwrapper
<span class="token builtin class-name">cd</span> app
virtualenv venv
<span class="token comment">#\u8FDB\u5165\u865A\u62DF\u73AF\u5883</span>
.<span class="token punctuation">\\</span>venv<span class="token punctuation">\\</span>Scripts<span class="token punctuation">\\</span>activate
<span class="token comment">#\u79BB\u5F00\u865A\u62DF\u73AF\u5883</span>
.<span class="token punctuation">\\</span>venv<span class="token punctuation">\\</span>Scripts<span class="token punctuation">\\</span>deactivate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9000\u51FA\u865A\u62DF\u73AF\u5883</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>deactivate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5scrapy" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5scrapy" aria-hidden="true">#</a> \u5B89\u88C5Scrapy</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u5148\u5B89\u88C5\u4F9D\u8D56</span>
pip <span class="token function">install</span> wheel lxml pyOpenSSL Twisted
pip <span class="token function">install</span> <span class="token function">install</span> Scrapy
<span class="token comment">#\u521B\u5EFA\u9879\u76EE</span>
scrapy startproject tutorial

<span class="token comment">#\u521B\u5EFA\u7B2C\u4E00\u4E2A\u722C\u866B\u6587\u4EF6\uFF0C\u6307\u5B9A\u57DF\u540D</span>
scrapy genspider zhipin <span class="token string">&quot;zhipin.com&quot;</span>

<span class="token comment">#\u521B\u5EFA\u4E00\u4E2AXMLFeedSpider\u722C\u866B\u6587\u4EF6</span>
scrapy genspider <span class="token parameter variable">-t</span> xmlfeed lagou lagou.com

<span class="token comment">#\u8FD0\u884C\u4E00\u4E2A\u722C\u866B\u7A0B\u5E8F\uFF0C\u8F93\u51FA\u5230\u6587\u4EF6</span>
scrapy crawl mininova <span class="token parameter variable">-o</span> scraped_data.json 

<span class="token comment">#\u8FD0\u884C\u4E00\u4E2A\u722C\u866B\u7A0B\u5E8F\uFF0C\u5C06\u65E5\u5FD7\u8F93\u51FA\u5230\u6307\u5B9A\u76EE\u5F55</span>
scrpay crawl spider_name  <span class="token parameter variable">-s</span> <span class="token assign-left variable">LOG_FILE</span><span class="token operator">=</span>all.log

<span class="token comment">#\u914D\u7F6E\u6587\u4EF6settings.py</span>
<span class="token comment">#\u5F00\u542F\u4E0B\u8F7D\u5668\u4E2D\u95F4\u4EF6\uFF0C\u6570\u503C\u8D8A\u5C0F\u8D8A\u63A5\u8FD1\u63A7\u5236\u5668</span>
DOWNLOADER_MIDDLEWARES <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;companyProfile.middlewares.CompanyprofileDownloaderMiddleware&#39;</span><span class="token builtin class-name">:</span> None,
    <span class="token string">&#39;companyProfile.middlewares.AgentDownloaderMiddleware&#39;</span><span class="token builtin class-name">:</span> <span class="token number">543</span>,
    <span class="token string">&#39;companyProfile.middlewares.SeleniumDownloaderMiddleware&#39;</span><span class="token builtin class-name">:</span> <span class="token number">643</span>,
<span class="token punctuation">}</span>

<span class="token comment">#\u5F00\u542F\u7BA1\u9053</span>
ITEM_PIPELINES <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token string">&#39;companyProfile.pipelines.CompanyprofilePipeline&#39;</span><span class="token builtin class-name">:</span> <span class="token number">300</span>,
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="selenium\u9700\u8981chrome\u9A71\u52A8" tabindex="-1"><a class="header-anchor" href="#selenium\u9700\u8981chrome\u9A71\u52A8" aria-hidden="true">#</a> selenium\u9700\u8981chrome\u9A71\u52A8</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5chrome</span>
<span class="token function">sudo</span> <span class="token function">wget</span> https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> ./google-chrome-stable_current_amd64.deb
<span class="token comment"># \u4E0B\u8F7D\u9A71\u52A8</span>
<span class="token function">sudo</span> <span class="token function">wget</span> https://chromedriver.storage.googleapis.com/101.0.4951.41/chromedriver_linux64.zip
<span class="token comment"># \u89E3\u538B\u76F4\u63A5\u4F7F\u7528</span>
<span class="token function">sudo</span> <span class="token function">unzip</span> chromedriver_linux64.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5\u722C\u866B\u9700\u8981\u7684\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u722C\u866B\u9700\u8981\u7684\u5E93" aria-hidden="true">#</a> \u5B89\u88C5\u722C\u866B\u9700\u8981\u7684\u5E93</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> pip <span class="token function">install</span> beautifulsoup4 
 pip <span class="token function">install</span> requests
 pip <span class="token function">install</span> selenium
 pip <span class="token function">install</span> fake-useragent
 pip <span class="token function">install</span> redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5mysql-peewee-orm\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5mysql-peewee-orm\u5E93" aria-hidden="true">#</a> \u5B89\u88C5mysql peewee ORM\u5E93</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pip <span class="token function">install</span> pymysql
pip <span class="token function">install</span> peewee
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="peewee\u751F\u6210module\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#peewee\u751F\u6210module\u6587\u4EF6" aria-hidden="true">#</a> peewee\u751F\u6210module\u6587\u4EF6</h5><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>python <span class="token parameter variable">-m</span> pwiz <span class="token parameter variable">-e</span> mysql <span class="token parameter variable">-H</span> localhost <span class="token parameter variable">-p</span> <span class="token number">3306</span> <span class="token parameter variable">-u</span> \u6570\u636E\u5E93\u7528\u6237\u540D <span class="token parameter variable">-P</span> \u6570\u636E\u5E93\u5BC6\u7801 <span class="token parameter variable">-t</span> \u8868\u540D<span class="token punctuation">(</span>table name<span class="token punctuation">)</span> \u5E93\u540D<span class="token punctuation">(</span>database name<span class="token punctuation">)</span> <span class="token operator">&gt;</span> \u8981\u751F\u6210\u7684python\u6587\u4EF6\u540D\u79F0.py
python <span class="token parameter variable">-m</span> pwiz <span class="token parameter variable">-e</span> mysql <span class="token parameter variable">-H</span> <span class="token number">192.168</span>.1.14 <span class="token parameter variable">-p</span> <span class="token number">3306</span> <span class="token parameter variable">-u</span> jobSnatch_r <span class="token parameter variable">-P</span> <span class="token parameter variable">-t</span> tb_company_info jobui_snatch_company <span class="token operator">&gt;</span> tb_company_info.py

python <span class="token parameter variable">-m</span> pwiz <span class="token parameter variable">-e</span> mysql <span class="token parameter variable">-H</span> <span class="token number">192.168</span>.1.14 <span class="token parameter variable">-p</span> <span class="token number">3306</span> <span class="token parameter variable">-u</span> jobSnatch_r <span class="token parameter variable">-P</span> <span class="token parameter variable">-t</span> tb_company_content jobui_snatch_company <span class="token operator">&gt;</span> tb_company_info.py

python <span class="token parameter variable">-m</span> pwiz <span class="token parameter variable">-e</span> mysql <span class="token parameter variable">-H</span> <span class="token number">121.9</span>.201.145 <span class="token parameter variable">-p</span> <span class="token number">3307</span> <span class="token parameter variable">-u</span> jobSnatch_w <span class="token parameter variable">-P</span> <span class="token parameter variable">-t</span> tb_company_status jobui_snatch_company <span class="token operator">&gt;</span> tb_company_status.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u751F\u6210\u7684\u6587\u4EF6\u9700\u8981\u8F6C\u6210utf-8\u6587\u4EF6\u683C\u5F0F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>database = MySQLDatabase(&#39;jobui_snatch_company&#39;, host=&quot;192.168.1.14&quot;, user=&#39;jobSnatch_r&#39;, passwd=&#39;j89#do@k&#39;, port=3306)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>database = MySQLDatabase(&#39;jobui_snatch_company&#39;, host=&quot;192.168.1.14&quot;, user=&#39;jobSnatch_r&#39;, passwd=&#39;j89#do@k&#39;, port=3306)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5mongodb-orm\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5mongodb-orm\u5E93" aria-hidden="true">#</a> \u5B89\u88C5mongodb ORM\u5E93</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment">#\u5B89\u88C5pymongo3.12.3\uFF0C\u6700\u65B0\u7248\u672C\u9A8C\u8BC1\u4F1A\u62A5\u9519</span>
pip install  pymongo<span class="token operator">==</span><span class="token number">3.12</span><span class="token number">.3</span>
<span class="token comment">#\u5B89\u88C5MongoEngine</span>
python <span class="token operator">-</span>m pip install mongoengine

<span class="token comment">#\u8FDE\u63A5</span>
<span class="token keyword">from</span> mongoengine <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">from</span> env <span class="token keyword">import</span> <span class="token operator">*</span>

db <span class="token operator">=</span> <span class="token string">&#39;jobui_tmp&#39;</span>
config <span class="token operator">=</span> Env<span class="token punctuation">.</span>get_db_config<span class="token punctuation">(</span>db<span class="token punctuation">)</span>
connect<span class="token punctuation">(</span>db<span class="token punctuation">,</span> <span class="token operator">**</span>config<span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">CompanyProfile</span><span class="token punctuation">(</span>Document<span class="token punctuation">)</span><span class="token punctuation">:</span>
    _id <span class="token operator">=</span> IntField<span class="token punctuation">(</span>primary_key<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>  <span class="token comment"># \u516C\u53F8id</span>
    name <span class="token operator">=</span> StringField<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># \u516C\u53F8\u540D</span>
    domain <span class="token operator">=</span> StringField<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># \u6765\u6E90\u7F51\u5740</span>
    content <span class="token operator">=</span> StringField<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># \u516C\u53F8\u4ECB\u7ECD</span>

    meta <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;indexes&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>  <span class="token comment"># \u5EFA\u7D22\u5F15</span>
            <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;domain&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;content&#39;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

<span class="token comment">##\u5982\u679C\u6709\u4E3B\u952E\u5B57\u6BB5\uFF0C\u5219\u4E3B\u952E\u5B57\u6BB5\u4E0D\u80FD\u8BBE\u7F6E\u4E3AAutoField\u7C7B\u578B\uFF0C\u4F1A\u5BFC\u81F4\u63D2\u5165\u8BED\u53E5\u5F02\u5E38</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pip\u5BFC\u51FA\u3001\u5B89\u88C5\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#pip\u5BFC\u51FA\u3001\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a> PIP\u5BFC\u51FA\u3001\u5B89\u88C5\u4F9D\u8D56</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pip freeze <span class="token operator">&gt;</span> requirements.txt
pip <span class="token function">install</span> <span class="token parameter variable">-r</span> requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,25),p=[l];function t(c,o){return s(),a("div",null,p)}var u=n(i,[["render",t],["__file","Python.html.vue"]]);export{u as default};
