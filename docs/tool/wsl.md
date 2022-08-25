



重启wsl

WSL 子系统是基于 LxssManager 服务运行的。

只需要将 LxssManager 重启即可。

```clike
net stop LxssManager
net start LxssManager
```

键入以下命令以查看所有正在运行的WSL发行版，然后按Enter：

```
wsl --list --verbose
```

进入子系统

```
 wsl -d Debian
```

输入以下命令以关闭Linux发行版，然后按Enter：

```
wsl -t DISTRO-NAME
```

输入以下命令以关闭所有Linux发行版，然后按Enter：

```
wsl --shutdown
```

备份子系统

```
wsl --export Debian E:\WSL\backup\Debian.tar
```

删除子系统

```shell
wsl --unregister Debian
```

还原子系统

```
wsl --import Debian E:\WSL\Debian E:\WSL\backup\Debian.tar
```



