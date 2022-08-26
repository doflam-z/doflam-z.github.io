# mongo

### 服务配置

#### 配置复制集

```shell
# 连接
mongo 192.168.2.134:12000
# 初始化（第一次配置）
>rs.initiate()
>rs.add("hostname:120000")

# 查看状态
>rs.status()

>rs.add({host:'hostname:12000'})(添加一个复制集)
>rs.addArb("hostnamet:30000")(添加一个投票节点)
>rs.remove("hostname:30000")(删除节点)


/web/software/mongodb-3.0.7/bin/mongod -f /web/bcshell/mongodb/mongodbWT12000.conf --rest --logpath=/tmp/mongod.log(输出日志)

```

#### 修改优先级

通过改动priority的值来实现（默认的优先级是1（0-100）。priority的值设的越大，就优先成为主）

```shell
PRIMARY> config=rs.conf()
PRIMARY> config.members[0].priority = 2       这里要注意：0表示第一个节点，1表示第二个节点，以此类推
PRIMARY> rs.reconfig(config)
```

#### 启动命令

```shell
/web/software/mongodb-3.0.7/bin/mongod -f /web/bcshell/mongodb/mongodbWT12002.conf --rest --logpath=/tmp/mongod2.log
/web/software/mongodb-3.0.7/bin/mongod -f /web/bcshell/mongodb/mongodbWT12000.conf --rest --logpath=/tmp/mongod.log
```

### 关闭命令

```shell
db.shutdownServer()
```

#### 创建用户

```shell
#进去mongo后切换到admin库
use admin
#创建管理员用户
db.createUser({user:"root",pwd:"root123",roles:["root"]})
db.createUser({user:"user",pwd:"root123",roles:["root"]})
#查看用户
show users
#删除用户
db.dropUser("user")
#修改密码
db.updateUser("user",{pwd:"123"})

#创建普通用户，并指定权限
db.createUser({
	user:"jobui",pwd:"jobui123",
	roles:[
		{role:"readWrite",db:"tmp"},
		{role:"read",db:"tmp2"}
	]
	})
#创建一个有所有库权限的用户
db.createUser({
	user:"jobui_w",pwd:"jobui123",
	roles:[
		{role:"readWriteAnyDatabase",db:"admin"}
	]
})
#修改权限
db.grantRolesToUser("jobui_w", [{role:"clusterAdmin", db:"admin"},])

db.createUser( { 
    user: "cluster", 
    pwd: "cluster", 
    roles: [ { role: "clusterAdmin", db: "admin" } ] 
}); 

#生成密钥
openssl rand -base64 100 >/web/shell/mongodb/mongo-keyfile
chmod 400 mongo-keyfile

mongod -f /web/shell/mongodb/mongodbWT12002.conf --keyFile=/web/shell/mongodb/mongo-keyfile
mongod -f /web/shell/mongodb/mongodbWT12003.conf --keyFile=/web/shell/mongodb/mongo-keyfile
mongod -f /web/shell/mongodb/mongodbWT12004.conf --keyFile=/web/shell/mongodb/mongo-keyfile

Read：允许用户读取指定数据库
readWrite：允许用户读写指定数据库
dbAdmin：允许用户在指定数据库中执行管理函数，如索引创建、删除，查看统计或访问system.profile
userAdmin：允许用户向system.users集合写入，可以找指定数据库里创建、删除和管理用户
clusterAdmin：只在admin数据库中可用，赋予用户所有分片和复制集相关函数的管理权限。
readAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的读权限
readWriteAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的读写权限
userAdminAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的userAdmin权限
dbAdminAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的dbAdmin权限。
root：只在admin数据库中可用。超级账号，超级权限

# 验证密码
>use admin;
>db.auth("username", "passwd")

# 登录直接验证密码
mongo 192.168.1.36:27017 -u "jobui_w" -p "j" --authenticationDatabase "admin"
```



