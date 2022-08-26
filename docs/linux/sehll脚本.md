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

