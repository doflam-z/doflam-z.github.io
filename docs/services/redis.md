# redis

### 编译redis

```shell
make PREFIX=/web/software/redis-5.0.14 install
```

### 启动redis-server

```shell
# 配置后台启动，且端口是 6381
redis-server ./redis.conf --daemonize yes --port 6381
```

### 连接redis

```shell
redis-cli -h hostname -p 6381
```

### 查看redis状态

```shell
>info all
>info Stats
connected_clients:68  #连接的客户端数量
used_memory_rss_human:847.62M #系统给redis分配的内存
used_memory_peak_human:794.42M  #内存使用的峰值大小
total_connections_received:619104 #服务器已接受的连接请求数量
instantaneous_ops_per_sec:1159 #服务器每秒钟执行的命令数量
instantaneous_input_kbps:55.85 #redis网络入口kps
instantaneous_output_kbps:3553.89 #redis网络出口kps
rejected_connections:0 #因为最大客户端数量限制而被拒绝的连接请求数量
expired_keys:0 #因为过期而被自动删除的数据库键数量
evicted_keys:0 #因为最大内存容量限制而被驱逐（evict）的键数量
keyspace_hits:0 #查找数据库键成功的次数
keyspace_misses:0 #查找数据库键失败的次数
```

### 数据类型

Redis支持五种数据类型：string（字符串），hash（哈希），list（列表），set（集合）及zset(sorted set：有序集合)。

### 基础命令

查看所有key

```
127.0.0.1:6379>KEYS pattern
127.0.0.1:6379>KEYS *
```

查看当前redis的配置文件

```shell
redis-cli info | grep config
```

#### string类型

设置、获取、删除单个值

```shell
127.0.0.1:6379> set key1
127.0.0.1:6379> get key1
127.0.0.1:6379> del key1
```

批量获取、设置值

```shell
127.0.0.1:6379> mset key1 "Hello" key2 "World"
127.0.0.1:6379> mget key1 key2
```

设置有实效的数据

```shell
127.0.0.1:6379> setex key1 10 value
127.0.0.1:6379> psetex key1 10 value
```

追加数据

```shell
127.0.0.1:6379> append key1 value
```

自增自减

```shell
127.0.0.1:6379> incr key1
127.0.0.1:6379> decr key1
```

指定数量自增自减

```shell
127.0.0.1:6379> incrby key1
127.0.0.1:6379> decrby key1
```

#### hash类型

设置、获取、删除数据

```shell
127.0.0.1:6379> hset key field value
127.0.0.1:6379> hget key field 
127.0.0.1:6379> hgetall key 
127.0.0.1:6379> hdel key field1 field2 
```

获取哈希表里的字段名或者字段值

```shell
127.0.0.1:6379> hkeys key
127.0.0.1:6379> hvals key
```

哈希表自增自减一个指定数值

```shell
127.0.0.1:6379> hincrby key field 10

```

### 查看redis状态

```shell
sudo systemctl status redis-server
```

```shell
connected_clients:68  #连接的客户端数量
used_memory_rss_human:847.62M #系统给redis分配的内存
used_memory_peak_human:794.42M  #内存使用的峰值大小
total_connections_received:619104 #服务器已接受的连接请求数量
instantaneous_ops_per_sec:1159 #服务器每秒钟执行的命令数量
instantaneous_input_kbps:55.85 #redis网络入口kps
instantaneous_output_kbps:3553.89 #redis网络出口kps
rejected_connections:0 #因为最大客户端数量限制而被拒绝的连接请求数量
expired_keys:0 #因为过期而被自动删除的数据库键数量
evicted_keys:0 #因为最大内存容量限制而被驱逐（evict）的键数量
keyspace_hits:0 #查找数据库键成功的次数
keyspace_misses:0 #查找数据库键失败的次数
```

## redis集群

> 集群配置文件路径：/web/bcshell/cache/redis/redisCluster
>
> 其中一个主节点配置一个从节点配置redis_145_master.conf redis_137_slave.conf
>
> 采用错开部署方式，145一个主节点一个134的从节点，137一个主节点一个136的从节点，136一个主节点一个137的从节点，134一个主节点一个145的从节点，作用是其中任何一台宕机都不会影响redis正常运行。