```shell
db.createCollection("JobProfessionID")
show tables

#创建数据库
`use DATABASE_NAME`

#切换到数据库
`use test`

#创建集合
`db.createCollection("runoob")`

#查看集合
`show collections`

#删除集合
`db.集合名称.drop()`

#查看集合条数
db.getCollection('userTmp').find({}).count()


```

```shell
db.createCollection("userTmp_202110")
db.getCollection('companyTmp_202110').createIndex({'c': 1, 'd': -1}, {unique: true})
db.getCollection('userTmp_202110').createIndex({'u': 1, 'd': -1}, {unique: true})
```

### 导出数据库

```shell
mongodump -h 192.168.1.35:12000 -d jobui_tmp -o /ssd_data/mongobackups/
```

### 导入数据

```shell

```



### 创建索引

```shell
#语法中 Key 值为你要创建的索引字段，1 为指定按升序创建索引，如果你想按降序来创建索引指定为 -1 即可。
>db.collection.createIndex(keys, options)

#在后台创建复合索引
db.values.createIndex({open: 1, close: 1}, {background: true})
db.col.createIndex({'c': 1, 'd': -1}, {unique: true})

#创建单条索引
db.getCollection('userTmp_202109').createIndex({'lut':-1})

#1、查看集合索引
db.getCollection('userFollowCompany').getIndexes()

#2、查看集合索引大小
db.getCollection('userFollowCompany').totalIndexSize()

#3、删除集合所有索引
db.col.dropIndexes()

#4、删除集合指定索引
db.col.dropIndex("索引名称")

#查看索引建立状态
db.currentOp()

#终止索引的创建
db.killOp()

#高级聚类
db.getCollection('userFollowCompany').aggregate([
	{$match:{cid:{$in: [788679]}}},
	{$unwind:"$cid"},
	{$match:{cid:{$ne:788679}}},
	{$group:{_id:"$cid",num:{$sum:1}}},
	{$sort:{num:-1}},
	{$limit:100}
])

db.getCollection('userFollowCompany').aggregate([
    {$match:{'mint': {$gt:20220401}, cid:{$in: [15110]}}},
    {$unwind:"$cid"},
    {$group:{_id:"$cid",num:{$sum:1}}},
    {$sort:{num:-1}},
    {$limit:100}
])

db.getCollection('company_profile').aggregate([
	{$group:{_id:"$domain",num:{$sum:1}}},
	{$sort:{num:-1}},
	{$limit:100}
])


```

##### createIndex() 接收可选参数，可选参数列表如下：

| Parameter          | Type          | Description                                                  |
| :----------------- | :------------ | :----------------------------------------------------------- |
| background         | Boolean       | 建索引过程会阻塞其它数据库操作，background可指定以后台方式创建索引，即增加 "background" 可选参数。 "background" 默认值为**false**。 |
| unique             | Boolean       | 建立的索引是否唯一。指定为true创建唯一索引。默认值为**false**. |
| name               | string        | 索引的名称。如果未指定，MongoDB的通过连接索引的字段名和排序顺序生成一个索引名称。 |
| dropDups           | Boolean       | **3.0+版本已废弃。**在建立唯一索引时是否删除重复记录,指定 true 创建唯一索引。默认值为 **false**. |
| sparse             | Boolean       | 对文档中不存在的字段数据不启用索引；这个参数需要特别注意，如果设置为true的话，在索引字段中不会查询出不包含对应字段的文档.。默认值为 **false**. |
| expireAfterSeconds | integer       | 指定一个以秒为单位的数值，完成 TTL设定，设定集合的生存时间。 |
| v                  | index version | 索引的版本号。默认的索引版本取决于mongod创建索引时运行的版本。 |
| weights            | document      | 索引权重值，数值在 1 到 99,999 之间，表示该索引相对于其他索引字段的得分权重。 |
| default_language   | string        | 对于文本索引，该参数决定了停用词及词干和词器的规则的列表。 默认为英语 |
| language_override  | string        | 对于文本索引，该参数指定了包含在文档中的字段名，语言覆盖默认的language，默认值为 language. |

