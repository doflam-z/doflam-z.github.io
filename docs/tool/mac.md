# mac相关

**Homebrew**

- homebrew是一款Mac OS平台下的软件包管理工具，拥有安装、卸载、更新、查看、搜索等很多实用的功能。

**Homebrew常用命令**

- 查看brew的帮助：brew –help
- 安装软件：brew install git
- 卸载软件：brew uninstall git
- 搜索软件：brew search git
- 显示已经安装软件列表：brew list
- 更新软件，把所有的Formula目录更新，并且会对本机已经安装并有更新的软件用*标明：brew update
- 更新某具体软件：brew upgrade git
- 查看软件信息：brew [info | home] [FORMULA...]
- 删除程序，和upgrade一样，单个软件删除和所有程序老版删除：
  brew cleanup git
  brew cleanup
- 查看那些已安装的程序需要更新：
  brew outdated
- 其它Homebrew指令:
  brew list : 列出已安装的软件
  brew update: 更新Homebrew
  brew home: 用浏览器打开homebrew首页
  brew info: 显示软件内容信息
  brew deps : 显示包依赖
  brew -h : 帮助

```bash
替换brew.git:
cd "$(brew --repo)"
git remote set-url origin https://mirrors.cloud.tencent.com/homebrew/brew.git

替换homebrew-core.git:
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://mirrors.cloud.tencent.com/homebrew/homebrew-core.git

# 刷新源
brew update
```

> If you need to have php@7.4 first in your PATH, run:
>   echo 'export PATH="/opt/homebrew/opt/php@7.4/bin:$PATH"' >> ~/.zshrc
>   echo 'export PATH="/opt/homebrew/opt/php@7.4/sbin:$PATH"' >> ~/.zshrc
>
> For compilers to find php@7.4 you may need to set:
>   export LDFLAGS="-L/opt/homebrew/opt/php@7.4/lib"
>   export CPPFLAGS="-I/opt/homebrew/opt/php@7.4/include"
>
>
> To start php@7.4:
>   brew services start php@7.4
> Or, if you don't want/need a background service you can just run:
>   /opt/homebrew/opt/php@7.4/sbin/php-fpm --nodaemonize

### 查看当前shell

chsh -s zsh

### shell使用代理

```shell
vim ~/.zshrc
# proxy
alias proxy='export all_proxy=socks5://127.0.0.1:7890'
alias unproxy='unset all_proxy'
```



### 安装连接数据库

```shell
使用：docker pull mysql/mysql-server:latest

创建并启动MySQL服务容器

docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql/mysql-server

这时使用宿主机连接没有授权访问，需要进入mysql修改mysql访问权限。

docker exec -it mysql bash

bash-4.2# mysql -u root -p 123456

#授权

mysql>CREATE USER 'root'@'%' IDENTIFIED BY 'root';

mysql>GRANT ALL ON *.* TO 'root'@'%';

#刷新权限

mysql> flush privileges;

#修改root用户密码

mysql> ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
alter user 'root'@'%' identified by '123456';

#刷新权限

mysql> flush privileges;
```

### 报错

Mac报错

>  => ERROR [internal] load metadata for docker.io/library/debian_base:1.0

修复

> export DOCKER_BUILDKIT=0
> export COMPOSE_DOCKER_CLI_BUILD=0





ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCtfLM+qp/CvFe/Moh9VGs6h44A40ELmf38pcxEDUwlVzVv5LSJ5qF2VtF+3ws/bYsfzpOUy7Vqs96PV2OtU7BMwSnDFjNjxnTGcgbR/WEcJW5vvDdpFpyhzC6lcAsmlVfqE8EwLD3bljMmd+b2Ikt1H1W+cyhIkGXEZr33YmBaN5CRnlr8NfywlcqDsIZS3aZtcKQ7eh48cLXh/8GrMfO/QHVmiTGw4RcCEKEcGP1oltzZa9awUW8KYzY3QeuRfiIbRU7+NWfBAlz0tbWlLZTKck0hMgvuQnUlzsd9OBz4kG40zSNwnLGHuwkBk5os6c0gLVJgnDRO0KNJn5Kr49yxf2oOhn0RhWga2CzQrZhfp17OqtUFk17CXuCDFuM3IFPXVNI78OTY/mNqkHFwC1hTs/lqER4WS4Uizbt8vM5s7bB07igfWDTbfjqTVb6LA90Qd7zUfCyNHW5OqtMpNN5eTO71PS6cg/JAPgaOP+1Mv09iRQ1UFl6ET1UX427cIu8= Z
