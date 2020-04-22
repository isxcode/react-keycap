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
npx create-react-app react-keycap
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
