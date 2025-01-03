# ElasticSearch

#### 搜索

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

#### 查看所有索引

```
GET /_cat/indices?v	
GET _cat/indices?v&s=store.size:desc//按大小倒叙
```

#### 新建索引映射

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

#### 设置别名

```
PUT /jobui_interview_v1/_alias/jobui_interview
```

#### 差看映射信息

```
GET /jobui_interview_v1/_mapping?pretty
```

#### 查看索引内容

```
GET jobui_interview_v1
```

#### 删除索引

```
DELETE jobui_interview_v1
```

#### 查看单个文档

```
GET jobui_company_job_v1/job/9650100?pretty
```

#### 查询内容

```
POST /jobui_company_job_v1/_search?pretty
{

  "query": { "match": { "SPI_CompanyCity": "上海" } }

}
```

#### 查看集群

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

#查看主节点
GET /_cat/master?v
#查看节点状态
GET _nodes/stats
#查看集群状态
GET _cluster/health?pretty
#查看集群节点
GET _cat/nodes
#查看分片详细
GET _cat/shards?v
#查看全部索引
GET _cat/indices?v
#查看集群设置
GET _cluster/settings
#查看集群健康
GET _cat/health?v
```

#### 关闭节点(自动转移分片数据)

```bash
#排除1.36
PUT _cluster/settings
{
  "transient": {
    "cluster.routing.allocation.exclude._ip":"192.168.1.36"
  }
}
#恢复
PUT /_cluster/settings
{
  "transient": {
    "cluster.routing.allocation.exclude._ip": null
  }
}

PUT _cluster/settings
{
  "persistent": {
    "cluster.routing.allocation.enable": "primaries"
  }
}
PUT _cluster/settings
{
  "persistent": {
    "cluster.routing.allocation.enable": null
  }
}
#检查分片错误详情
GET /_cluster/allocation/explain?pretty

# 重新执行分片
POST _cluster/reroute?retry_failed=true
```

#### 复制索引

```
POST /_reindex?wait_for_completion=false
{
  "source": {
    "index": "jobui_salary_search_2022_v3",
    "size": 500
  },
  "dest": {
    "index": "jobui_salary_search_2022_v4"
  }
}

GET _tasks?detailed=true&actions=*reindex # 查看正在复制的索引

GET /_tasks/F4c1BDoGSDqCqt2raIRmHA:6628770936 # 直接按id查看

POST /_tasks/F4c1BDoGSDqCqt2raIRmHA:7453932752/_cancel # 取消复制
```

#### 导入导出数据

导出数据

```shell
curl -X GET "http://121.9.201.145:9202/jobui_salary_search_2024_v2/_search?size=10000&pretty=true" -H 'Content-Type: application/json' -d'
{
  "_source": true,
  "query":{"bool":{"must":[{"term":{"CID":{"value":15110}}}]}}
}' > data.json

curl -X GET "http://121.9.201.145:9202/jobui_view_rank_recent_v20/_search?size=10000&pretty=true" -H 'Content-Type: application/json' -d'
{
  "_source": true,
  "query":{"bool":{"must":[{"term":{"CBY_Area":{"value":"190100"}}}]}}
}' > data.json

curl -X GET "http://121.9.201.145:9202/smallposition_v11/_search?size=10000&pretty=true" -H 'Content-Type: application/json' -d'
{
  "_source": true,
  "query":{"bool":{"should":[{"term":{"SPI_Content":{"boost":"0","value":"java"}}},{"term":{"SPI_PositionName":{"boost":"100","value":"java"}}}],"minimum_should_match":1}}
}' > data.json
```

>  导出数据后需要处理成正确格式，可以使用python处理，脚本如下

```python
import json

# 类型名称，5.X才需要
type_name = "position"

with open('data.json', 'r') as f:
    data = json.load(f)

with open('bulk_data.json', 'w') as f:
    for hit in data['hits']['hits']:
        action = {
            "index": {
                "_index": hit["_index"],
                "_type": type_name,
                "_id": hit["_id"]
            }
        }
        f.write(json.dumps(action) + "\n")
        f.write(json.dumps(hit["_source"]) + "\n")

print("Bulk data file has been created successfully.")
```

导入数据

```shell
curl -X POST "http://192.168.1.39:9201/_bulk" -H 'Content-Type: application/x-ndjson' --data-binary @data.json
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

#安装x-pack
sudo ./bin/kibana-plugin install file:./x-pack-5.1.2.zip

```

#### 常用命令（保存一下）

```yaml
GET _search
{
  "query": {
    "match_all": {}
  }
}

GET /_cat/indices?v

GET smallposition_v5/_mapping
GET jobui_salary_search/_mapping

GET jobui_news_rank_v1

POST  /_cluster/reroute
{
	"commands":[
		{
			"allocate_stale_primary":{
				"index":"smallposition_v3",
				"shard":0,
				"node":"node-134-2",
				"accept_data_loss":true
			}
		}
	]
}

GET  /_cluster/allocation/explain
{
	"index":"smallposition_v3",
	"shard":0,
	"primary":true
}

GET _nodes/stats/fs

GET _cluster/health/

GET _cluster/settings

GET /_cat/shards?h=index,shard,prirep,state,unassigned.reason|

GET _cat/indices?v&health=red

GET /_cat/shards?v&h=n,index,shard,prirep,state,sto,sc,unassigned.reason,unassigned.details

GET /smallposition_v4/position/_search
GET /smallposition_v7/position/_search
{
  "sort": [
    {
      "SPI_SnatchTime": {
        "order": "desc"
      }
    }
  ]

}

