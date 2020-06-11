---
title: Node 安装说明
subtitle: Node 安装说明
date: 2020-05-14 02:12:42
tags: [node]
categories: Node
banner_img: https://gitee.com/ispong/my-images/raw/master/blog-react/page.png
index_img: https://gitee.com/ispong/my-images/raw/master/blog-react/node/node.png
excerpt: Node?Deno?Ryan Dahl 这个屌人,不想说他.就一个字,渣!还不如罗志祥!!!
---

### nodejs

> 全局环境变量配置
```shell script
window+R: sysdm.cpl
```

> npm镜像仓库地址
- 淘宝 https://registry.npm.taobao.org/ 
- npm https://registry.npmjs.org
- github https://npm.pkg.github.com/

> 查询所有npm配置
```shell script
npm config list --json
```

> 配置npm
```shell script
npm config set prefix "$NODE_HOME"
npm config set cache "$NODE_HOME\npm-cache"
npm config set registry https://registry.npm.taobao.org/
```

> 清理npm缓存命令
```shell script
npm cache clean --force
```

> npm安装包命令
```shell script
npm install --save-dev $package@$version
```

> 发布版本
```shell script

npm config set registry https://registry.npmjs.org
npm login
# username:ispong
# password:https://www.npmjs.com/forgot
# email:ispong@outlook.com
npm publish
npm config set registry https://registry.npm.taobao.org/
```

> 检查发布 https://www.npmjs.com/

> 撤销发布版本(小心使用！！！)
```shell script 
npm unpublish react-keycap@0.1.0 --force
```

> npm 命令说明
```shell script
npm help npm
```