```shell
# 端口
port 6850
# 启用集群模式
cluster-enabled yes 
# 根据你启用的节点来命名，最好和端口保持一致，这个是用来保存其他节点的名称，状态等信息的
cluster-config-file nodes_136_6850.conf 
# 超时时间
cluster-node-timeout 5000
appendonly yes
# 后台运行
daemonize yes
# 非保护模式
protected-mode no 
# 最大内存
maxmemory 4096M
# lru模式
maxmemory-policy allkeys-lru

pidfile  /var/run/redis_6850.pid
```

### 创建集群

```shell
#--cluster-replicas 1参数表示每个主节点后面自动创建从节点
redis-cli --cluster create 192.168.2.145:6850 192.168.2.137:6850 192.168.2.136:6850 192.168.2.136:6851 192.168.2.137:6851 192.168.2.145:6851 --cluster-replicas 1

redis-cli --cluster create 192.168.1.35:7001 192.168.1.35:7002 192.168.1.35:7003 192.168.1.35:7004 192.168.1.35:7005 192.168.1.35:7006 --cluster-replicas 1
```

### 正式创建流程

```shell
#只创建四个主节点，从节点手动配置(为了指定从节点)，添加从节点到主节点时不需要分配槽，添加主节点才需要
redis-cli --cluster create 192.168.2.145:6850 192.168.2.134:6850 192.168.2.136:6850 192.168.2.137:6850

#添加从节点到主节点，先查一遍主节点id列表
192.168.2.145:6850> cluster nodes
2e33878a625c2593c82438245152575c80fe9f4e 192.168.2.134:6850@16850 master - 0 1642588068170 2 connected 4096-8191
0e6a6ce1f1cda274d37eb9038b6040e50889b6f8 192.168.2.136:6850@16850 master - 0 1642588067168 3 connected 8192-12287
6444c437523ebd5e8a359181749b2f737ad55040 192.168.2.137:6850@16850 master - 0 1642588068670 4 connected 12288-16383
9dc220f824f1e8a244721f7dac186d0ea3bf743c 192.168.2.145:6850@16850 myself,master - 0 1642588066000 1 connected 0-4095

#134:6851添加为145:6850从节点
redis-cli --cluster add-node 192.168.2.134:6851 192.168.2.145:6850 --cluster-slave --cluster-master-id 9dc220f824f1e8a244721f7dac186d0ea3bf743c

#145:6851添加为134:6850从节点
redis-cli --cluster add-node 192.168.2.145:6851 192.168.2.145:6850 --cluster-slave --cluster-master-id 2e33878a625c2593c82438245152575c80fe9f4e

#136:6851添加为137:6850从节点
redis-cli --cluster add-node 192.168.2.136:6851 192.168.2.145:6850 --cluster-slave --cluster-master-id 6444c437523ebd5e8a359181749b2f737ad55040

#137:6851添加为136:6850从节点
redis-cli --cluster add-node 192.168.2.137:6851 192.168.2.145:6850 --cluster-slave --cluster-master-id 0e6a6ce1f1cda274d37eb9038b6040e50889b6f8

#注释：
#--cluster-slave，表示添加的是从节点
#--cluster-master-id 9dc220f824f1e8a244721f7dac186d0ea3bf743c,主节点的node id
#192.168.2.134:6851,新节点
#192.168.2.145:6850集群任一个主节点
```

添加后查看下节点如下，四主四从配置成功

```shell
192.168.2.145:6850> cluster nodes
0e6a6ce1f1cda274d37eb9038b6040e50889b6f8 192.168.2.136:6850@16850 master - 0 1642589271961 3 connected 8192-12287
2e33878a625c2593c82438245152575c80fe9f4e 192.168.2.134:6850@16850 master - 0 1642589271458 2 connected 4096-8191
d493956d2fb46575e3ed4ee53a64f8ab5edfd97b 192.168.2.145:6851@16851 slave 2e33878a625c2593c82438245152575c80fe9f4e 0 1642589273462 2 connected
d4771a0b28c54652673c624216d3e08ba0cfe678 192.168.2.137:6851@16851 slave 0e6a6ce1f1cda274d37eb9038b6040e50889b6f8 0 1642589271000 3 connected
9dc220f824f1e8a244721f7dac186d0ea3bf743c 192.168.2.145:6850@16850 myself,master - 0 1642589269000 1 connected 0-4095
99f84ea83b2e42eaf35a899cfdae86a8a31b739d 192.168.2.136:6851@16851 slave 6444c437523ebd5e8a359181749b2f737ad55040 0 1642589272000 4 connected
4310ce12de0382bcdcc22dcd2f865ac95ec81d61 192.168.2.134:6851@16851 slave 9dc220f824f1e8a244721f7dac186d0ea3bf743c 0 1642589272461 1 connected
6444c437523ebd5e8a359181749b2f737ad55040 192.168.2.137:6850@16850 master - 0 1642589271000 4 connected 12288-16383
```

