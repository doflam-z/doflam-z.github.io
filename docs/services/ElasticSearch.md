# ElasticSearch

搜索

```
GET _search
{
  "query": {
    "match": {
      "_index" : "jobui_interview_v1"
    }
  },
  "size" : 100
}
```

查看所有索引

```
GET /_cat/indices?v	
GET _cat/indices?v&s=store.size:desc//按大小倒叙
```

新建索引映射

```
 PUT /jobui_interview_v1/external/1?pretty
{
  "name": "John Doe"
}

GET /jobui_company_album/_mapping?pretty

PUT jobui_interview_v1
{
	"mappings":{
		"interview":{
			"_all": {
				"enabled": false
			},
			"properties":{
				"CIE_ID": {
					"type": "integer"
				},
				"CIE_CompanyID": {
					"type": "integer"
				},
				"CIE_PositionID": {
					"type": "integer"
				},
				"CIE_PositionName": {
					"type": "text",
					"analyzer": "ik_smart",
					"include_in_all": true
				},
				"CIE_CompanyName": {
					"type": "text",
					"analyzer": "ik_smart",
					"include_in_all": true
				},
				"CIE_UserKey": {
					"type": "text",
					"analyzer": "ik_smart",
					"include_in_all": true
				},
				"CIE_UserIP": {
					"type": "text",
					"analyzer": "ik_smart",
					"include_in_all": true
				},
				"CIE_UsefulNum": {
					"type": "integer"
				},
				"CIE_NotUsefulNum": {
					"type": "integer"
				},
				"CIE_IsNick": {
					"type": "text",
					"analyzer": "ik_smart",
					"include_in_all": true
				},
				"CIE_CheckStatus": {
					"type": "text",
					"analyzer": "ik_smart",
					"include_in_all": true
				},
				"CIE_Content": {
					"type": "text",
					"analyzer": "ik_smart",
					"include_in_all": true
				},
				"CIE_ClientType": {
					"type": "text",
					"analyzer": "ik_smart",
					"include_in_all": true
				},
				"CIE_AddTime": {
					"type": "long"
				},
				"CIE_LastCheckTime": {
					"type": "long"
				},
				"CIE_LastUpdateTime": {
					"type": "long"
				},
				"lt": {
					"type": "long"
				}
			}
		}
	},
	"settings": {
		"number_of_shards" :   1,
		"number_of_replicas" : 1
	}
}
```

设置别名

```
PUT /jobui_interview_v1/_alias/jobui_interview
```

设置别名
PUT /jobui_interview_v1/_alias/jobui_interview

差看映射信息

```
GET /jobui_interview_v1/_mapping?pretty
```

#查看索引内容

```
GET jobui_interview_v1
```

删除索引

```
DELETE jobui_interview_v1
```

查看单个文档

```
GET jobui_company_job_v1/job/9650100?pretty
```

查询内容

```
POST /jobui_company_job_v1/_search?pretty
{

  "query": { "match": { "SPI_CompanyCity": "上海" } }

}
```

查看集群

```shell
GET _cluster/health?pretty
```

```shell
#查看数据（shell）

#查看所有索引（按大小倒序）
curl -XGET 'http://192.168.2.135:9200/_cat/indices?v&s=store.size:desc'

#删除索引
curl -XDELETE 'http://192.168.2.135:9200/nginx_apis-access-2021.08.31?pretty'

#查看索引mapping
curl "192.168.1.74:9200/索引名称/_mapping"

#查看单个文档
curl -XGET 'localhost:9200/索引名称/类型/ID?pretty'

#创建文档
curl -XPUT 'localhost:9200/customer/external/1?pretty' -d '
{
  "name": "John Doe"
}'

#查询文档内容
curl -XPOST 'localhost:9200/bank/_search?pretty' -d '
{
  "query": { "match": { "address": "mill" } }
}'
```

## es+kibana部署

**基础环境：jdk8**

#### 安装jdk

下载jdk包

```shell
mkdir -p /usr/local/java 
cd /usr/local/java 
wget https://download.oracle.com/otn/java/jdk/8u321-b07/df5ad55fdd604472a86a45a217032c7d/jdk-8u321-linux-x64.tar.gz?AuthParam=1647915953_6b486a8019a80931d2b2bdca8b505d6a
tar zxvf jdk-8u321-linux-x64.tar.gz -C /usr/local/java
```

#### 配置jdk环境变量

```shell
vim /etc/profile
#添加
JAVA_HOME=/usr/local/java/jdk1.8.0_311/
export CLASSPATH=$:CLASSPATH:$JAVA_HOME/lib/ 
export PATH=$PATH:$JAVA_HOME/bin 

#加载文件生效
source /etc/profile
#查看版本
java -version
```

#### 安装elasticsearch5.6

```shell
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-5.6.16.tar.gz
sha1sum elasticsearch-5.6.16.tar.gz 
tar -xzf elasticsearch-5.6.16.tar.gz

#后台启动并记录pid
cd elasticsearch-5.6.16/ 
./bin/elasticsearch -p /mysql/elasticsearch/elasticsearch-pid -d

#连接测试
curl -XGET 192.168.1.36:9200

```

#### 安装kibana5.6

```shell
wget https://artifacts.elastic.co/downloads/kibana/kibana-5.6.16-linux-x86_64.tar.gz
sha1sum kibana-5.6.16-linux-x86_64.tar.gz 
tar -xzf kibana-5.6.16-linux-x86_64.tar.gz
cd kibana-5.6.16-linux-x86_64/ 

#后台启动
./bin/kibana >> /mysql/elasticsearch/kibana.stdout 2>> /mysql/elasticsearch/kibana.stderr &

```



