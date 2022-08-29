import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as t,e as s}from"./app.8a90f8c5.js";const a={},i=s(`<h1 id="elasticsearch" tabindex="-1"><a class="header-anchor" href="#elasticsearch" aria-hidden="true">#</a> ElasticSearch</h1><p>\u641C\u7D22</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET _search
{
  &quot;query&quot;: {
    &quot;match&quot;: {
      &quot;_index&quot; : &quot;jobui_interview_v1&quot;
    }
  },
  &quot;size&quot; : 100
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u770B\u6240\u6709\u7D22\u5F15</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /_cat/indices?v	
GET _cat/indices?v&amp;s=store.size:desc//\u6309\u5927\u5C0F\u5012\u53D9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B0\u5EFA\u7D22\u5F15\u6620\u5C04</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> PUT /jobui_interview_v1/external/1?pretty
{
  &quot;name&quot;: &quot;John Doe&quot;
}

GET /jobui_company_album/_mapping?pretty

PUT jobui_interview_v1
{
	&quot;mappings&quot;:{
		&quot;interview&quot;:{
			&quot;_all&quot;: {
				&quot;enabled&quot;: false
			},
			&quot;properties&quot;:{
				&quot;CIE_ID&quot;: {
					&quot;type&quot;: &quot;integer&quot;
				},
				&quot;CIE_CompanyID&quot;: {
					&quot;type&quot;: &quot;integer&quot;
				},
				&quot;CIE_PositionID&quot;: {
					&quot;type&quot;: &quot;integer&quot;
				},
				&quot;CIE_PositionName&quot;: {
					&quot;type&quot;: &quot;text&quot;,
					&quot;analyzer&quot;: &quot;ik_smart&quot;,
					&quot;include_in_all&quot;: true
				},
				&quot;CIE_CompanyName&quot;: {
					&quot;type&quot;: &quot;text&quot;,
					&quot;analyzer&quot;: &quot;ik_smart&quot;,
					&quot;include_in_all&quot;: true
				},
				&quot;CIE_UserKey&quot;: {
					&quot;type&quot;: &quot;text&quot;,
					&quot;analyzer&quot;: &quot;ik_smart&quot;,
					&quot;include_in_all&quot;: true
				},
				&quot;CIE_UserIP&quot;: {
					&quot;type&quot;: &quot;text&quot;,
					&quot;analyzer&quot;: &quot;ik_smart&quot;,
					&quot;include_in_all&quot;: true
				},
				&quot;CIE_UsefulNum&quot;: {
					&quot;type&quot;: &quot;integer&quot;
				},
				&quot;CIE_NotUsefulNum&quot;: {
					&quot;type&quot;: &quot;integer&quot;
				},
				&quot;CIE_IsNick&quot;: {
					&quot;type&quot;: &quot;text&quot;,
					&quot;analyzer&quot;: &quot;ik_smart&quot;,
					&quot;include_in_all&quot;: true
				},
				&quot;CIE_CheckStatus&quot;: {
					&quot;type&quot;: &quot;text&quot;,
					&quot;analyzer&quot;: &quot;ik_smart&quot;,
					&quot;include_in_all&quot;: true
				},
				&quot;CIE_Content&quot;: {
					&quot;type&quot;: &quot;text&quot;,
					&quot;analyzer&quot;: &quot;ik_smart&quot;,
					&quot;include_in_all&quot;: true
				},
				&quot;CIE_ClientType&quot;: {
					&quot;type&quot;: &quot;text&quot;,
					&quot;analyzer&quot;: &quot;ik_smart&quot;,
					&quot;include_in_all&quot;: true
				},
				&quot;CIE_AddTime&quot;: {
					&quot;type&quot;: &quot;long&quot;
				},
				&quot;CIE_LastCheckTime&quot;: {
					&quot;type&quot;: &quot;long&quot;
				},
				&quot;CIE_LastUpdateTime&quot;: {
					&quot;type&quot;: &quot;long&quot;
				},
				&quot;lt&quot;: {
					&quot;type&quot;: &quot;long&quot;
				}
			}
		}
	},
	&quot;settings&quot;: {
		&quot;number_of_shards&quot; :   1,
		&quot;number_of_replicas&quot; : 1
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BBE\u7F6E\u522B\u540D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PUT /jobui_interview_v1/_alias/jobui_interview
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8BBE\u7F6E\u522B\u540D PUT /jobui_interview_v1/_alias/jobui_interview</p><p>\u5DEE\u770B\u6620\u5C04\u4FE1\u606F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /jobui_interview_v1/_mapping?pretty
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>#\u67E5\u770B\u7D22\u5F15\u5185\u5BB9</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET jobui_interview_v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5220\u9664\u7D22\u5F15</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>DELETE jobui_interview_v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u770B\u5355\u4E2A\u6587\u6863</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET jobui_company_job_v1/job/9650100?pretty
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u8BE2\u5185\u5BB9</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>POST /jobui_company_job_v1/_search?pretty
{

  &quot;query&quot;: { &quot;match&quot;: { &quot;SPI_CompanyCity&quot;: &quot;\u4E0A\u6D77&quot; } }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u770B\u96C6\u7FA4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>GET _cluster/health?pretty
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u67E5\u770B\u6570\u636E\uFF08shell\uFF09</span>

<span class="token comment">#\u67E5\u770B\u6240\u6709\u7D22\u5F15\uFF08\u6309\u5927\u5C0F\u5012\u5E8F\uFF09</span>
<span class="token function">curl</span> <span class="token parameter variable">-XGET</span> <span class="token string">&#39;http://192.168.2.135:9200/_cat/indices?v&amp;s=store.size:desc&#39;</span>

<span class="token comment">#\u5220\u9664\u7D22\u5F15</span>
<span class="token function">curl</span> <span class="token parameter variable">-XDELETE</span> <span class="token string">&#39;http://192.168.2.135:9200/nginx_apis-access-2021.08.31?pretty&#39;</span>

<span class="token comment">#\u67E5\u770B\u7D22\u5F15mapping</span>
<span class="token function">curl</span> <span class="token string">&quot;192.168.1.74:9200/\u7D22\u5F15\u540D\u79F0/_mapping&quot;</span>

<span class="token comment">#\u67E5\u770B\u5355\u4E2A\u6587\u6863</span>
<span class="token function">curl</span> <span class="token parameter variable">-XGET</span> <span class="token string">&#39;localhost:9200/\u7D22\u5F15\u540D\u79F0/\u7C7B\u578B/ID?pretty&#39;</span>

<span class="token comment">#\u521B\u5EFA\u6587\u6863</span>
<span class="token function">curl</span> <span class="token parameter variable">-XPUT</span> <span class="token string">&#39;localhost:9200/customer/external/1?pretty&#39;</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;
{
  &quot;name&quot;: &quot;John Doe&quot;
}&#39;</span>

<span class="token comment">#\u67E5\u8BE2\u6587\u6863\u5185\u5BB9</span>
<span class="token function">curl</span> <span class="token parameter variable">-XPOST</span> <span class="token string">&#39;localhost:9200/bank/_search?pretty&#39;</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;
{
  &quot;query&quot;: { &quot;match&quot;: { &quot;address&quot;: &quot;mill&quot; } }
}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="es-kibana\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#es-kibana\u90E8\u7F72" aria-hidden="true">#</a> es+kibana\u90E8\u7F72</h2><p><strong>\u57FA\u7840\u73AF\u5883\uFF1Ajdk8</strong></p><h4 id="\u5B89\u88C5jdk" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5jdk" aria-hidden="true">#</a> \u5B89\u88C5jdk</h4><p>\u4E0B\u8F7Djdk\u5305</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /usr/local/java 
<span class="token builtin class-name">cd</span> /usr/local/java 
<span class="token function">wget</span> https://download.oracle.com/otn/java/jdk/8u321-b07/df5ad55fdd604472a86a45a217032c7d/jdk-8u321-linux-x64.tar.gz?AuthParam<span class="token operator">=</span>1647915953_6b486a8019a80931d2b2bdca8b505d6a
<span class="token function">tar</span> zxvf jdk-8u321-linux-x64.tar.gz <span class="token parameter variable">-C</span> /usr/local/java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u914D\u7F6Ejdk\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Ejdk\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u914D\u7F6Ejdk\u73AF\u5883\u53D8\u91CF</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /etc/profile
<span class="token comment">#\u6DFB\u52A0</span>
<span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/local/java/jdk1.8.0_311/
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>$:CLASSPATH:<span class="token variable">$JAVA_HOME</span>/lib/ 
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOME</span>/bin 

<span class="token comment">#\u52A0\u8F7D\u6587\u4EF6\u751F\u6548</span>
<span class="token builtin class-name">source</span> /etc/profile
<span class="token comment">#\u67E5\u770B\u7248\u672C</span>
<span class="token function">java</span> <span class="token parameter variable">-version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5B89\u88C5elasticsearch5-6" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5elasticsearch5-6" aria-hidden="true">#</a> \u5B89\u88C5elasticsearch5.6</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-5.6.16.tar.gz
sha1sum elasticsearch-5.6.16.tar.gz 
<span class="token function">tar</span> <span class="token parameter variable">-xzf</span> elasticsearch-5.6.16.tar.gz

<span class="token comment">#\u540E\u53F0\u542F\u52A8\u5E76\u8BB0\u5F55pid</span>
<span class="token builtin class-name">cd</span> elasticsearch-5.6.16/ 
./bin/elasticsearch <span class="token parameter variable">-p</span> /mysql/elasticsearch/elasticsearch-pid <span class="token parameter variable">-d</span>

<span class="token comment">#\u8FDE\u63A5\u6D4B\u8BD5</span>
<span class="token function">curl</span> <span class="token parameter variable">-XGET</span> <span class="token number">192.168</span>.1.36:9200

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5B89\u88C5kibana5-6" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5kibana5-6" aria-hidden="true">#</a> \u5B89\u88C5kibana5.6</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> https://artifacts.elastic.co/downloads/kibana/kibana-5.6.16-linux-x86_64.tar.gz
sha1sum kibana-5.6.16-linux-x86_64.tar.gz 
<span class="token function">tar</span> <span class="token parameter variable">-xzf</span> kibana-5.6.16-linux-x86_64.tar.gz
<span class="token builtin class-name">cd</span> kibana-5.6.16-linux-x86_64/ 

<span class="token comment">#\u540E\u53F0\u542F\u52A8</span>
./bin/kibana <span class="token operator">&gt;&gt;</span> /mysql/elasticsearch/kibana.stdout <span class="token operator"><span class="token file-descriptor important">2</span>&gt;&gt;</span> /mysql/elasticsearch/kibana.stderr <span class="token operator">&amp;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34),l=[i];function d(u,r){return e(),t("div",null,l)}var v=n(a,[["render",d],["__file","ElasticSearch.html.vue"]]);export{v as default};