GET /jobui_smallposition/position/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "term": {
            "SPI_CompanyID": 8002694
          }
        }
      ]
    }
  },
  "aggregations": {
    "SPI_WorkPlace": {
      "terms": {
        "field": "SPI_WorkPlace",
        "size": 10,
        "order": {
          "_count": "desc"
        }
      }
    }
  },
  "size": 0
}

GET /jobui_salary_search/salary/238316138_202210

GET jobui_salary_search/_search

GET jobui_salary_search/_search
{
  "query": {
    "match": {
      "_id": "208583484_202108"
    }
  }
}

GET jobui_salary_search/salary/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "range": {
            "Month": {
              "lt": "202304",
              "gte": "202204"
            }
          }
        },
        {
          "term": {
            "CID": {
              "value": 12482304
            }
          }
        }
      ]
    }
  }
}

GET trends2022_v2
GET /trends2023_v2/trends/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "match_phrase": {
            "PName": {
              "query": "php"
            }
          }
        },
        {
          "range": {
            "month": {
              "lt": "2023"
            }
          }
        }
      ]
    }
  },
  "aggregations": {
    "month_Agg": {
      "terms": {
        "field": "month",
        "size": 12,
        "order": {
          "_term": "asc"
        }
      }
    }
  },
  "size": 0
}

GET /trends2022_v2/trends/_mapping

GET /trends2022_v2/trends/_search
{
  "query": {
    "bool": {
        "must": [
            {
                "match_phrase": {
                    "PName": {
                        "query": "c++专家"
                    }
                }
            }
        ]
    }
},
"aggregations": {
    "avgSalary": {
        "avg": {
            "field": "PSalary"
        }
    }
}
}
GET /trends2022_v2/trends/_search
{
  "query": {
    "bool": {
        "must": [
            {
                "match_phrase": {
                    "PName": {
                        "query": "服装销售顾问"
                    }
                }
            },
            {
                "term": {
                    "PCity": "广州"
                }
            }
        ]
    }
}
}
GET jobui_salary_search_2024
POST /_aliases
{
  "actions": [
    {
      "add": {
        "index": "jobui_salary_search_2024",
        "alias": "jobui_salary_search"
      }
    }
  ] 
}

GET jobui_salary_search_2022_v4/salary/_mapping
GET jobui_salary_search/salary/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "range": {
            "Month": {
              "lt": "202304",
              "gte": "202204"
            }
          }
        },
        {
          "bool": {
            "must_not": [
              {
                "term": {
                  "Salary": 0
                }
              }
            ],
            "must": [
              {
                "match": {
                  "Name": {
                    "query": "客服",
                    "operator": "and"
                  }
                }
              },
              {
          "term": {
            "CCity": {
              "value": "温州"
            }
          }
        },
        {
        "term": {
            "Age": {
              "value": 6
            }
          }
        }
            ]
          }
        }
      ]
    }
  },
  "size": 10
}

GET jobui_salary_search/_search
{
  "query": {
    "bool": {
      "must_not": [
        {
          "term": {
            "Salary": 0
          }
        }
      ],
      "must": [
        {
          "term": {
            "CID": 13148838
          }
        },
        {
          "term": {
            "Age": 6
          }
        },
        {
          "term": {
            "Name": "配送员"
          }
        }
      ]
    }
  },
  "size": 10
}

GET jobui_salary_search/_search
{
    "query": {
        "bool": {
            "must_not": [
                {
                    "term": {
                        "Salary": 0
                    }
                }
            ],
            "must": [
                {
                    "term": {
                        "SmallArea": "工业园区"
                    }
                },
                {
                    "term": {
                        "PCity": "苏州"
                    }
                }
            ]
        }
    },
    "size": 20
}

GET jobui_salary_search/salary/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "term": {
            "PID": 248407359
          }
        }
      ]
    }
  },
  "size": 10
}