##### 通过[explian()](https://docs.mongodb.com/manual/reference/method/cursor.explain/)分析执行情况

db.getCollection('companyTmp').find({c:14298217,d:"20210829"}).explain()

```shell
{
    "queryPlanner" : {
        "plannerVersion" : 1,
        "namespace" : "jobui_tmp.companyTmp",
        "indexFilterSet" : false,
        "parsedQuery" : {
            "$and" : [ 
                {
                    "c" : {
                        "$eq" : 14298217.0
                    }
                }, 
                {
                    "d" : {
                        "$eq" : "20210829"
                    }
                }
            ]
        },
        "winningPlan" : {
            "stage" : "FETCH",
            "inputStage" : {
                "stage" : "IXSCAN",
                "keyPattern" : {
                    "c" : 1.0,
                    "d" : -1.0
                },
                "indexName" : "c_1_d_-1",
                "isMultiKey" : false,
                "direction" : "forward",
                "indexBounds" : {
                    "c" : [ 
                        "[14298217.0, 14298217.0]"
                    ],
                    "d" : [ 
                        "[\"20210829\", \"20210829\"]"
                    ]
                }
            }
        },
        "rejectedPlans" : []
    },
    "serverInfo" : {
        "host" : "localhost.localdomain",
        "port" : 12000,
        "version" : "3.0.7",
        "gitVersion" : "6ce7cbe8c6b899552dadd907604559806aa2e9bd"
    },
    "ok" : 1.0
}
```

### php7操作mongodb类

```php
<?php
/**
 * desc
 * version    1.0
 * author    user
 * date    2021/12/22
 */


$manager = new MongoDB\Driver\Manager("mongodb://192.168.1.35:12000");

//插入数据
$bulk = new MongoDB\Driver\BulkWrite;
$bulk->insert(['x' => 1, 'name'=>'菜鸟教程', 'url' => 'http://www.runoob.com']);
$bulk->insert(['x' => 2, 'name'=>'Google', 'url' => 'http://www.google.com']);
$bulk->insert(['x' => 3, 'name'=>'taobao', 'url' => 'http://www.taobao.com']);
$manager->executeBulkWrite('test.sites', $bulk);

$filter = ['x' => ['$gt' => 1]];
$options = [
	'projection' => ['_id' => 0],
	'sort' => ['x' => -1],
];

// 查询数据
$query = new MongoDB\Driver\Query($filter, $options);
$cursor = $manager->executeQuery('test.sites', $query);

foreach ($cursor as $document) {
	print_r($document);
}


//更新数据
$bulk = new MongoDB\Driver\BulkWrite;
$bulk->update(
	['x' => 2],
	['$set' => ['name' => '菜鸟工具', 'url' => 'tool.runoob.com']],
	['multi' => false, 'upsert' => false]
);

$writeConcern = new MongoDB\Driver\WriteConcern(MongoDB\Driver\WriteConcern::MAJORITY, 1000);
$result = $manager->executeBulkWrite('test.sites', $bulk, $writeConcern);


//删除数据
$bulk = new MongoDB\Driver\BulkWrite;
$bulk->delete(['likes' =>['$gt' => 30]], ['limit' => 0]);   // limit 为 1 时，删除第一条匹配数据
//$bulk->delete(['x' => 2], ['limit' => 0]);   // limit 为 0 时，删除所有匹配数据

$writeConcern = new MongoDB\Driver\WriteConcern(MongoDB\Driver\WriteConcern::MAJORITY, 1000);
$result = $manager->executeBulkWrite('jobui_tmp.autoRunRecord', $bulk, $writeConcern);

exit();


//php5

$m = new MongoClient('mongodb://192.168.1.24:27017'); // 连接默认主机和端口为：mongodb://localhost:27017
$db = $m->count; // 选择一个数据库
$collection = $db->BlackList; // 选择集合

//插入
//$db = $m->test; // 获取名称为 "test" 的数据库
//$collection = $db->createCollection("runoob");
//echo "集合创建成功";
//$collection = $db->runoob; // 选择集合
//$document = array(
//	"title" => "MongoDB",
//	"description" => "database",
//	"likes" => 100,
//	"url" => "http://www.runoob.com/mongodb/",
//	"by", "菜鸟教程"
//);
//$collection->insert($document);
//echo "数据插入成功";


//$collection = $db->runoob; // 选择集合

$cursor = $collection->find(['f' => 'true']);
echo '<pre>';
while($doc = $cursor->getNext()) {//循环读取每个匹配的文档
	print_r($doc);
}

echo '<pre>';
print_r($cursor);
exit();

```



