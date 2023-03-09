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

#### 设置编码

```shell
git config --global gui.encoding utf-8
```

#### 查看配置

```shell
gti config # 配置指令

gti config --system --list # 查看系统config

gti config --global --list # 查看当前用户全局配置

gti config --local --list # 查看当前仓库配置
```

#### 配置远程仓库地址

```shell
git remote add origin git@e.coding.net:jobui-01/workspace.git # 添加远程仓库，设置别名为origin
git remote add origin git@e.coding.net:jobui-01/autoConfig.git

git remote -v # 查看远程仓库信息

git remote set-url origin git@e.coding.net:jobui-01/workspace.git # 修改远程仓库

git remote rm origin git@e.coding.net:jobui-01/workspace.git # 删除远程仓库
or 
git remote remove origin

git pull git@e.coding.net/jobui-01/workspace.git # 拉取远程仓库
```

### 常用命令：

#### 提交操作

```shell
git add .  # 添加到暂存区

git commit -m "版本名" # 提交到版本库

git push -u origin master # 上传到github

git status # 查看当前状态
```

#### 压缩commit

```shell
git rebase -i HEAD~2 # 压缩最近两个提交，在第二个commit前面讲pick改成squash，然后:wq 退出，将第二个commit删除，:wq退出
```

#### 暂存修改

```shell
git add .

git stash	#	添加到暂存区

git stash list	# 查看暂存区进度列表

git stash pop # 恢复最新的进度到工作区。git默认会把工作区和暂存区的改动都恢复到工作区

git stash pop --index #	恢复最新的进度到工作区和暂存区。（尝试将原来暂存区的改动还恢复到暂存区）

git stash pop stash@{1}	# 恢复指定的进度到工作区。stash_id是通过git stash list命令得到的，通过git stash pop命令恢复进度后，会删除当前进度
```

#### 舍弃修改

```shell
git checkout . # 本地所有修改的。没有的提交的，都返回到原来的状态

git checkout -- jobuiV4/app/mobile/company/company_salary.php # 撤销文件

git reset --hard HASH # 返回到某个节点，不保留修改

git reset --soft HASH # 返回到某个节点，保留修改


git clean -df # 返回到某个节点
git clean 参数
    -n 显示 将要 删除的 文件 和  目录
    -f 删除 文件
    -df 删除 文件 和 目录
```

#### 版本回退

```shell
git log--pretty=oneline #  查看日志，以一行显示

git reflog # 查看版本变化

git reset --hard 762371 # 直接使用版本号回退版本，也可以使用以下方法：

git reset --hard ^^ # 回退到两个版本前，几个^就是第几个版本。

git reset --soft aba2b6752c7687f54a605b67c275366dc42bf439 #	重置到节点

git reset jobuiV4/app/mobile/company/company_salary.php #	重置文件
```

#### 分支管理

```shell
git branch # 查看当前分支

git branch test # 创建test分支

git checkout test # 切换到test分支

git branch checkout -b test # 创建并切换到test分支

git fetch # 查看服务器有哪些分支更新并拉取到本地

git diff # 检查分支是否有冲突

git merge test # 将test分支合并到master主分支（当前所在分支为master）

git branch -d test # 删除分支

git branch -m oldName newName #修改分支名
```

#### 拉取更新

```shell
git pull --rebase origin master # 拉取更新

git add -A # 解决冲突后

git rebase --continue # 继续rebase

git rebase --abort # 取消rebase
```

#### 清空git缓存

> 在项目开发过程中个，一般都会添加 .gitignore 文件，规则很简单，但有时会发现，规则不生效。
> 原因是 .gitignore 只能忽略那些原来没有被track的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore是无效的。
> 那么解决方法就是先把本地缓存删除（改变成未track状态），然后再提交。

```shell
git rm -r --cached .

git add .

git commit -m 'update .gitignore'
```
