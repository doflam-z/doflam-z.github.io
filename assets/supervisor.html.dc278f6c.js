import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as a,e}from"./app.7ac8613b.js";const i={},l=e(`<h1 id="supervisor" tabindex="-1"><a class="header-anchor" href="#supervisor" aria-hidden="true">#</a> supervisor</h1><h3 id="yum\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#yum\u5B89\u88C5" aria-hidden="true">#</a> yum\u5B89\u88C5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> epel-release
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> supervisor
systemctl <span class="token builtin class-name">enable</span> supervisord <span class="token comment"># \u5F00\u673A\u81EA\u542F\u52A8</span>
systemctl start supervisord <span class="token comment"># \u542F\u52A8supervisord\u670D\u52A1</span>

systemctl status supervisord <span class="token comment"># \u67E5\u770Bsupervisord\u670D\u52A1\u72B6\u6001</span>
<span class="token function">ps</span> -ef<span class="token operator">|</span><span class="token function">grep</span> supervisord <span class="token comment"># \u67E5\u770B\u662F\u5426\u5B58\u5728supervisord\u8FDB\u7A0B</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7F16\u8BD1\u5B89\u88C5-\u9700\u8981python3\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u5B89\u88C5-\u9700\u8981python3\u652F\u6301" aria-hidden="true">#</a> \u7F16\u8BD1\u5B89\u88C5\uFF0C\u9700\u8981python3\u652F\u6301</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E0B\u8F7D\u5B89\u88C5python3.6.8</span>
<span class="token function">wget</span> https://www.python.org/ftp/python/3.6.8/Python-3.6.8.tgz

<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> Python-3.6.8.tgz

./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/python3

<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>

<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/python3/bin/python3.6 /usr/bin/python3.6
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/python3/bin/pip3 /usr/bin/pip3

<span class="token comment"># \u5B89\u88C5\u4F9D\u8D56</span>
yum <span class="token function">install</span> gcc zlib-devel bzip2-devel openssl openssl-devel ncurses-devel sqlite-devel <span class="token parameter variable">-y</span>

<span class="token comment">#\u6E90\u7801\u5B89\u88C5supervisor</span>

<span class="token builtin class-name">cd</span> /usr/local/src
<span class="token function">wget</span> <span class="token parameter variable">-c</span> https://files.pythonhosted.org/packages/11/35/eab03782aaf70d87303b21a67c345b953d3b59d4e3971a568c51e523f5c0/supervisor-4.2.1.tar.gz

<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> supervisor-4.2.1.tar.gz
<span class="token builtin class-name">cd</span> supervisor-4.2.1

Python3.6 setup.py <span class="token function">install</span>

<span class="token comment">#\u521B\u5EFA\u8F6F\u8FDE\u63A5\uFF1A</span>

<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/python3/bin/supervisorctl /usr/bin/supervisorctl
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/python3/bin/supervisord /usr/bin/supervisord
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/python3/bin/echo_supervisord_conf /usr/bin/echo_supervisord_conf

<span class="token function">mkdir</span> /etc/supervisord.d

<span class="token comment">#\u521B\u5EFA\u542F\u52A8\u811A\u672C</span>

<span class="token function">vi</span> /etc/init.d/supervisord
<span class="token comment">#\u5199\u5165\u5982\u4E0B\u914D\u7F6E</span>

<span class="token comment">#!/bin/bash</span>
<span class="token comment">#</span>
<span class="token comment"># supervisord   This scripts turns supervisord on</span>
<span class="token comment">#</span>
<span class="token comment"># Author:       Mike McGrath &lt;mmcgrath@redhat.com&gt; (based off yumupdatesd)</span>
<span class="token comment">#               Jason Koppe &lt;jkoppe@indeed.com&gt; adjusted to read sysconfig,</span>
<span class="token comment">#                   use supervisord tools to start/stop, conditionally wait</span>
<span class="token comment">#                   for child processes to shutdown, and startup later</span>
<span class="token comment">#               Mikhail Mingalev &lt;mingalevme@gmail.com&gt; Merged</span>
<span class="token comment">#                   redhat-init-jkoppe and redhat-sysconfig-jkoppe, and</span>
<span class="token comment">#                   made the script &quot;simple customizable&quot;.</span>
<span class="token comment">#               Brendan Maguire &lt;maguire.brendan@gmail.com&gt; Added OPTIONS to</span>
<span class="token comment">#                   SUPERVISORCTL status call</span>
<span class="token comment">#</span>
<span class="token comment"># chkconfig:    345 83 04</span>
<span class="token comment">#</span>
<span class="token comment"># description:  supervisor is a process control utility.  It has a web based</span>
<span class="token comment">#               xmlrpc interface as well as a few other nifty features.</span>
<span class="token comment">#               Script was originally written by Jason Koppe &lt;jkoppe@indeed.com&gt;.</span>
<span class="token comment">#</span>

<span class="token comment"># source function library</span>
<span class="token builtin class-name">.</span> /etc/rc.d/init.d/functions

<span class="token builtin class-name">set</span> <span class="token parameter variable">-a</span>

<span class="token assign-left variable">PREFIX</span><span class="token operator">=</span>/usr

<span class="token assign-left variable">SUPERVISORD</span><span class="token operator">=</span><span class="token variable">$PREFIX</span>/bin/supervisord
<span class="token assign-left variable">SUPERVISORCTL</span><span class="token operator">=</span><span class="token variable">$PREFIX</span>/bin/supervisorctl

<span class="token assign-left variable">PIDFILE</span><span class="token operator">=</span>/var/run/supervisord.pid
<span class="token assign-left variable">LOCKFILE</span><span class="token operator">=</span>/var/lock/subsys/supervisord

<span class="token assign-left variable">OPTIONS</span><span class="token operator">=</span><span class="token string">&quot;-c /etc/supervisord.conf&quot;</span>

<span class="token comment"># unset this variable if you don&#39;t care to wait for child processes to shutdown before removing the $LOCKFILE-lock</span>
<span class="token assign-left variable">WAIT_FOR_SUBPROCESSES</span><span class="token operator">=</span>yes

<span class="token comment"># remove this if you manage number of open files in some other fashion</span>
<span class="token builtin class-name">ulimit</span> <span class="token parameter variable">-n</span> <span class="token number">96000</span>

<span class="token assign-left variable">RETVAL</span><span class="token operator">=</span><span class="token number">0</span>


<span class="token function-name function">running_pid</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment"># Check if a given process pid&#39;s cmdline matches a given name</span>
    <span class="token assign-left variable">pid</span><span class="token operator">=</span><span class="token variable">$1</span>
    <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token variable">$2</span>
    <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$pid</span>&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">return</span> <span class="token number">1</span>
    <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> /proc/<span class="token variable">$pid</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">return</span> <span class="token number">1</span>
    <span class="token punctuation">(</span>cat /proc/<span class="token variable">$pid</span>/cmdline <span class="token operator">|</span> <span class="token function">tr</span> <span class="token string">&quot;<span class="token entity" title="\\000">\\000</span>&quot;</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span><span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-q</span> <span class="token variable">$name</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token builtin class-name">return</span> <span class="token number">1</span>
    <span class="token builtin class-name">return</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token function-name function">running</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token comment"># Check if the process is running looking at /proc</span>
<span class="token comment"># (works for all users)</span>

    <span class="token comment"># No pidfile, probably no daemon present</span>
    <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;<span class="token variable">$PIDFILE</span>&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">return</span> <span class="token number">1</span>
    <span class="token comment"># Obtain the pid and check it against the binary name</span>
    <span class="token assign-left variable">pid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> $PIDFILE<span class="token variable">\`</span></span>
    running_pid <span class="token variable">$pid</span> <span class="token variable">$SUPERVISORD</span> <span class="token operator">||</span> <span class="token builtin class-name">return</span> <span class="token number">1</span>
    <span class="token builtin class-name">return</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token function-name function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Starting supervisord: &quot;</span>
	
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-e</span> <span class="token variable">$PIDFILE</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span> 
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;ALREADY STARTED&quot;</span>
		<span class="token builtin class-name">return</span> <span class="token number">1</span>
	<span class="token keyword">fi</span>

	<span class="token comment"># start supervisord with options from sysconfig (stuff like -c)</span>
        <span class="token variable">$SUPERVISORD</span> <span class="token variable">$OPTIONS</span>
	
	<span class="token comment"># show initial startup status</span>
	<span class="token variable">$SUPERVISORCTL</span> <span class="token variable">$OPTIONS</span> status
	
	<span class="token comment"># only create the subsyslock if we created the PIDFILE</span>
        <span class="token punctuation">[</span> <span class="token parameter variable">-e</span> <span class="token variable">$PIDFILE</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">touch</span> <span class="token variable">$LOCKFILE</span>
<span class="token punctuation">}</span>

<span class="token function-name function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;Stopping supervisord: &quot;</span>
        <span class="token variable">$SUPERVISORCTL</span> <span class="token variable">$OPTIONS</span> <span class="token function">shutdown</span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$WAIT_FOR_SUBPROCESSES</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span> 
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;Waiting roughly 60 seconds for <span class="token variable">$PIDFILE</span> to be removed after child processes exit&quot;</span>
            <span class="token keyword">for</span> <span class="token for-or-select variable">sleep</span> <span class="token keyword">in</span>  <span class="token number">2</span> <span class="token number">2</span> <span class="token number">2</span> <span class="token number">2</span> <span class="token number">4</span> <span class="token number">4</span> <span class="token number">4</span> <span class="token number">4</span> <span class="token number">8</span> <span class="token number">8</span> <span class="token number">8</span> <span class="token number">8</span> last<span class="token punctuation">;</span> <span class="token keyword">do</span>
                <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-e</span> <span class="token variable">$PIDFILE</span> <span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>
                    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Supervisord exited as expected in under <span class="token variable">$total_sleep</span> seconds&quot;</span>
                    <span class="token builtin class-name">break</span>
                <span class="token keyword">else</span>
                    <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$sleep</span> <span class="token parameter variable">-eq</span> <span class="token string">&quot;last&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>
                        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Supervisord still working on shutting down. We&#39;ve waited roughly 60 seconds, we&#39;ll let it do its thing from here&quot;</span>
                        <span class="token builtin class-name">return</span> <span class="token number">1</span>
                    <span class="token keyword">else</span>
                        <span class="token function">sleep</span> <span class="token variable">$sleep</span>
                        <span class="token assign-left variable">total_sleep</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span> $total_sleep <span class="token operator">+</span> $sleep <span class="token variable">))</span></span>
                    <span class="token keyword">fi</span>

                <span class="token keyword">fi</span>
            <span class="token keyword">done</span>
        <span class="token keyword">fi</span>

        <span class="token comment"># always remove the subsys. We might have waited a while, but just remove it at this point.</span>
        <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable">$LOCKFILE</span>
<span class="token punctuation">}</span>

<span class="token function-name function">restart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        stop
        start
<span class="token punctuation">}</span>

<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
    start<span class="token punctuation">)</span>
        start
        <span class="token assign-left variable">RETVAL</span><span class="token operator">=</span><span class="token variable">$?</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    stop<span class="token punctuation">)</span>
        stop
        <span class="token assign-left variable">RETVAL</span><span class="token operator">=</span><span class="token variable">$?</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    restart<span class="token operator">|</span>force-reload<span class="token punctuation">)</span>
        restart
        <span class="token assign-left variable">RETVAL</span><span class="token operator">=</span><span class="token variable">$?</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    reload<span class="token punctuation">)</span>
        <span class="token variable">$SUPERVISORCTL</span> <span class="token variable">$OPTIONS</span> reload
        <span class="token assign-left variable">RETVAL</span><span class="token operator">=</span><span class="token variable">$?</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    condrestart<span class="token punctuation">)</span>
        <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token variable">$LOCKFILE</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> restart
        <span class="token assign-left variable">RETVAL</span><span class="token operator">=</span><span class="token variable">$?</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    status<span class="token punctuation">)</span>
        <span class="token variable">$SUPERVISORCTL</span> <span class="token variable">$OPTIONS</span> status
        <span class="token keyword">if</span> running <span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token assign-left variable">RETVAL</span><span class="token operator">=</span><span class="token number">0</span>
        <span class="token keyword">else</span>
            <span class="token assign-left variable">RETVAL</span><span class="token operator">=</span><span class="token number">1</span>
        <span class="token keyword">fi</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    *<span class="token punctuation">)</span>
        <span class="token builtin class-name">echo</span> $<span class="token string">&quot;Usage: <span class="token variable">$0</span> {start|stop|status|restart|reload|force-reload|condrestart}&quot;</span>
        <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">esac</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$RETVAL</span>

<span class="token comment"># \u52A0\u5165\u670D\u52A1</span>
<span class="token function">chkconfig</span> <span class="token parameter variable">--add</span> supervisord

<span class="token comment"># \u8BBE\u7F6E\u6743\u9650</span>
<span class="token function">chmod</span> <span class="token number">755</span> /etc/init.d/supervisord

<span class="token comment"># \u5F00\u673A\u542F\u52A8</span>
<span class="token function">chkconfig</span> supervisord on

<span class="token comment"># \u751F\u6210\u914D\u7F6E\u6587\u4EF6</span>
echo_supervisord_conf <span class="token operator">&gt;</span> /etc/supervisord.conf
<span class="token function">vim</span> /etc/supervisord.conf

<span class="token comment"># \u4FEE\u6539\u4EE5\u4E0B\u51E0\u5904</span>

<span class="token assign-left variable">file</span><span class="token operator">=</span>/var/run/supervisor.sock

<span class="token assign-left variable">logfile</span><span class="token operator">=</span>/var/log/supervisord.log

<span class="token assign-left variable">pidfile</span><span class="token operator">=</span>/var/run/supervisord.pid

<span class="token assign-left variable">serverurl</span><span class="token operator">=</span>unix:///var/run/supervisor.sock

<span class="token punctuation">[</span>inet_http_server<span class="token punctuation">]</span>         <span class="token punctuation">;</span> inet <span class="token punctuation">(</span>TCP<span class="token punctuation">)</span> server disabled by default
<span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">0.0</span>.0.0:9100        <span class="token punctuation">;</span> ip_address:port specifier, *:port <span class="token keyword">for</span> all iface
<span class="token assign-left variable">username</span><span class="token operator">=</span>jobui              <span class="token punctuation">;</span> default is no username <span class="token punctuation">(</span>open server<span class="token punctuation">)</span>
<span class="token assign-left variable">password</span><span class="token operator">=</span>jobui123              <span class="token punctuation">;</span> default is no password <span class="token punctuation">(</span>open server<span class="token punctuation">)</span>

<span class="token punctuation">[</span>include<span class="token punctuation">]</span>
files <span class="token operator">=</span> supervisord.d/*.conf

<span class="token comment"># \u65B0\u5EFA\u5B50\u6587\u6863\uFF1A</span>
<span class="token function">vi</span> /etc/supervisord.d/test.conf

<span class="token punctuation">[</span>program:test1<span class="token punctuation">]</span>
<span class="token assign-left variable">command</span><span class="token operator">=</span> php /root/download/test/test1.php
<span class="token assign-left variable">process_name</span><span class="token operator">=</span>%<span class="token punctuation">(</span>program_name<span class="token punctuation">)</span>s_%<span class="token punctuation">(</span>process_num<span class="token punctuation">)</span>02d
<span class="token assign-left variable">autorestart</span><span class="token operator">=</span>false
<span class="token assign-left variable">autostart</span><span class="token operator">=</span>false
<span class="token assign-left variable">numprocs</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">startsecs</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">stderr_logfile</span><span class="token operator">=</span>/var/log/test1.err.log
<span class="token assign-left variable">stdout_logfile</span><span class="token operator">=</span>/var/log/test1.out.log

<span class="token punctuation">[</span>program:test2<span class="token punctuation">]</span>
<span class="token assign-left variable">command</span><span class="token operator">=</span> php /root/download/test/test2.php
<span class="token assign-left variable">process_name</span><span class="token operator">=</span>%<span class="token punctuation">(</span>program_name<span class="token punctuation">)</span>s_%<span class="token punctuation">(</span>process_num<span class="token punctuation">)</span>02d
<span class="token assign-left variable">autorestart</span><span class="token operator">=</span>false
<span class="token assign-left variable">autostart</span><span class="token operator">=</span>false
<span class="token assign-left variable">numprocs</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">startsecs</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">stderr_logfile</span><span class="token operator">=</span>/var/log/test2.err.log
<span class="token assign-left variable">stdout_logfile</span><span class="token operator">=</span>/var/log/test2.out.log


<span class="token punctuation">[</span>program:test3<span class="token punctuation">]</span>
<span class="token assign-left variable">command</span><span class="token operator">=</span> php /root/download/test/test3.php
<span class="token assign-left variable">process_name</span><span class="token operator">=</span>%<span class="token punctuation">(</span>program_name<span class="token punctuation">)</span>s_%<span class="token punctuation">(</span>process_num<span class="token punctuation">)</span>02d
<span class="token assign-left variable">autorestart</span><span class="token operator">=</span>false
<span class="token assign-left variable">autostart</span><span class="token operator">=</span>false
<span class="token assign-left variable">numprocs</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">startsecs</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">stderr_logfile</span><span class="token operator">=</span>/var/log/test3.err.log
<span class="token assign-left variable">stdout_logfile</span><span class="token operator">=</span>/var/log/test3.out.log

<span class="token comment"># \u542F\u52A8</span>
supervisord <span class="token parameter variable">-c</span> /etc/supervisord.conf

<span class="token comment"># \u67E5\u770B\u8FDB\u7A0B</span>
<span class="token function">ps</span> aux <span class="token operator">|</span> <span class="token function">grep</span> supervisord



<span class="token comment"># \u67E5\u770B\u5B50\u8FDB\u7A0B</span>
supervisorctl status

<span class="token comment"># \u63A7\u5236\u8FDB\u7A0B</span>
<span class="token comment">#supervisord \u542F\u52A8\u6210\u529F\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7 supervisorctl \u5BA2\u6237\u7AEF\u63A7\u5236\u8FDB\u7A0B\uFF0C\u542F\u52A8\u3001\u505C\u6B62\u3001\u91CD\u542F\u3002\u8FD0\u884C supervisorctl \u547D\u4EE4\uFF0C\u4E0D\u52A0\u53C2\u6570\uFF0C\u4F1A\u8FDB\u5165 supervisor \u5BA2\u6237\u7AEF\u7684\u4EA4\u4E92\u7EC8\u7AEF\uFF0C\u5E76\u4F1A\u5217\u51FA\u5F53\u524D\u6240\u7BA1\u7406\u7684\u6240\u6709\u8FDB\u7A0B\u3002</span>
<span class="token comment">#\u8F93\u5165help\u53EF\u4EE5\u67E5\u770B\u53EF\u4EE5\u6267\u884C\u7684\u547D\u4EE4\u5217\u8868\uFF0C\u5982\u679C\u60F3\u770B\u67D0\u4E2A\u547D\u4EE4\u7684\u4F5C\u7528\uFF0C\u8FD0\u884C help \u547D\u4EE4\u540D\u79F0\uFF0C\u5982\uFF1Ahelp stop</span>

stop tomcat <span class="token comment"># \u8868\u793A\u505C\u6B62tomcat\u8FDB\u7A0B</span>
stop all <span class="token comment"># \u8868\u793A\u505C\u6B62\u6240\u6709\u8FDB\u7A0B</span>
bash\u7EC8\u7AEF
supervisorctl status
supervisorctl stop name
supervisorctl start name
supervisorctl restart name
supervisorctl reload
supervisorctl update

<span class="token comment">#\u914D\u7F6E\u53C2\u6570\u8BF4\u660E</span>
<span class="token punctuation">[</span>unix_http_server<span class="token punctuation">]</span>
<span class="token assign-left variable">file</span><span class="token operator">=</span>/tmp/supervisor.sock   <span class="token punctuation">;</span>UNIX socket \u6587\u4EF6\uFF0Csupervisorctl \u4F1A\u4F7F\u7528
<span class="token punctuation">;</span><span class="token assign-left variable">chmod</span><span class="token operator">=</span>0700                 <span class="token punctuation">;</span>socket\u6587\u4EF6\u7684mode\uFF0C\u9ED8\u8BA4\u662F0700
<span class="token punctuation">;</span><span class="token assign-left variable">chown</span><span class="token operator">=</span>nobody:nogroup       <span class="token punctuation">;</span>socket\u6587\u4EF6\u7684owner\uFF0C\u683C\u5F0F\uFF1Auid:gid

<span class="token punctuation">;</span><span class="token punctuation">[</span>inet_http_server<span class="token punctuation">]</span>         <span class="token punctuation">;</span>HTTP\u670D\u52A1\u5668\uFF0C\u63D0\u4F9Bweb\u7BA1\u7406\u754C\u9762
<span class="token punctuation">;</span><span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1:9001        <span class="token punctuation">;</span>Web\u7BA1\u7406\u540E\u53F0\u8FD0\u884C\u7684IP\u548C\u7AEF\u53E3\uFF0C\u5982\u679C\u5F00\u653E\u5230\u516C\u7F51\uFF0C\u9700\u8981\u6CE8\u610F\u5B89\u5168\u6027
<span class="token punctuation">;</span><span class="token assign-left variable">username</span><span class="token operator">=</span>user              <span class="token punctuation">;</span>\u767B\u5F55\u7BA1\u7406\u540E\u53F0\u7684\u7528\u6237\u540D
<span class="token punctuation">;</span><span class="token assign-left variable">password</span><span class="token operator">=</span><span class="token number">123</span>               <span class="token punctuation">;</span>\u767B\u5F55\u7BA1\u7406\u540E\u53F0\u7684\u5BC6\u7801

<span class="token punctuation">[</span>supervisord<span class="token punctuation">]</span>
<span class="token assign-left variable">logfile</span><span class="token operator">=</span>/tmp/supervisord.log <span class="token punctuation">;</span>\u65E5\u5FD7\u6587\u4EF6\uFF0C\u9ED8\u8BA4\u662F <span class="token variable">$CWD</span>/supervisord.log
<span class="token assign-left variable">logfile_maxbytes</span><span class="token operator">=</span>50MB        <span class="token punctuation">;</span>\u65E5\u5FD7\u6587\u4EF6\u5927\u5C0F\uFF0C\u8D85\u51FA\u4F1Arotate\uFF0C\u9ED8\u8BA4 50MB\uFF0C\u5982\u679C\u8BBE\u62100\uFF0C\u8868\u793A\u4E0D\u9650\u5236\u5927\u5C0F
<span class="token assign-left variable">logfile_backups</span><span class="token operator">=</span><span class="token number">10</span>           <span class="token punctuation">;</span>\u65E5\u5FD7\u6587\u4EF6\u4FDD\u7559\u5907\u4EFD\u6570\u91CF\u9ED8\u8BA410\uFF0C\u8BBE\u4E3A0\u8868\u793A\u4E0D\u5907\u4EFD
<span class="token assign-left variable">loglevel</span><span class="token operator">=</span>info                <span class="token punctuation">;</span>\u65E5\u5FD7\u7EA7\u522B\uFF0C\u9ED8\u8BA4info\uFF0C\u5176\u5B83: debug,warn,trace
<span class="token assign-left variable">pidfile</span><span class="token operator">=</span>/tmp/supervisord.pid <span class="token punctuation">;</span>pid \u6587\u4EF6
<span class="token assign-left variable">nodaemon</span><span class="token operator">=</span>false               <span class="token punctuation">;</span>\u662F\u5426\u5728\u524D\u53F0\u542F\u52A8\uFF0C\u9ED8\u8BA4\u662Ffalse\uFF0C\u5373\u4EE5 daemon \u7684\u65B9\u5F0F\u542F\u52A8
<span class="token assign-left variable">minfds</span><span class="token operator">=</span><span class="token number">1024</span>                  <span class="token punctuation">;</span>\u53EF\u4EE5\u6253\u5F00\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26\u7684\u6700\u5C0F\u503C\uFF0C\u9ED8\u8BA4 <span class="token number">1024</span>
<span class="token assign-left variable">minprocs</span><span class="token operator">=</span><span class="token number">200</span>                 <span class="token punctuation">;</span>\u53EF\u4EE5\u6253\u5F00\u7684\u8FDB\u7A0B\u6570\u7684\u6700\u5C0F\u503C\uFF0C\u9ED8\u8BA4 <span class="token number">200</span>

<span class="token punctuation">[</span>supervisorctl<span class="token punctuation">]</span>
<span class="token assign-left variable">serverurl</span><span class="token operator">=</span>unix:///tmp/supervisor.sock <span class="token punctuation">;</span>\u901A\u8FC7UNIX socket\u8FDE\u63A5supervisord\uFF0C\u8DEF\u5F84\u4E0Eunix_http_server\u90E8\u5206\u7684file\u4E00\u81F4
<span class="token punctuation">;</span><span class="token assign-left variable">serverurl</span><span class="token operator">=</span>http://127.0.0.1:9001 <span class="token punctuation">;</span> \u901A\u8FC7HTTP\u7684\u65B9\u5F0F\u8FDE\u63A5supervisord

<span class="token punctuation">;</span> <span class="token punctuation">[</span>program:xx<span class="token punctuation">]</span>\u662F\u88AB\u7BA1\u7406\u7684\u8FDB\u7A0B\u914D\u7F6E\u53C2\u6570\uFF0Cxx\u662F\u8FDB\u7A0B\u7684\u540D\u79F0
<span class="token punctuation">[</span>program:xx<span class="token punctuation">]</span>
<span class="token assign-left variable">command</span><span class="token operator">=</span>/opt/apache-tomcat-8.0.35/bin/catalina.sh run  <span class="token punctuation">;</span> \u7A0B\u5E8F\u542F\u52A8\u547D\u4EE4
<span class="token assign-left variable">autostart</span><span class="token operator">=</span>true       <span class="token punctuation">;</span> \u5728supervisord\u542F\u52A8\u7684\u65F6\u5019\u4E5F\u81EA\u52A8\u542F\u52A8
<span class="token assign-left variable">startsecs</span><span class="token operator">=</span><span class="token number">10</span>         <span class="token punctuation">;</span> \u542F\u52A810\u79D2\u540E\u6CA1\u6709\u5F02\u5E38\u9000\u51FA\uFF0C\u5C31\u8868\u793A\u8FDB\u7A0B\u6B63\u5E38\u542F\u52A8\u4E86\uFF0C\u9ED8\u8BA4\u4E3A1\u79D2
<span class="token assign-left variable">autorestart</span><span class="token operator">=</span>true     <span class="token punctuation">;</span> \u7A0B\u5E8F\u9000\u51FA\u540E\u81EA\u52A8\u91CD\u542F,\u53EF\u9009\u503C\uFF1A<span class="token punctuation">[</span>unexpected,true,false<span class="token punctuation">]</span>\uFF0C\u9ED8\u8BA4\u4E3Aunexpected\uFF0C\u8868\u793A\u8FDB\u7A0B\u610F\u5916\u6740\u6B7B\u540E\u624D\u91CD\u542F
<span class="token assign-left variable">startretries</span><span class="token operator">=</span><span class="token number">3</span>       <span class="token punctuation">;</span> \u542F\u52A8\u5931\u8D25\u81EA\u52A8\u91CD\u8BD5\u6B21\u6570\uFF0C\u9ED8\u8BA4\u662F3
<span class="token assign-left variable">user</span><span class="token operator">=</span>tomcat          <span class="token punctuation">;</span> \u7528\u54EA\u4E2A\u7528\u6237\u542F\u52A8\u8FDB\u7A0B\uFF0C\u9ED8\u8BA4\u662Froot
<span class="token assign-left variable">priority</span><span class="token operator">=</span><span class="token number">999</span>         <span class="token punctuation">;</span> \u8FDB\u7A0B\u542F\u52A8\u4F18\u5148\u7EA7\uFF0C\u9ED8\u8BA4999\uFF0C\u503C\u5C0F\u7684\u4F18\u5148\u542F\u52A8
<span class="token assign-left variable">redirect_stderr</span><span class="token operator">=</span>true <span class="token punctuation">;</span> \u628Astderr\u91CD\u5B9A\u5411\u5230stdout\uFF0C\u9ED8\u8BA4false
<span class="token assign-left variable">stdout_logfile_maxbytes</span><span class="token operator">=</span>20MB  <span class="token punctuation">;</span> stdout \u65E5\u5FD7\u6587\u4EF6\u5927\u5C0F\uFF0C\u9ED8\u8BA450MB
stdout_logfile_backups <span class="token operator">=</span> <span class="token number">20</span>   <span class="token punctuation">;</span> stdout \u65E5\u5FD7\u6587\u4EF6\u5907\u4EFD\u6570\uFF0C\u9ED8\u8BA4\u662F10
<span class="token punctuation">;</span> stdout \u65E5\u5FD7\u6587\u4EF6\uFF0C\u9700\u8981\u6CE8\u610F\u5F53\u6307\u5B9A\u76EE\u5F55\u4E0D\u5B58\u5728\u65F6\u65E0\u6CD5\u6B63\u5E38\u542F\u52A8\uFF0C\u6240\u4EE5\u9700\u8981\u624B\u52A8\u521B\u5EFA\u76EE\u5F55\uFF08supervisord \u4F1A\u81EA\u52A8\u521B\u5EFA\u65E5\u5FD7\u6587\u4EF6\uFF09
<span class="token assign-left variable">stdout_logfile</span><span class="token operator">=</span>/opt/apache-tomcat-8.0.35/logs/catalina.out
<span class="token assign-left variable">stopasgroup</span><span class="token operator">=</span>false     <span class="token punctuation">;</span>\u9ED8\u8BA4\u4E3Afalse,\u8FDB\u7A0B\u88AB\u6740\u6B7B\u65F6\uFF0C\u662F\u5426\u5411\u8FD9\u4E2A\u8FDB\u7A0B\u7EC4\u53D1\u9001stop\u4FE1\u53F7\uFF0C\u5305\u62EC\u5B50\u8FDB\u7A0B
<span class="token assign-left variable">killasgroup</span><span class="token operator">=</span>false     <span class="token punctuation">;</span>\u9ED8\u8BA4\u4E3Afalse\uFF0C\u5411\u8FDB\u7A0B\u7EC4\u53D1\u9001kill\u4FE1\u53F7\uFF0C\u5305\u62EC\u5B50\u8FDB\u7A0B

<span class="token punctuation">;</span>\u5305\u542B\u5176\u5B83\u914D\u7F6E\u6587\u4EF6
<span class="token punctuation">[</span>include<span class="token punctuation">]</span>
files <span class="token operator">=</span> relative/directory/*.ini    <span class="token punctuation">;</span>\u53EF\u4EE5\u6307\u5B9A\u4E00\u4E2A\u6216\u591A\u4E2A\u4EE5.ini\u7ED3\u675F\u7684\u914D\u7F6E\u6587\u4EF6
include\u793A\u4F8B\uFF1A

<span class="token punctuation">[</span>include<span class="token punctuation">]</span>
files <span class="token operator">=</span> /opt/absolute/filename.ini /opt/absolute/*.ini foo.conf config??.ini

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B50\u914D\u7F6E\u6587\u4EF6\u793A\u4F8B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>program:queue_MultiTask<span class="token punctuation">]</span> <span class="token punctuation">;</span>\u9879\u76EE\u540D\u79F0
directory <span class="token operator">=</span> /www/wwwroot/www.site.net <span class="token punctuation">;</span> \u7A0B\u5E8F\u7684\u542F\u52A8\u76EE\u5F55
<span class="token builtin class-name">command</span> <span class="token operator">=</span> php think queue:listen <span class="token parameter variable">--queue</span> MultiTask <span class="token parameter variable">--tries</span> <span class="token number">3</span>  <span class="token punctuation">;</span> \u542F\u52A8\u547D\u4EE4
<span class="token assign-left variable">process_name</span><span class="token operator">=</span>%<span class="token punctuation">(</span>program_name<span class="token punctuation">)</span>s_%<span class="token punctuation">(</span>process_num<span class="token punctuation">)</span>02d
numprocs <span class="token operator">=</span> <span class="token number">3</span>           <span class="token punctuation">;</span> \u5F00\u542F\u7684\u8FDB\u7A0B\u6570\u91CF
autostart <span class="token operator">=</span> <span class="token boolean">true</span>     <span class="token punctuation">;</span> \u5728 supervisord \u542F\u52A8\u7684\u65F6\u5019\u4E5F\u81EA\u52A8\u542F\u52A8
startsecs <span class="token operator">=</span> <span class="token number">5</span>        <span class="token punctuation">;</span> \u542F\u52A8 <span class="token number">5</span> \u79D2\u540E\u6CA1\u6709\u5F02\u5E38\u9000\u51FA\uFF0C\u5C31\u5F53\u4F5C\u5DF2\u7ECF\u6B63\u5E38\u542F\u52A8\u4E86
autorestart <span class="token operator">=</span> <span class="token boolean">true</span>   <span class="token punctuation">;</span> \u7A0B\u5E8F\u5F02\u5E38\u9000\u51FA\u540E\u81EA\u52A8\u91CD\u542F
startretries <span class="token operator">=</span> <span class="token number">3</span>     <span class="token punctuation">;</span> \u542F\u52A8\u5931\u8D25\u81EA\u52A8\u91CD\u8BD5\u6B21\u6570\uFF0C\u9ED8\u8BA4\u662F <span class="token number">3</span>
user <span class="token operator">=</span> www          <span class="token punctuation">;</span> \u7528\u54EA\u4E2A\u7528\u6237\u542F\u52A8
redirect_stderr <span class="token operator">=</span> <span class="token boolean">true</span>  <span class="token punctuation">;</span> \u628A stderr \u91CD\u5B9A\u5411\u5230 stdout\uFF0C\u9ED8\u8BA4 <span class="token boolean">false</span>
stdout_logfile_maxbytes <span class="token operator">=</span> 50MB  <span class="token punctuation">;</span> stdout \u65E5\u5FD7\u6587\u4EF6\u5927\u5C0F\uFF0C\u9ED8\u8BA4 50MB
stdout_logfile_backups <span class="token operator">=</span> <span class="token number">20</span>     <span class="token punctuation">;</span> stdout \u65E5\u5FD7\u6587\u4EF6\u5907\u4EFD\u6570
<span class="token punctuation">;</span> stdout \u65E5\u5FD7\u6587\u4EF6,\u9700\u8981\u624B\u52A8\u521B\u5EFA\u76EE\u5F55\uFF08supervisord \u4F1A\u81EA\u52A8\u521B\u5EFA\u65E5\u5FD7\u6587\u4EF6\uFF09
stdout_logfile <span class="token operator">=</span> /www/wwwroot/www.site.net/queue_MultiTask.log
<span class="token assign-left variable">loglevel</span><span class="token operator">=</span>info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),t=[l];function p(o,c){return n(),a("div",null,t)}var v=s(i,[["render",p],["__file","supervisor.html.vue"]]);export{v as default};
