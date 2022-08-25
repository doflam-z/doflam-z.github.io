# tp6笔记

### 安装

先安装composer

```shell
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer
```

安装项目

```shell
composer create-project topthink/think tp
```

测试运行

```shell
php think run
```

安装扩展

```shell
composer require topthink/think-migration
```

创建文件

```shell
php think migrate:create ArticleTable
```

进入database目录修改代码

```shell
public function change()
{
    // create the table
    $table  =  $this->table('article');
    $table->addColumn('title', 'string', ['comment' => '文章标题'])
    ->addColumn('body', 'text', ['comment' => '文章内容'])
    ->addTimestamps()
    ->create();
}
```

运行建表

```sehll
php think migrate:run
```

生成控制器、模型

```shell
 php think make:controller index@Demo 
 php think make:model Demo
```

安装包

```sehll
composer install --ignore-platform-reqs
```

#### 多应用

安装多应用扩展，创建应用目录

```shell
composer require topthink/think-multi-app 
php think build adimn
```

