# shell脚本



### 监控进程脚本

```shell
#!/bin/bash
proc_name="webLogKeyWordImport"
proc_num()
{
        num=`ps -ef | grep $proc_name | grep -v grep | wc -l`
        return $num
}
proc_num
number=$?
echo $number
if [ $number -eq 0 ]
then
. /web/java/JobuiBatch/s_jobTop.sh
fi
```

### 检查修复mysql表脚本

#### 遍历整个库

```bash
#!/bin/bash
host_name=127.0.0.1
user_name=user
user_pwd=123
database=tablename
need_optmize_table=true
tables=$(/web/software/mysql/bin/mysql -h$host_name -P3306 -u$user_name -p$user_pwd $database -A -Bse "show tables")
for table_name in $tables
do
 check_result=$(mysql -h$host_name -u$user_name -p$user_pwd $database -A -Bse "check table $table_name" | awk '{ print $4 }')
 if [ "$check_result" = "OK" ]
 then
  echo "It's no need to repair table $table_name"
 else
  echo $(/web/software/mysql/bin/mysql -h$host_name -P3306 -u$user_name -p$user_pwd $database -A -Bse "repair table $table_name")
 fi
done
```

#### 指定前缀遍历

```bash
#!/bin/bash
host_name=127.0.0.1
user_name=root
user_pwd=baicai09mysql#
database=jobui_snatch_position
need_optmize_table=true

# 定义要搜索的前缀
prefix="tb_snatch_position_status_"

# 初始化表名数组
table_names=()

# 使用循环遍历00-99的后缀
for i in {00..99}; do
    # 构建表名
    table_name="${prefix}${i}"
     check_result=$(mysql -h$host_name -u$user_name -p$user_pwd $database -A -Bse "check table $table_name" | awk '{ print $4 }')
     if [ "$check_result" = "OK" ]
     then
      echo "It's no need to repair table $table_name"
     else
      echo $(/web/software/mysql/bin/mysql -h$host_name -P3306 -u$user_name -p$user_pwd $database -A -Bse "repair table $table_name")
     fi
done
```

