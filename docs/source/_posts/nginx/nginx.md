---
title: Nginx 本地服务器搭建
subtitle: Nginx 本地服务器搭建
date: 2020-05-16 10:22:52
tags: [nginx]
categories: Nginx
banner_img: https://gitee.com/ispong/my-images/raw/master/blog-react/page.png
index_img: https://gitee.com/ispong/my-images/raw/master/blog-react/nginx/nginx.png
excerpt: Nginx本地安装,实现让分离式前端的文件包能在本地运行起来,并且可以通过配置文件模拟远程服务器的配置.
---

# nginx

linux 安装
install from repo
```shell script
sudo vi /etc/yum.repos.d/nginx.repo
```

```text
[ispong nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/7/$basearch/
gpgcheck=0
enabled=1
```

```shell script
sudo yum stall nginx
```

nginx 权限配置
```shell script
cat /etc/group
sudo gpasswd -a ispong nginx
newgrp - nginx
```


1- 安装
[nginx 下载地址](http://nginx.org/en/download.html)

1- 部署 react 到 nginx 上

将 nginx 的访问路径映射到 build 文件中,修改 root 路径

```
    #允许跨域
    add_header Access-Control-Allow-Origin *;
    add_header Access-Control-Allow-Headers X-Requested-With;
    add_header Access-Control-Allow-Methods GET,POST,OPTIONS;
    #允许跨域

server {
        listen       80;
        server_name  localhost;

        location / {
            root   D://isxcode//react-keycap//build;
            index  index.html index.htm;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
```

### nginx 命令

启动 nginx

```shell script
nginx start 
#or
nginx -c conf D:\developer\nginx-1.16.1\nginx.conf
#or
start nginx -p D:\developer\nginx-1.16.1
```

关闭 nginx

```shell script
nginx -s stop
#or
nginx -s stop -p D:\developer\nginx-1.16.1
```

重新加载配置

```shell script
nginx -s reload
#or
nginx -s reload -p D:\developer\nginx-1.16.1
```

查看nginx的配置
```shell script
nginx -t
```

