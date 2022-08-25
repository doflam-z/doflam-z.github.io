# Python笔记



### 安装virtualenv虚拟环境

安装virtualenv

```shell
pip3 install virtualenv
```

创建项目目录app同时创建一个名为venv的虚拟环境，进入环境

```shell
#mac
pip install virtualenv
python3 -m venv venv
source venv/bin/activate

#win
#打开命令行输入 Set-ExecutionPolicy RemoteSigned
pip install virtualenv
pip install virtualenvwrapper
cd app
virtualenv venv
#进入虚拟环境
.\venv\Scripts\activate
#离开虚拟环境
.\venv\Scripts\deactivate
```

退出虚拟环境

```shell
deactivate
```

### 安装Scrapy

```shell
#先安装依赖
pip install wheel lxml pyOpenSSL Twisted
pip install install Scrapy
#创建项目
scrapy startproject tutorial

#创建第一个爬虫文件，指定域名
scrapy genspider zhipin "zhipin.com"

#创建一个XMLFeedSpider爬虫文件
scrapy genspider -t xmlfeed lagou lagou.com

#运行一个爬虫程序，输出到文件
scrapy crawl mininova -o scraped_data.json 

#运行一个爬虫程序，将日志输出到指定目录
scrpay crawl spider_name  -s LOG_FILE=all.log

#配置文件settings.py
#开启下载器中间件，数值越小越接近控制器
DOWNLOADER_MIDDLEWARES = {
    'companyProfile.middlewares.CompanyprofileDownloaderMiddleware': None,
    'companyProfile.middlewares.AgentDownloaderMiddleware': 543,
    'companyProfile.middlewares.SeleniumDownloaderMiddleware': 643,
}

#开启管道
ITEM_PIPELINES = {
   'companyProfile.pipelines.CompanyprofilePipeline': 300,
}


```

### selenium需要chrome驱动

```shell
# 安装chrome
sudo wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo apt install ./google-chrome-stable_current_amd64.deb
# 下载驱动
sudo wget https://chromedriver.storage.googleapis.com/101.0.4951.41/chromedriver_linux64.zip
# 解压直接使用
sudo unzip chromedriver_linux64.zip
```

### 安装爬虫需要的库

```shell
 pip install beautifulsoup4 
 pip install requests
 pip install selenium
 pip install fake-useragent
 pip install redis
```

### 安装mysql peewee ORM库

```shell
pip install pymysql
pip install peewee
```

##### peewee生成module文件

```shell
python -m pwiz -e mysql -H localhost -p 3306 -u 数据库用户名 -P 数据库密码 -t 表名(table name) 库名(database name) > 要生成的python文件名称.py
python -m pwiz -e mysql -H 192.168.1.14 -p 3306 -u jobSnatch_r -P -t tb_company_info jobui_snatch_company > tb_company_info.py

python -m pwiz -e mysql -H 192.168.1.14 -p 3306 -u jobSnatch_r -P -t tb_company_content jobui_snatch_company > tb_company_info.py

python -m pwiz -e mysql -H 121.9.201.145 -p 3307 -u jobSnatch_w -P -t tb_company_status jobui_snatch_company > tb_company_status.py
```

生成的文件需要转成utf-8文件格式



```
database = MySQLDatabase('jobui_snatch_company', host="192.168.1.14", user='jobSnatch_r', passwd='j89#do@k', port=3306)
```

```
database = MySQLDatabase('jobui_snatch_company', host="192.168.1.14", user='jobSnatch_r', passwd='j89#do@k', port=3306)
```



### 安装mongodb ORM库

```python
#安装pymongo3.12.3，最新版本验证会报错
pip install  pymongo==3.12.3
#安装MongoEngine
python -m pip install mongoengine

#连接
from mongoengine import *
from env import *

db = 'jobui_tmp'
config = Env.get_db_config(db)
connect(db, **config)


class CompanyProfile(Document):
    _id = IntField(primary_key=True)  # 公司id
    name = StringField()  # 公司名
    domain = StringField()  # 来源网址
    content = StringField()  # 公司介绍

    meta = {
        'indexes': [  # 建索引
            'name',
            'domain',
            'content'
        ]
    }

##如果有主键字段，则主键字段不能设置为AutoField类型，会导致插入语句异常
```

