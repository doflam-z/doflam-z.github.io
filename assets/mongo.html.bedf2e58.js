import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as l,a as n,b as o,e as a,d as s,r as p}from"./app.7ac8613b.js";const c={},u=a(`<h1 id="mongo" tabindex="-1"><a class="header-anchor" href="#mongo" aria-hidden="true">#</a> mongo</h1><h3 id="\u670D\u52A1\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u914D\u7F6E" aria-hidden="true">#</a> \u670D\u52A1\u914D\u7F6E</h3><h4 id="\u914D\u7F6E\u590D\u5236\u96C6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u590D\u5236\u96C6" aria-hidden="true">#</a> \u914D\u7F6E\u590D\u5236\u96C6</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8FDE\u63A5</span>
mongo <span class="token number">192.168</span>.2.134:12000
<span class="token comment"># \u521D\u59CB\u5316\uFF08\u7B2C\u4E00\u6B21\u914D\u7F6E\uFF09</span>
<span class="token operator">&gt;</span>rs.initiate<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;</span>rs.add<span class="token punctuation">(</span><span class="token string">&quot;hostname:120000&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># \u67E5\u770B\u672C\u673A\u72B6\u6001</span>
db.serverStatus<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># \u67E5\u770B\u96C6\u7FA4\u72B6\u6001</span>
<span class="token operator">&gt;</span>rs.status<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token operator">&gt;</span>rs.add<span class="token punctuation">(</span><span class="token punctuation">{</span>host:<span class="token string">&#39;hostname:12000&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>\u6DFB\u52A0\u4E00\u4E2A\u590D\u5236\u96C6<span class="token punctuation">)</span>
<span class="token operator">&gt;</span>rs.addArb<span class="token punctuation">(</span><span class="token string">&quot;hostnamet:30000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">(</span>\u6DFB\u52A0\u4E00\u4E2A\u6295\u7968\u8282\u70B9<span class="token punctuation">)</span>
<span class="token operator">&gt;</span>rs.remove<span class="token punctuation">(</span><span class="token string">&quot;hostname:30000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">(</span>\u5220\u9664\u8282\u70B9<span class="token punctuation">)</span>


/web/software/mongodb-3.0.7/bin/mongod <span class="token parameter variable">-f</span> /web/bcshell/mongodb/mongodbWT12000.conf <span class="token parameter variable">--rest</span> <span class="token parameter variable">--logpath</span><span class="token operator">=</span>/tmp/mongod.log<span class="token punctuation">(</span>\u8F93\u51FA\u65E5\u5FD7<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4FEE\u6539\u4F18\u5148\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u4F18\u5148\u7EA7" aria-hidden="true">#</a> \u4FEE\u6539\u4F18\u5148\u7EA7</h4><p>\u901A\u8FC7\u6539\u52A8priority\u7684\u503C\u6765\u5B9E\u73B0\uFF08\u9ED8\u8BA4\u7684\u4F18\u5148\u7EA7\u662F1\uFF080-100\uFF09\u3002priority\u7684\u503C\u8BBE\u7684\u8D8A\u5927\uFF0C\u5C31\u4F18\u5148\u6210\u4E3A\u4E3B\uFF09</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>PRIMARY<span class="token operator">&gt;</span> <span class="token assign-left variable">config</span><span class="token operator">=</span>rs.conf<span class="token punctuation">(</span><span class="token punctuation">)</span>
PRIMARY<span class="token operator">&gt;</span> config.members<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>.priority <span class="token operator">=</span> <span class="token number">2</span>       \u8FD9\u91CC\u8981\u6CE8\u610F\uFF1A0\u8868\u793A\u7B2C\u4E00\u4E2A\u8282\u70B9\uFF0C1\u8868\u793A\u7B2C\u4E8C\u4E2A\u8282\u70B9\uFF0C\u4EE5\u6B64\u7C7B\u63A8
PRIMARY<span class="token operator">&gt;</span> rs.reconfig<span class="token punctuation">(</span>config<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u542F\u52A8\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u547D\u4EE4" aria-hidden="true">#</a> \u542F\u52A8\u547D\u4EE4</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/web/software/mongodb-3.0.7/bin/mongod <span class="token parameter variable">-f</span> /web/bcshell/mongodb/mongodbWT12002.conf <span class="token parameter variable">--rest</span> <span class="token parameter variable">--logpath</span><span class="token operator">=</span>/tmp/mongod2.log
/web/software/mongodb-3.0.7/bin/mongod <span class="token parameter variable">-f</span> /web/bcshell/mongodb/mongodbWT12000.conf <span class="token parameter variable">--rest</span> <span class="token parameter variable">--logpath</span><span class="token operator">=</span>/tmp/mongod.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5173\u95ED\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5173\u95ED\u547D\u4EE4" aria-hidden="true">#</a> \u5173\u95ED\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>db.shutdownServer<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u521B\u5EFA\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u7528\u6237" aria-hidden="true">#</a> \u521B\u5EFA\u7528\u6237</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u8FDB\u53BBmongo\u540E\u5207\u6362\u5230admin\u5E93</span>
use admin
<span class="token comment">#\u521B\u5EFA\u7BA1\u7406\u5458\u7528\u6237</span>
db.createUser<span class="token punctuation">(</span><span class="token punctuation">{</span>user:<span class="token string">&quot;root&quot;</span>,pwd:<span class="token string">&quot;root123&quot;</span>,roles:<span class="token punctuation">[</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
db.createUser<span class="token punctuation">(</span><span class="token punctuation">{</span>user:<span class="token string">&quot;user&quot;</span>,pwd:<span class="token string">&quot;root123&quot;</span>,roles:<span class="token punctuation">[</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">#\u67E5\u770B\u7528\u6237</span>
show <span class="token function">users</span>
<span class="token comment">#\u5220\u9664\u7528\u6237</span>
db.dropUser<span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span>
<span class="token comment">#\u4FEE\u6539\u5BC6\u7801</span>
db.updateUser<span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span>,<span class="token punctuation">{</span>pwd:<span class="token string">&quot;123&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">#\u521B\u5EFA\u666E\u901A\u7528\u6237\uFF0C\u5E76\u6307\u5B9A\u6743\u9650</span>
db.createUser<span class="token punctuation">(</span><span class="token punctuation">{</span>
	user:<span class="token string">&quot;jobui&quot;</span>,pwd:<span class="token string">&quot;jobui123&quot;</span>,
	roles:<span class="token punctuation">[</span>
		<span class="token punctuation">{</span>role:<span class="token string">&quot;readWrite&quot;</span>,db:<span class="token string">&quot;tmp&quot;</span><span class="token punctuation">}</span>,
		<span class="token punctuation">{</span>role:<span class="token string">&quot;read&quot;</span>,db:<span class="token string">&quot;tmp2&quot;</span><span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">#\u521B\u5EFA\u4E00\u4E2A\u6709\u6240\u6709\u5E93\u6743\u9650\u7684\u7528\u6237</span>
db.createUser<span class="token punctuation">(</span><span class="token punctuation">{</span>
	user:<span class="token string">&quot;jobui_w&quot;</span>,pwd:<span class="token string">&quot;jobui123&quot;</span>,
	roles:<span class="token punctuation">[</span>
		<span class="token punctuation">{</span>role:<span class="token string">&quot;readWriteAnyDatabase&quot;</span>,db:<span class="token string">&quot;admin&quot;</span><span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">#\u4FEE\u6539\u6743\u9650</span>
db.grantRolesToUser<span class="token punctuation">(</span><span class="token string">&quot;jobui_w&quot;</span>, <span class="token punctuation">[</span><span class="token punctuation">{</span>role:<span class="token string">&quot;clusterAdmin&quot;</span>, db:<span class="token string">&quot;admin&quot;</span><span class="token punctuation">}</span>,<span class="token punctuation">]</span><span class="token punctuation">)</span>

db.createUser<span class="token punctuation">(</span> <span class="token punctuation">{</span> 
    user: <span class="token string">&quot;cluster&quot;</span>, 
    pwd: <span class="token string">&quot;cluster&quot;</span>, 
    roles: <span class="token punctuation">[</span> <span class="token punctuation">{</span> role: <span class="token string">&quot;clusterAdmin&quot;</span>, db: <span class="token string">&quot;admin&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">]</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

<span class="token comment">#\u751F\u6210\u5BC6\u94A5</span>
openssl rand <span class="token parameter variable">-base64</span> <span class="token number">100</span> <span class="token operator">&gt;</span>/web/shell/mongodb/mongo-keyfile
<span class="token function">chmod</span> <span class="token number">400</span> mongo-keyfile

mongod <span class="token parameter variable">-f</span> /web/shell/mongodb/mongodbWT12002.conf <span class="token parameter variable">--keyFile</span><span class="token operator">=</span>/web/shell/mongodb/mongo-keyfile
mongod <span class="token parameter variable">-f</span> /web/shell/mongodb/mongodbWT12003.conf <span class="token parameter variable">--keyFile</span><span class="token operator">=</span>/web/shell/mongodb/mongo-keyfile
mongod <span class="token parameter variable">-f</span> /web/shell/mongodb/mongodbWT12004.conf <span class="token parameter variable">--keyFile</span><span class="token operator">=</span>/web/shell/mongodb/mongo-keyfile

Read\uFF1A\u5141\u8BB8\u7528\u6237\u8BFB\u53D6\u6307\u5B9A\u6570\u636E\u5E93
readWrite\uFF1A\u5141\u8BB8\u7528\u6237\u8BFB\u5199\u6307\u5B9A\u6570\u636E\u5E93
dbAdmin\uFF1A\u5141\u8BB8\u7528\u6237\u5728\u6307\u5B9A\u6570\u636E\u5E93\u4E2D\u6267\u884C\u7BA1\u7406\u51FD\u6570\uFF0C\u5982\u7D22\u5F15\u521B\u5EFA\u3001\u5220\u9664\uFF0C\u67E5\u770B\u7EDF\u8BA1\u6216\u8BBF\u95EEsystem.profile
userAdmin\uFF1A\u5141\u8BB8\u7528\u6237\u5411system.users\u96C6\u5408\u5199\u5165\uFF0C\u53EF\u4EE5\u627E\u6307\u5B9A\u6570\u636E\u5E93\u91CC\u521B\u5EFA\u3001\u5220\u9664\u548C\u7BA1\u7406\u7528\u6237
clusterAdmin\uFF1A\u53EA\u5728admin\u6570\u636E\u5E93\u4E2D\u53EF\u7528\uFF0C\u8D4B\u4E88\u7528\u6237\u6240\u6709\u5206\u7247\u548C\u590D\u5236\u96C6\u76F8\u5173\u51FD\u6570\u7684\u7BA1\u7406\u6743\u9650\u3002
readAnyDatabase\uFF1A\u53EA\u5728admin\u6570\u636E\u5E93\u4E2D\u53EF\u7528\uFF0C\u8D4B\u4E88\u7528\u6237\u6240\u6709\u6570\u636E\u5E93\u7684\u8BFB\u6743\u9650
readWriteAnyDatabase\uFF1A\u53EA\u5728admin\u6570\u636E\u5E93\u4E2D\u53EF\u7528\uFF0C\u8D4B\u4E88\u7528\u6237\u6240\u6709\u6570\u636E\u5E93\u7684\u8BFB\u5199\u6743\u9650
userAdminAnyDatabase\uFF1A\u53EA\u5728admin\u6570\u636E\u5E93\u4E2D\u53EF\u7528\uFF0C\u8D4B\u4E88\u7528\u6237\u6240\u6709\u6570\u636E\u5E93\u7684userAdmin\u6743\u9650
dbAdminAnyDatabase\uFF1A\u53EA\u5728admin\u6570\u636E\u5E93\u4E2D\u53EF\u7528\uFF0C\u8D4B\u4E88\u7528\u6237\u6240\u6709\u6570\u636E\u5E93\u7684dbAdmin\u6743\u9650\u3002
root\uFF1A\u53EA\u5728admin\u6570\u636E\u5E93\u4E2D\u53EF\u7528\u3002\u8D85\u7EA7\u8D26\u53F7\uFF0C\u8D85\u7EA7\u6743\u9650

<span class="token comment"># \u9A8C\u8BC1\u5BC6\u7801</span>
<span class="token operator">&gt;</span>use admin<span class="token punctuation">;</span>
<span class="token operator">&gt;</span>db.auth<span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span>, <span class="token string">&quot;passwd&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># \u767B\u5F55\u76F4\u63A5\u9A8C\u8BC1\u5BC6\u7801</span>
mongo <span class="token number">192.168</span>.1.36:27017 <span class="token parameter variable">-u</span> <span class="token string">&quot;jobui_w&quot;</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;j&quot;</span> <span class="token parameter variable">--authenticationDatabase</span> <span class="token string">&quot;admin&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>db.createCollection<span class="token punctuation">(</span><span class="token string">&quot;JobProfessionID&quot;</span><span class="token punctuation">)</span>
show tables

<span class="token comment">#\u521B\u5EFA\u6570\u636E\u5E93</span>
<span class="token variable"><span class="token variable">\`</span>use DATABASE_NAME<span class="token variable">\`</span></span>

<span class="token comment">#\u5207\u6362\u5230\u6570\u636E\u5E93</span>
<span class="token variable"><span class="token variable">\`</span>use <span class="token builtin class-name">test</span><span class="token variable">\`</span></span>

<span class="token comment">#\u521B\u5EFA\u96C6\u5408</span>
<span class="token variable"><span class="token variable">\`</span>db.createCollection<span class="token punctuation">(</span><span class="token string">&quot;runoob&quot;</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>

<span class="token comment">#\u67E5\u770B\u96C6\u5408</span>
<span class="token variable"><span class="token variable">\`</span>show collections<span class="token variable">\`</span></span>

<span class="token comment">#\u5220\u9664\u96C6\u5408</span>
<span class="token variable"><span class="token variable">\`</span>db.\u96C6\u5408\u540D\u79F0.drop<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>

<span class="token comment">#\u67E5\u770B\u96C6\u5408\u6761\u6570</span>
db.getCollection<span class="token punctuation">(</span><span class="token string">&#39;userTmp&#39;</span><span class="token punctuation">)</span>.find<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>.count<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">#\u5224\u65AD\u5B57\u6BB5\u662F\u5426\u5B58\u5728</span>
db.collection.find<span class="token punctuation">(</span><span class="token punctuation">{</span> fieldName: <span class="token punctuation">{</span> <span class="token variable">$exists</span><span class="token builtin class-name">:</span> true/false <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">#\u4FEE\u6539\u96C6\u5408\u540D\u79F0</span>
db.oldCollectionName.renameCollection<span class="token punctuation">(</span><span class="token string">&quot;newCollectionName&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>db.createCollection<span class="token punctuation">(</span><span class="token string">&quot;userTmp_202110&quot;</span><span class="token punctuation">)</span>
db.getCollection<span class="token punctuation">(</span><span class="token string">&#39;companyTmp_202110&#39;</span><span class="token punctuation">)</span>.createIndex<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;c&#39;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>, <span class="token string">&#39;d&#39;</span><span class="token builtin class-name">:</span> -1<span class="token punctuation">}</span>, <span class="token punctuation">{</span>unique: true<span class="token punctuation">}</span><span class="token punctuation">)</span>
db.getCollection<span class="token punctuation">(</span><span class="token string">&#39;userTmp_202110&#39;</span><span class="token punctuation">)</span>.createIndex<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;u&#39;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>, <span class="token string">&#39;d&#39;</span><span class="token builtin class-name">:</span> -1<span class="token punctuation">}</span>, <span class="token punctuation">{</span>unique: true<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5BFC\u51FA\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u51FA\u6570\u636E\u5E93" aria-hidden="true">#</a> \u5BFC\u51FA\u6570\u636E\u5E93</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mongodump <span class="token parameter variable">-h</span> <span class="token number">192.168</span>.1.35:12000 <span class="token parameter variable">-d</span> jobui_tmp <span class="token parameter variable">-o</span> /ssd_data/mongobackups/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u5BFC\u5165\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u5165\u6570\u636E" aria-hidden="true">#</a> \u5BFC\u5165\u6570\u636E</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u65B0\u589E\u5B50\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u65B0\u589E\u5B50\u6587\u6863" aria-hidden="true">#</a> \u65B0\u589E\u5B50\u6587\u6863</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>db.mapping.update<span class="token punctuation">(</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;_id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;jobui_company&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token punctuation">{</span>
        <span class="token string">&quot;<span class="token variable">$set</span>&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;collect.company.ch&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;tb_company_honor&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                    _key: <span class="token string">&quot;CH_CompanyID&quot;</span>,
                    a: <span class="token string">&quot;CH_ID&quot;</span>,
                    b: <span class="token string">&quot;CH_Honor&quot;</span>,
                    lt: <span class="token string">&quot;CH_LastUpdateTime&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5220\u9664\u5B50\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u5B50\u6587\u6863" aria-hidden="true">#</a> \u5220\u9664\u5B50\u6587\u6863</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><h3 id="\u521B\u5EFA\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u7D22\u5F15" aria-hidden="true">#</a> \u521B\u5EFA\u7D22\u5F15</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u8BED\u6CD5\u4E2D Key \u503C\u4E3A\u4F60\u8981\u521B\u5EFA\u7684\u7D22\u5F15\u5B57\u6BB5\uFF0C1 \u4E3A\u6307\u5B9A\u6309\u5347\u5E8F\u521B\u5EFA\u7D22\u5F15\uFF0C\u5982\u679C\u4F60\u60F3\u6309\u964D\u5E8F\u6765\u521B\u5EFA\u7D22\u5F15\u6307\u5B9A\u4E3A -1 \u5373\u53EF\u3002</span>
<span class="token operator">&gt;</span>db.collection.createIndex<span class="token punctuation">(</span>keys, options<span class="token punctuation">)</span>

<span class="token comment">#\u5728\u540E\u53F0\u521B\u5EFA\u590D\u5408\u7D22\u5F15</span>
db.values.createIndex<span class="token punctuation">(</span><span class="token punctuation">{</span>open: <span class="token number">1</span>, close: <span class="token number">1</span><span class="token punctuation">}</span>, <span class="token punctuation">{</span>background: true<span class="token punctuation">}</span><span class="token punctuation">)</span>
db.col.createIndex<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;c&#39;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>, <span class="token string">&#39;d&#39;</span><span class="token builtin class-name">:</span> -1<span class="token punctuation">}</span>, <span class="token punctuation">{</span>unique: true<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">#\u521B\u5EFA\u5355\u6761\u7D22\u5F15</span>
db.getCollection<span class="token punctuation">(</span><span class="token string">&#39;userTmp_202109&#39;</span><span class="token punctuation">)</span>.createIndex<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;lut&#39;</span>:-1<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">#1\u3001\u67E5\u770B\u96C6\u5408\u7D22\u5F15</span>
db.getCollection<span class="token punctuation">(</span><span class="token string">&#39;userFollowCompany&#39;</span><span class="token punctuation">)</span>.getIndexes<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">#2\u3001\u67E5\u770B\u96C6\u5408\u7D22\u5F15\u5927\u5C0F</span>
db.getCollection<span class="token punctuation">(</span><span class="token string">&#39;userFollowCompany&#39;</span><span class="token punctuation">)</span>.totalIndexSize<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">#3\u3001\u5220\u9664\u96C6\u5408\u6240\u6709\u7D22\u5F15</span>
db.col.dropIndexes<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">#4\u3001\u5220\u9664\u96C6\u5408\u6307\u5B9A\u7D22\u5F15</span>
db.col.dropIndex<span class="token punctuation">(</span><span class="token string">&quot;\u7D22\u5F15\u540D\u79F0&quot;</span><span class="token punctuation">)</span>

<span class="token comment">#\u67E5\u770B\u7D22\u5F15\u5EFA\u7ACB\u72B6\u6001</span>
db.currentOp<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">#\u7EC8\u6B62\u7D22\u5F15\u7684\u521B\u5EFA</span>
db.killOp<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">#\u9AD8\u7EA7\u805A\u7C7B</span>
db.getCollection<span class="token punctuation">(</span><span class="token string">&#39;userFollowCompany&#39;</span><span class="token punctuation">)</span>.aggregate<span class="token punctuation">(</span><span class="token punctuation">[</span>
	<span class="token punctuation">{</span><span class="token variable">$match</span>:<span class="token punctuation">{</span>cid:<span class="token punctuation">{</span><span class="token variable">$in</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token number">788679</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>,
	<span class="token punctuation">{</span><span class="token variable">$unwind</span><span class="token builtin class-name">:</span><span class="token string">&quot;<span class="token variable">$cid</span>&quot;</span><span class="token punctuation">}</span>,
	<span class="token punctuation">{</span><span class="token variable">$match</span>:<span class="token punctuation">{</span>cid:<span class="token punctuation">{</span><span class="token variable">$ne</span>:788679<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>,
	<span class="token punctuation">{</span><span class="token variable">$group</span>:<span class="token punctuation">{</span>_id:<span class="token string">&quot;<span class="token variable">$cid</span>&quot;</span>,num:<span class="token punctuation">{</span><span class="token variable">$sum</span>:1<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>,
	<span class="token punctuation">{</span><span class="token variable">$sort</span>:<span class="token punctuation">{</span>num:-1<span class="token punctuation">}</span><span class="token punctuation">}</span>,
	<span class="token punctuation">{</span><span class="token variable">$limit</span>:100<span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>

db.getCollection<span class="token punctuation">(</span><span class="token string">&#39;userFollowCompany&#39;</span><span class="token punctuation">)</span>.aggregate<span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token variable">$match</span>:<span class="token punctuation">{</span><span class="token string">&#39;mint&#39;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token variable">$gt</span>:20220401<span class="token punctuation">}</span>, cid:<span class="token punctuation">{</span><span class="token variable">$in</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token number">15110</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>,
    <span class="token punctuation">{</span><span class="token variable">$unwind</span><span class="token builtin class-name">:</span><span class="token string">&quot;<span class="token variable">$cid</span>&quot;</span><span class="token punctuation">}</span>,
    <span class="token punctuation">{</span><span class="token variable">$group</span>:<span class="token punctuation">{</span>_id:<span class="token string">&quot;<span class="token variable">$cid</span>&quot;</span>,num:<span class="token punctuation">{</span><span class="token variable">$sum</span>:1<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>,
    <span class="token punctuation">{</span><span class="token variable">$sort</span>:<span class="token punctuation">{</span>num:-1<span class="token punctuation">}</span><span class="token punctuation">}</span>,
    <span class="token punctuation">{</span><span class="token variable">$limit</span>:100<span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>

db.getCollection<span class="token punctuation">(</span><span class="token string">&#39;company_profile&#39;</span><span class="token punctuation">)</span>.aggregate<span class="token punctuation">(</span><span class="token punctuation">[</span>
	<span class="token punctuation">{</span><span class="token variable">$group</span>:<span class="token punctuation">{</span>_id:<span class="token string">&quot;<span class="token variable">$domain</span>&quot;</span>,num:<span class="token punctuation">{</span><span class="token variable">$sum</span>:1<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>,
	<span class="token punctuation">{</span><span class="token variable">$sort</span>:<span class="token punctuation">{</span>num:-1<span class="token punctuation">}</span><span class="token punctuation">}</span>,
	<span class="token punctuation">{</span><span class="token variable">$limit</span>:100<span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="createindex-\u63A5\u6536\u53EF\u9009\u53C2\u6570-\u53EF\u9009\u53C2\u6570\u5217\u8868\u5982\u4E0B" tabindex="-1"><a class="header-anchor" href="#createindex-\u63A5\u6536\u53EF\u9009\u53C2\u6570-\u53EF\u9009\u53C2\u6570\u5217\u8868\u5982\u4E0B" aria-hidden="true">#</a> createIndex() \u63A5\u6536\u53EF\u9009\u53C2\u6570\uFF0C\u53EF\u9009\u53C2\u6570\u5217\u8868\u5982\u4E0B\uFF1A</h5><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">background</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">\u5EFA\u7D22\u5F15\u8FC7\u7A0B\u4F1A\u963B\u585E\u5176\u5B83\u6570\u636E\u5E93\u64CD\u4F5C\uFF0Cbackground\u53EF\u6307\u5B9A\u4EE5\u540E\u53F0\u65B9\u5F0F\u521B\u5EFA\u7D22\u5F15\uFF0C\u5373\u589E\u52A0 &quot;background&quot; \u53EF\u9009\u53C2\u6570\u3002 &quot;background&quot; \u9ED8\u8BA4\u503C\u4E3A<strong>false</strong>\u3002</td></tr><tr><td style="text-align:left;">unique</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">\u5EFA\u7ACB\u7684\u7D22\u5F15\u662F\u5426\u552F\u4E00\u3002\u6307\u5B9A\u4E3Atrue\u521B\u5EFA\u552F\u4E00\u7D22\u5F15\u3002\u9ED8\u8BA4\u503C\u4E3A<strong>false</strong>.</td></tr><tr><td style="text-align:left;">name</td><td style="text-align:left;">string</td><td style="text-align:left;">\u7D22\u5F15\u7684\u540D\u79F0\u3002\u5982\u679C\u672A\u6307\u5B9A\uFF0CMongoDB\u7684\u901A\u8FC7\u8FDE\u63A5\u7D22\u5F15\u7684\u5B57\u6BB5\u540D\u548C\u6392\u5E8F\u987A\u5E8F\u751F\u6210\u4E00\u4E2A\u7D22\u5F15\u540D\u79F0\u3002</td></tr><tr><td style="text-align:left;">dropDups</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">**3.0+\u7248\u672C\u5DF2\u5E9F\u5F03\u3002**\u5728\u5EFA\u7ACB\u552F\u4E00\u7D22\u5F15\u65F6\u662F\u5426\u5220\u9664\u91CD\u590D\u8BB0\u5F55,\u6307\u5B9A true \u521B\u5EFA\u552F\u4E00\u7D22\u5F15\u3002\u9ED8\u8BA4\u503C\u4E3A <strong>false</strong>.</td></tr><tr><td style="text-align:left;">sparse</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">\u5BF9\u6587\u6863\u4E2D\u4E0D\u5B58\u5728\u7684\u5B57\u6BB5\u6570\u636E\u4E0D\u542F\u7528\u7D22\u5F15\uFF1B\u8FD9\u4E2A\u53C2\u6570\u9700\u8981\u7279\u522B\u6CE8\u610F\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E3Atrue\u7684\u8BDD\uFF0C\u5728\u7D22\u5F15\u5B57\u6BB5\u4E2D\u4E0D\u4F1A\u67E5\u8BE2\u51FA\u4E0D\u5305\u542B\u5BF9\u5E94\u5B57\u6BB5\u7684\u6587\u6863.\u3002\u9ED8\u8BA4\u503C\u4E3A <strong>false</strong>.</td></tr><tr><td style="text-align:left;">expireAfterSeconds</td><td style="text-align:left;">integer</td><td style="text-align:left;">\u6307\u5B9A\u4E00\u4E2A\u4EE5\u79D2\u4E3A\u5355\u4F4D\u7684\u6570\u503C\uFF0C\u5B8C\u6210 TTL\u8BBE\u5B9A\uFF0C\u8BBE\u5B9A\u96C6\u5408\u7684\u751F\u5B58\u65F6\u95F4\u3002</td></tr><tr><td style="text-align:left;">v</td><td style="text-align:left;">index version</td><td style="text-align:left;">\u7D22\u5F15\u7684\u7248\u672C\u53F7\u3002\u9ED8\u8BA4\u7684\u7D22\u5F15\u7248\u672C\u53D6\u51B3\u4E8Emongod\u521B\u5EFA\u7D22\u5F15\u65F6\u8FD0\u884C\u7684\u7248\u672C\u3002</td></tr><tr><td style="text-align:left;">weights</td><td style="text-align:left;">document</td><td style="text-align:left;">\u7D22\u5F15\u6743\u91CD\u503C\uFF0C\u6570\u503C\u5728 1 \u5230 99,999 \u4E4B\u95F4\uFF0C\u8868\u793A\u8BE5\u7D22\u5F15\u76F8\u5BF9\u4E8E\u5176\u4ED6\u7D22\u5F15\u5B57\u6BB5\u7684\u5F97\u5206\u6743\u91CD\u3002</td></tr><tr><td style="text-align:left;">default_language</td><td style="text-align:left;">string</td><td style="text-align:left;">\u5BF9\u4E8E\u6587\u672C\u7D22\u5F15\uFF0C\u8BE5\u53C2\u6570\u51B3\u5B9A\u4E86\u505C\u7528\u8BCD\u53CA\u8BCD\u5E72\u548C\u8BCD\u5668\u7684\u89C4\u5219\u7684\u5217\u8868\u3002 \u9ED8\u8BA4\u4E3A\u82F1\u8BED</td></tr><tr><td style="text-align:left;">language_override</td><td style="text-align:left;">string</td><td style="text-align:left;">\u5BF9\u4E8E\u6587\u672C\u7D22\u5F15\uFF0C\u8BE5\u53C2\u6570\u6307\u5B9A\u4E86\u5305\u542B\u5728\u6587\u6863\u4E2D\u7684\u5B57\u6BB5\u540D\uFF0C\u8BED\u8A00\u8986\u76D6\u9ED8\u8BA4\u7684language\uFF0C\u9ED8\u8BA4\u503C\u4E3A language.</td></tr></tbody></table>`,28),d={id:"\u901A\u8FC7explian-\u5206\u6790\u6267\u884C\u60C5\u51B5",tabindex:"-1"},r=n("a",{class:"header-anchor",href:"#\u901A\u8FC7explian-\u5206\u6790\u6267\u884C\u60C5\u51B5","aria-hidden":"true"},"#",-1),v=s(" \u901A\u8FC7"),m={href:"https://docs.mongodb.com/manual/reference/method/cursor.explain/",target:"_blank",rel:"noopener noreferrer"},b=s("explian()"),k=s("\u5206\u6790\u6267\u884C\u60C5\u51B5"),g=a(`<p>db.getCollection(&#39;companyTmp&#39;).find({c:14298217,d:&quot;20210829&quot;}).explain()</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">{</span>
    <span class="token string">&quot;queryPlanner&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;plannerVersion&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
        <span class="token string">&quot;namespace&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;jobui_tmp.companyTmp&quot;</span>,
        <span class="token string">&quot;indexFilterSet&quot;</span> <span class="token builtin class-name">:</span> false,
        <span class="token string">&quot;parsedQuery&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;<span class="token variable">$and</span>&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span> 
                <span class="token punctuation">{</span>
                    <span class="token string">&quot;c&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                        <span class="token string">&quot;<span class="token variable">$eq</span>&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">14298217.0</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>, 
                <span class="token punctuation">{</span>
                    <span class="token string">&quot;d&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                        <span class="token string">&quot;<span class="token variable">$eq</span>&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;20210829&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;winningPlan&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;stage&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;FETCH&quot;</span>,
            <span class="token string">&quot;inputStage&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;stage&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;IXSCAN&quot;</span>,
                <span class="token string">&quot;keyPattern&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                    <span class="token string">&quot;c&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1.0</span>,
                    <span class="token string">&quot;d&quot;</span> <span class="token builtin class-name">:</span> <span class="token parameter variable">-1.0</span>
                <span class="token punctuation">}</span>,
                <span class="token string">&quot;indexName&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;c_1_d_-1&quot;</span>,
                <span class="token string">&quot;isMultiKey&quot;</span> <span class="token builtin class-name">:</span> false,
                <span class="token string">&quot;direction&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;forward&quot;</span>,
                <span class="token string">&quot;indexBounds&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                    <span class="token string">&quot;c&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span> 
                        <span class="token string">&quot;[14298217.0, 14298217.0]&quot;</span>
                    <span class="token punctuation">]</span>,
                    <span class="token string">&quot;d&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span> 
                        <span class="token string">&quot;[<span class="token entity" title="\\&quot;">\\&quot;</span>20210829<span class="token entity" title="\\&quot;">\\&quot;</span>, <span class="token entity" title="\\&quot;">\\&quot;</span>20210829<span class="token entity" title="\\&quot;">\\&quot;</span>]&quot;</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;rejectedPlans&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;serverInfo&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;host&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;localhost.localdomain&quot;</span>,
        <span class="token string">&quot;port&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">12000</span>,
        <span class="token string">&quot;version&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;3.0.7&quot;</span>,
        <span class="token string">&quot;gitVersion&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;6ce7cbe8c6b899552dadd907604559806aa2e9bd&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;ok&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1.0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="php7\u64CD\u4F5Cmongodb\u7C7B" tabindex="-1"><a class="header-anchor" href="#php7\u64CD\u4F5Cmongodb\u7C7B" aria-hidden="true">#</a> php7\u64CD\u4F5Cmongodb\u7C7B</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token doc-comment comment">/**
 * desc
 * version    1.0
 * author    user
 * date    2021/12/22
 */</span>


<span class="token variable">$manager</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified">MongoDB<span class="token punctuation">\\</span>Driver<span class="token punctuation">\\</span>Manager</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;mongodb://192.168.1.35:12000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u63D2\u5165\u6570\u636E</span>
<span class="token variable">$bulk</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified">MongoDB<span class="token punctuation">\\</span>Driver<span class="token punctuation">\\</span>BulkWrite</span><span class="token punctuation">;</span>
<span class="token variable">$bulk</span><span class="token operator">-&gt;</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;x&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;\u83DC\u9E1F\u6559\u7A0B&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;url&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;http://www.runoob.com&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$bulk</span><span class="token operator">-&gt;</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;x&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;Google&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;url&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;http://www.google.com&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$bulk</span><span class="token operator">-&gt;</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;x&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;taobao&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;url&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;http://www.taobao.com&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$manager</span><span class="token operator">-&gt;</span><span class="token function">executeBulkWrite</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;test.sites&#39;</span><span class="token punctuation">,</span> <span class="token variable">$bulk</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$filter</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;x&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;$gt&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">$options</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
	<span class="token string single-quoted-string">&#39;projection&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token string single-quoted-string">&#39;sort&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;x&#39;</span> <span class="token operator">=&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// \u67E5\u8BE2\u6570\u636E</span>
<span class="token variable">$query</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified">MongoDB<span class="token punctuation">\\</span>Driver<span class="token punctuation">\\</span>Query</span><span class="token punctuation">(</span><span class="token variable">$filter</span><span class="token punctuation">,</span> <span class="token variable">$options</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$cursor</span> <span class="token operator">=</span> <span class="token variable">$manager</span><span class="token operator">-&gt;</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;test.sites&#39;</span><span class="token punctuation">,</span> <span class="token variable">$query</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$cursor</span> <span class="token keyword">as</span> <span class="token variable">$document</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">print_r</span><span class="token punctuation">(</span><span class="token variable">$document</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">//\u66F4\u65B0\u6570\u636E</span>
<span class="token variable">$bulk</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified">MongoDB<span class="token punctuation">\\</span>Driver<span class="token punctuation">\\</span>BulkWrite</span><span class="token punctuation">;</span>
<span class="token variable">$bulk</span><span class="token operator">-&gt;</span><span class="token function">update</span><span class="token punctuation">(</span>
	<span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;x&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;$set&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;\u83DC\u9E1F\u5DE5\u5177&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;url&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;tool.runoob.com&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;multi&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">false</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;upsert&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">false</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$writeConcern</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified">MongoDB<span class="token punctuation">\\</span>Driver<span class="token punctuation">\\</span>WriteConcern</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified static-context">MongoDB<span class="token punctuation">\\</span>Driver<span class="token punctuation">\\</span>WriteConcern</span><span class="token operator">::</span><span class="token constant">MAJORITY</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$result</span> <span class="token operator">=</span> <span class="token variable">$manager</span><span class="token operator">-&gt;</span><span class="token function">executeBulkWrite</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;test.sites&#39;</span><span class="token punctuation">,</span> <span class="token variable">$bulk</span><span class="token punctuation">,</span> <span class="token variable">$writeConcern</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">//\u5220\u9664\u6570\u636E</span>
<span class="token variable">$bulk</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified">MongoDB<span class="token punctuation">\\</span>Driver<span class="token punctuation">\\</span>BulkWrite</span><span class="token punctuation">;</span>
<span class="token variable">$bulk</span><span class="token operator">-&gt;</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;likes&#39;</span> <span class="token operator">=&gt;</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;$gt&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;limit&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// limit \u4E3A 1 \u65F6\uFF0C\u5220\u9664\u7B2C\u4E00\u6761\u5339\u914D\u6570\u636E</span>
<span class="token comment">//$bulk-&gt;delete([&#39;x&#39; =&gt; 2], [&#39;limit&#39; =&gt; 0]);   // limit \u4E3A 0 \u65F6\uFF0C\u5220\u9664\u6240\u6709\u5339\u914D\u6570\u636E</span>

<span class="token variable">$writeConcern</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified">MongoDB<span class="token punctuation">\\</span>Driver<span class="token punctuation">\\</span>WriteConcern</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified static-context">MongoDB<span class="token punctuation">\\</span>Driver<span class="token punctuation">\\</span>WriteConcern</span><span class="token operator">::</span><span class="token constant">MAJORITY</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$result</span> <span class="token operator">=</span> <span class="token variable">$manager</span><span class="token operator">-&gt;</span><span class="token function">executeBulkWrite</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;jobui_tmp.autoRunRecord&#39;</span><span class="token punctuation">,</span> <span class="token variable">$bulk</span><span class="token punctuation">,</span> <span class="token variable">$writeConcern</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">exit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">//php5</span>

<span class="token variable">$m</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MongoClient</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;mongodb://192.168.1.24:27017&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8FDE\u63A5\u9ED8\u8BA4\u4E3B\u673A\u548C\u7AEF\u53E3\u4E3A\uFF1Amongodb://localhost:27017</span>
<span class="token variable">$db</span> <span class="token operator">=</span> <span class="token variable">$m</span><span class="token operator">-&gt;</span><span class="token property">count</span><span class="token punctuation">;</span> <span class="token comment">// \u9009\u62E9\u4E00\u4E2A\u6570\u636E\u5E93</span>
<span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token variable">$db</span><span class="token operator">-&gt;</span><span class="token property">BlackList</span><span class="token punctuation">;</span> <span class="token comment">// \u9009\u62E9\u96C6\u5408</span>

<span class="token comment">//\u63D2\u5165</span>
<span class="token comment">//$db = $m-&gt;test; // \u83B7\u53D6\u540D\u79F0\u4E3A &quot;test&quot; \u7684\u6570\u636E\u5E93</span>
<span class="token comment">//$collection = $db-&gt;createCollection(&quot;runoob&quot;);</span>
<span class="token comment">//echo &quot;\u96C6\u5408\u521B\u5EFA\u6210\u529F&quot;;</span>
<span class="token comment">//$collection = $db-&gt;runoob; // \u9009\u62E9\u96C6\u5408</span>
<span class="token comment">//$document = array(</span>
<span class="token comment">//	&quot;title&quot; =&gt; &quot;MongoDB&quot;,</span>
<span class="token comment">//	&quot;description&quot; =&gt; &quot;database&quot;,</span>
<span class="token comment">//	&quot;likes&quot; =&gt; 100,</span>
<span class="token comment">//	&quot;url&quot; =&gt; &quot;http://www.runoob.com/mongodb/&quot;,</span>
<span class="token comment">//	&quot;by&quot;, &quot;\u83DC\u9E1F\u6559\u7A0B&quot;</span>
<span class="token comment">//);</span>
<span class="token comment">//$collection-&gt;insert($document);</span>
<span class="token comment">//echo &quot;\u6570\u636E\u63D2\u5165\u6210\u529F&quot;;</span>


<span class="token comment">//$collection = $db-&gt;runoob; // \u9009\u62E9\u96C6\u5408</span>

<span class="token variable">$cursor</span> <span class="token operator">=</span> <span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;f&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;true&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;&lt;pre&gt;&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token variable">$doc</span> <span class="token operator">=</span> <span class="token variable">$cursor</span><span class="token operator">-&gt;</span><span class="token function">getNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//\u5FAA\u73AF\u8BFB\u53D6\u6BCF\u4E2A\u5339\u914D\u7684\u6587\u6863</span>
	<span class="token function">print_r</span><span class="token punctuation">(</span><span class="token variable">$doc</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;&lt;pre&gt;&#39;</span><span class="token punctuation">;</span>
<span class="token function">print_r</span><span class="token punctuation">(</span><span class="token variable">$cursor</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">exit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mongo\u7684aggregate\u805A\u5408\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#mongo\u7684aggregate\u805A\u5408\u64CD\u4F5C" aria-hidden="true">#</a> mongo\u7684aggregate\u805A\u5408\u64CD\u4F5C</h3><h4 id="mongodb\u4E2D\u805A\u5408-aggregate-\u7684\u5177\u4F53\u4F7F\u7528\u7ED3\u5408php" tabindex="-1"><a class="header-anchor" href="#mongodb\u4E2D\u805A\u5408-aggregate-\u7684\u5177\u4F53\u4F7F\u7528\u7ED3\u5408php" aria-hidden="true">#</a> mongoDB\u4E2D\u805A\u5408(aggregate)\u7684\u5177\u4F53\u4F7F\u7528\u7ED3\u5408PHP</h4><p>\u6700\u8FD1\u5728\u5B66\u4E60mongoDB\u7684\u4F7F\u7528\uFF0C\u672C\u6587\u6765\u4ECB\u7ECD\u4E00\u4E0B\u5176\u4E2Daggregate\u7684\u5177\u4F53\u4F7F\u7528</p><p>\u5148\u6765\u770B\u4E00\u4E2A\u5206\u7EC4\u7684\u4F8B\u5B50\uFF0C\u672C\u4F8B\u4E2D<code>$group</code>\u662F\u4E00\u4E2A\u7BA1\u9053\u64CD\u4F5C\u7B26\uFF0C\u83B7\u5F97\u7684\u7ED3\u679C\u53EF\u4EE5\u63A5\u7740\u8F93\u51FA\u5230\u4E0B\u4E00\u4E2A\u7BA1\u9053\uFF0C\u800C\u5185\u90E8\u7684<code>$sum</code>\u662F\u4E00\u4E2A\u8868\u8FBE\u5F0F\u64CD\u4F5C\u7B26\u3002</p><h4 id="\u7528-group-\u4E3E\u4E2A\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u7528-group-\u4E3E\u4E2A\u4F8B\u5B50" aria-hidden="true">#</a> \u7528<code>$group</code> \u4E3E\u4E2A\u4F8B\u5B50</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5C06document\u5206\u7EC4\uFF0C\u7528\u4F5C\u7EDF\u8BA1\u7ED3\u679C

    db.Ubisoft.aggregate([ // aggregate\u65B9\u6CD5\u63A5\u6536\u7684\u662F\u4E00\u4E2A\u6570\u7EC4
        {
            $group: {
                _id: &#39;$time&#39;, 
                num: {$sum: 1}
            }
        }
    ])
    // \u8FD9\u91CC\u7684_id\u5B57\u6BB5\u8868\u793A\u4F60\u8981\u57FA\u4E8E\u54EA\u4E2A\u5B57\u6BB5\u6765\u8FDB\u884C\u5206\u7EC4(\u5373\u5236\u5B9A\u5B57\u6BB5\u503C\u76F8\u540C\u7684\u4E3A\u4E00\u7EC4)\uFF0C\u8FD9\u91CC\u7684$time\u5C31\u8868\u793A\u8981\u57FA\u4E8Etime\u5B57\u6BB5\u6765\u8FDB\u884C\u5206\u7EC4

    // \u4E0B\u9762\u7684num\u5B57\u6BB5\u7684\u503C$sum: 1\u8868\u793A\u7684\u662F\u83B7\u53D6\u6EE1\u8DB3time\u5B57\u6BB5\u76F8\u540C\u7684\u8FD9\u4E00\u7EC4\u7684\u6570\u91CF\u4E58\u4EE5\u540E\u9762\u7ED9\u5B9A\u7684\u503C(\u672C\u4F8B\u4E3A1\uFF0C\u90A3\u4E48\u5C31\u662F\u540C\u7EC4\u7684\u6570\u91CF)\u3002
12345678910111213
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u90A3\u4E48\u770B\u5B8C\u8FD9\u4E2A\u4F8B\u5B50\u4E4B\u540E\uFF0CmongoDB\u4E2D\u8FD8\u6709\u5176\u4ED6\u7684\u4E00\u4E9B\u7BA1\u9053\u64CD\u4F5C\u7B26\u548C\u8868\u8FBE\u5F0F\u64CD\u4F5C\u7B26\uFF1A</p><h4 id="\u7BA1\u9053\u64CD\u4F5C\u7B26" tabindex="-1"><a class="header-anchor" href="#\u7BA1\u9053\u64CD\u4F5C\u7B26" aria-hidden="true">#</a> \u7BA1\u9053\u64CD\u4F5C\u7B26</h4><table><thead><tr><th style="text-align:left;">\u5E38\u7528\u7BA1\u9053</th><th style="text-align:left;">\u542B\u4E49</th></tr></thead><tbody><tr><td style="text-align:left;">$group</td><td style="text-align:left;">\u5C06collection\u4E2D\u7684document\u5206\u7EC4\uFF0C\u53EF\u7528\u4E8E\u7EDF\u8BA1\u7ED3\u679C</td></tr><tr><td style="text-align:left;">$match</td><td style="text-align:left;">\u8FC7\u6EE4\u6570\u636E\uFF0C\u53EA\u8F93\u51FA\u7B26\u5408\u7ED3\u679C\u7684\u6587\u6863</td></tr><tr><td style="text-align:left;">$project</td><td style="text-align:left;">\u4FEE\u6539\u8F93\u5165\u6587\u6863\u7684\u7ED3\u6784(\u4F8B\u5982\u91CD\u547D\u540D\uFF0C\u589E\u52A0\u3001\u5220\u9664\u5B57\u6BB5\uFF0C\u521B\u5EFA\u7ED3\u7B97\u7ED3\u679C\u7B49)</td></tr><tr><td style="text-align:left;">$sort</td><td style="text-align:left;">\u5C06\u7ED3\u679C\u8FDB\u884C\u6392\u5E8F\u540E\u8F93\u51FA</td></tr><tr><td style="text-align:left;">$limit</td><td style="text-align:left;">\u9650\u5236\u7BA1\u9053\u8F93\u51FA\u7684\u7ED3\u679C\u4E2A\u6570</td></tr><tr><td style="text-align:left;">$skip</td><td style="text-align:left;">\u8DF3\u8FC7\u5236\u5B9A\u6570\u91CF\u7684\u7ED3\u679C\uFF0C\u5E76\u4E14\u8FD4\u56DE\u5269\u4E0B\u7684\u7ED3\u679C</td></tr><tr><td style="text-align:left;">$unwind</td><td style="text-align:left;">\u5C06\u6570\u7EC4\u7C7B\u578B\u7684\u5B57\u6BB5\u8FDB\u884C\u62C6\u5206</td></tr></tbody></table><h4 id="\u8868\u8FBE\u5F0F\u64CD\u4F5C\u7B26" tabindex="-1"><a class="header-anchor" href="#\u8868\u8FBE\u5F0F\u64CD\u4F5C\u7B26" aria-hidden="true">#</a> \u8868\u8FBE\u5F0F\u64CD\u4F5C\u7B26</h4><table><thead><tr><th style="text-align:left;">\u5E38\u7528\u8868\u8FBE\u5F0F</th><th style="text-align:left;">\u542B\u4E49</th></tr></thead><tbody><tr><td style="text-align:left;">$sum</td><td style="text-align:left;">\u8BA1\u7B97\u603B\u548C\uFF0C{KaTeX parse error: Expected &#39;EOF&#39;, got &#39;}&#39; at position 7: sum: 1}\u0332\u8868\u793A\u8FD4\u56DE\u603B\u548C\xD71\u7684\u503C(\u5373\u603B\u548C\u7684\u2026sum: \u2018$\u5236\u5B9A\u5B57\u6BB5\u2019}\u4E5F\u80FD\u76F4\u63A5\u83B7\u53D6\u5236\u5B9A\u5B57\u6BB5\u7684\u503C\u7684\u603B\u548C</td></tr><tr><td style="text-align:left;">$avg</td><td style="text-align:left;">\u5E73\u5747\u503C</td></tr><tr><td style="text-align:left;">$min</td><td style="text-align:left;">min</td></tr><tr><td style="text-align:left;">$max</td><td style="text-align:left;">max</td></tr><tr><td style="text-align:left;">$push</td><td style="text-align:left;">\u5C06\u7ED3\u679C\u6587\u6863\u4E2D\u63D2\u5165\u503C\u5230\u4E00\u4E2A\u6570\u7EC4\u4E2D</td></tr><tr><td style="text-align:left;">$first</td><td style="text-align:left;">\u6839\u636E\u6587\u6863\u7684\u6392\u5E8F\u83B7\u53D6\u7B2C\u4E00\u4E2A\u6587\u6863\u6570\u636E</td></tr><tr><td style="text-align:left;">$last</td><td style="text-align:left;">\u540C\u7406\uFF0C\u83B7\u53D6\u6700\u540E\u4E00\u4E2A\u6570\u636E</td></tr></tbody></table><p>\u4E86\u89E3\u5B8C\u8FD9\u4E9B\u64CD\u4F5C\u7B26\u4E4B\u540E\uFF0C\u7EE7\u7EED\u62FF<code>$group</code>\u6765\u8BD5\u8BD5\u770B\uFF1A \u6211\u4EEC\u73B0\u5728\u6709\u4E00\u4E2A\u540D\u4E3AUbisoft\u7684\u4E00\u4E2Acollection\uFF0C\u5185\u90E8\u7684\u6587\u6863\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/* 1 */
{
    &quot;_id&quot; : ObjectId(&quot;5b0cf67270e4fa02d31de42e&quot;),
    &quot;name&quot; : &quot;rainbowSix Siege&quot;,
    &quot;time&quot; : 400.0
}

/* 2 */
{
    &quot;_id&quot; : ObjectId(&quot;5b0cf69270e4fa02d31de42f&quot;),
    &quot;name&quot; : &quot;Assassin&#39;s creed&quot;,
    &quot;time&quot; : 20.0
}

/* 3 */
{
    &quot;_id&quot; : ObjectId(&quot;5b0cf6ad70e4fa02d31de430&quot;),
    &quot;name&quot; : &quot;ghost Recon&quot;,
    &quot;time&quot; : 0.0
}

/* 4 */
{
    &quot;_id&quot; : ObjectId(&quot;5b0d14c870e4fa02d31de436&quot;),
    &quot;name&quot; : &quot;farCry&quot;,
    &quot;time&quot; : 0.0
}
123456789101112131415161718192021222324252627
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u73B0\u5728\u6765\u8BD5\u8BD5\u5176\u4ED6\u7684\u8868\u8FBE\u5F0F\u64CD\u4F5C\u7B26\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  db.Ubisoft.aggregate([
       {
           $group: {
               _id: &#39;$time&#39;,
               gameName: {$push: &#39;$name&#39;}
           }
       }
   ]) 
12345678
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD4\u56DE\u7ED3\u679C\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/* 1 */
{
    &quot;_id&quot; : 20.0,
    &quot;gameName&quot; : [ 
        &quot;Assassin&#39;s creed&quot;
    ]
}

/* 2 */
{
    &quot;_id&quot; : 0.0,
    &quot;gameName&quot; : [ 
        &quot;ghost Recon&quot;, 
        &quot;farCry&quot;
    ]
}

/* 3 */
{
    &quot;_id&quot; : 400.0,
    &quot;gameName&quot; : [ 
        &quot;rainbowSix Siege&quot;
    ]
}
123456789101112131415161718192021222324
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230time\u5B57\u6BB5\u76F8\u540C\u7684document\u88AB\u5206\u4E3A\u4E86\u4E00\u7EC4\uFF0C\u800C\u4E14\u4F7F\u7528$push\u8868\u8FBE\u5F0F\uFF0C\u5C06\u6211\u4EEC\u5236\u5B9A\u7684document\u7684name\u5B57\u6BB5\u7684\u503C\u4E5F\u653E\u5230\u4E86\u4E00\u4E2A\u6570\u7EC4\u4E2D\u4F5C\u4E3A\u6211\u4EEC\u5728mongoDB\u8BED\u53E5\u4E2D\u5236\u5B9A\u7684gameName\u7684\u503C\u3002</p><p>\u53E6\u5916<code>$group</code>\u4E2D\u53EF\u4EE5\u5236\u5B9A<code>_id:null</code>, \u5373\u53EF\u4EE5\u628A\u6240\u6709\u7684document\u5206\u4E3A\u4E00\u7EC4\uFF0C\u53EF\u4EE5\u7528\u4E8E\u8BA1\u7B97\u5E73\u5747\u503C\u4E4B\u7C7B\u7684\u64CD\u4F5C</p><p>\u6211\u4EEC\u53EF\u4EE5\u7528<code>$</code>\u6307\u5B9A\u5B57\u6BB5\u6765\u8868\u793A\u9009\u5B9A\u7684document\u7684field,\u53E6\u5916\u53EF\u4EE5\u4F7F\u7528<code>$$ROOT</code>\u6765\u8868\u793A\u9009\u5B9A\u7684document\u7684\u6240\u6709\u5185\u5BB9\uFF08\u4F8B\u5982:<code>chosenDocument: {$push: &#39;$$ROOT&#39;}</code>\uFF09</p><p>\u4E0A\u8FF0\u4F8B\u5B50\u57FA\u672C\u4ECB\u7ECD\u4E86\u8868\u8FBE\u5F0F\u64CD\u4F5C\u7B26\u7684\u7528\u6CD5\u3002</p><p>\u63A5\u7740\u6765\u770B<code>$match</code></p><h4 id="match" tabindex="-1"><a class="header-anchor" href="#match" aria-hidden="true">#</a> $match</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> db.Ubisoft.aggregate([
        {
            $match: {
                time: {$gte: 20} //\u9009\u53D6time\u5B57\u6BB5 &gt;=20\u7684document
            }
        }
    ])
1234567
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u5C31\u62FF\u5230\u4E86\u6240\u6709time&gt;=20\u7684document,\u7136\u540E\u53EF\u4EE5\u901A\u8FC7\u518D\u63A5\u4E2A\u7BA1\u9053\u6765\u8FDB\u884C\u5176\u4ED6\u64CD\u4F5C\uFF0C\u6BD4\u5982\u8BF4\u6211\u4EEC\u518D\u63A5\u4E00\u4E2A<code>$group</code>\u6765\u8FDB\u884C\u5206\u7EC4\uFF0C\u663E\u793A\u7B5B\u9009\u51FA\u6765\u7684\u6240\u6709time&gt;=20\u7684document\u7684\u4E2A\u6570\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> db.Ubisoft.aggregate([
        {
            $match: {
                time: {$gte: 20}
            }
        },
        {
            $group: {
                _id: null, // _id: null\u8868\u793A\u5168\u9009
                totalNum: {$sum: 1}
            }
        }
    ])
12345678910111213
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/* 1 */
{
    &quot;_id&quot; : null,
    &quot;totalNum&quot; : 2.0
}
12345
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230time&gt;=20\u7684document\u7684\u4E2A\u6570\u4E3A2</p><h4 id="project\u6295\u5F71" tabindex="-1"><a class="header-anchor" href="#project\u6295\u5F71" aria-hidden="true">#</a> project\u6295\u5F71</h4><p>\u4FEE\u6539\u8F93\u5165\u6587\u6863\u7684\u7ED3\u6784(\u4F8B\u5982\u91CD\u547D\u540D\uFF0C\u589E\u52A0\u3001\u5220\u9664\u5B57\u6BB5\uFF0C\u521B\u5EFA\u7ED3\u7B97\u7ED3\u679C\u7B49)</p><p><code>$project</code>\u548C\u76F4\u63A5\u4F7F\u7528<code>find()</code>\u7684\u5199\u6CD5\u4E00\u6837\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>db.Ubisoft.aggregate([
    {
        $project: {
            _id: 0,  //\u4E0D\u663E\u793A_id\u5B57\u6BB5
        }
    }
])
1234567
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u548C\u6211\u4EEC\u76F4\u63A5\u5199<code>db.Ubisoft.find({},{&#39;_id&#39;: 0})</code>\u5199\u6CD5\u4E00\u6837 \u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/* 1 */
{
    &quot;name&quot; : &quot;rainbowSix Siege&quot;,
    &quot;time&quot; : 400.0
}

/* 2 */
{
    &quot;name&quot; : &quot;Assassin&#39;s creed&quot;,
    &quot;time&quot; : 20.0
}

/* 3 */
{
    &quot;name&quot; : &quot;ghost Recon&quot;,
    &quot;time&quot; : 0.0
}

/* 4 */
{
    &quot;name&quot; : &quot;farCry&quot;,
    &quot;time&quot; : 0.0
}
1234567891011121314151617181920212223
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\u6CA1\u6709<code>_id</code>\u5B57\u6BB5\u4E86\u3002</p><p>\u90A3\u4E48\u6211\u4EEC\u73B0\u5728\u5982\u679C\u60F3\u62FF\u5230\u6240\u6709time&gt;=20\u7684document\u7684name\u5B57\u6BB5\u7684\u8BDD\uFF0C\u53EF\u4EE5\u628A\u7BA1\u9053\u642D\u914D\u8D77\u6765\u7528\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>db.Ubisoft.aggregate([
    {
        $match: {
            time: {$gte: 20}
        }
    },
    {
        $project: {
            _id: 0, // _id\u4E0D\u663E\u793A
            name: 1 // name\u662F\u8981\u663E\u793A\u7684
        }
    },
    {
        $group: {
            _id: null,
            name: {$push: &#39;$name&#39;}
        }
    }
])
12345678910111213141516171819
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/* 1 */
{
    &quot;_id&quot; : null,
    &quot;name&quot; : [ 
        &quot;rainbowSix Siege&quot;, 
        &quot;Assassin&#39;s creed&quot;
    ]
}
12345678
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sort" tabindex="-1"><a class="header-anchor" href="#sort" aria-hidden="true">#</a> $sort</h4><p><code>$sort</code>\u548C\u6211\u4EECfind()\u4E2D\u6392\u5E8F\u7684\u5199\u6CD5\u4E5F\u662F\u4E00\u6837\u7684\u3002</p><p>\u73B0\u5728\u6211\u4EEC\u60F3\u5C06\u6240\u6709\u7684document\u6309\u7167time\u964D\u5E8F\u6765\u6392\u5217\u7684\u8BDD\uFF1A</p><p>\u548C<code>db.Ubisoft.find().sort({time: -1})</code>\u5199\u6CD5\u662F\u4E00\u6837\u7684:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>db.Ubisoft.aggregate([
    {
        $sort: {
            time: -1
        }
    }
])
1234567
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540C\u7406\uFF0C<code>$sort</code>\u4E5F\u53EF\u4EE5\u548C\u5176\u4ED6\u7BA1\u9053\u642D\u914D\u4F7F\u7528</p><h4 id="limit-skip" tabindex="-1"><a class="header-anchor" href="#limit-skip" aria-hidden="true">#</a> $limit $skip</h4><p>\u548C<code>limit()</code>\u4EE5\u53CA<code>skip()</code>\u7684\u5199\u6CD5\u4E5F\u662F\u4E00\u6837\u7684\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>db.Ubisoft.find().skip(1).limit(2)
1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\u805A\u5408\u53EF\u4EE5\u5199\u6210\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>db.Ubisoft.aggregate([
    {
        $skip: 1
    },
    {
        $limit: 2
    }
])
12345678
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>limit\u548Cskip\u642D\u914D\u4F7F\u7528\u53EF\u4EE5\u8FBE\u5230\u5206\u9875\u7684\u6548\u679C\u3002</p><p>\u6CE8\u610F\u5148\u5199skip\u5728\u5199limit</p><h4 id="unwind" tabindex="-1"><a class="header-anchor" href="#unwind" aria-hidden="true">#</a> $unwind</h4><p><code>$unwind</code>\u7BA1\u9053\u53EF\u4EE5document\u4E2D\u7684\u6570\u7EC4\u7C7B\u578B\u7684\u5B57\u6BB5\u8FDB\u884C\u62C6\u5206\uFF0C\u6BCF\u6761\u5305\u542B\u6570\u7EC4\u4E2D\u7684\u4E00\u4E2A\u503C\u3002</p><ul><li>\u57FA\u672C\u4F7F\u7528 \u5728Ubisoft\u8FD9\u4E2A\u96C6\u5408\u91CC\u65B0\u589E\u5982\u4E0B\u4E00\u6761document:</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/* 5 */
{
    &quot;_id&quot; : ObjectId(&quot;5b0e242ed85f6f9cc56da7cc&quot;),
    &quot;name&quot; : &quot;gameList&quot;,
    &quot;list&quot; : [ 
        &quot;dota2&quot;, 
        &quot;csgo&quot;, 
        &quot;ow&quot;
    ]
}
12345678910
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u9488\u5BF9\u8FD9\u4E2Adocument\u4E2D\u7684list\u5B57\u6BB5\u6765\u8FDB\u884C<code>$unwind</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>db.Ubisoft.aggregate([
    {
        $unwind: &#39;$list&#39; // \u6307\u5B9Alist\u5B57\u6BB5
    }
])
12345
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/* 1 */
{
    &quot;_id&quot; : ObjectId(&quot;5b0e242ed85f6f9cc56da7cc&quot;),
    &quot;name&quot; : &quot;gameList&quot;,
    &quot;list&quot; : &quot;dota2&quot;
}

/* 2 */
{
    &quot;_id&quot; : ObjectId(&quot;5b0e242ed85f6f9cc56da7cc&quot;),
    &quot;name&quot; : &quot;gameList&quot;,
    &quot;list&quot; : &quot;csgo&quot;
}

/* 3 */
{
    &quot;_id&quot; : ObjectId(&quot;5b0e242ed85f6f9cc56da7cc&quot;),
    &quot;name&quot; : &quot;gameList&quot;,
    &quot;list&quot; : &quot;ow&quot;
}
1234567891011121314151617181920
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230unwind\u662F\u5C06\u6587\u6863\u4E2D\u7684\u6570\u7EC4\u5B57\u6BB5\u8FDB\u884C\u62C6\u5206\uFF0C\u5982\u679C\u6709\u5176\u4ED6\u6587\u6863\u7684list\u5B57\u6BB5\u4E5F\u662F\u6570\u7EC4\uFF0C\u4E5F\u4F1A\u4E00\u5E76\u62C6\u5206\u3002</p><ul><li>\u7279\u6B8A\u60C5\u51B5\u4E0B\u7684unwind(\u7A7A\u6570\u7EC4\uFF0Cnull,\u975E\u6570\u7EC4\uFF0C\u65E0\u6307\u5B9A\u5B57\u6BB5)</li></ul><p>\u9488\u5BF9\u7279\u6B8A\u60C5\u51B5\uFF0C\u65B0\u5EFA\u4E00\u4E2Acolletion,\u5185\u5BB9\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/* 1 */
{
    &quot;_id&quot; : ObjectId(&quot;5b0e27fdd85f6f9cc56da7ce&quot;),
    &quot;list&quot; : null
}

/* 2 */
{
    &quot;_id&quot; : ObjectId(&quot;5b0e2827d85f6f9cc56da7cf&quot;),
    &quot;list&quot; : []
}

/* 3 */
{
    &quot;_id&quot; : ObjectId(&quot;5b0e2834d85f6f9cc56da7d0&quot;),
    &quot;list&quot; : &quot;notArray&quot;
}

/* 4 */
{
    &quot;_id&quot; : ObjectId(&quot;5b0e2844d85f6f9cc56da7d1&quot;)
}
12345678910111213141516171819202122
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6765\u8FDB\u884C<code>$unwind</code>\uFF0C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>db.unwind.aggregate([
    {
        $unwind: &#39;$list&#39;
    }
])
12345
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/* 1 */
{
    &quot;_id&quot; : ObjectId(&quot;5b0e2834d85f6f9cc56da7d0&quot;),
    &quot;list&quot; : &quot;notArray&quot;
}
12345
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230<code>[]</code>,<code>null</code>,\u4EE5\u53CA\u65E0\u6307\u5B9A\u5B57\u6BB5\u7684\u6570\u636E\u90FD\u4E22\u5931\u4E86\uFF0C \u4E3A\u4E86\u4E0D\u4E22\u5931\u6570\u636E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5199\u6210\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>db.unwind.aggregate([
    {
        $unwind: {
            path: &#39;$list&#39;, // path\u662F\u6307\u5B9A\u5B57\u6BB5
            preserveNullAndEmptyArrays: true //\u8BE5\u5C5E\u6027\u4E3Atrue\u5373\u4FDD\u7559
        }
    }
])
12345678
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6B21\u8F93\u51FA\u7ED3\u679C\u5C31\u4FDD\u7559\u4E86null\u4EE5\u53CA\u7A7A\u6570\u7EC4\uFF0C\u503C\u5F97\u5173\u6CE8\u7684\u5C31\u662F<code>preserveNullAndEmptyArrays</code>\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u4E3Atrue\u7684\u65F6\u5019\u5C31\u4FDD\u7559\u3002</p><p>\u4E0B\u9762\u7ED3\u5408PHP \u4EE3\u7801</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//$server \u6839\u636E\u81EA\u5DF1\u7684\u670D\u52A1\u5668\u6765
$mongo =  new \\MongoClient($server, array(&#39;connect&#39;=&gt;true));// \u7ACB\u5373\u8FDE\u63A5

$db = $mongo-&gt;colName;//\u9009\u62E9\u6570\u636E\u5E93
$collection = $db-&gt;file_log;//\u9009\u62E9\u6587\u6863\u96C6\u5408

$filter[&quot;status&quot;] = array(&quot;\\$in&quot; =&gt; array(0, 2, 5)); 
$filter[&quot;a_id&quot;] = array(&quot;\\$eq&quot; =&gt; $a_id);
$group = array(&quot;_id&quot; =&gt; array(
                &quot;md5&quot; =&gt; &quot;\\$md5&quot;,
                &quot;path&quot; =&gt; &quot;\\$path&quot;,
                &quot;a_id&quot;=&gt;&quot;\\$a_id&quot;
            ),
                &quot;time&quot; =&gt; array(&quot;\\$last&quot; =&gt; &quot;\\$found_time&quot;),
                &quot;l_id&quot; =&gt; array(&quot;\\$last&quot; =&gt; &quot;\\$_id&quot;),
                &quot;v_name&quot; =&gt; array(&quot;\\$last&quot; =&gt; &quot;\\$v_name&quot;),
                &quot;c_iso_key&quot; =&gt; array(&quot;\\$last&quot; =&gt; &quot;\\$c_iso_key&quot;),
                &quot;status&quot; =&gt; array(&quot;\\$last&quot; =&gt; &quot;\\$status&quot;),
                &quot;h_msg&quot; =&gt; array(&quot;\\$last&quot; =&gt; &quot;\\$h_msg&quot;),
                &quot;r_level&quot; =&gt; array(&quot;\\$last&quot; =&gt; &quot;\\$r_level&quot;),
            );
$sort = array(&quot;time&quot; =&gt; 1); //\u6839\u636E\u65F6\u95F4\u6392\u5E8F
$limit = 5;
//\u5373\u4EE5md5\u3001path\u3001a_id\u5206\u7EC4\u83B7\u53D6\u5B57\u6BB5\u4E3Afound_time\u3001_id\u3001v_name \u6700\u540E\u4E00\u4E2A\u6570\u636E\u3001\u65F6\u95F4\u5012\u53D9\u3001\u53D6\u51FA5\u6761
$res = $collection-&gt;aggregate(array(&#39;$match&#39; =&gt; $filter),array(&#39;$group&#39; =&gt; $group),array(&#39;$sort&#39; =&gt; $sort),array(&#39;$limit&#39;=&gt;(int)$limit));
12345678910111213141516171819202122232425
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,78);function q(h,x){const e=p("ExternalLinkIcon");return i(),l("div",null,[u,n("h5",d,[r,v,n("a",m,[b,o(e)]),k]),g])}var y=t(c,[["render",q],["__file","mongo.html.vue"]]);export{y as default};