GET jobui_salary_search/salary/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "term": {
            "Age": 6
          }
        },
        {
          "bool": {
            "should": [
              {
                "range": {
                  "Month": {
                    "gt": 202209
                  }
                }
              },
              {
                "bool": {
                  "must": [
                    {
                      "range": {
                        "PID": {
                          "gt": 0
                        }
                      }
                    },
                    {
                      "range": {
                        "Month": {
                          "gte": 202209
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ]
    }
  },
  "sort": [
    {
      "Month": {
        "order": "asc"
      }
    },
    {
      "PID": {
        "order": "asc"
      }
    }
  ],
  "from": 0,
  "size": 1000,
  "_source": [
    "PID",
    "Month",
    "Age"
  ]
}




GET jobui_salary_search/salary/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "term": {
            "Age": 6
          }
        },
        {
          "bool": {
            "should": [
              {
                "range": {
                  "PID": {
                    "gt": 1
                  }
                }
              },
              {
                "bool": {
                  "must": [
                    {
                      "range": {
                        "Month": {
                          "gt": 202210
                        }
                      }
                    },
                    {
                      "range": {
                        "PID": {
                          "gte": 202210
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ]
    }
  },
  "sort": [
    {
      "Month": {
        "order": "desc"
      }
    },
    {
      "PID": {
        "order": "desc"
      }
    }
  ],
  "from": 0,
  "size": 1000,
  "_source": [
    "PID",
    "FSalary",
    "Salary"
  ]
}




GET jobui_salary_search/salary/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "range": {
            "Month": {
              "lt": "202303",
              "gte": "202203"
            }
          }
        },
        {
          "range": {
            "Salary": {
              "gt": 2000
            }
          }
        },
        {
          "bool": {
            "must": [
              {
                "term": {
                  "CID": 1236
                }
              },
              {
                "term": {
                  "FSalary": 1
                }
              }
            ]
          }
        }
      ]
    }
  },
"size": 20
}



GET _cluster/health?pretty

GET _cat/nodes

GET _nodes/stats

GET  /jobui_salary_search/_search
{
    "query": {
        "bool": {
            "must_not": [
                {
                    "term": {
                        "Salary": 0
                    }
                }
            ],
            "must": [
                {
                    "match": {
                        "Name": {
                            "query": "销售经理",
                            "operator": "and"
                        }
                    }
                },
                {
                    "term": {
                        "PCity": "广州"
                    }
                }
            ]
        }
    },
    "aggregations": {
        "SmallArea": {
            "terms": {
                "field": "SmallArea",
                "size": "50",
                "order": {
                    "_count": "desc"
                }
            },
            "aggregations": {
                "avgSalary": {
                    "avg": {
                        "field": "Salary"
                    }
                }
            }
        },
        "avgSalary": {
            "avg": {
                "field": "Salary"
            }
        }
    },
    "size": 0
}

GET  /jobui_salary_search_2022/_search
{
"query": {
    "bool": {
        "must_not": [
            {
                "term": {
                    "Salary": 0
                }
            }
        ],
        "must": [
            {
                "match_phrase": {
                    "Name": {
                        "query": "服装销售顾问"
                    }
                }
            },
            {
                "term": {
                    "CCity": "广州"
                }
            }
        ]
    }
},
"aggregations": {
    "Name": {
        "terms": {
            "field": "Name.kw",
            "size": 10,
            "order": {
                "_count": "desc"
            }
        },
        "aggregations": {
            "avgSalary": {
                "avg": {
                    "field": "Salary"
                }
            }
        }
    },
    "PCity": {
        "terms": {
            "field": "PCity",
            "size": 10,
            "order": {
                "_count": "desc"
            }
        },
        "aggregations": {
            "avgSalary": {
                "avg": {
                    "field": "Salary"
                }
            }
        }
    },
    "FSalary": {
        "terms": {
            "field": "FSalary",
            "size": 10,
            "order": {
                "_count": "desc"
            }
        },
        "aggregations": {
            "avgSalary": {
                "avg": {
                    "field": "Salary"
                }
            }
        }
    },
    "avgSalary": {
        "avg": {
            "field": "Salary"
        }
    }
}
}

GET /jobui_salary_search_2023/_search

GET /trends2022_v2/trends/_search

GET /trends2022_v2/trends/_search
{
  "query": {
    "bool": {
        "must": [
            {
                "match_phrase": {
                    "PName": {
                        "query": "销售"
                    }
                }
            },
            {
                "term": {
                    "PCity": "广州"
                }
            },
            {
                "term": {
                    "SCity": "天河"
                }
            }
        ]
    }
}
}

GET /jobui_salary_search/_search
{
  "query": {
    "bool": {
        "must_not": [
            {
                "term": {
                    "Salary": 0
                }
            }
        ],
        "must": [
            {
                "match_phrase": {
                    "Name": {
                        "query": "销售"
                    }
                }
            },
            {
                "term": {
                    "CCity": "广州"
                }
            },
            {
                "term": {
                    "SmallArea": "天河区"
                }
            }
        ]
    }
  }
}

GET /jobui_salary_search/_search
{
  "query": {
    "bool": {
        "must_not": [
            {
                "term": {
                    "Salary": 0
                }
            }
        ],
        "must": [
            {
                "match_phrase": {
                    "Name": {
                        "query": "php"
                    }
                }
            },
            {
                "term": {
                    "CCity": "广州"
                }
            },
            {
                "term": {
                    "Industry": ""
                }
            }
        ]
    }
},
"aggregations": {
    "avgSalary": {
        "avg": {
            "field": "Salary"
        }
    }
}
}

GET  /jobui_salary_search_2023
GET  /jobui_salary_search_v2/_search
{
  "query": {
    "match_phrase": {
      "Name": {
        "query": "销售代表"
      }
    }
  }
}

GET /jobui_salary_search_2022_v3/_mapping

PUT /jobui_salary_search_2023
{
    "mappings": {
        "salary": {
            "properties": {
                "PID": {
                    "type": "integer"
                },
                "Name": {
                    "type": "text",
          					"analyzer": "ik_smart",
          					"fields": {
          						"kw": { 
            						"type":  "keyword"
          						}
        						}
                },
                "PCity": {
                    "type": "keyword"
                },
                "Salary": {
                    "type": "integer"
                },
                "FSalary": {
                    "type": "integer"
                },
                "SmallArea": {
                    "type": "keyword"
                },
                "PType": {
                    "type": "integer"
                },
                "Age": {
                    "type": "integer"
                },
                "Degree": {
                    "type": "integer"
                },
                "CID": {
                    "type": "integer"
                },
                "CCity": {
                    "type": "keyword"
                },
                "Worker": {
                    "type": "integer"
                },
                "Industry": {
                    "type": "keyword"
                },
                "SmallIndustry": {
                    "type": "keyword"
                },
                "Month": {
                    "type": "integer"
                },
                "Year": {
                    "type": "integer"
                }
            }
        }
    },
    "settings": {
        "number_of_shards": 4,
        "number_of_replicas": 1
    }
}

POST /_reindex?wait_for_completion=false
{
  "source": {
    "index": "jobui_salary_search_2022_v3",
    "size": 500
  },
  "dest": {
    "index": "jobui_salary_search_2022_v4"
  }
}

GET /jobui_salary_search/

POST /_aliases
{
	"actions": [{
		"add": {
			"index": "jobui_salary_search_2018",
			"alias": "jobui_salary_search"
		}
	}]
}

GET _tasks?detailed=true&actions=*reindex

GET /_tasks/F4c1BDoGSDqCqt2raIRmHA:7766345282

POST /_tasks/F4c1BDoGSDqCqt2raIRmHA:7453932752/_cancel

GET /_cat/indices

GET /jobui_salary_search_2022/_search

PUT /jobui_salary_search_2023
{
    "mappings": {
        "salary": {
            "properties": {
                "PID": {
                    "type": "integer"
                },
                "Name": {
                    "type": "text",
          					"analyzer": "ik_max_word",
          					"fields": {
          						"kw": { 
            						"type":  "keyword"
          						}
        						}
                },
                "PCity": {
                    "type": "keyword"
                },
                "Salary": {
                    "type": "integer"
                },
                "FSalary": {
                    "type": "integer"
                },
                "SmallArea": {
                    "type": "keyword"
                },
                "PType": {
                    "type": "integer"
                },
                "Age": {
                    "type": "integer"
                },
                "Degree": {
                    "type": "integer"
                },
                "CID": {
                    "type": "integer"
                },
                "CCity": {
                    "type": "keyword"
                },
                "Worker": {
                    "type": "integer"
                },
                "Industry": {
                    "type": "keyword"
                },
                "SmallIndustry": {
                    "type": "keyword"
                },
                "Month": {
                    "type": "integer"
                },
                "Year": {
                    "type": "integer"
                }
            }
        }
    },
    "settings": {
        "number_of_shards": 4,
        "number_of_replicas": 1
    }
}

GET /jobui_salary_search/_search
{
    "query": {
        "bool": {
            "must_not": [
                {
                    "term": {
                        "Salary": 0
                    }
                }
            ],
            "must": [
                {
                    "match": {
                        "Name": {
                            "query": "php",
                            "operator": "and"
                        }
                    }
                },
                {
                    "term": {
                        "PCity": "广州"
                    }
                }
            ]
        }
    },
    "aggregations": {
        "Age": {
            "terms": {
                "field": "Age",
                "size": 10,
                "order": {
                    "avgSalary": "desc"
                }
            },
            "aggregations": {
                "avgSalary": {
                    "avg": {
                        "field": "Salary"
                    }
                }
            }
        },
        "Name": {
            "terms": {
                "field": "Name.kw",
                "size": 10,
                "order": {
                    "avgSalary": "desc"
                }
            },
            "aggregations": {
                "avgSalary": {
                    "avg": {
                        "field": "Salary"
                    }
                }
            }
        },
        "FSalary": {
            "terms": {
                "field": "FSalary",
                "size": 10,
                "order": {
                    "avgSalary": "desc"
                }
            },
            "aggregations": {
                "avgSalary": {
                    "avg": {
                        "field": "Salary"
                    }
                }
            }
        },
        "Industry": {
            "terms": {
                "field": "Industry",
                "size": "10",
                "order": {
                    "avgSalary": "desc"
                }
            },
            "aggregations": {
                "avgSalary": {
                    "avg": {
                        "field": "Salary"
                    }
                }
            }
        },
        "avgSalary": {
            "avg": {
                "field": "Salary"
            }
        }
    },
    "size": 0
}

GET jobui_salary_search_2019/_search

GET jobui_salary_search_2022_v2/_search

GET jobui_salary_search/_search
{
  "query": {
    "range": {
      "PID": {
        "gt": 0
      }
    }
  },
  "sort": [
    {
      "PID": {
        "order": "asc"
      }
    }
  ],
  "size": 10,
  "_source": [
    "PID",
    "FSalary",
    "Salary"
  ]
}

GET jobui_salary_search_2022_v2/_search

GET jobui_salary_search_2022_v2/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "match": {
            "Month": 202202
          }
        }
      ]
    }
  }
}

