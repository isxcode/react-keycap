# react 的开发环境搭建

查询所有 npm 配置

```shell script
npm config list --json
```

配置 npm 的镜像

```shell script
npm config set registry https://registry.npm.taobao.org/
```

npm 清理缓存命令

```shell script
npm cache clean --force
```

安装包

```shell script
npm install --save-dev webpack@4.41.5
```

卸载指定包

```shell script
npm uninstall webpack
```

### 创建账号实现上传 npm 组件库

登录账号

npm config set registry https://npm.pkg.github.com/ispong

// 切换源
npm config set registry=http://registry.npmjs.org

npm login
ispong
