import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as s,b as n}from"./app.0939ff59.js";const i={},d=n(`<h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> mysql</h2><h3 id="\u57FA\u672C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u547D\u4EE4" aria-hidden="true">#</a> \u57FA\u672C\u547D\u4EE4</h3><h5 id="\u8FDE\u63A5\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u8FDE\u63A5\u6570\u636E\u5E93" aria-hidden="true">#</a> \u8FDE\u63A5\u6570\u636E\u5E93</h5><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/usr/local/bin/mysql <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-u</span> root <span class="token parameter variable">-P</span> <span class="token number">3306</span> <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u589E</strong></p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>INSERT INTO \u8868\u540D (\u5B57\u6BB51,\u5B57\u6BB52,\u5B57\u6BB53,\u2026\u2026) VALUES (\u503C1,\u503C2,\u503C3,\u2026\u2026);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u5220</strong></p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>DELETE FROM \u8868\u540D [WHERE \u6761\u4EF6] [DRDER BY \u5B57\u6BB5] [LIMIT \u884C\u6570];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u6539</strong></p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>UPDATE \u8868\u540D SET \u5B57\u6BB5\u540D=\u8868\u8FBE\u5F0F [\u2026\u2026] [WHERE \u6761\u4EF6] [ORDER BY \u5B57\u6BB5] [LIMIT \u884C\u6570];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u67E5</strong></p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SELECT * FROM \u8868\u540D [WHERE \u6761\u4EF6] [ORDER BY \u5B57\u6BB5] [LIMIT \u884C\u6570]\uFF1B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u521B\u5EFA\u65B0\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u65B0\u7528\u6237" aria-hidden="true">#</a> \u521B\u5EFA\u65B0\u7528\u6237</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>GRANT SELECT,INSERT,UPDATE,DELETE ON *.* TO phpuser@&quot;%&quot; IDENTIFIED BY &quot;123456\u201D;
# \u521B\u5EFA\u4E00\u4E2A\u540D\u4E3Aphpser\u7684\u7528\u6237\uFF0C\u8BA9\u8BE5\u7528\u6237\u62E5\u6709\u5BF9\u6240\u6709\u6570\u636E\u5E93\u7684\u67E5\u8BE2\u3001\u63D2\u5165\u3001\u4FEE\u6539\u3001\u5220\u9664\u6743\u9650\uFF0C\u5E76\u4E14\u53EF\u4EE5\u5728\u4EFB\u4F55\u4F4D\u7F6E\u767B\u5F55\uFF0C\u5BC6\u7801\u662F123456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>GRANT SELECT ON phptest* TO phpser@localhost IDENTIFIED BY &quot;123456&quot;;
# \u521B\u5EFA\u4E00\u4E2A\u540D\u4E3Aphpuser\u7684\u7528\u6237\uFF0C\u8BA9\u8BE5\u7528\u6237\u62E5\u6709\u5BF9phptest\u5E93\u4E2D\u6240\u6709\u8868\u7684\u67E5\u8BE2\u6743\u9650\uFF0C\u767B\u9646\u65B9\u5F0F\u4E3A\u672C\u5730\u767B\u5F55\uFF0C\u5BC6\u7801\u662F123456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u521B\u5EFA\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u6570\u636E\u5E93" aria-hidden="true">#</a> \u521B\u5EFA\u6570\u636E\u5E93</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>CREATE DATABASE [IF NOT EXISTS] phptest1;
# \u65B0\u5EFA\u4E00\u4E2A\u540D\u4E3Aphptest1\u7684\u6570\u636E\u5E93\uFF0C\u4F7F\u7528[if not exists]\u5224\u65AD\u6570\u636E\u5E93\u662F\u5426\u5B58\u5728\uFF0C\u5B58\u5728\u5219\u4E0D\u521B\u5EFA

SHOW DATABASES;
# \u67E5\u770B\u5DF2\u7ECF\u521B\u5EFA\u7684\u6570\u636E\u5E93\u5217\u8868

\\s
# \u67E5\u770B\u5F53\u524D\u72B6\u6001

USE phptest1
# \u8FDB\u5165\u5230phptest1\u6570\u636E\u5E93
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5220\u9664\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u6570\u636E\u5E93" aria-hidden="true">#</a> \u5220\u9664\u6570\u636E\u5E93</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>DROP DATABASE [IF EXISTS] phptest1;
# \u5220\u9664\u540D\u4E3Aphptest1\u7684\u6570\u636E\u5E93
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u521B\u5EFA\u6570\u636E\u8868" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u6570\u636E\u8868" aria-hidden="true">#</a> \u521B\u5EFA\u6570\u636E\u8868</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>CREATE TABLE IF NOT EXISTS test1(id INT,name CHAR(40));
# \u521B\u5EFA\u540D\u4E3Atest1\u7684\u6570\u636E\u8868
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u67E5\u770B\u6570\u636E\u8868" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6570\u636E\u8868" aria-hidden="true">#</a> \u67E5\u770B\u6570\u636E\u8868</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SHOW TABLES;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u67E5\u770B\u6570\u636E\u8868\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6570\u636E\u8868\u7ED3\u6784" aria-hidden="true">#</a> \u67E5\u770B\u6570\u636E\u8868\u7ED3\u6784</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>DESC test1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u6570\u636E\u8868\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u8868\u5C5E\u6027" aria-hidden="true">#</a> \u6570\u636E\u8868\u5C5E\u6027</h3><blockquote><p><em><strong>UNSIGNED</strong></em> \u8BE5\u5C5E\u6027\u53EA\u80FD\u8BBE\u7F6E\u4E8E\u6570\u503C\u7C7B\u578B\uFF0C\u8868\u793A\u4E0D\u5141\u8BB8\u51FA\u73B0\u8D1F\u6570\u3002</p><p><em><strong>ZEROFILL</strong></em> \u8BE5\u5C5E\u6027\u53EA\u80FD\u8BBE\u7F6E\u4E8E\u6570\u503C\u7C7B\u578B\uFF0C\u8868\u793A\u5728\u6570\u503C\u4E4B\u524D\u81EA\u52A8\u88650\u3002\u200B</p><p><em><strong>AUTO_INCREMENT</strong></em> \u8BE5\u5C5E\u6027\u7528\u4E8E\u8BBE\u7F6E\u5B57\u6BB5\u7684\u81EA\u52A8\u589E\u91CF\uFF0C\u6BCF\u589E\u52A0\u4E00\u6761\u65B0\u7EAA\u5F55\u8FD9\u4E2A\u5B57\u6BB5\u81EA\u52A8\u52A0\u4E00\uFF0C\u800C\u4E14\u8BE5\u5B57\u6BB5\u4E0D\u5141\u8BB8\u91CD\u590D\u3002\u200B</p><p><em><strong>NULL\u8DDFNOT NULL</strong></em> \u9ED8\u8BA4\u4E3ANULL\uFF0C\u6307\u5B9A\u4E86NOT NULL \u5219\u5FC5\u987B\u5728\u63D2\u5165\u503C\u65F6\u5728\u6B64\u5B57\u6BB5\u63D2\u5165\u503C\u3002</p><p><em><strong>DEFULT</strong></em> \u8BBE\u7F6E\u4E00\u4E2A\u9ED8\u8BA4\u503C</p><p><em><strong>UNIQUE</strong></em> \u5B57\u6BB5\u552F\u4E00\u6027</p></blockquote><h3 id="\u4FEE\u6539\u6570\u636E\u8868" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u6570\u636E\u8868" aria-hidden="true">#</a> \u4FEE\u6539\u6570\u636E\u8868\uFF1A</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>ALTER TABLE \u8868\u540D add \u5B57\u6BB5\u540D \u5C5E\u6027 \u2026\u2026 FIRST | AFTER \u8868\u540D \uFF08#\u4E3A\u6307\u5B9A\u4F4D\u7F6E\u6DFB\u52A0\u65B0\u5217\uFF09

# \u5B9E\u4F8B\uFF1AALTER TABLE test2 ADD sex VARCHAR(4) NOT NULL DEFAULT &#39;man&#39; AFTER age;

# CHANGE (\u53EF\u4EE5\u6539\u53D8id\u53CA\u5C5E\u6027\u540D)
# \u793A\u4F8B\uFF1AALTER TABLE test2 CHANGE sex xingbie

# MODIFY (\u53EA\u80FD\u6539\u53D8\u5C5E\u6027\u540D)
# \u793A\u4F8B\uFF1AALTER TABLE test2 MODIFY name varchar(4);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5220\u9664\u8868\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u8868\u5B57\u6BB5" aria-hidden="true">#</a> \u5220\u9664\u8868\u5B57\u6BB5\uFF1A</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>ALTER TABLE \u8868\u540D DROP \u5B57\u6BB5\u540D
# \u793A\u4F8B\uFF1AALTER TABLE test2 DROP sex;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5220\u9664\u6570\u636E\u8868" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u6570\u636E\u8868" aria-hidden="true">#</a> \u5220\u9664\u6570\u636E\u8868\uFF1A</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>DROP TABLE IF EXISTS test1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u4FEE\u6539\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u5BC6\u7801" aria-hidden="true">#</a> \u4FEE\u6539\u5BC6\u7801</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>set password for \u7528\u6237\u540D@localhost = password(\u2018\u65B0\u5BC6\u7801\u2019);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u6570\u636E\u5E93\u4E8B\u52A1\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5E93\u4E8B\u52A1\u5904\u7406" aria-hidden="true">#</a> \u6570\u636E\u5E93\u4E8B\u52A1\u5904\u7406</h3><h5 id="\u5173\u95ED\u81EA\u52A8\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#\u5173\u95ED\u81EA\u52A8\u63D0\u4EA4" aria-hidden="true">#</a> \u5173\u95ED\u81EA\u52A8\u63D0\u4EA4</h5><p><code>set autocommit=0;</code><code>mysqli-&gt;autocommit(0);\u200B</code></p><h5 id="\u5F00\u542F\u4E8B\u52A1" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542F\u4E8B\u52A1" aria-hidden="true">#</a> \u5F00\u542F\u4E8B\u52A1</h5><p><code>start transaction;</code></p><h5 id="\u63D0\u4EA4\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u63D0\u4EA4\u64CD\u4F5C" aria-hidden="true">#</a> \u63D0\u4EA4\u64CD\u4F5C</h5><p><code>commit;</code><code>$mysqlo-&gt;commit();</code></p><h5 id="\u56DE\u6EDA\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u56DE\u6EDA\u64CD\u4F5C" aria-hidden="true">#</a> \u56DE\u6EDA\u64CD\u4F5C</h5><p><code>rollback;</code><code>$mysqli-&gt;rollback();</code></p><h3 id="\u6570\u636E\u5E93\u5BFC\u5165\u5BFC\u51FA" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5E93\u5BFC\u5165\u5BFC\u51FA" aria-hidden="true">#</a> \u6570\u636E\u5E93\u5BFC\u5165\u5BFC\u51FA</h3><h4 id="\u4E00\u3001\u5BFC\u51FA\u6570\u636E\u5E93\u7528mysqldump\u547D\u4EE4-\u6CE8\u610Fmysql\u7684\u5B89\u88C5\u8DEF\u5F84-\u5373\u6B64\u547D\u4EE4\u7684\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u5BFC\u51FA\u6570\u636E\u5E93\u7528mysqldump\u547D\u4EE4-\u6CE8\u610Fmysql\u7684\u5B89\u88C5\u8DEF\u5F84-\u5373\u6B64\u547D\u4EE4\u7684\u8DEF\u5F84" aria-hidden="true">#</a> \u4E00\u3001\u5BFC\u51FA\u6570\u636E\u5E93\u7528mysqldump\u547D\u4EE4\uFF08\u6CE8\u610Fmysql\u7684\u5B89\u88C5\u8DEF\u5F84\uFF0C\u5373\u6B64\u547D\u4EE4\u7684\u8DEF\u5F84\uFF09\uFF1A</h4><h5 id="\u5BFC\u51FA\u6570\u636E\u548C\u8868\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u51FA\u6570\u636E\u548C\u8868\u7ED3\u6784" aria-hidden="true">#</a> \u5BFC\u51FA\u6570\u636E\u548C\u8868\u7ED3\u6784</h5><blockquote><p>mysqldump -u\u7528\u6237\u540D -p\u5BC6\u7801 \u6570\u636E\u5E93\u540D &gt; \u6570\u636E\u5E93\u540D.sql \u6572\u56DE\u8F66\u540E\u4F1A\u63D0\u793A\u8F93\u5165\u5BC6\u7801</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/usr/local/mysql/bin/   mysqldump <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span> abc <span class="token operator">&gt;</span> abc.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="\u53EA\u5BFC\u51FA\u8868\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u53EA\u5BFC\u51FA\u8868\u7ED3\u6784" aria-hidden="true">#</a> \u53EA\u5BFC\u51FA\u8868\u7ED3\u6784</h5><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mysqldump -u\u7528\u6237\u540D -p\u5BC6\u7801 <span class="token parameter variable">-d</span> \u6570\u636E\u5E93\u540D <span class="token operator">&gt;</span> \u6570\u636E\u5E93\u540D.sql
/usr/local/mysql/bin/   mysqldump <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span> <span class="token parameter variable">-d</span> abc <span class="token operator">&gt;</span> abc.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6CE8\uFF1A/usr/local/mysql/bin/ ---&gt; mysql\u7684data\u76EE\u5F55</p></blockquote><h4 id="\u4E8C\u3001\u4F7F\u7528mysql\u547D\u4EE4\u5BFC\u5165\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u4F7F\u7528mysql\u547D\u4EE4\u5BFC\u5165\u6570\u636E\u5E93" aria-hidden="true">#</a> \u4E8C\u3001\u4F7F\u7528mysql\u547D\u4EE4\u5BFC\u5165\u6570\u636E\u5E93</h4><h5 id="\u9996\u5148\u5EFA\u7A7A\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u9996\u5148\u5EFA\u7A7A\u6570\u636E\u5E93" aria-hidden="true">#</a> \u9996\u5148\u5EFA\u7A7A\u6570\u636E\u5E93</h5><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>create database abc;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="\u5BFC\u5165\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u5165\u6570\u636E" aria-hidden="true">#</a> \u5BFC\u5165\u6570\u636E</h5><p>\u65B9\u6CD5\u4E00\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code># \u9009\u62E9\u6570\u636E\u5E93
mysql&gt; use abc;
# \u8BBE\u7F6E\u6570\u636E\u5E93\u7F16\u7801
mysql&gt; set names utf8;
# \u5BFC\u5165\u6570\u636E\uFF08\u6CE8\u610Fsql\u6587\u4EF6\u7684\u8DEF\u5F84\uFF09
mysql&gt;source /home/abc/abc.sql;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B9\u6CD5\u4E8C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># mysql -u\u7528\u6237\u540D -p\u5BC6\u7801 \u6570\u636E\u5E93\u540D &lt; \u6570\u636E\u5E93\u540D.sql</span>
mysql <span class="token parameter variable">-uabc_f</span> <span class="token parameter variable">-p</span> abc <span class="token operator">&lt;</span> abc.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5EFA\u8BAE\u4F7F\u7528\u7B2C\u4E8C\u79CD\u65B9\u6CD5\u5BFC\u5165</p></blockquote>`,61),l=[d];function r(c,t){return a(),s("div",null,l)}var o=e(i,[["render",r],["__file","Mysql.html.vue"]]);export{o as default};