PUT /jobui_salary_search_2022_v2
{
    "mappings": {
        "salary": {
            "properties": {
                "PID": {
                    "type": "integer"
                },
                "Name": {
                    "type": "text",
                    "analyzer": "ik_max_word",
          					"fields": {
          						"kw": { 
            						"type":  "keyword"
          						}
        						}
                },
                "PCity": {
                    "type": "keyword"
                },
                "Salary": {
                    "type": "integer"
                },
                "FSalary": {
                    "type": "integer"
                },
                "SmallArea": {
                    "type": "keyword"
                },
                "PType": {
                    "type": "integer"
                },
                "Age": {
                    "type": "integer"
                },
                "Degree": {
                    "type": "integer"
                },
                "CID": {
                    "type": "integer"
                },
                "CCity": {
                    "type": "keyword"
                },
                "Worker": {
                    "type": "integer"
                },
                "Industry": {
                    "type": "keyword"
                },
                "SmallIndustry": {
                    "type": "keyword"
                },
                "Month": {
                    "type": "integer"
                },
                "Year": {
                    "type": "integer"
                }
            }
        }
    },
    "settings": {
        "number_of_shards": 4,
        "number_of_replicas": 1
    }
}

POST /_analyze
{
    "analyzer": "ik_max_word",
    "text": "省级经理"
}


GET jobui_salary_search_2022_v2/_search