### 操作集群（进入集群操作）

```shell
#集群(cluster) 
1. CLUSTER INFO 打印集群的信息 
2. CLUSTER NODES 列出集群当前已知的所有节点（node），以及这些节点的相关信息。  
3. CLUSTER MEET <ip> <port> 将 ip 和 port 所指定的节点添加到集群当中，让它成为集群的一份子。 
4. CLUSTER FORGET <node_id> 从集群中移除 node_id 指定的节点。 
5. CLUSTER REPLICATE <node_id> 将当前节点设置为 node_id 指定的节点的从节点。 
6. CLUSTER SAVECONFIG 将节点的配置文件保存到硬盘里面。  

#槽(slot) 
1. CLUSTER ADDSLOTS <slot> [slot ...] 将一个或多个槽（slot）指派（assign）给当前节点。 
2. CLUSTER DELSLOTS <slot> [slot ...] 移除一个或多个槽对当前节点的指派。 
3. CLUSTER FLUSHSLOTS 移除指派给当前节点的所有槽，让当前节点变成一个没有指派任何槽的节点。 
4. CLUSTER SETSLOT <slot> NODE <node_id> 将槽 slot 指派给 node_id 指定的节点，如果槽已经指派给另一个节点，那么先让另一个节点删除该槽>，然后再进行指派。 
5. CLUSTER SETSLOT <slot> MIGRATING <node_id> 将本节点的槽 slot 迁移到 node_id 指定的节点中。 
6. CLUSTER SETSLOT <slot> IMPORTING <node_id> 从 node_id 指定的节点中导入槽 slot 到本节点。 
7. CLUSTER SETSLOT <slot> STABLE 取消对槽 slot 的导入（import）或者迁移（migrate）。  
8.  

#键 (key) 
1. CLUSTER KEYSLOT <key> 计算键 key 应该被放置在哪个槽上。 
2. CLUSTER COUNTKEYSINSLOT <slot> 返回槽 slot 目前包含的键值对数量。 
3. CLUSTER GETKEYSINSLOT <slot> <count> 返回 count 个 slot 槽中的键。 
```

### 集群异常处理

查看集群状态

```shell
redis-cli --cluster check 192.168.2.145:6850
```

修复集群slot槽丢失问题

```shell
redis-cli --cluster fix 192.168.2.145:6850
```

自动平衡集群中的各节点哈希槽数

```shell
redis-cli --cluster rebalance --cluster-use-empty-masters 192.168.2.145:6850
```

### 添加一个新节点

添加主节点

```shell
redis-cli --cluster add-node 192.168.2.134:6850 192.168.2.136:6850
#注释：
#192.168.2.134:6850是新增的节点
#192.168.2.136:6850集群任一个旧节点
```

添加从节点

```shell
redis-cli --cluster add-node 192.168.2.134:6851 192.168.2.145:6850 --cluster-slave --cluster-master-id 9dc220f824f1e8a244721f7dac186d0ea3bf743c
#注释：
#--cluster-slave，表示添加的是从节点
#--cluster-master-id 9dc220f824f1e8a244721f7dac186d0ea3bf743c,主节点的node id
#192.168.2.134:6851,新节点
#192.168.2.145:6850集群任一个旧节点
```



### redis压力测试

**redis-benchmark**

> redis基准信息，redis服务器性能检测
>
> 100个并发连接，100000个请求，检测host为localhost 端口为6379的redis服务器性能

```shell
redis-benchmark -h localhost -p 6379 -c 100 -n 100000
```



### docker启动redis

```shell
docker run --name redis-6811 \
-p 192.168.2.138:6811:6811 \
-v /data/docker/redis/conf/redis6-6811.conf:/etc/redis/redis.conf \
-v /data/docker/redis/log/:/var/log/redis/ \
-d redis:5.0.14 redis-server /etc/redis/redis.conf
```

