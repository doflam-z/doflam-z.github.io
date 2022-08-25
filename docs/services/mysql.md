# mysql

### 连接

```shell
mysql
```

导入数据

```shell
/web/software/mysql/bin/mysql -u baicai_w -p zabbix < zabbix.sql
```



### 数据库：145（百才）

登记求职和要求流动服务人员（人）：128（baicai_personal.tb_personal_info/PI_RegisterTime大于要查询时间）

```mysql
SELECT COUNT(PI_PersonalID) FROM `baicai_personal`.`tb_personal_info` WHERE `PI_RegisterTime` > '1622476800'
```

 其中大专及以下学历人数：58（tb_personal_info_baseinfo， PIB_Degree=2、3、4）

```mysql
SELECT COUNT(PIB_PersonalID) FROM `baicai_personal`.`tb_personal_info_baseinfo` WHERE `PIB_Degree` IN (2,3,4) AND `PIB_LastUpdateTime` > '1622476800'
```

 本科学历人数：27（PIB_Degree=5）

```mysql
SELECT COUNT(PIB_PersonalID) FROM `baicai_personal`.`tb_personal_info_baseinfo` WHERE `PIB_Degree` = '5' AND `PIB_LastUpdateTime` > '1622476800'
```

 研究生及以上学历人数：3（PIB_Degree=6）

```mysql
SELECT COUNT(PIB_PersonalID) FROM `baicai_personal`.`tb_personal_info_baseinfo` WHERE `PIB_Degree` = '6' AND `PIB_LastUpdateTime` > '1622476800'
```

