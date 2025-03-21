# shell

### 查看系统当前使用的shell、查看系统有哪些shell

```shell
echo $SHELL
cat /etc/shells
```

### 安装zsh

```shell
sudo apt install zsh -y
```

> 设置为默认shell

```shell
chsh -s /bin/zsh
```

### 安装oh my zsh

```shell
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

### 配置主题

> 将 `ZSH_THEME="robbyrussell"` 修改为 `ZSH_THEME="ys"` ，ys这个主题比较简约,修改之后重新加载配置文件 `source ~/.zshrc`主题链接https://github.com/ohmyzsh/ohmyzsh/wiki/Themes

安装 **Oh My Zsh**（推荐）

```
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

下载 Powerlevel10k 主题：

```
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

编辑 ~/.zshrc 文件：

```
ZSH_THEME="powerlevel10k/powerlevel10k"
```

重新加载配置：

```
source ~/.zshrc
```



### 安装插件

> 安装命令补全、命令高亮显示插件

下载

```shell
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

git clone https://github.com/zsh-users/zsh-syntax-highlighting ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

开启

```shell
vi ~/.zshrc
# 开启插件
plugins=(git z zsh-syntax-highlighting zsh-autosuggestions)
```