GET smallposition_v4
GET smallposition_v5/_search
{
  "sort": [
    {
      "SPI_SnatchTime": {
        "order": "desc"
      }
    }
  ]
}

GET smallposition_v5/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "range": {
            "SPI_PositionID": {
              "gt": 0
            }
          }
        },
        {
          "term": {
            "SPI_Domain": "mcmqyc.com"
          }
        }
      ]
    }
  },
  "sort": [
    {
      "SPI_PositionID": {
        "order": "asc"
      }
    }
  ],
  "size": 100,
  "_source": [
    "SPI_PositionID",
    "SPI_Domain",
    "SPI_Url",
    "SPI_CompanyID"
  ]
}


GET smallposition_v4/_mapping
PUT smallposition_v5
{
  "mappings": {
    "position": {
      "properties": {
        "CSF_FollowNum": {
          "type": "integer"
        },
        "CSJ_TotalViewNum": {
          "type": "integer"
        },
        "SPI_CompanyID": {
          "type": "keyword"
        },
        "SPI_Domain": {
          "type": "keyword"
        },
        "SPI_PositionID": {
          "type": "keyword"
        },
        "SPI_PositionName": {
          "type": "text",
          "fields": {
            "keyword": {
              "type": "keyword"
            }
          },
          "analyzer": "ik_smart"
        },
        "SPI_SnatchTime": {
          "type": "long"
        },
        "SPI_Url": {
          "type": "keyword"
        },
        "SPI_WorkPlace": {
          "type": "keyword"
        }
      }
    }
  },
  "settings": {
    "number_of_shards": 4,
    "number_of_replicas": 1
  }
}

PUT /smallposition_v5/_alias/jobui_smallposition

GET jobui_smallposition/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "match": {
            "SPI_CompanyID": 16835194
          }
        }
      ]
    }
  },
  "aggregations": {
    "SmallArea": {
      "terms": {
        "field": "SPI_Domain",
        "size": "50",
        "order": {
          "_count": "desc"
        }
      }
    }
  },
  "size": 0, 
  "sort": [
    {
      "SPI_SnatchTime": {
        "order": "desc"
      }
    }
  ]
}

GET jobui_smallposition/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "match": {
            "SPI_Domain":"51job.com" 
          }
        }
      ]
    }
  }, 
  "sort": [
    {
      "SPI_SnatchTime": {
        "order": "desc"
      }
    }
  ]
}

GET jobui_salary_search_2022_v2/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "match": {
            "Month": 202210
          }
        }
      ]
    }
  },
  "sort": [
    {
      "PID": {
        "order": "desc"
      }
    }
  ]
}

GET jobui_salary_search_2023_v2/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "term": {
            "CID": {
              "value": 11679164
            }
          }
        }
      ]
    }
  }
}

GET jobui_salary_search/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "range": {
            "Month": {
              "lte": "202305",
              "gte": "202205"
            }
          }
        },
        {
          "bool": {
            "must_not": [
              {
                "term": {
                  "Salary": 0
                }
              }
            ],
            "must": [
                            {
                "match": {
                  "Name": {
                    "query": "施工员",
                    "operator": "and"
                  }
                }
              },
              {
                "term": {
                  "Age": 6
                }
              },
              {
                "term": {
                  "CCity": "南宁"
                }
              }
            ]
          }
        }
      ]
    }
  },
  "size": 10
}

GET jobui_salary_search/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "bool": {
            "must_not": [
              {
                "term": {
                  "Salary": 0
                }
              }
            ],
            "must": [
              {
                "term": {
                  "CID": 15113619
                }
              },
              {
                "term": {
                  "Month": 202309
                }
              }
            ]
          }
        }
      ]
    }
  },
  "size": 0,
  "aggs": {
    "unique_names": {
      "terms": {
        "field": "Name.kw"
      }
    }
  }
}

GET jobui_view_rank/_search
{
  "query": {
    "match": {
      "CBY_CID": 24846
    }
  }
}
GET jobui_view_rank_2022/_search

PUT jobui_view_rank_2022
{
  "mappings": {
    "view": {
      "properties": {
        "CBY_Area": {
          "type": "keyword"
        },
        "CBY_CID": {
          "type": "integer"
        },
        "CBY_Industry": {
          "type": "keyword"
        },
        "CBY_LastUpdateTime": {
          "type": "integer"
        },
        "CBY_Num": {
          "type": "integer"
        },
        "CBY_SmallArea": {
          "type": "keyword"
        }
      }
    }
  },
  "settings": {
    "number_of_shards": 3,
    "number_of_replicas": 1
  }
}

GET jobui_salary_rank_v1/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "constant_score": {
            "filter": {
              "term": {
                "companyID": 10978981
              }
            }
          }
        },
        {
          "range": {
            "year": {
              "gt": 2018
            }
          }
        }
      ]
    }
  },
  "aggregations": {
    "years_Agg": {
      "terms": {
        "field": "year",
        "size": 6,
        "order": {
          "_term": "asc"
        }
      },
      "aggregations": {
        "salary_Agg": {
          "avg": {
            "field": "avgPay"
          }
        }
      }
    }
  },
  "size": 0
}


GET jobui_salary_search/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "constant_score": {
            "filter": {
              "term": {
                "CID": 10978981
              }
            }
          }
        },
        {
          "range": {
            "Year": {
              "gt": 2017
            }
          }
        }
      ]
    }
  },
  "aggregations": {
    "years_Agg": {
      "terms": {
        "field": "Year",
        "size": 6,
        "order": {
          "_term": "asc"
        }
      },
      "aggregations": {
        "salary_Agg": {
          "avg": {
            "field": "Salary"
          }
        }
      }
    }
  },
  "size": 0
}

