# Git

### git初始化

1. 在当前目录新建一个Git代码库	`git init`
2. 新建一个目录，将其初始化为Git代码库   `git init [project-name]`
3. 下载一个项目和它的整个代码历史   `git clone [url]`

### 生成git ssh密钥

```shell
ssh-keygen -t rsa -C "zax"
```

> 按三次回车，密码为空，在当前用户家目录下会出现id_rsa和id_rsa.pub复制公钥id_rsa.pub到github上，点击setting-SSH and GPG keys 添加。

### 安装-设置git账户信息

```shell
git config --global user.name "doflam-z"
git config --global user.email "3088037209@qq.com"

git config --global user.name "zax"
git config --global user.email "zax@jobui.com"
```

查看当前用户（global）配置

```shell
git config --global --list
```

查看当前本地仓库配置信息

```shell
git config --local --list
```

配置远程仓库地址

```shell
git remote add origin git@e.coding.net:jobui-01/workspace.git
git remote add origin git@e.coding.net:jobui-01/autoConfig.git
```

查看远程仓库信息

```shell
git remote -v
```

修改远程仓库

```shell
git remote set-url origin git@e.coding.net:jobui-01/workspace.git
```

删除远程仓库

```shell
git remote rm origin git@e.coding.net:jobui-01/workspace.git
or 
git remote remove origin
```

拉取项目代码

```shell
git pull git@e.coding.net/jobui-01/workspace.git
```



### 常用命令：

`git init` 在当前目录新建一个Git代码库

`git init [project-name]`新建一个目录，将其初始化为Git代码库

`git clone [url]`下载一个项目和它的整个代码历史

`git clone https://github.com/doflam-z/laravel_blog.git`  从github远程仓库拉取laravel项目到本地 composer install 安装依赖。

`git add .`  添加到暂存区

`git commit -m "版本名"`  提交到版本库

`git push -u origin master`  上传到github

`git status` 查看当前状态

`git log--pretty=oneline`  查看日志，以一行显示

`git reflog` 查看版本变化

`git reset --hard 762371` 直接使用版本号回退版本，也可以使用以下方法：

`git reset --hard ^^` 回退到两个版本前，几个^就是第几个版本。

**分支：**

`git branch`  									查看当前分支

`git branch test`  								创建test分支

`git checkout test` 							切换到test分支

`git branch checkout -b test` 					  创建并切换到test分支

`git fetch` 															查看服务器有哪些分支更新并拉取到本地

`git diff`																检查分支是否有冲突

`git merge test`  												将test分支合并到master主分支（当前所在分支为master）

`git branch -d test`											删除分支

`git branch -m oldName newName`					修改分支名

**查看配置:**

`gti config`							配置指令
`gti config --system --list`			查看系统config
`gti config --global --list`			查看当前用户全局配置
`gti config --local --list`				查看当前仓库配置


**舍弃修改**

`git checkout .` #本地所有修改的。没有的提交的，都返回到原来的状态
`git stash `#把所有没有提交的修改暂存到stash里面。可用git stash pop回复。
`git reset --hard HASH `#返回到某个节点，不保留修改。
`git reset --soft HASH `#返回到某个节点。保留修改
`git clean -df` #返回到某个节点
`git clean` 参数
    -n 显示 将要 删除的 文件 和  目录
    -f 删除 文件
    -df 删除 文件 和 目录

**提交**
`git checkout -b feature/描述文本优化`
`git add -A`
`git commit -m "feat:描述文本优化"`
`git push origin feature/描述文本优化`

**暂存**
`git stash`							添加到暂存区
`git stash list`					查看暂存区进度列表
`git stash pop` 					恢复最新的进度到工作区。git默认会把工作区和暂存区的改动都恢复到工作区。
`git stash pop --index` 			恢复最新的进度到工作区和暂存区。（尝试将原来暂存区的改动还恢复到暂存区）
`git stash pop stash@{1}`			恢复指定的进度到工作区。stash_id是通过git stash list命令得到的，通过git stash pop命令恢复进度后，会删除当前进度

**设置编码**
`git config --global gui.encoding utf-8`

**回滚**
`git log` 														查看日志
`git reset --soft aba2b6752c7687f54a605b67c275366dc42bf439`		重置到节点
`git reset jobuiV4/app/mobile/company/company_salary.php`		重置文件
`git checkout -- jobuiV4/app/mobile/company/company_salary.php`	撤销文件

**查看修改**
`git diff jobuiV4/app/mobile/company/company_salary.php`

拉取更新：git pull --rebase origin master
解决冲突后： git add -A
继续rebase：git rebase --continue



git reflog  查看记录

git reset --hard ca606c6 回退
git rebase --abort 取消状态



**压缩commit**
git rebase -i HEAD~2
在第二个commit前面讲pick改成squash
:wq 退出，
将第二个commit删除
:wq退出



- 删除一条分支：

  `git branch \-D branchName`

- 删除当前分支外的所有分支：

  `git branch | xargs git branch \-d`

- 删除分支名包含指定'dev'的分支：

  `git branch | grep 'dev\*' | xargs git branch \-d`

**清空git缓存**

在项目开发过程中个，一般都会添加 .gitignore 文件，规则很简单，但有时会发现，规则不生效。
原因是 .gitignore 只能忽略那些原来没有被track的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore是无效的。
那么解决方法就是先把本地缓存删除（改变成未track状态），然后再提交。

```
git rm -r --cached .

git add .

git commit -m 'update .gitignore'
```