服务用人单位数（个）：1,884,188（tb_company_info）

 国企、事业单位：6（[CI_CompanyType](http://121.9.201.145/phpMyAdmin-3.3/sql.php?db=baicai_company&table=tb_company_info&sql_query=SELECT+*+FROM+ORDER+BY+ASC&token=86576126e4fd62eec7293b890101f80d)=7、8、9）

```mysql
SELECT COUNT(CI_CompanyID) FROM `baicai_company`.`tb_company_info` WHERE `CI_CompanyType` IN (7,8,9) AND `CI_LastUpdateTime` > '1622476800'
```

 民营：181（[CI_CompanyType](http://121.9.201.145/phpMyAdmin-3.3/sql.php?db=baicai_company&table=tb_company_info&sql_query=SELECT+*+FROM+ORDER+BY+ASC&token=86576126e4fd62eec7293b890101f80d)=6）

```mysql
SELECT COUNT(CI_CompanyID) FROM `baicai_company`.`tb_company_info` WHERE `CI_CompanyType` = '6' AND `CI_LastUpdateTime` > '1622476800'
```

 外资：146（[CI_CompanyType](http://121.9.201.145/phpMyAdmin-3.3/sql.php?db=baicai_company&table=tb_company_info&sql_query=SELECT+*+FROM+ORDER+BY+ASC&token=86576126e4fd62eec7293b890101f80d)=2）

```mysql
SELECT COUNT(CI_CompanyID) FROM `baicai_company`.`tb_company_info` WHERE `CI_CompanyType` = '2' AND `CI_LastUpdateTime` > '1622476800'
```

 其他：14（[CI_CompanyType](http://121.9.201.145/phpMyAdmin-3.3/sql.php?db=baicai_company&table=tb_company_info&sql_query=SELECT+*+FROM+ORDER+BY+ASC&token=86576126e4fd62eec7293b890101f80d)=99）

```mysql
SELECT COUNT(CI_CompanyID) FROM `baicai_company`.`tb_company_info` WHERE `CI_CompanyType` = '99' AND `CI_LastUpdateTime` > '1622476800'
```

数据库现存职位信息总量：23,258,401（tb_job_info_status）

全年新增入库求职信息：571 （JIS_AddTime>=查询时间）

```mysql
SELECT COUNT(JIS_JobID) FROM `baicai_company`.`tb_job_info_status` WHERE `JIS_AddTime` > '1622476800' 
```

发布求职人次数：334（目前：baicai_personal.tb_resume_status，RS_LastUpdateTime>=查询时间）

```mysql
SELECT COUNT(RS_ResumeID) FROM `baicai_personal`.`tb_resume_status` WHERE `RS_LastUpdateTime` > '1622476800'
```

发布求职信息（条）：251339

```mysql
SELECT COUNT(JIS_JobID) FROM `baicai_company`.`tb_job_info_status` WHERE `JIS_IsPublish` = 'Y' AND `JIS_LastUpdateTime` > '1622476800'
```



20210601：1622476800

20210930：1632886769

**pc(pv):**

**pc(uv):**

**mobile(pv):**

**mobile(uv):**

服务人总数（PV）：

帮助实现就业和流动人数（UV）：

登记招聘人数（人次）：0

登记求职和要求流动服务人员（人）：128（baicai_personal.tb_personal_info/PI_RegisterTime大于要查询时间）

 其中大专及以下学历人数：58（tb_personal_info_baseinfo， PIB_Degree=2、3、4）

 本科学历人数：27（PIB_Degree=5）

 研究生及以上学历人数：3（PIB_Degree=6）

服务用人单位数（个）：1,883,862 （tb_company_info）

 国企、事业单位：20（[CI_CompanyType](http://121.9.201.145/phpMyAdmin-3.3/sql.php?db=baicai_company&table=tb_company_info&sql_query=SELECT+*+FROM+`tb_company_info`+ORDER+BY+`tb_company_info`.`CI_CompanyType`+ASC&token=86576126e4fd62eec7293b890101f80d)=7、8、9）

 民营：274（[CI_CompanyType](http://121.9.201.145/phpMyAdmin-3.3/sql.php?db=baicai_company&table=tb_company_info&sql_query=SELECT+*+FROM+`tb_company_info`+ORDER+BY+`tb_company_info`.`CI_CompanyType`+ASC&token=86576126e4fd62eec7293b890101f80d)=6）

 外资：254（[CI_CompanyType](http://121.9.201.145/phpMyAdmin-3.3/sql.php?db=baicai_company&table=tb_company_info&sql_query=SELECT+*+FROM+`tb_company_info`+ORDER+BY+`tb_company_info`.`CI_CompanyType`+ASC&token=86576126e4fd62eec7293b890101f80d)=2）

 其他：40（[CI_CompanyType](http://121.9.201.145/phpMyAdmin-3.3/sql.php?db=baicai_company&table=tb_company_info&sql_query=SELECT+*+FROM+`tb_company_info`+ORDER+BY+`tb_company_info`.`CI_CompanyType`+ASC&token=86576126e4fd62eec7293b890101f80d)=99）

建立人力资源数据库：1

数据库现存职位信息总量：23,261,938（tb_job_info_status）

全年新增入库求职信息：571

发布求职人次数：334

发布求职信息（条）：251339

现存档案数量（份）：6,033,500

依托档案提供服务（人次）：0



### 统计一个字段相同数字出现的频率

```mysql
SELECT UVEL_UserID,COUNT(1) as number FROM tb_user_status_export GROUP BY UVEL_UserID ORDER BY COUNT(1) DESC
```

### 删除自动递增的id

```mysql
ALTER TABLE tb_data_tmp_company AUTO_INCREMENT = 1;
```

```mysql
UPDATE `jobui_data_day`.`jobui_data_company-2022-day_copy1` SET DC_Area=CONCAT('0',`DC_Area`) where char_length(`DC_Area`)=5
```

### HR 相关通知开发

绑定微信企业总数 804

```mysql
SELECT COUNT(`UWM_ID`) FROM `jobui_user`.`tb_user_wx_mapping` WHERE `UWM_CompanyID` <> '0'
```

留言反馈总量：278176

已推送：586

```mysql
SELECT COUNT(`UOA_ID`) FROM `jobui_user`.`tb_user_online_ask` WHERE `UOA_IsDelete` = 'N'

SELECT COUNT(`UOA_ID`) FROM `jobui_user`.`tb_user_online_ask` WHERE `UOA_IsDelete` = 'N' AND `UOA_PushStatus` = 'Y'
```

面试经验总量：18922

已推送：178

```mysql
SELECT COUNT(*) FROM `jobui_company`.`tb_company_interview_experience-list`
SELECT COUNT(*) FROM `jobui_company`.`tb_company_interview_experience-list`  WHERE `CIE_PushStatus` = 'Y'
```

长评：478498

已推送：94

```mysql
SELECT COUNT(*) FROM `jobui_company`.`tb_company_review-list`
SELECT COUNT(*) FROM `jobui_company`.`tb_company_review-list` WHERE `CR_PushStatus` = 'Y'
```

短评：999118

已推送：119

```mysql
SELECT COUNT(*) FROM `jobui_company`.`tb_company_comment-list`
SELECT COUNT(*) FROM `jobui_company`.`tb_company_comment-list` WHERE `CC_PushStatus` = 'Y'
```