GET jobui_view_rank_recent_v16/_search
{
  "query": {
    "match": {
      "CBY_CID": "1236"
    }
  }
}

GET trends2023_v2/_search
{
  "query": {
    "match": {
      "CID": 12531522
    }
  }
}


GET jobui_salary_search_recent/_search
{
  "query": {
    "match": {
      "CID": 1228374
    }
  }
}

POST /_aliases
{
  "actions": [
    {
      "add": {
        "index": "jobui_salary_search_2022_v2",
        "alias": "jobui_salary_search_recent"
      }
    }
  ]
}

GET jobui_salary_search_2019/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "term": {
            "CCity": "襄阳"
          }
        },
        {
          "term": {
            "SmallArea": "高新区"
          }
        }
      ]
    }
  }
}

POST jobui_salary_search_2018/_update_by_query
{
  "query": {
    "bool": {
      "must": [
        {
          "term": {
            "CCity": "襄阳"
          }
        },
        {
          "term": {
            "SmallArea": "高新开发区"
          }
        }
      ]
    }
  },
  "script": {
    "source": "ctx._source.SmallArea = params.SmallArea;",
    "params": {
      "SmallArea": "高新区"
    }
  }
}
GET smallposition_v7/_search

PUT smallposition_v7
{
  "mappings": {
    "position": {
      "properties": {
        "CSF_FollowNum": {
          "type": "integer"
        },
        "CSJ_TotalViewNum": {
          "type": "integer"
        },
        "SPI_CompanyID": {
          "type": "keyword"
        },
        "SPI_Domain": {
          "type": "keyword"
        },
        "SPI_PositionID": {
          "type": "keyword"
        },
        "SPI_PositionName": {
          "type": "text",
          "fields": {
            "keyword": {
              "type": "keyword"
            }
          },
          "analyzer": "ik_smart"
        },
        "SPI_SnatchTime": {
          "type": "long"
        },
        "SPI_Url": {
          "type": "keyword"
        },
        "SPI_WorkPlace": {
          "type": "keyword"
        },
        "SPI_Province": {
          "type": "keyword"
        },
        "SPI_AreaCode": {
          "type": "keyword"
        },
        "SPI_JobType": {
          "type": "keyword"
        },
        "SPI_JobAge": {
          "type": "keyword"
        },
        "SPI_Degree": {
          "type": "keyword"
        },
        "SPI_Metro": {
          "type": "keyword"
        },
        "SPI_HotPlace": {
          "type": "keyword"
        },
        "SPI_Pay": {
          "type": "keyword"
        },
        "SPI_WorkerNum": {
          "type": "keyword"
        },
        "SPI_Sort": {
          "type": "keyword"
        },
        "CI_Impression": {
          "type": "keyword"
        },
        "CI_Type": {
          "type": "keyword"
        },
        "SPI_Position_0": {
          "type": "keyword"
        },
        "SPI_Position_1": {
          "type": "keyword"
        },
        "SPI_Lng": {
          "type": "keyword"
        },
        "SPI_Lat": {
          "type": "keyword"
        },
        "SPI_CompanyName": {
          "type": "text",
          "fields": {
            "keyword": {
              "type": "keyword"
            }
          },
          "analyzer": "ik_smart"
        }
      }
    }
  },
  "settings": {
    "number_of_shards": 4,
    "number_of_replicas": 1
  }
}
GET jobui_salary_search/_search
{
"query": {
  "bool": {
    "must": [
      {"term": {
        "PID": {
          "value": 285671729
        }
      }}
    ]
  }
}  
}

GET jobui_salary_search_2024/_search
{
  "query": {
    "bool": {
      "must": [
        {"term": {
          "CID": {
            "value": 17434668
          }
        }}
      ]
    }
  }
}

GET smallposition_v6/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "term": {
            "SPI_CompanyID": 17434668
          }
        }
      ]
    }
  },
  "size": 10
}
GET smallposition_v7/_search
{
  "query": {
    "match": {
      "_id": 252894486
    }
  }
}
GET smallposition_v7/_search
{
  "sort": [
    {
      "SPI_SnatchTime": {
        "order": "desc"
      }
    }
  ],
  "size": 10
}

GET smallposition_v6/_search
{
  "query": {
    "match": {
      "_id": 285671729
    }
  }
}

GET jobui_salary_search_2022_v2
POST /_aliases
{
	"actions": [{
		"remove": {
			"index": "jobui_salary_search_2022_v2",
			"alias": "jobui_salary_search_recent"
		}
	}]
}

GET jobui_salary_search_2023_v2/_search
GET jobui_smallposition/_search
{
  "query": {
    "bool": {
      "must_not": [
        {
          "exists": {
            "field": "SPI_Position_0"
          }
        }
      ]
    }
  }
}
GET jobui_salary_search_2023_v2/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "term": {
            "CID": {
              "value": 17087646
            }
          }
        }
      ]
    }
  }
}
GET jobui_salary_search_recent/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "term": {
            "CID": {
              "value": 1236
            }
          }
        }
      ]
    }
  },
  "aggregations": {
    "name": {
      "terms": {
        "field": "Name.kw",
        "size": 20,
        "order": {
          "_term": "desc"
        }
      }
    }
  },
  "size": 0
}