### mongo的aggregate聚合操作

#### mongoDB中聚合(aggregate)的具体使用结合PHP

最近在学习mongoDB的使用，本文来介绍一下其中aggregate的具体使用

先来看一个分组的例子，本例中`$group`是一个管道操作符，获得的结果可以接着输出到下一个管道，而内部的`$sum`是一个表达式操作符。

#### 用`$group` 举个例子

```
将document分组，用作统计结果

    db.Ubisoft.aggregate([ // aggregate方法接收的是一个数组
        {
            $group: {
                _id: '$time', 
                num: {$sum: 1}
            }
        }
    ])
    // 这里的_id字段表示你要基于哪个字段来进行分组(即制定字段值相同的为一组)，这里的$time就表示要基于time字段来进行分组

    // 下面的num字段的值$sum: 1表示的是获取满足time字段相同的这一组的数量乘以后面给定的值(本例为1，那么就是同组的数量)。
12345678910111213
```

那么看完这个例子之后，mongoDB中还有其他的一些管道操作符和表达式操作符：

#### 管道操作符

| 常用管道 | 含义                                                         |
| :------- | :----------------------------------------------------------- |
| $group   | 将collection中的document分组，可用于统计结果                 |
| $match   | 过滤数据，只输出符合结果的文档                               |
| $project | 修改输入文档的结构(例如重命名，增加、删除字段，创建结算结果等) |
| $sort    | 将结果进行排序后输出                                         |
| $limit   | 限制管道输出的结果个数                                       |
| $skip    | 跳过制定数量的结果，并且返回剩下的结果                       |
| $unwind  | 将数组类型的字段进行拆分                                     |

#### 表达式操作符

| 常用表达式 | 含义                                                         |
| :--------- | :----------------------------------------------------------- |
| $sum       | 计算总和，{KaTeX parse error: Expected 'EOF', got '}' at position 7: sum: 1}̲表示返回总和×1的值(即总和的…sum: ‘$制定字段’}也能直接获取制定字段的值的总和 |
| $avg       | 平均值                                                       |
| $min       | min                                                          |
| $max       | max                                                          |
| $push      | 将结果文档中插入值到一个数组中                               |
| $first     | 根据文档的排序获取第一个文档数据                             |
| $last      | 同理，获取最后一个数据                                       |

了解完这些操作符之后，继续拿`$group`来试试看：
我们现在有一个名为Ubisoft的一个collection，内部的文档为：

```
/* 1 */
{
    "_id" : ObjectId("5b0cf67270e4fa02d31de42e"),
    "name" : "rainbowSix Siege",
    "time" : 400.0
}

/* 2 */
{
    "_id" : ObjectId("5b0cf69270e4fa02d31de42f"),
    "name" : "Assassin's creed",
    "time" : 20.0
}

/* 3 */
{
    "_id" : ObjectId("5b0cf6ad70e4fa02d31de430"),
    "name" : "ghost Recon",
    "time" : 0.0
}

/* 4 */
{
    "_id" : ObjectId("5b0d14c870e4fa02d31de436"),
    "name" : "farCry",
    "time" : 0.0
}
123456789101112131415161718192021222324252627
```

我们现在来试试其他的表达式操作符：

```
  db.Ubisoft.aggregate([
       {
           $group: {
               _id: '$time',
               gameName: {$push: '$name'}
           }
       }
   ]) 
12345678
```

返回结果为：

