## 如何下载开发

### 下载代码
```shell script
git clone https://github.com/ispong/react-keycap.git
```

### 安装nodejs
```shell script
install nodejs  https://nodejs.org/dist/v12.16.1/node-v12.16.1-x64.msi
```

### 配置npm
```shell script
npm config set prefix "D:\developer\nodejs"
npm config set cache "D:\developer\nodejs\npm-cache"
npm config set registry https://registry.npm.taobao.org/
```

### 本地测试启动
```shell script
npm install
npm run start
```

### 安装全局开发工具
```shell script
sass- npm install -g sass
```

### 配置webStorm开发环境
```text
ctrl+alt+s
```
- npm
- eslint
- prettier
- file watchers (sass)
- debug(javaScript)

### 发布项目
```shell script
npm config set registry https://registry.npm.taobao.org/
npm login
npm publish
npm config set registry https://registry.npm.taobao.org/
```
