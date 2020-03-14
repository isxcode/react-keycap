# nginx 配置

1- 安装

[nginx下载地址](http://nginx.org/en/download.html)

1- 部署react到nginx上

将nginx的访问路径映射到build文件中,修改root路径

```
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


### nginx命令

启动nginx
```shell script
start nginx -p D:\developer\nginx-1.16.1
```

关闭nginx
```shell script
nginx -s stop -p D:\developer\nginx-1.16.1
```

重新加载配置
```shell script
nginx -s reload -p D:\developer\nginx-1.16.1
```

测试图片
![img](../pictures/avatar.png)
