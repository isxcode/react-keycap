---
title: prettier 安装说明
subtitle: prettier 安装说明
date: 2020-05-16 10:22:52
tags: [prettier]
categories: prettier
banner_img: https://gitee.com/ispong/my-images/raw/master/blog-react/page.png
index_img: https://gitee.com/ispong/my-images/raw/master/blog-react/nginx/nginx.png
excerpt: prettier 安装说明巴拉巴拉
---

## prettier

> prettier安装
```shell script
npm install --save-dev --save-exact prettier
# or
npm install --global prettier
```

> prettier使用
```shell script
prettier --write .
```

> prettier配置
```javascript
// https://prettier.io  用于前端代码显示规范
module.exports = {
	singleQuote: true, // 使用单引号
	trailingComma: 'all', // 有结尾符号
	printWidth: 80, // 最长长度
	tabWidth: 2, // tab长度
	semi: true, // 使用分号
};
```
