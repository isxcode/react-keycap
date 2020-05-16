---
title: Hexo+Fluid theme+Gitee搭建免费博客
subtitle: Hexo+Fluid theme+Gitee搭建免费博客
date: 2020-05-16 18:59:12
tags: [hexo]
categories: Hexo
banner_img: https://gitee.com/ispong/my-images/raw/master/blog-react/page.png
index_img: https://gitee.com/ispong/my-images/raw/master/blog-react/hexo/hexo.png
excerpt: 白嫖是任何人都不会拒绝的,更何况是这么好看的博客呢?免费搭建属于自己的博客网站,是时候白嫖一波马云爸爸了.
---

- 没时间过两天再写补上

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

# 部署命令
hexo clean && hexo deploy