GET jobui_smallposition/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "term": {
            "SPI_Domain":"lagou.com" 
          }
        },
        {
          "range": {
            "SPI_SnatchTime": {
              "lt": 1699113600,
              "gte": 1699027200
            }
          }
        }
      ]
    }
  }
}
GET jobui_smallposition/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "range": {
            "SPI_SnatchTime": {
              "gt": 1699108412
            }
          }
        },
        {
          "term": {
            "SPI_CompanyID": 15110
          }
        }
      ]
    }
  },
  "sort": [
    {
      "SPI_SnatchTime": {
        "order": "desc"
      }
    }
  ],
  "from": 0,
  "size": 5,
  "_source": [
    "SPI_PositionID"
  ]
}

GET jobui_salary_search_2023_v2/_search
{
  "query": {
    "match": {
      "Month": "202301"
    }
  }
}

GET jobui_smallposition/_search
{
  "query": {
    "range": {
      "SPI_PositionID": {
        "lt": 265027367
      }
    }
  },
  "sort": [
    {
      "SPI_PositionID": {
        "order": "desc"
      }
    }
  ],
  "size": 10,
  "_source": [
    "SPI_PositionID",
    "SPI_Domain",
    "SPI_Url",
    "SPI_CompanyID"
  ]
}
GET jobui_smallposition/_mapping
GET jobui_smallposition/_search
{
  "query": {
    "match": {
      "_id": "100008368"
    }
  }
}


GET jobui_smallposition/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "exists": {
            "field": "SPI_Position_0"
          }
        }
      ]
    }
  },
  "sort": [
    {
      "SPI_SnatchTime": {
        "order": "desc"
      }
    }
  ],
  "size": 20
}


GET jobui_salary_search/_search
{
  "query": {
    "match": {
      "_id": "685202"
    }
  }
}

GET jobui_smallposition/_search
{
 "query": {
   "bool": {
     "must_not": [
       {"term": {
         "SPI_Position_0": {
           "value": ""
         }
       }}
     ]
   }
 }
} 

GET jobui_smallposition/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "term": {
            "SPI_CompanyID": {
              "value": 7377
            }
          }
        },
        {
          "term": {
            "SPI_Position_0": {
              "value": "计算机/网络/技术类"
            }
          }
        }
      ]
    }
  },

  "size": 10
}

GET jobui_salary_search_2023_v2/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "term": {
            "PCity": "广州"
          }
        },
        {
          "term": {
            "PID": 24882006
          }
        }
      ]
    }
  }
}

POST jobui_salary_search_2023_v2/_update_by_query
{
  "query": {
    "bool": {
      "must": [
        {
          "term": {
            "PCity": "广州"
          }
        },
        {
          "term": {
            "PID": 24882006
          }
        }
      ]
    }
  },
  "script": {
    "source": "ctx._source.SmallArea = params.SmallArea;",
    "params": {
      "SmallArea": "黄埔区"
    }
  }
}

GET jobui_smallposition/_search
{
  "query": {
    "match": {
      "_id": "217978610"
    }
  }
}

GET jobui_view_rank_recent_v17/_search
{
  "query": {
    "bool": {
      "must": [
        {"range": {
          "CBY_CID": {
            "lt": 21225477
          }
        }}
      ]
    }
  }
}
GET jobui_smallposition/_search
GET jobui_smallposition/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "range": {
            "SPI_PositionID": {
              "gt": 0
            }
          }
        }
      ],
      "should": [
        {
          "term": {
            "SPI_Position_0": ""
          }
        },
        {
          "bool": {
            "must_not": [
              {
                "exists": {
                  "field": "SPI_Position_0"
                }
              }
            ]
          }
        }
      ],
      "minimum_should_match": 1
    }
  },
  "sort": [
    {
      "SPI_PositionID": {
        "order": "asc"
      }
    }
  ],
  "from": 0,
  "size": 100,
  "_source": [
    "SPI_PositionID",
    "SPI_PositionName",
    "SPI_CompanyID",
    "SPI_CompanyName",
    "SPI_Position_0",
    "SPI_WorkPlace",
    "SPI_SnatchTime"
  ]
}
GET jobui_salary_search_2023_v2/_search
GET jobui_salary_search_2023_v2/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "range": {
            "PID": {
              "gt": 0
            }
          }
        }
      ],
      "should": [
        {
          "term": {
            "SmallArea": ""
          }
        },
        {
          "bool": {
            "must_not": [
              {
                "exists": {
                  "field": "SmallArea"
                }
              }
            ]
          }
        }
      ],
      "minimum_should_match": 1
    }
  },
  "sort": [
    {
      "PID": {
        "order": "asc"
      }
    }
  ],
  "from": 0,
  "size": 100
}

GET jobui_salary_search_2023_v2/_search
{
  "query": {
    "bool": {
      "must": [
        {"term": {
          "Month": {
            "value": 202310
          }
        }},
        {"term": {
          "CID": {
            "value": 11731330
          }
        }}
      ]
    }
  }
}

GET jobui_smallposition/_search
{
  "query": {
    "bool": {
      "must": [
        {"term": {
          "SPI_CompanyID": {
            "value": 17434668
          }
        }}
      ]
    }
  },
  "sort": [
    {
      "SPI_SnatchTime": {
        "order": "asc"
      }
    }
  ]
}