```
/* 1 */
{
    "_id" : 20.0,
    "gameName" : [ 
        "Assassin's creed"
    ]
}

/* 2 */
{
    "_id" : 0.0,
    "gameName" : [ 
        "ghost Recon", 
        "farCry"
    ]
}

/* 3 */
{
    "_id" : 400.0,
    "gameName" : [ 
        "rainbowSix Siege"
    ]
}
123456789101112131415161718192021222324
```

可以看到time字段相同的document被分为了一组，而且使用$push表达式，将我们制定的document的name字段的值也放到了一个数组中作为我们在mongoDB语句中制定的gameName的值。

另外`$group`中可以制定`_id:null`, 即可以把所有的document分为一组，可以用于计算平均值之类的操作

我们可以用`$`指定字段来表示选定的document的field,另外可以使用`$$ROOT`来表示选定的document的所有内容（例如:`chosenDocument: {$push: '$$ROOT'}`）

上述例子基本介绍了表达式操作符的用法。

接着来看`$match`

#### $match

```
 db.Ubisoft.aggregate([
        {
            $match: {
                time: {$gte: 20} //选取time字段 >=20的document
            }
        }
    ])
1234567
```

这就拿到了所有time>=20的document,然后可以通过再接个管道来进行其他操作，比如说我们再接一个`$group`来进行分组，显示筛选出来的所有time>=20的document的个数。

```
 db.Ubisoft.aggregate([
        {
            $match: {
                time: {$gte: 20}
            }
        },
        {
            $group: {
                _id: null, // _id: null表示全选
                totalNum: {$sum: 1}
            }
        }
    ])
12345678910111213
```

输出结果为：

```
/* 1 */
{
    "_id" : null,
    "totalNum" : 2.0
}
12345
```

可以看到time>=20的document的个数为2

#### project投影

修改输入文档的结构(例如重命名，增加、删除字段，创建结算结果等)

`$project`和直接使用`find()`的写法一样：

```
db.Ubisoft.aggregate([
    {
        $project: {
            _id: 0,  //不显示_id字段
        }
    }
])
1234567
```

和我们直接写`db.Ubisoft.find({},{'_id': 0})`写法一样
输出结果为：

```
/* 1 */
{
    "name" : "rainbowSix Siege",
    "time" : 400.0
}

/* 2 */
{
    "name" : "Assassin's creed",
    "time" : 20.0
}

/* 3 */
{
    "name" : "ghost Recon",
    "time" : 0.0
}

/* 4 */
{
    "name" : "farCry",
    "time" : 0.0
}
1234567891011121314151617181920212223
```

可以看到没有`_id`字段了。

那么我们现在如果想拿到所有time>=20的document的name字段的话，可以把管道搭配起来用：

```
db.Ubisoft.aggregate([
    {
        $match: {
            time: {$gte: 20}
        }
    },
    {
        $project: {
            _id: 0, // _id不显示
            name: 1 // name是要显示的
        }
    },
    {
        $group: {
            _id: null,
            name: {$push: '$name'}
        }
    }
])
12345678910111213141516171819
```

输出结果为：

```
/* 1 */
{
    "_id" : null,
    "name" : [ 
        "rainbowSix Siege", 
        "Assassin's creed"
    ]
}
12345678
```

#### $sort

`$sort`和我们find()中排序的写法也是一样的。

现在我们想将所有的document按照time降序来排列的话：

和`db.Ubisoft.find().sort({time: -1})`写法是一样的:

```
db.Ubisoft.aggregate([
    {
        $sort: {
            time: -1
        }
    }
])
1234567
```

同理，`$sort`也可以和其他管道搭配使用

#### $limit $skip

和`limit()`以及`skip()`的写法也是一样的。

```
db.Ubisoft.find().skip(1).limit(2)
1
```

使用聚合可以写成：

```
db.Ubisoft.aggregate([
    {
        $skip: 1
    },
    {
        $limit: 2
    }
])
12345678
```

limit和skip搭配使用可以达到分页的效果。

注意先写skip在写limit

#### $unwind

