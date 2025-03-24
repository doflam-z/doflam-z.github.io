# Laravel

### 使用composer方式部署laravel项目

切换国内镜像[地址](https://pkg.phpcomposer.com/)

```shell
composer config -g repo.packagist composer h [laravel.md](laravel.md) ttps://packagist.phpcomposer.com
```

删除镜像（恢复官方源）

```shell
composer config -g --unset repos.packagist
```

使用composer部署laravel项目

```shell
# 在当前目录的/project_2020-3-16下创建一个名为laravel的laravel项目，默认使用最新版本laravel，以压缩包形式从git上下载
composer create-project laravel/laravel --prefer-dist ./project_2020-3-16

# 也可指定laravel版本
composer create-project laravel/laravel=5.8.* --prefer-dist ./project_2020-3-16
```

**命令解释：**

composer：表示执行composer程序；

create-project：通过composer去创建项目；

laravel/Laravel：需要创建的项目名称；

--prefer-dist：优先下载压缩包方式，而不是直接从github上下载源码（克隆）；

./：表示创建的项目目录位置，也可以是一个目录名；

指定版本创建laravel：

`composer create-project laravel/laravel=5.4.* --prefer-dist ./`

**查看系统中已有的路由列表**=>在项目根目录输入 ：`php artisan route:list`

路由群组写法：

`Route::goup(['frefix'=>'admin'],function(){`

​		`Route::get('test',function(){ echo "匹配/admin/test";})`

`});`

**创建控制器**TestController

`php artisan make:controller TestController`

**创建模型**Test

`php artisan make:model Home/Test`



**No Application Encryption Key Has Been Specified**

1. 复制.env.example到.env：
2. cp -a .env.example .env

3. 生成密钥：

4. php artisan key:generate

5. 然后才运行：

6. php artisan serve



**Php artisan make:auth command is not defined**

Follow these three steps
Step 1 - First do this:

laravel new project

`cd project`

`composer require laravel/ui --dev`
Note: Laravel UI Composer package is a new first-party package that extracts the UI portion of a Laravel project ( frontend scaffolding typically provided with previous releases of Laravel ) into a separate laravel/ui package. The separate package enables the Laravel team to update, develop and version UI scaffolding package separately from the primary framework and the main Laravel codebase.

Step 2 - Then do this:

`php artisan ui bootstrap --auth`      `php artisan migrate`
or

`php artisan ui vue --auth`   `php artisan migrate`
instead of

`php artisan make:auth  ( which works for Laravel 5.8 and older versions )`



`npm install && npm run dev`



**php artisan migrate错误**

`App\Providers\AppServiceProvider.php`

`use Illuminate\Support\Facades\Schema;`

`...`

`public function boot()`
		`{`
`				Schema::defaultStringLength(191);`
`}`





### 使用docker安装laravel

先安装docker、docker-compose后

```shell
curl -s https://laravel.build/example-app | bash

curl -s "https://laravel.build/example-app?with=mysql,redis" | bash
#如果你没有制定你想配置的服务，默认将配置 mysql，redis，meilisearch，mailhog 和 selenium

cd example-app

#编译并启动（前台）-d参数是后台启动
./vendor/bin/sail up
./vendor/bin/sail up -d

#启动
./vendor/bin/sail start
#停止
./vendor/bin/sail stop


```

