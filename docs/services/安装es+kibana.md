# es+kibana部署

**基础环境：jdk8**

### 安装jdk

下载jdk包

```shell
mkdir -p /usr/local/java 
cd /usr/local/java 
wget https://download.oracle.com/otn/java/jdk/8u321-b07/df5ad55fdd604472a86a45a217032c7d/jdk-8u321-linux-x64.tar.gz?AuthParam=1647915953_6b486a8019a80931d2b2bdca8b505d6a
tar zxvf jdk-8u321-linux-x64.tar.gz -C /usr/local/java
```

配置jdk环境变量

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

安装elasticsearch5.6

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

安装kibana5.6

```shell
wget https://artifacts.elastic.co/downloads/kibana/kibana-5.6.16-linux-x86_64.tar.gz
sha1sum kibana-5.6.16-linux-x86_64.tar.gz 
tar -xzf kibana-5.6.16-linux-x86_64.tar.gz
cd kibana-5.6.16-linux-x86_64/ 

#后台启动
./bin/kibana >> /mysql/elasticsearch/kibana.stdout 2>> /mysql/elasticsearch/kibana.stderr &

```



