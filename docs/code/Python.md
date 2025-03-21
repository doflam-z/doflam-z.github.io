# Python笔记



### PIP导出、安装依赖

```bash
pip freeze > requirements.txt
pip install -r requirements.txt
```



### 使用 pyenv 安装管理多个 Python版本

**pyenv 的作用**

pyenv 是一个 **Python 版本管理工具**，可以让你轻松地在同一台机器上安装和切换多个 Python 版本，而不会影响系统自带的 Python。



**💡 pyenv 能做什么？**

**1️⃣ 在同一台电脑上安装多个 Python 版本**

比如你的系统默认是 Python 3.8，但你想在不同项目中使用 Python 3.10 或 3.12，就可以用 pyenv 轻松管理：

```
pyenv install 3.10.13
pyenv install 3.12.1
```



**2️⃣ 让不同项目使用不同的 Python 版本**

你可以为每个项目指定不同的 Python 版本，避免兼容性问题：

```
cd my_project
pyenv local 3.10.13  # 这个项目用 Python 3.10
```

另一个项目可以使用 Python 3.12：

```
cd another_project
pyenv local 3.12.1  # 这个项目用 Python 3.12
```

这样，每个项目的 Python 版本都是独立的，不会互相干扰。



**3️⃣ 替换系统默认的 Python**

在不改动系统自带 Python 的情况下，使用自己安装的 Python 版本：

```
pyenv global 3.12.1  # 让整个用户环境默认使用 Python 3.12.1
```

如果想恢复系统默认的 Python：

```
pyenv global system
```



**4️⃣ 解决 sudo apt install python3-distutils 找不到的问题**

有时候 Ubuntu 官方的软件库没有提供最新的 Python 版本或者某些组件（如 distutils）。用 pyenv 安装 Python 可以绕开这个问题，比如：

```
pyenv install 3.11.6  # 安装 Python 3.11.6
pyenv global 3.11.6  # 设为默认 Python 版本
```

然后你就可以使用 pip 正常安装 lxml 了：

```
pip install lxml
```

------



**🚀 pyenv 安装 & 使用**



**1️⃣ 安装 pyenv**

**🔹 Ubuntu / Debian**

```
curl https://pyenv.run | bash
```

然后添加以下内容到 ~/.bashrc 或 ~/.bash_profile：

```
export PATH="$HOME/.pyenv/bin:$PATH"
eval "$(pyenv init --path)"
eval "$(pyenv virtualenv-init -)"
```

然后运行：

```
exec $SHELL  # 重新加载 shell
```

**🔹 Mac（使用 Homebrew 安装）**

```
brew install pyenv
echo 'eval "$(pyenv init --path)"' >> ~/.zshrc
source ~/.zshrc
```



**2️⃣ 使用 pyenv 安装 Python**

```
pyenv install 3.12.1
pyenv global 3.12.1
python --version  # 确保使用的是 pyenv 版本
```

**🛠️ 总结**

🔹 **pyenv = Python 版本管理器**，让你可以安装、切换多个 Python 版本。

🔹 **避免破坏系统 Python**，不会影响 apt 或 yum 管理的 Python。

🔹 **解决依赖问题**，如 distutils 缺失、pip 版本冲突等。

🔹 **每个项目可以有自己的 Python 版本**，避免不同 Python 版本的兼容性问题。



### Python 编译缺失了多个重要模块

> Python 编译缺失了多个重要模块，包括 _curses（ncurses）、readline（GNU Readline）、_sqlite3（SQLite3）和 _lzma（LZMA）。这些问题通常是因为缺少必要的 系统依赖，所以你需要安装它们后重新编译 Python。

解决方案

1. 安装缺失的系统依赖

在 Ubuntu/Debian 上运行：

```shell
sudo apt update && sudo apt install -y \
    libbz2-dev \
    liblzma-dev \
    libsqlite3-dev \
    libncurses5-dev \
    libncursesw5-dev \
    libreadline-dev \
    xz-utils \
    tk-dev
```

在 CentOS/RHEL 上：

```shell
sudo yum install -y \
    bzip2-devel \
    xz-devel \
    sqlite-devel \
    ncurses-devel \
    readline-devel \
    xz \
    tk-devel
```

2. 强制重新编译 Python

安装完依赖后，重新编译 Python：

```shell
CFLAGS="-I/usr/include -I/usr/include/bz2 -I/usr/include/lzma -I/usr/include/ncurses -I/usr/include/readline -I/usr/include/sqlite3" \
pyenv install 3.9.7 --force
```



3. 激活 Python 并检查模块

安装完成后，检查 Python 是否正确编译了所有模块：

```shell
pyenv local 3.9.7

python3 -c "import bz2, lzma, sqlite3, readline, curses"
```

如果没有报错，说明一切正常！



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

# 或者直接导入依赖文本
pip install -r requirements.txt

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