GET jobui_smallposition/_search
{
  "sort": [
    {
      "SPI_SnatchTime": {
        "order": "desc"
      }
    }
  ]
}
GET jobui_salary_search_2023_v2/_search
GET jobui_salary_search_2023_v2/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "range": {
            "PID": {
              "gt": 0
            }
          }
        }
      ],
      "should": [
        {
          "term": {
            "SmallArea": ""
          }
        },
        {
          "bool": {
            "must_not": [
              {
                "exists": {
                  "field": "SmallArea"
                }
              }
            ]
          }
        }
      ],
      "minimum_should_match": 1
    }
  },
  "sort": [
    {
      "PID": {
        "order": "asc"
      }
    }
  ],
  "size": 100,
  "_source": [
    "PID",
    "Month",
    "PCity",
    "SmallArea"
  ]
}


PUT jobui_salary_search_2024
{
  "mappings": {
    "salary": {
      "properties": {
        "Age": {
          "type": "integer"
        },
        "CCity": {
          "type": "keyword"
        },
        "CID": {
          "type": "integer"
        },
        "Degree": {
          "type": "integer"
        },
        "FSalary": {
          "type": "integer"
        },
        "Industry": {
          "type": "keyword"
        },
        "Month": {
          "type": "integer"
        },
        "Name": {
          "type": "text",
          "fields": {
            "kw": {
              "type": "keyword"
            }
          },
          "analyzer": "ik_max_word"
        },
        "PCity": {
          "type": "keyword"
        },
        "PID": {
          "type": "integer"
        },
        "PType": {
          "type": "integer"
        },
        "Salary": {
          "type": "integer"
        },
        "SmallArea": {
          "type": "keyword"
        },
        "SmallIndustry": {
          "type": "keyword"
        },
        "Worker": {
          "type": "integer"
        },
        "Year": {
          "type": "integer"
        }
      }
    }
  },
    "settings": {
        "number_of_shards": 4,
        "number_of_replicas": 1
    }
}
GET jobui_view_rank_2022

GET smallposition_v6/_search

GET /_cat/master?v

GET _nodes/stats

GET _cluster/health?pretty

GET _cat/nodes

GET _cat/shards?v

GET _cat/indices?v

GET _cluster/settings

GET _cat/health?v

```

#### elk查看近一周数据

```yaml
GET nginx_m-access-*/_search
{
  "size": 0,
  "query": {
    "range": {
      "format_time_local": {
        "format": "strict_date_optional_time",
        "gte": "2024-07-01T00:00:00.000Z",
        "lte": "2024-07-07T23:59:59.999Z"
      }
    }
  },
  "aggs": {
    "daily_counts": {
      "date_histogram": {
        "field": "format_time_local",
        "calendar_interval": "day",
        "format": "yyyy-MM-dd"
      }
    }
  }
}

GET nginx_m-access-*/_search
{
  "size": 0,
  "query": {
    "bool": {
      "filter": [
        {
          "range": {
            "format_time_local": {
              "format": "strict_date_optional_time",
              "gte": "2024-07-01T00:00:00.000Z",
              "lte": "2024-07-07T23:59:59.999Z"
            }
          }
        },
        {
          "bool": {
            "should": [
              {
                "range": {
                  "request_time": {
                    "lt": "0.5"
                  }
                }
              }
            ],
            "minimum_should_match": 1
          }
        }
      ]
    }
  },
  "aggs": {
    "daily_counts": {
      "date_histogram": {
        "field": "format_time_local",
        "calendar_interval": "day",
        "format": "yyyy-MM-dd"
      }
    }
  }
}


GET nginx_www-access-*/_search
{
  "size": 0,
  "query": {
    "range": {
      "format_time_local": {
        "format": "strict_date_optional_time",
        "gte": "2024-07-01T00:00:00.000Z",
        "lte": "2024-07-07T23:59:59.999Z"
      }
    }
  },
  "aggs": {
    "daily_counts": {
      "date_histogram": {
        "field": "format_time_local",
        "calendar_interval": "day",
        "format": "yyyy-MM-dd"
      }
    }
  }
}

GET nginx_www-access-*/_search
{
  "size": 0,
  "query": {
    "bool": {
      "filter": [
        {
          "range": {
            "format_time_local": {
              "format": "strict_date_optional_time",
              "gte": "2024-07-01T00:00:00.000Z",
              "lte": "2024-07-07T23:59:59.999Z"
            }
          }
        },
        {
          "bool": {
            "should": [
              {
                "range": {
                  "request_time": {
                    "lt": "0.5"
                  }
                }
              }
            ],
            "minimum_should_match": 1
          }
        }
      ]
    }
  },
  "aggs": {
    "daily_counts": {
      "date_histogram": {
        "field": "format_time_local",
        "calendar_interval": "day",
        "format": "yyyy-MM-dd"
      }
    }
  }
}

GET php-slow-log-*/_search
{
  "size": 0,
  "query": {
    "range": {
      "format_time_local": {
        "format": "strict_date_optional_time",
        "gte": "2024-07-01T00:00:00.000Z",
        "lte": "2024-07-07T23:59:59.999Z"
      }
    }
  },
  "aggs": {
    "daily_counts": {
      "date_histogram": {
        "field": "format_time_local",
        "calendar_interval": "day",
        "format": "yyyy-MM-dd"
      }
    }
  }
}
```



## es集群升级

> 重点：滚动升级要注意版本，5.6-6.X-7.x，逐步升级，从节点先升级，主节点最后，因为低版本无法加入高版本的集群



**bug记录**

> 6.8版本的ik分词器有bug，复制索引会报错，解决方案：
> 使用6.6.1版本，解决版本冲突问题方法，elasticsearch-6.8.23/plugins/analysis-ik/plugin-descriptor.properties修改es版本号