`$unwind`管道可以document中的数组类型的字段进行拆分，每条包含数组中的一个值。

- 基本使用
  在Ubisoft这个集合里新增如下一条document:

```
/* 5 */
{
    "_id" : ObjectId("5b0e242ed85f6f9cc56da7cc"),
    "name" : "gameList",
    "list" : [ 
        "dota2", 
        "csgo", 
        "ow"
    ]
}
12345678910
```

我们针对这个document中的list字段来进行`$unwind`

```
db.Ubisoft.aggregate([
    {
        $unwind: '$list' // 指定list字段
    }
])
12345
```

输出结果为：

```
/* 1 */
{
    "_id" : ObjectId("5b0e242ed85f6f9cc56da7cc"),
    "name" : "gameList",
    "list" : "dota2"
}

/* 2 */
{
    "_id" : ObjectId("5b0e242ed85f6f9cc56da7cc"),
    "name" : "gameList",
    "list" : "csgo"
}

/* 3 */
{
    "_id" : ObjectId("5b0e242ed85f6f9cc56da7cc"),
    "name" : "gameList",
    "list" : "ow"
}
1234567891011121314151617181920
```

可以看到unwind是将文档中的数组字段进行拆分，如果有其他文档的list字段也是数组，也会一并拆分。

- 特殊情况下的unwind(空数组，null,非数组，无指定字段)

针对特殊情况，新建一个colletion,内容为：

```
/* 1 */
{
    "_id" : ObjectId("5b0e27fdd85f6f9cc56da7ce"),
    "list" : null
}

/* 2 */
{
    "_id" : ObjectId("5b0e2827d85f6f9cc56da7cf"),
    "list" : []
}

/* 3 */
{
    "_id" : ObjectId("5b0e2834d85f6f9cc56da7d0"),
    "list" : "notArray"
}

/* 4 */
{
    "_id" : ObjectId("5b0e2844d85f6f9cc56da7d1")
}
12345678910111213141516171819202122
```

来进行`$unwind`，

```
db.unwind.aggregate([
    {
        $unwind: '$list'
    }
])
12345
```

输出结果为：

```
/* 1 */
{
    "_id" : ObjectId("5b0e2834d85f6f9cc56da7d0"),
    "list" : "notArray"
}
12345
```

可以看到`[]`,`null`,以及无指定字段的数据都丢失了，
为了不丢失数据，我们可以写成：

```
db.unwind.aggregate([
    {
        $unwind: {
            path: '$list', // path是指定字段
            preserveNullAndEmptyArrays: true //该属性为true即保留
        }
    }
])
12345678
```

这次输出结果就保留了null以及空数组，值得关注的就是`preserveNullAndEmptyArrays`这个属性，为true的时候就保留。

下面结合PHP 代码

```
//$server 根据自己的服务器来
$mongo =  new \MongoClient($server, array('connect'=>true));// 立即连接

$db = $mongo->colName;//选择数据库
$collection = $db->file_log;//选择文档集合

$filter["status"] = array("\$in" => array(0, 2, 5)); 
$filter["a_id"] = array("\$eq" => $a_id);
$group = array("_id" => array(
                "md5" => "\$md5",
                "path" => "\$path",
                "a_id"=>"\$a_id"
            ),
                "time" => array("\$last" => "\$found_time"),
                "l_id" => array("\$last" => "\$_id"),
                "v_name" => array("\$last" => "\$v_name"),
                "c_iso_key" => array("\$last" => "\$c_iso_key"),
                "status" => array("\$last" => "\$status"),
                "h_msg" => array("\$last" => "\$h_msg"),
                "r_level" => array("\$last" => "\$r_level"),
            );
$sort = array("time" => 1); //根据时间排序
$limit = 5;
//即以md5、path、a_id分组获取字段为found_time、_id、v_name 最后一个数据、时间倒叙、取出5条
$res = $collection->aggregate(array('$match' => $filter),array('$group' => $group),array('$sort' => $sort),array('$limit'=>(int)$limit));
12345678910111213141516171819202122232425
```
