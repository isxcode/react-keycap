# nginx

1- 安装
[nginx 下载地址](http://nginx.org/en/download.html)

1- 部署 react 到 nginx 上

将 nginx 的访问路径映射到 build 文件中,修改 root 路径

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

### nginx 命令

启动 nginx

```shell script
start nginx -p D:\developer\nginx-1.16.1
```

关闭 nginx

```shell script
nginx -s stop -p D:\developer\nginx-1.16.1
```

重新加载配置

```shell script
nginx -s reload -p D:\developer\nginx-1.16.1
```
