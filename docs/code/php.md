# PHP

### 常用函数

```php
parse_str — 将字符串解析成多个变量
parse_str("name=Bill&age=60",$arr);//第一个参数为查询字符串，第二个为结果数组

array_filter( array $input[, callable $callback = ""] ) 
// 用回调函数过滤数组中的单元 依次将 input 数组中的每个值传递到 callback 函数。如果 callback 函数返回 TRUE，则 input 数组的当前值会被包含在返回的结果数组中。数组的键名保留不变，如果没有提供 callback 函数，将删除 input 中所有等值为 FALSE 的条目

explode //用一个字符串分割另一个字符串
range //建立一个指定范围的数组
    
    
```

### fpm

```shell
#1、查看php-fpm的进程个数
ps -ef |grep "php-fpm"|grep "pool"|wc -l
#2、查看每个php-fpm占用的内存大小
ps -ylC php-fpm --sort:rss
#3.查看PHP-FPM在你的机器上的平均内存占用
ps --no-headers -o "rss,cmd" -C php-fpm | awk '{ sum+=$1 } END { printf ("%d%s\n", sum/NR/1024,"M") }'
#4.查看单个php-fpm进程消耗内存的明细
pmap $(pgrep php-fpm) | less


#查看php、nginx编译参数
nginx -V
php -i |grep configure

#grep不输出注释的行
grep "^[^#;]" smb.conf

```

重启多个php-fpm

```shell
#php-fpm添加service服务
cp /usr/local/src/php5.6.40/sapi/fpm/init.d.php-fpm /etc/init.d/php-fpm

update-rc.d php-fpm defaults
 
# 添加
update-rc.d ServiceName defaults
 
# 删除
update-rc.d ServiceName remove

#关闭php-fpm
pkill php-fpm 或者 killall php-fpm

#查看php-fpm配置文件路径
ps aux |grep php-fpm

#查看配置文件，找到pid路径
pid = /dev/shm/php-fpm-9001.pid

#根据pid重启php-fpm
sudo kill -USR2 `cat /dev/shm/php-fpm-9001.pid`

```

### php多线程

开启parallel多线程扩展 --enable-maintainer-zts

```shell
#parallel
 cd /usr/local/src/php7/parallel-1.1.4 && \
 /web/software/php-7.4.28/bin/phpize && \
 ./configure --with-php-config=/web/software/php-7.4.28/bin/php-config && \
 make && make install
```

示例：

```php
<?php
require_once 'baseClassV4/listen/BaseCache.php';
$redis = new BaseCache ('redis', 'default');
$startTime = time();
$num = 10;
$j = 0;
$list = range(0, 1000);
$path = 'baseClassV4/listen/BaseCache.php';

$producer = function ($parameters) { // 线程调用回调函数体
	$i = 0;
	extract($parameters); 
	foreach ($list as $item) {
		$r = $redis->zIncrBy('test', 1, $threadNum);
		if ($r > 0) {
			$i++;
		}
		echo $threadNum . ':' . $item . PHP_EOL;
		usleep(10000);
	}
	return $i;
};

function start_threads($list, $producer, $threadNum = 1, $parameters = [], $path = '', $sleep = 1)
{
	$list = array_chunk($list, count($list) / $threadNum);
	foreach ($list as $key => $item) {
		$parameters['list'] = $item;
		$parameters['threadNum'] = $key;
		$threads[$key] = (new \parallel\Runtime($path))->run($producer, [$parameters]);
	}

	while (!empty($threads)) {
		foreach ($threads as $key => &$thread) {
			if ($thread->done()) { // 检测线程状态，返回true时线程运行完毕
				$result = $thread->value(); // 获取线程内函数执行返回的结果
				echo "ThreadId: $key => result: {$result} (End)\n";
				unset($threads[$key]);
			}
		}
		sleep($sleep);
	}
}


start_threads($list, $producer, 10, ['redis' => $redis], $path, 1);
```

