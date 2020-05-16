---
title: hexo 安装说明
subtitle: hexo 安装说明
date: 2020-05-16 10:22:52
tags: [hexo]
categories: hexo
banner_img: https://gitee.com/ispong/my-images/raw/master/blog-react/page.png
index_img: https://gitee.com/ispong/my-images/raw/master/blog-react/hexo/hexo.png
excerpt: 个人博客搭建说明文档
---

解决问题:项目的docs文件文档能够更好的展示

1- 安裝node  参考
2- 安裝git   参考
3- 官网hexo  一步一步走
4- 官网fiuld 一步一步走

创建自己的文件
hexo new chrome chrome


5- 创建gitee账号 创建gitee仓库
6- 安装部署插件 配置文件 上传文件
7- 启动gitee page功能
8- 访问地址
9- 特别配置 fiuld自定义

.
├── _config.yml
├── package.json
├── scaffolds
├── source
|   ├── _drafts
|   └── _posts
└── themes


$ hexo new [layout] <title>

$ hexo generate

$ hexo publish [layout] <filename>

$ hexo new page about

$ hexo deploy


1- npm install -g hexo-cli
2- hexo init docs
3- cd docs
4- npm install
5- update .ignore
6- update github ci
6- hexo server


sudo: false
language: node_js
node_js:
  - 10 # use nodejs v10 LTS
cache: npm
branches:
  only:
    - master # build master branch only
before_install:
  - cd ./docs
  - npm install -g hexo-cli
install:
  - npm install
script:
  - hexo clean
  - hexo generate # generate static files
deploy:
  provider: pages
  skip-cleanup: true
  github-token: $GH_TOKEN
  keep-history: true
  on:
    branch: master
  local-dir: ./docs/public
