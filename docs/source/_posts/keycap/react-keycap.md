---
title: React-Keycap
subtitle: React-Keycap
date: 2020-05-16 10:22:52
tags: [keycap,react]
categories: Keycap
banner_img: https://gitee.com/ispong/my-images/raw/master/blog-react/page.png
index_img: https://gitee.com/ispong/my-images/raw/master/blog-react/page-index.png
excerpt: 基于React开源项目进行的二次封装,为了更快的实现前端页面搭建,且让前端的项目更加具有工程性.
hide: true
---

### [react-keycap](https://github.com/ispong/react-keycap.git)

#### 开发目的
- 让新手也能开发框架
- 让程序员专注于算法 

#### 文件结构说明
> 追随react开发

| 文件夹 | 文件 | 文件说明 | 状态 | 
| --- | --- | --- | --- |
| .circleci | config.yml | circle-ci | 暂时不用 | 
| .codesandbox  | ci.json | codesandbox-ci| 暂时不用|
| .github   | bug_report.md| issue模板 | 只接受issue|
| fixtures  | - | 项目集成测试 | 暂时不用|
| packages  | - | react核心代码 | 暂时不用 |
| components| - | 组件库| 启用|
| docs| - | 前端技术文档| 启用|
| public | - | 静态文件| 启用|
| src| - | 使用案例 |  启用|
| scripts  | - | javaScript脚本 | 启用|
| .editorconfig | .editorconfig | 编辑格式规定 | 启用|
| .eslintignore  | .eslintignore| eslint检查忽略配置 | 启用|
| .eslintrc.js  |.eslintrc.js | eslint检查配置 | 启用|
| .gitattributes  | .gitattributes | git | 启用|
| .gitignore  |.gitignore | git | 启用|
| .mailmap  | .mailmap | git | 暂时不用|
| .nvmrc  | .nvmrc | nvm-ci | 暂时不用| 
| .prettierignore | .prettierignore | prettier忽略配置| 启用 |
| .prettierrc.js | .prettierrc.js | prettier配置 | 启用 |
| AUTHORS | AUTHORS |  作者列表| 暂时不用|
| CHANGELOG.md | CHANGELOG.md| 更新日志| 启用 |
| CODE_OF_CONDUCT.md | CODE_OF_CONDUCT.md | github | 暂时不用 |
| CONTRIBUTING.md |CONTRIBUTING.md | github | 启用 |
| LICENSE |LICENSE | github | 启用 | 
| README.md| README.md| github|  启用 |
| SECURITY.md |SECURITY.md | github| 暂时不用|
| appveyor.yml| appveyor.yml | ci| 暂时不用 |
| babel.config.js| babel.config.js | babel配置文件| 启用 |
| dangerfile.js | dangerfile.js| ci|  暂时不用|
| netlify.toml | netlify.toml|netlify-ci配置| 暂时不用| 
| package.json|package.json| nodejs配置文件| 启用|
| yarn.lock|yarn.lock|yarn配置文件| 禁用|
| package-lock.json|package-lock.json | npm配置文件|启用|
| tsconfig.json|tsconfig.json | typeScript配置文件| 启用|
| webpack.config.js|webpack.config.js| webpack配置文件|启用| 


#### 项目初始化
```shell script
npx create-react-app $project_name
cd react-keycap
npm start
```
- 使用webpack
```shell script
npm install webpack webpack-cli --save-dev
npm install --save-dev html-webpack-plugin # 自动生成html
npm install --save-dev clean-webpack-plugin # 自动删除build文件夹
npm install copy-webpack-plugin --save-dev # 配置静态资源
npm install -D babel-loader @babel/core @babel/preset-env @babel/preset-react # 解析es语法
npm install sass-loader node-sass style-loader --save-dev # 解析sass语法
npm install file-loader --save-dev # 解析文件
npm install --save-dev webpack-dev-server # 安装启动器
```
- 使用 react-router
```shell script
npm install --save react-router-dom # react router
npm install --save @types/react-router-dom
```
- 使用 typeScript
```shell script
npm install --save-dev typescript ts-loader # 安装ts语法
```

- 使用 gh-pages
```shell script
npm install gh-pages --save-dev # 安装git多分支提交工具
```

- 创建双git源
```shell script
git remote add gitee https://gitee.com/ispong/ispong.git
```


### 开发目的 
感觉用别人的组件不灵活 不能自定义去修改 别人的组件有时候使用起来也比较费劲

git clone https://github.com/puncsky/web-onefx-boilerplate.git my-awesome-project

nvm use 10.15.0
npm install

cp ./.env.tmpl ./.env

npm run build-production
NODE_ENV=production npm run start


npm run test: test the whole project and generate a test coverage
npm run ava ./path/to/test-file.js: run a specific test file
npm run build: build source code from src to dist
npm run lint: run the linter
npm run flow: run the flow type check
npm run kill: kill the node server occupying the port 4100.



## 我需要做成那种

做一个模板替换工具  还可以方便维护我的代码



template 

git clone xxx template
项目模板 可以自己去改动源码 就是一种规范


项目组成 
docs
components
scripts

git clone xxx
cd scripts
keycap init -project='' -email='' -version='' 

打包到本地进行调试


开源配置都留着 写一个脚本生成开源配置文件

我希望是这样的

git clone -tempalte 项目铭恒 http://github.com/xx




