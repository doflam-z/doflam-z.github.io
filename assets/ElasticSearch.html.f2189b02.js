import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.b331bc9e.js";const e={},u=t(`<h1 id="elasticsearch" tabindex="-1"><a class="header-anchor" href="#elasticsearch" aria-hidden="true">#</a> ElasticSearch</h1><h4 id="\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#\u641C\u7D22" aria-hidden="true">#</a> \u641C\u7D22</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET _search
{
  &quot;query&quot;: {
    &quot;match&quot;: {
      &quot;_index&quot; : &quot;jobui_interview_v1&quot;
    }
  },
  &quot;size&quot; : 100
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u67E5\u770B\u6240\u6709\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6240\u6709\u7D22\u5F15" aria-hidden="true">#</a> \u67E5\u770B\u6240\u6709\u7D22\u5F15</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /_cat/indices?v	
GET _cat/indices?v&amp;s=store.size:desc//\u6309\u5927\u5C0F\u5012\u53D9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u65B0\u5EFA\u7D22\u5F15\u6620\u5C04" tabindex="-1"><a class="header-anchor" href="#\u65B0\u5EFA\u7D22\u5F15\u6620\u5C04" aria-hidden="true">#</a> \u65B0\u5EFA\u7D22\u5F15\u6620\u5C04</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> PUT /jobui_interview_v1/external/1?pretty
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u8BBE\u7F6E\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u522B\u540D" aria-hidden="true">#</a> \u8BBE\u7F6E\u522B\u540D</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PUT /jobui_interview_v1/_alias/jobui_interview
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u5DEE\u770B\u6620\u5C04\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u5DEE\u770B\u6620\u5C04\u4FE1\u606F" aria-hidden="true">#</a> \u5DEE\u770B\u6620\u5C04\u4FE1\u606F</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /jobui_interview_v1/_mapping?pretty
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u67E5\u770B\u7D22\u5F15\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u7D22\u5F15\u5185\u5BB9" aria-hidden="true">#</a> \u67E5\u770B\u7D22\u5F15\u5185\u5BB9</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET jobui_interview_v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u5220\u9664\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u7D22\u5F15" aria-hidden="true">#</a> \u5220\u9664\u7D22\u5F15</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>DELETE jobui_interview_v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u67E5\u770B\u5355\u4E2A\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u5355\u4E2A\u6587\u6863" aria-hidden="true">#</a> \u67E5\u770B\u5355\u4E2A\u6587\u6863</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET jobui_company_job_v1/job/9650100?pretty
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u67E5\u8BE2\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u5185\u5BB9" aria-hidden="true">#</a> \u67E5\u8BE2\u5185\u5BB9</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>POST /jobui_company_job_v1/_search?pretty
{

  &quot;query&quot;: { &quot;match&quot;: { &quot;SPI_CompanyCity&quot;: &quot;\u4E0A\u6D77&quot; } }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u67E5\u770B\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u96C6\u7FA4" aria-hidden="true">#</a> \u67E5\u770B\u96C6\u7FA4</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>GET _cluster/health?pretty
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

<span class="token comment">#\u67E5\u770B\u4E3B\u8282\u70B9</span>
GET /_cat/master?v
<span class="token comment">#\u67E5\u770B\u8282\u70B9\u72B6\u6001</span>
GET _nodes/stats
<span class="token comment">#\u67E5\u770B\u96C6\u7FA4\u72B6\u6001</span>
GET _cluster/health?pretty
<span class="token comment">#\u67E5\u770B\u96C6\u7FA4\u8282\u70B9</span>
GET _cat/nodes
<span class="token comment">#\u67E5\u770B\u5206\u7247\u8BE6\u7EC6</span>
GET _cat/shards?v
<span class="token comment">#\u67E5\u770B\u5168\u90E8\u7D22\u5F15</span>
GET _cat/indices?v
<span class="token comment">#\u67E5\u770B\u96C6\u7FA4\u8BBE\u7F6E</span>
GET _cluster/settings
<span class="token comment">#\u67E5\u770B\u96C6\u7FA4\u5065\u5EB7</span>
GET _cat/health?v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5173\u95ED\u8282\u70B9-\u81EA\u52A8\u8F6C\u79FB\u5206\u7247\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u5173\u95ED\u8282\u70B9-\u81EA\u52A8\u8F6C\u79FB\u5206\u7247\u6570\u636E" aria-hidden="true">#</a> \u5173\u95ED\u8282\u70B9(\u81EA\u52A8\u8F6C\u79FB\u5206\u7247\u6570\u636E)</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u6392\u96641.36</span>
PUT _cluster/settings
<span class="token punctuation">{</span>
  <span class="token string">&quot;transient&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;cluster.routing.allocation.exclude._ip&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;192.168.1.36&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">#\u6062\u590D</span>
PUT /_cluster/settings
<span class="token punctuation">{</span>
  <span class="token string">&quot;transient&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;cluster.routing.allocation.exclude._ip&quot;</span><span class="token builtin class-name">:</span> null
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

PUT _cluster/settings
<span class="token punctuation">{</span>
  <span class="token string">&quot;persistent&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;cluster.routing.allocation.enable&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;primaries&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
PUT _cluster/settings
<span class="token punctuation">{</span>
  <span class="token string">&quot;persistent&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;cluster.routing.allocation.enable&quot;</span><span class="token builtin class-name">:</span> null
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">#\u68C0\u67E5\u5206\u7247\u9519\u8BEF\u8BE6\u60C5</span>
GET /_cluster/allocation/explain?pretty

<span class="token comment"># \u91CD\u65B0\u6267\u884C\u5206\u7247</span>
POST _cluster/reroute?retry_failed<span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u590D\u5236\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#\u590D\u5236\u7D22\u5F15" aria-hidden="true">#</a> \u590D\u5236\u7D22\u5F15</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>POST /_reindex?wait_for_completion=false
{
  &quot;source&quot;: {
    &quot;index&quot;: &quot;jobui_salary_search_2022_v3&quot;,
    &quot;size&quot;: 500
  },
  &quot;dest&quot;: {
    &quot;index&quot;: &quot;jobui_salary_search_2022_v4&quot;
  }
}

GET _tasks?detailed=true&amp;actions=*reindex # \u67E5\u770B\u6B63\u5728\u590D\u5236\u7684\u7D22\u5F15

GET /_tasks/F4c1BDoGSDqCqt2raIRmHA:6628770936 # \u76F4\u63A5\u6309id\u67E5\u770B

POST /_tasks/F4c1BDoGSDqCqt2raIRmHA:7453932752/_cancel # \u53D6\u6D88\u590D\u5236
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5BFC\u5165\u5BFC\u51FA\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u5165\u5BFC\u51FA\u6570\u636E" aria-hidden="true">#</a> \u5BFC\u5165\u5BFC\u51FA\u6570\u636E</h4><p>\u5BFC\u51FA\u6570\u636E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> GET <span class="token string">&quot;http://121.9.201.145:9202/jobui_salary_search_2024_v2/_search?size=10000&amp;pretty=true&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&#39;Content-Type: application/json&#39;</span> -d<span class="token string">&#39;
{
  &quot;_source&quot;: true,
  &quot;query&quot;:{&quot;bool&quot;:{&quot;must&quot;:[{&quot;term&quot;:{&quot;CID&quot;:{&quot;value&quot;:15110}}}]}}
}&#39;</span> <span class="token operator">&gt;</span> data.json

<span class="token function">curl</span> <span class="token parameter variable">-X</span> GET <span class="token string">&quot;http://121.9.201.145:9202/jobui_view_rank_recent_v20/_search?size=10000&amp;pretty=true&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&#39;Content-Type: application/json&#39;</span> -d<span class="token string">&#39;
{
  &quot;_source&quot;: true,
  &quot;query&quot;:{&quot;bool&quot;:{&quot;must&quot;:[{&quot;term&quot;:{&quot;CBY_Area&quot;:{&quot;value&quot;:&quot;190100&quot;}}}]}}
}&#39;</span> <span class="token operator">&gt;</span> data.json

<span class="token function">curl</span> <span class="token parameter variable">-X</span> GET <span class="token string">&quot;http://121.9.201.145:9202/smallposition_v11/_search?size=10000&amp;pretty=true&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&#39;Content-Type: application/json&#39;</span> -d<span class="token string">&#39;
{
  &quot;_source&quot;: true,
  &quot;query&quot;:{&quot;bool&quot;:{&quot;should&quot;:[{&quot;term&quot;:{&quot;SPI_Content&quot;:{&quot;boost&quot;:&quot;0&quot;,&quot;value&quot;:&quot;java&quot;}}},{&quot;term&quot;:{&quot;SPI_PositionName&quot;:{&quot;boost&quot;:&quot;100&quot;,&quot;value&quot;:&quot;java&quot;}}}],&quot;minimum_should_match&quot;:1}}
}&#39;</span> <span class="token operator">&gt;</span> data.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5BFC\u51FA\u6570\u636E\u540E\u9700\u8981\u5904\u7406\u6210\u6B63\u786E\u683C\u5F0F\uFF0C\u53EF\u4EE5\u4F7F\u7528python\u5904\u7406\uFF0C\u811A\u672C\u5982\u4E0B</p></blockquote><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> json

<span class="token comment"># \u7C7B\u578B\u540D\u79F0\uFF0C5.X\u624D\u9700\u8981</span>
type_name <span class="token operator">=</span> <span class="token string">&quot;position&quot;</span>

<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;data.json&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    data <span class="token operator">=</span> json<span class="token punctuation">.</span>load<span class="token punctuation">(</span>f<span class="token punctuation">)</span>

<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;bulk_data.json&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;w&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    <span class="token keyword">for</span> hit <span class="token keyword">in</span> data<span class="token punctuation">[</span><span class="token string">&#39;hits&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;hits&#39;</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        action <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;index&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;_index&quot;</span><span class="token punctuation">:</span> hit<span class="token punctuation">[</span><span class="token string">&quot;_index&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token string">&quot;_type&quot;</span><span class="token punctuation">:</span> type_name<span class="token punctuation">,</span>
                <span class="token string">&quot;_id&quot;</span><span class="token punctuation">:</span> hit<span class="token punctuation">[</span><span class="token string">&quot;_id&quot;</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>action<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>
        f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>hit<span class="token punctuation">[</span><span class="token string">&quot;_source&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Bulk data file has been created successfully.&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BFC\u5165\u6570\u636E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token string">&quot;http://192.168.1.39:9201/_bulk&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&#39;Content-Type: application/x-ndjson&#39;</span> --data-binary @data.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="es-kibana\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#es-kibana\u90E8\u7F72" aria-hidden="true">#</a> es+kibana\u90E8\u7F72</h2><p><strong>\u57FA\u7840\u73AF\u5883\uFF1Ajdk8</strong></p><h4 id="\u5B89\u88C5jdk" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5jdk" aria-hidden="true">#</a> \u5B89\u88C5jdk</h4><p>\u4E0B\u8F7Djdk\u5305</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /usr/local/java 
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

<span class="token comment">#\u5B89\u88C5x-pack</span>
<span class="token function">sudo</span> ./bin/kibana-plugin <span class="token function">install</span> file:./x-pack-5.1.2.zip

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5E38\u7528\u547D\u4EE4-\u4FDD\u5B58\u4E00\u4E0B" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4-\u4FDD\u5B58\u4E00\u4E0B" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4\uFF08\u4FDD\u5B58\u4E00\u4E0B\uFF09</h4><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>GET _search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;match_all&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

GET /_cat/indices<span class="token punctuation">?</span>v

GET smallposition_v5/_mapping
GET jobui_salary_search/_mapping

GET jobui_news_rank_v1

POST  /_cluster/reroute
<span class="token punctuation">{</span>
	&quot;commands&quot;<span class="token punctuation">:</span><span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			&quot;allocate_stale_primary&quot;<span class="token punctuation">:</span><span class="token punctuation">{</span>
				&quot;index&quot;<span class="token punctuation">:</span><span class="token string">&quot;smallposition_v3&quot;</span><span class="token punctuation">,</span>
				&quot;shard&quot;<span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">,</span>
				&quot;node&quot;<span class="token punctuation">:</span><span class="token string">&quot;node-134-2&quot;</span><span class="token punctuation">,</span>
				&quot;accept_data_loss&quot;<span class="token punctuation">:</span><span class="token boolean important">true</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

GET  /_cluster/allocation/explain
<span class="token punctuation">{</span>
	&quot;index&quot;<span class="token punctuation">:</span><span class="token string">&quot;smallposition_v3&quot;</span><span class="token punctuation">,</span>
	&quot;shard&quot;<span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">,</span>
	&quot;primary&quot;<span class="token punctuation">:</span><span class="token boolean important">true</span>
<span class="token punctuation">}</span>

GET _nodes/stats/fs

GET _cluster/health/

GET _cluster/settings

GET /_cat/shards<span class="token punctuation">?</span>h=index<span class="token punctuation">,</span>shard<span class="token punctuation">,</span>prirep<span class="token punctuation">,</span>state<span class="token punctuation">,</span>unassigned.reason<span class="token punctuation">|</span>

GET _cat/indices<span class="token punctuation">?</span>v<span class="token important">&amp;health=red</span>

GET /_cat/shards<span class="token punctuation">?</span>v<span class="token important">&amp;h=n</span><span class="token punctuation">,</span>index<span class="token punctuation">,</span>shard<span class="token punctuation">,</span>prirep<span class="token punctuation">,</span>state<span class="token punctuation">,</span>sto<span class="token punctuation">,</span>sc<span class="token punctuation">,</span>unassigned.reason<span class="token punctuation">,</span>unassigned.details

GET /smallposition_v4/position/_search
GET /smallposition_v7/position/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;sort&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;SPI_SnatchTime&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;order&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;desc&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>

<span class="token punctuation">}</span>

GET /jobui_smallposition/position/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;SPI_CompanyID&quot;</span><span class="token punctuation">:</span> <span class="token number">8002694</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;aggregations&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;SPI_WorkPlace&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;terms&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;SPI_WorkPlace&quot;</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;order&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;_count&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;desc&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

GET /jobui_salary_search/salary/238316138_202210

GET jobui_salary_search/_search

GET jobui_salary_search/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;match&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;_id&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;208583484_202108&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

GET jobui_salary_search/salary/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;range&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;Month&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
              <span class="token key atrule">&quot;lt&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;202304&quot;</span><span class="token punctuation">,</span>
              <span class="token key atrule">&quot;gte&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;202204&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;CID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
              <span class="token key atrule">&quot;value&quot;</span><span class="token punctuation">:</span> <span class="token number">12482304</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

GET trends2022_v2
GET /trends2023_v2/trends/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;match_phrase&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;PName&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
              <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;php&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;range&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;month&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
              <span class="token key atrule">&quot;lt&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;2023&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;aggregations&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;month_Agg&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;terms&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;month&quot;</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;order&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;_term&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;asc&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

GET /trends2022_v2/trends/_mapping

GET /trends2022_v2/trends/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;match_phrase&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;PName&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                        <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;c++\u4E13\u5BB6&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token key atrule">&quot;aggregations&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;avgSalary&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;avg&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;PSalary&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
GET /trends2022_v2/trends/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;match_phrase&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;PName&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                        <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u670D\u88C5\u9500\u552E\u987E\u95EE&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;PCity&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u5E7F\u5DDE&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
GET jobui_salary_search_2024
POST /_aliases
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;actions&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;add&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;index&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;jobui_salary_search_2024&quot;</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;alias&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;jobui_salary_search&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span> 
<span class="token punctuation">}</span>

GET jobui_salary_search_2022_v4/salary/_mapping
GET jobui_salary_search/salary/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;range&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;Month&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
              <span class="token key atrule">&quot;lt&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;202304&quot;</span><span class="token punctuation">,</span>
              <span class="token key atrule">&quot;gte&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;202204&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;must_not&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                  <span class="token key atrule">&quot;Salary&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;match&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                  <span class="token key atrule">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u5BA2\u670D&quot;</span><span class="token punctuation">,</span>
                    <span class="token key atrule">&quot;operator&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;and&quot;</span>
                  <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;CCity&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
              <span class="token key atrule">&quot;value&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u6E29\u5DDE&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;Age&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
              <span class="token key atrule">&quot;value&quot;</span><span class="token punctuation">:</span> <span class="token number">6</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span>

GET jobui_salary_search/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must_not&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;Salary&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;CID&quot;</span><span class="token punctuation">:</span> <span class="token number">13148838</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;Age&quot;</span><span class="token punctuation">:</span> <span class="token number">6</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u914D\u9001\u5458&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span>

GET jobui_salary_search/_search
<span class="token punctuation">{</span>
    <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;must_not&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                        <span class="token key atrule">&quot;Salary&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                        <span class="token key atrule">&quot;SmallArea&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u5DE5\u4E1A\u56ED\u533A&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                        <span class="token key atrule">&quot;PCity&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u82CF\u5DDE&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">20</span>
<span class="token punctuation">}</span>

GET jobui_salary_search/salary/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;PID&quot;</span><span class="token punctuation">:</span> <span class="token number">248407359</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span>



GET jobui_salary_search/salary/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;Age&quot;</span><span class="token punctuation">:</span> <span class="token number">6</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;should&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;range&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                  <span class="token key atrule">&quot;Month&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;gt&quot;</span><span class="token punctuation">:</span> <span class="token number">202209</span>
                  <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                  <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                      <span class="token key atrule">&quot;range&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                        <span class="token key atrule">&quot;PID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                          <span class="token key atrule">&quot;gt&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span>
                        <span class="token punctuation">}</span>
                      <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                      <span class="token key atrule">&quot;range&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                        <span class="token key atrule">&quot;Month&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                          <span class="token key atrule">&quot;gte&quot;</span><span class="token punctuation">:</span> <span class="token number">202209</span>
                        <span class="token punctuation">}</span>
                      <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                  <span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;sort&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;Month&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;order&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;asc&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;PID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;order&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;asc&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;from&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;_source&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;PID&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Month&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Age&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>




GET jobui_salary_search/salary/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;Age&quot;</span><span class="token punctuation">:</span> <span class="token number">6</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;should&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;range&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                  <span class="token key atrule">&quot;PID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;gt&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span>
                  <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                  <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                      <span class="token key atrule">&quot;range&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                        <span class="token key atrule">&quot;Month&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                          <span class="token key atrule">&quot;gt&quot;</span><span class="token punctuation">:</span> <span class="token number">202210</span>
                        <span class="token punctuation">}</span>
                      <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                      <span class="token key atrule">&quot;range&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                        <span class="token key atrule">&quot;PID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                          <span class="token key atrule">&quot;gte&quot;</span><span class="token punctuation">:</span> <span class="token number">202210</span>
                        <span class="token punctuation">}</span>
                      <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                  <span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;sort&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;Month&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;order&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;desc&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;PID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;order&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;desc&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;from&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;_source&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;PID&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;FSalary&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Salary&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>




GET jobui_salary_search/salary/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;range&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;Month&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
              <span class="token key atrule">&quot;lt&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;202303&quot;</span><span class="token punctuation">,</span>
              <span class="token key atrule">&quot;gte&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;202203&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;range&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;Salary&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
              <span class="token key atrule">&quot;gt&quot;</span><span class="token punctuation">:</span> <span class="token number">2000</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                  <span class="token key atrule">&quot;CID&quot;</span><span class="token punctuation">:</span> <span class="token number">1236</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                  <span class="token key atrule">&quot;FSalary&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">20</span>
<span class="token punctuation">}</span>



GET _cluster/health<span class="token punctuation">?</span>pretty

GET _cat/nodes

GET _nodes/stats

GET  /jobui_salary_search/_search
<span class="token punctuation">{</span>
    <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;must_not&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                        <span class="token key atrule">&quot;Salary&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;match&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                        <span class="token key atrule">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                            <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u9500\u552E\u7ECF\u7406&quot;</span><span class="token punctuation">,</span>
                            <span class="token key atrule">&quot;operator&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;and&quot;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                        <span class="token key atrule">&quot;PCity&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u5E7F\u5DDE&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token key atrule">&quot;aggregations&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;SmallArea&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;terms&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;SmallArea&quot;</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;50&quot;</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;order&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;_count&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;desc&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token key atrule">&quot;aggregations&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;avgSalary&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;avg&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                        <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Salary&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;avgSalary&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;avg&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Salary&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

GET  /jobui_salary_search_2022/_search
<span class="token punctuation">{</span>
<span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;must_not&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;Salary&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;match_phrase&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                        <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u670D\u88C5\u9500\u552E\u987E\u95EE&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;CCity&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u5E7F\u5DDE&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token key atrule">&quot;aggregations&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;terms&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Name.kw&quot;</span><span class="token punctuation">,</span>
            <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
            <span class="token key atrule">&quot;order&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;_count&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;desc&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;aggregations&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;avgSalary&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;avg&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Salary&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token key atrule">&quot;PCity&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;terms&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;PCity&quot;</span><span class="token punctuation">,</span>
            <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
            <span class="token key atrule">&quot;order&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;_count&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;desc&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;aggregations&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;avgSalary&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;avg&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Salary&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token key atrule">&quot;FSalary&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;terms&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;FSalary&quot;</span><span class="token punctuation">,</span>
            <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
            <span class="token key atrule">&quot;order&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;_count&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;desc&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;aggregations&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;avgSalary&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;avg&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Salary&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token key atrule">&quot;avgSalary&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;avg&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Salary&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

GET /jobui_salary_search_2023/_search

GET /trends2022_v2/trends/_search

GET /trends2022_v2/trends/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;match_phrase&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;PName&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                        <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u9500\u552E&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;PCity&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u5E7F\u5DDE&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;SCity&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u5929\u6CB3&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

GET /jobui_salary_search/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;must_not&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;Salary&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;match_phrase&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                        <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u9500\u552E&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;CCity&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u5E7F\u5DDE&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;SmallArea&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u5929\u6CB3\u533A&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

GET /jobui_salary_search/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;must_not&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;Salary&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;match_phrase&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                        <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;php&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;CCity&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u5E7F\u5DDE&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;Industry&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token key atrule">&quot;aggregations&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;avgSalary&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;avg&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Salary&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

GET  /jobui_salary_search_2023
GET  /jobui_salary_search_v2/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;match_phrase&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u9500\u552E\u4EE3\u8868&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

GET /jobui_salary_search_2022_v3/_mapping

PUT /jobui_salary_search_2023
<span class="token punctuation">{</span>
    <span class="token key atrule">&quot;mappings&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;salary&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;properties&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;PID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          					<span class="token key atrule">&quot;analyzer&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;ik_smart&quot;</span><span class="token punctuation">,</span>
          					<span class="token key atrule">&quot;fields&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          						<span class="token key atrule">&quot;kw&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> 
            						<span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span>  <span class="token string">&quot;keyword&quot;</span>
          						<span class="token punctuation">}</span>
        						<span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;PCity&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;Salary&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;FSalary&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;SmallArea&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;PType&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;Age&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;Degree&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;CID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;CCity&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;Worker&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;Industry&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;SmallIndustry&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;Month&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;Year&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token key atrule">&quot;settings&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;number_of_shards&quot;</span><span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;number_of_replicas&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

POST /_reindex<span class="token punctuation">?</span>wait_for_completion=false
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;source&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;index&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;jobui_salary_search_2022_v3&quot;</span><span class="token punctuation">,</span>
    <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">500</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;dest&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;index&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;jobui_salary_search_2022_v4&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

GET /jobui_salary_search/

POST /_aliases
<span class="token punctuation">{</span>
	<span class="token key atrule">&quot;actions&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
		<span class="token key atrule">&quot;add&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
			<span class="token key atrule">&quot;index&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;jobui_salary_search_2018&quot;</span><span class="token punctuation">,</span>
			<span class="token key atrule">&quot;alias&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;jobui_salary_search&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

GET _tasks<span class="token punctuation">?</span>detailed=true<span class="token important">&amp;actions=*reindex</span>

GET /_tasks/F4c1BDoGSDqCqt2raIRmHA<span class="token punctuation">:</span><span class="token number">7766345282</span>

POST /_tasks/F4c1BDoGSDqCqt2raIRmHA<span class="token punctuation">:</span>7453932752/_cancel

GET /_cat/indices

GET /jobui_salary_search_2022/_search

PUT /jobui_salary_search_2023
<span class="token punctuation">{</span>
    <span class="token key atrule">&quot;mappings&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;salary&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;properties&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;PID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          					<span class="token key atrule">&quot;analyzer&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;ik_max_word&quot;</span><span class="token punctuation">,</span>
          					<span class="token key atrule">&quot;fields&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          						<span class="token key atrule">&quot;kw&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> 
            						<span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span>  <span class="token string">&quot;keyword&quot;</span>
          						<span class="token punctuation">}</span>
        						<span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;PCity&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;Salary&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;FSalary&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;SmallArea&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;PType&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;Age&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;Degree&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;CID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;CCity&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;Worker&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;Industry&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;SmallIndustry&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;Month&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;Year&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token key atrule">&quot;settings&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;number_of_shards&quot;</span><span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;number_of_replicas&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

GET /jobui_salary_search/_search
<span class="token punctuation">{</span>
    <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;must_not&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                        <span class="token key atrule">&quot;Salary&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;match&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                        <span class="token key atrule">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                            <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;php&quot;</span><span class="token punctuation">,</span>
                            <span class="token key atrule">&quot;operator&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;and&quot;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                        <span class="token key atrule">&quot;PCity&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u5E7F\u5DDE&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token key atrule">&quot;aggregations&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;Age&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;terms&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Age&quot;</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;order&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;avgSalary&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;desc&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token key atrule">&quot;aggregations&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;avgSalary&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;avg&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                        <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Salary&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;terms&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Name.kw&quot;</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;order&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;avgSalary&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;desc&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token key atrule">&quot;aggregations&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;avgSalary&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;avg&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                        <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Salary&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;FSalary&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;terms&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;FSalary&quot;</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;order&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;avgSalary&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;desc&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token key atrule">&quot;aggregations&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;avgSalary&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;avg&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                        <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Salary&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;Industry&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;terms&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Industry&quot;</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;order&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;avgSalary&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;desc&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token key atrule">&quot;aggregations&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;avgSalary&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;avg&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                        <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Salary&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;avgSalary&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;avg&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Salary&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

GET jobui_salary_search_2019/_search

GET jobui_salary_search_2022_v2/_search

GET jobui_salary_search/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;range&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;PID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;gt&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;sort&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;PID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;order&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;asc&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;_source&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;PID&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;FSalary&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Salary&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

GET jobui_salary_search_2022_v2/_search

GET jobui_salary_search_2022_v2/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;match&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;Month&quot;</span><span class="token punctuation">:</span> <span class="token number">202202</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

PUT /jobui_salary_search_2022_v2
<span class="token punctuation">{</span>
    <span class="token key atrule">&quot;mappings&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;salary&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;properties&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;PID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
                    <span class="token key atrule">&quot;analyzer&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;ik_max_word&quot;</span><span class="token punctuation">,</span>
          					<span class="token key atrule">&quot;fields&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          						<span class="token key atrule">&quot;kw&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> 
            						<span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span>  <span class="token string">&quot;keyword&quot;</span>
          						<span class="token punctuation">}</span>
        						<span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;PCity&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;Salary&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;FSalary&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;SmallArea&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;PType&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;Age&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;Degree&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;CID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;CCity&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;Worker&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;Industry&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;SmallIndustry&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;Month&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token key atrule">&quot;Year&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token key atrule">&quot;settings&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;number_of_shards&quot;</span><span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;number_of_replicas&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

POST /_analyze
<span class="token punctuation">{</span>
    <span class="token key atrule">&quot;analyzer&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;ik_max_word&quot;</span><span class="token punctuation">,</span>
    <span class="token key atrule">&quot;text&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u7701\u7EA7\u7ECF\u7406&quot;</span>
<span class="token punctuation">}</span>


GET jobui_salary_search_2022_v2/_search

GET smallposition_v4
GET smallposition_v5/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;sort&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;SPI_SnatchTime&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;order&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;desc&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

GET smallposition_v5/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;range&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;SPI_PositionID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
              <span class="token key atrule">&quot;gt&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;SPI_Domain&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;mcmqyc.com&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;sort&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;SPI_PositionID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;order&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;asc&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;_source&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;SPI_PositionID&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;SPI_Domain&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;SPI_Url&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;SPI_CompanyID&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>


GET smallposition_v4/_mapping
PUT smallposition_v5
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;mappings&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;position&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;properties&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;CSF_FollowNum&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;CSJ_TotalViewNum&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;SPI_CompanyID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;SPI_Domain&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;SPI_PositionID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;SPI_PositionName&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token key atrule">&quot;fields&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;keyword&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
              <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token key atrule">&quot;analyzer&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;ik_smart&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;SPI_SnatchTime&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;long&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;SPI_Url&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;SPI_WorkPlace&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;settings&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;number_of_shards&quot;</span><span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token key atrule">&quot;number_of_replicas&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

PUT /smallposition_v5/_alias/jobui_smallposition

GET jobui_smallposition/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;match&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;SPI_CompanyID&quot;</span><span class="token punctuation">:</span> <span class="token number">16835194</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;aggregations&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;SmallArea&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;terms&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;SPI_Domain&quot;</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;50&quot;</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;order&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;_count&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;desc&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token key atrule">&quot;sort&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;SPI_SnatchTime&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;order&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;desc&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

GET jobui_smallposition/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;match&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            &quot;SPI_Domain&quot;<span class="token punctuation">:</span><span class="token string">&quot;51job.com&quot;</span> 
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token key atrule">&quot;sort&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;SPI_SnatchTime&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;order&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;desc&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

GET jobui_salary_search_2022_v2/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;match&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;Month&quot;</span><span class="token punctuation">:</span> <span class="token number">202210</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;sort&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;PID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;order&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;desc&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

GET jobui_salary_search_2023_v2/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;CID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
              <span class="token key atrule">&quot;value&quot;</span><span class="token punctuation">:</span> <span class="token number">11679164</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

GET jobui_salary_search/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;range&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;Month&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
              <span class="token key atrule">&quot;lte&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;202305&quot;</span><span class="token punctuation">,</span>
              <span class="token key atrule">&quot;gte&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;202205&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;must_not&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                  <span class="token key atrule">&quot;Salary&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
                            <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;match&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                  <span class="token key atrule">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u65BD\u5DE5\u5458&quot;</span><span class="token punctuation">,</span>
                    <span class="token key atrule">&quot;operator&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;and&quot;</span>
                  <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                  <span class="token key atrule">&quot;Age&quot;</span><span class="token punctuation">:</span> <span class="token number">6</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                  <span class="token key atrule">&quot;CCity&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u5357\u5B81&quot;</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span>

GET jobui_salary_search/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;must_not&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                  <span class="token key atrule">&quot;Salary&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                  <span class="token key atrule">&quot;CID&quot;</span><span class="token punctuation">:</span> <span class="token number">15113619</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                  <span class="token key atrule">&quot;Month&quot;</span><span class="token punctuation">:</span> <span class="token number">202309</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;aggs&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;unique_names&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;terms&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Name.kw&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

GET jobui_view_rank/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;match&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;CBY_CID&quot;</span><span class="token punctuation">:</span> <span class="token number">24846</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
GET jobui_view_rank_2022/_search

PUT jobui_view_rank_2022
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;mappings&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;view&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;properties&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;CBY_Area&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;CBY_CID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;CBY_Industry&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;CBY_LastUpdateTime&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;CBY_Num&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;CBY_SmallArea&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;settings&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;number_of_shards&quot;</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token key atrule">&quot;number_of_replicas&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

GET jobui_salary_rank_v1/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;constant_score&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;filter&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
              <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;companyID&quot;</span><span class="token punctuation">:</span> <span class="token number">10978981</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;range&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;year&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
              <span class="token key atrule">&quot;gt&quot;</span><span class="token punctuation">:</span> <span class="token number">2018</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;aggregations&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;years_Agg&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;terms&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;year&quot;</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;order&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;_term&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;asc&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;aggregations&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;salary_Agg&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;avg&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;avgPay&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>


GET jobui_salary_search/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;constant_score&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;filter&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
              <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;CID&quot;</span><span class="token punctuation">:</span> <span class="token number">10978981</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;range&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;Year&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
              <span class="token key atrule">&quot;gt&quot;</span><span class="token punctuation">:</span> <span class="token number">2017</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;aggregations&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;years_Agg&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;terms&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Year&quot;</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;order&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;_term&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;asc&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;aggregations&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;salary_Agg&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;avg&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Salary&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

GET jobui_view_rank_recent_v16/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;match&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;CBY_CID&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;1236&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

GET trends2023_v2/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;match&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;CID&quot;</span><span class="token punctuation">:</span> <span class="token number">12531522</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


GET jobui_salary_search_recent/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;match&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;CID&quot;</span><span class="token punctuation">:</span> <span class="token number">1228374</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

POST /_aliases
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;actions&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;add&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;index&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;jobui_salary_search_2022_v2&quot;</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;alias&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;jobui_salary_search_recent&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

GET jobui_salary_search_2019/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;CCity&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u8944\u9633&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;SmallArea&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u9AD8\u65B0\u533A&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

POST jobui_salary_search_2018/_update_by_query
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;CCity&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u8944\u9633&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;SmallArea&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u9AD8\u65B0\u5F00\u53D1\u533A&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;script&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;source&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;ctx._source.SmallArea = params.SmallArea;&quot;</span><span class="token punctuation">,</span>
    <span class="token key atrule">&quot;params&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;SmallArea&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u9AD8\u65B0\u533A&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
GET smallposition_v7/_search

PUT smallposition_v7
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;mappings&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;position&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;properties&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;CSF_FollowNum&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;CSJ_TotalViewNum&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;SPI_CompanyID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;SPI_Domain&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;SPI_PositionID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;SPI_PositionName&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token key atrule">&quot;fields&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;keyword&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
              <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token key atrule">&quot;analyzer&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;ik_smart&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;SPI_SnatchTime&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;long&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;SPI_Url&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;SPI_WorkPlace&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;SPI_Province&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;SPI_AreaCode&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;SPI_JobType&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;SPI_JobAge&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;SPI_Degree&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;SPI_Metro&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;SPI_HotPlace&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;SPI_Pay&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;SPI_WorkerNum&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;SPI_Sort&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;CI_Impression&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;CI_Type&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;SPI_Position_0&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;SPI_Position_1&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;SPI_Lng&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;SPI_Lat&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;SPI_CompanyName&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token key atrule">&quot;fields&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;keyword&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
              <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token key atrule">&quot;analyzer&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;ik_smart&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;settings&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;number_of_shards&quot;</span><span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token key atrule">&quot;number_of_replicas&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
GET jobui_salary_search/_search
<span class="token punctuation">{</span>
<span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
  <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span><span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;PID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;value&quot;</span><span class="token punctuation">:</span> <span class="token number">285671729</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>  
<span class="token punctuation">}</span>

GET jobui_salary_search_2024/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span><span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;CID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;value&quot;</span><span class="token punctuation">:</span> <span class="token number">17434668</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

GET smallposition_v6/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;SPI_CompanyID&quot;</span><span class="token punctuation">:</span> <span class="token number">17434668</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
GET smallposition_v7/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;match&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;_id&quot;</span><span class="token punctuation">:</span> <span class="token number">252894486</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
GET smallposition_v7/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;sort&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;SPI_SnatchTime&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;order&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;desc&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span>

GET smallposition_v6/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;match&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;_id&quot;</span><span class="token punctuation">:</span> <span class="token number">285671729</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

GET jobui_salary_search_2022_v2
POST /_aliases
<span class="token punctuation">{</span>
	<span class="token key atrule">&quot;actions&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
		<span class="token key atrule">&quot;remove&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
			<span class="token key atrule">&quot;index&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;jobui_salary_search_2022_v2&quot;</span><span class="token punctuation">,</span>
			<span class="token key atrule">&quot;alias&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;jobui_salary_search_recent&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

GET jobui_salary_search_2023_v2/_search
GET jobui_smallposition/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must_not&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;exists&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;SPI_Position_0&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
GET jobui_salary_search_2023_v2/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;CID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
              <span class="token key atrule">&quot;value&quot;</span><span class="token punctuation">:</span> <span class="token number">17087646</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
GET jobui_salary_search_recent/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;CID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
              <span class="token key atrule">&quot;value&quot;</span><span class="token punctuation">:</span> <span class="token number">1236</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;aggregations&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;terms&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Name.kw&quot;</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;order&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;_term&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;desc&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

GET jobui_smallposition/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            &quot;SPI_Domain&quot;<span class="token punctuation">:</span><span class="token string">&quot;lagou.com&quot;</span> 
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;range&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;SPI_SnatchTime&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
              <span class="token key atrule">&quot;lt&quot;</span><span class="token punctuation">:</span> <span class="token number">1699113600</span><span class="token punctuation">,</span>
              <span class="token key atrule">&quot;gte&quot;</span><span class="token punctuation">:</span> <span class="token number">1699027200</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
GET jobui_smallposition/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;range&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;SPI_SnatchTime&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
              <span class="token key atrule">&quot;gt&quot;</span><span class="token punctuation">:</span> <span class="token number">1699108412</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;SPI_CompanyID&quot;</span><span class="token punctuation">:</span> <span class="token number">15110</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;sort&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;SPI_SnatchTime&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;order&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;desc&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;from&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;_source&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;SPI_PositionID&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

GET jobui_salary_search_2023_v2/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;match&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;Month&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;202301&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

GET jobui_smallposition/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;range&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;SPI_PositionID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;lt&quot;</span><span class="token punctuation">:</span> <span class="token number">265027367</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;sort&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;SPI_PositionID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;order&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;desc&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;_source&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;SPI_PositionID&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;SPI_Domain&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;SPI_Url&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;SPI_CompanyID&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
GET jobui_smallposition/_mapping
GET jobui_smallposition/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;match&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;_id&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;100008368&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


GET jobui_smallposition/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;exists&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;SPI_Position_0&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;sort&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;SPI_SnatchTime&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;order&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;desc&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">20</span>
<span class="token punctuation">}</span>


GET jobui_salary_search/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;match&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;_id&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;685202&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

GET jobui_smallposition/_search
<span class="token punctuation">{</span>
 <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
   <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
     <span class="token key atrule">&quot;must_not&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
       <span class="token punctuation">{</span><span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
         <span class="token key atrule">&quot;SPI_Position_0&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
           <span class="token key atrule">&quot;value&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
         <span class="token punctuation">}</span>
       <span class="token punctuation">}</span><span class="token punctuation">}</span>
     <span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 

GET jobui_smallposition/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;SPI_CompanyID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
              <span class="token key atrule">&quot;value&quot;</span><span class="token punctuation">:</span> <span class="token number">7377</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;SPI_Position_0&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
              <span class="token key atrule">&quot;value&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u8BA1\u7B97\u673A/\u7F51\u7EDC/\u6280\u672F\u7C7B&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span>

GET jobui_salary_search_2023_v2/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;PCity&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u5E7F\u5DDE&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;PID&quot;</span><span class="token punctuation">:</span> <span class="token number">24882006</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

POST jobui_salary_search_2023_v2/_update_by_query
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;PCity&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u5E7F\u5DDE&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;PID&quot;</span><span class="token punctuation">:</span> <span class="token number">24882006</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;script&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;source&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;ctx._source.SmallArea = params.SmallArea;&quot;</span><span class="token punctuation">,</span>
    <span class="token key atrule">&quot;params&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;SmallArea&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u9EC4\u57D4\u533A&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

GET jobui_smallposition/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;match&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;_id&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;217978610&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

GET jobui_view_rank_recent_v17/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span><span class="token key atrule">&quot;range&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;CBY_CID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;lt&quot;</span><span class="token punctuation">:</span> <span class="token number">21225477</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
GET jobui_smallposition/_search
GET jobui_smallposition/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;range&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;SPI_PositionID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
              <span class="token key atrule">&quot;gt&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;should&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;SPI_Position_0&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;must_not&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;exists&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                  <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;SPI_Position_0&quot;</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;minimum_should_match&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;sort&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;SPI_PositionID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;order&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;asc&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;from&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;_source&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;SPI_PositionID&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;SPI_PositionName&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;SPI_CompanyID&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;SPI_CompanyName&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;SPI_Position_0&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;SPI_WorkPlace&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;SPI_SnatchTime&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
GET jobui_salary_search_2023_v2/_search
GET jobui_salary_search_2023_v2/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;range&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;PID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
              <span class="token key atrule">&quot;gt&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;should&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;SmallArea&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;must_not&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;exists&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                  <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;SmallArea&quot;</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;minimum_should_match&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;sort&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;PID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;order&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;asc&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;from&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">100</span>
<span class="token punctuation">}</span>

GET jobui_salary_search_2023_v2/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span><span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;Month&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;value&quot;</span><span class="token punctuation">:</span> <span class="token number">202310</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;CID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;value&quot;</span><span class="token punctuation">:</span> <span class="token number">11731330</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

GET jobui_smallposition/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span><span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;SPI_CompanyID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;value&quot;</span><span class="token punctuation">:</span> <span class="token number">17434668</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;sort&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;SPI_SnatchTime&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;order&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;asc&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

GET jobui_smallposition/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;sort&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;SPI_SnatchTime&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;order&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;desc&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
GET jobui_salary_search_2023_v2/_search
GET jobui_salary_search_2023_v2/_search
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;must&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;range&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;PID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
              <span class="token key atrule">&quot;gt&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;should&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;term&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;SmallArea&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;must_not&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;exists&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                  <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;SmallArea&quot;</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;minimum_should_match&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;sort&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;PID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;order&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;asc&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;_source&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;PID&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Month&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;PCity&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;SmallArea&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>


PUT jobui_salary_search_2024
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;mappings&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;salary&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;properties&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;Age&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;CCity&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;CID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;Degree&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;FSalary&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;Industry&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;Month&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token key atrule">&quot;fields&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;kw&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
              <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token key atrule">&quot;analyzer&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;ik_max_word&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;PCity&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;PID&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;PType&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;Salary&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;SmallArea&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;SmallIndustry&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;Worker&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;Year&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token key atrule">&quot;settings&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;number_of_shards&quot;</span><span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;number_of_replicas&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
GET jobui_view_rank_2022

GET smallposition_v6/_search

GET /_cat/master<span class="token punctuation">?</span>v

GET _nodes/stats

GET _cluster/health<span class="token punctuation">?</span>pretty

GET _cat/nodes

GET _cat/shards<span class="token punctuation">?</span>v

GET _cat/indices<span class="token punctuation">?</span>v

GET _cluster/settings

GET _cat/health<span class="token punctuation">?</span>v

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="elk\u67E5\u770B\u8FD1\u4E00\u5468\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#elk\u67E5\u770B\u8FD1\u4E00\u5468\u6570\u636E" aria-hidden="true">#</a> elk\u67E5\u770B\u8FD1\u4E00\u5468\u6570\u636E</h4><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>GET nginx_m<span class="token punctuation">-</span>access<span class="token punctuation">-</span><span class="token important">*/_search</span>
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;range&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;format_time_local&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;format&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;strict_date_optional_time&quot;</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;gte&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;2024-07-01T00:00:00.000Z&quot;</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;lte&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;2024-07-07T23:59:59.999Z&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;aggs&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;daily_counts&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;date_histogram&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;format_time_local&quot;</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;calendar_interval&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;day&quot;</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;format&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;yyyy-MM-dd&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

GET nginx_m<span class="token punctuation">-</span>access<span class="token punctuation">-</span><span class="token important">*/_search</span>
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;filter&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;range&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;format_time_local&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
              <span class="token key atrule">&quot;format&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;strict_date_optional_time&quot;</span><span class="token punctuation">,</span>
              <span class="token key atrule">&quot;gte&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;2024-07-01T00:00:00.000Z&quot;</span><span class="token punctuation">,</span>
              <span class="token key atrule">&quot;lte&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;2024-07-07T23:59:59.999Z&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;should&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;range&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                  <span class="token key atrule">&quot;request_time&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;lt&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;0.5&quot;</span>
                  <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token key atrule">&quot;minimum_should_match&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;aggs&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;daily_counts&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;date_histogram&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;format_time_local&quot;</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;calendar_interval&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;day&quot;</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;format&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;yyyy-MM-dd&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


GET nginx_www<span class="token punctuation">-</span>access<span class="token punctuation">-</span><span class="token important">*/_search</span>
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;range&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;format_time_local&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;format&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;strict_date_optional_time&quot;</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;gte&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;2024-07-01T00:00:00.000Z&quot;</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;lte&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;2024-07-07T23:59:59.999Z&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;aggs&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;daily_counts&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;date_histogram&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;format_time_local&quot;</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;calendar_interval&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;day&quot;</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;format&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;yyyy-MM-dd&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

GET nginx_www<span class="token punctuation">-</span>access<span class="token punctuation">-</span><span class="token important">*/_search</span>
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;filter&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;range&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;format_time_local&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
              <span class="token key atrule">&quot;format&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;strict_date_optional_time&quot;</span><span class="token punctuation">,</span>
              <span class="token key atrule">&quot;gte&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;2024-07-01T00:00:00.000Z&quot;</span><span class="token punctuation">,</span>
              <span class="token key atrule">&quot;lte&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;2024-07-07T23:59:59.999Z&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;bool&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">&quot;should&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token key atrule">&quot;range&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                  <span class="token key atrule">&quot;request_time&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token key atrule">&quot;lt&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;0.5&quot;</span>
                  <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token key atrule">&quot;minimum_should_match&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;aggs&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;daily_counts&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;date_histogram&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;format_time_local&quot;</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;calendar_interval&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;day&quot;</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;format&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;yyyy-MM-dd&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

GET php<span class="token punctuation">-</span>slow<span class="token punctuation">-</span>log<span class="token punctuation">-</span><span class="token important">*/_search</span>
<span class="token punctuation">{</span>
  <span class="token key atrule">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;range&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;format_time_local&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;format&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;strict_date_optional_time&quot;</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;gte&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;2024-07-01T00:00:00.000Z&quot;</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;lte&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;2024-07-07T23:59:59.999Z&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;aggs&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;daily_counts&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;date_histogram&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;field&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;format_time_local&quot;</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;calendar_interval&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;day&quot;</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;format&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;yyyy-MM-dd&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="es\u96C6\u7FA4\u5347\u7EA7" tabindex="-1"><a class="header-anchor" href="#es\u96C6\u7FA4\u5347\u7EA7" aria-hidden="true">#</a> es\u96C6\u7FA4\u5347\u7EA7</h2><blockquote><p>\u91CD\u70B9\uFF1A\u6EDA\u52A8\u5347\u7EA7\u8981\u6CE8\u610F\u7248\u672C\uFF0C5.6-6.X-7.x\uFF0C\u9010\u6B65\u5347\u7EA7\uFF0C\u4ECE\u8282\u70B9\u5148\u5347\u7EA7\uFF0C\u4E3B\u8282\u70B9\u6700\u540E\uFF0C\u56E0\u4E3A\u4F4E\u7248\u672C\u65E0\u6CD5\u52A0\u5165\u9AD8\u7248\u672C\u7684\u96C6\u7FA4</p></blockquote><p><strong>bug\u8BB0\u5F55</strong></p><blockquote><p>6.8\u7248\u672C\u7684ik\u5206\u8BCD\u5668\u6709bug\uFF0C\u590D\u5236\u7D22\u5F15\u4F1A\u62A5\u9519\uFF0C\u89E3\u51B3\u65B9\u6848\uFF1A \u4F7F\u75286.6.1\u7248\u672C\uFF0C\u89E3\u51B3\u7248\u672C\u51B2\u7A81\u95EE\u9898\u65B9\u6CD5\uFF0Celasticsearch-6.8.23/plugins/analysis-ik/plugin-descriptor.properties\u4FEE\u6539es\u7248\u672C\u53F7</p></blockquote>`,52),p=[u];function i(o,l){return s(),a("div",null,p)}var d=n(e,[["render",i],["__file","ElasticSearch.html.vue"]]);export{d as default};
