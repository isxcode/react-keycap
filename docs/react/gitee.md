### 如何使用 github + gitee + react 搭建自己的博客

#### 1 安装 nodejs

- [nodejs 官方下载地址](https://nodejs.org/en/download/)

- 将 zip 解压到本地并配置环境变量

```
window+R: sysdm.cpl
Path: D:\developer\node-v12.16.1
```

- 安装阿里镜像

```shell script
npm config set registry https://registry.npm.taobao.org/
```

#### 2 创建 github repository

```shell script
git clone https://github.com/ispong/react-keycap.git
```

#### 3 初始化 react 项目

- 初始化项目命令

```shell script
npx create-react-app react-keycap
cd react-keycap
npm start
```

- 安装 webpack

```shell script
npm install webpack webpack-cli --save-dev
```

- 安装其他插件

```shell script
npm install --save-dev html-webpack-plugin # 自动生成html
npm install --save-dev clean-webpack-plugin # 自动删除build文件夹
npm install copy-webpack-plugin --save-dev # 配置静态资源
npm install -D babel-loader @babel/core @babel/preset-env @babel/preset-react # 解析es语法
npm install sass-loader node-sass style-loader --save-dev # 解析sass语法
npm install file-loader --save-dev # 解析文件
npm install --save-dev webpack-dev-server # 安装启动器
# npm install gh-pages --save-dev # 安装git多分支提交工具
npm install --save-dev typescript ts-loader # 安装ts语法
# npm install --save lodash # 压缩
# npm install --save react-markdown # markdown 插件
# npm install --save-dev raw-loader # webpack解析文件为String
# npm i markdown-to-jsx # react markdown解析
npm install --save react-router-dom # react router
```

- 创建 webpack 配置文件 webpack.config.js

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: "./src/index.tsx",
	output: {
		filename: "index_bundle.js", // 指定生成js文件的名称
		path: path.resolve(__dirname, "./build"), // 指定打包目录
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	plugins: [
		new CopyPlugin([{ from: "./docs", to: "docs" }]),
		new CleanWebpackPlugin({
			cleanAfterEveryBuildPatterns: ["./build"], // 指定删除目录
		}),
		new HtmlWebpackPlugin({
			template: "./public/index.html", // 指定生成模板
			filename: "index.html", // 指定生成文件名
		}),
	],
	devServer: {
		contentBase: "./build", // 设置本地运行文件
		port: 9999, // 设置本地启动端口号
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"], // 配置es和react语法解析
					},
				},
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i, // 设置解析文件后缀
				use: [
					{
						loader: "file-loader",
					},
				],
			},
		],
	},
};
```

- 新建 tsconfig.json

```json
{
	"compilerOptions": {
		"outDir": "./dist/",
		"noImplicitAny": true,
		"module": "es6",
		"target": "es5",
		"jsx": "react",
		"allowJs": true
	}
}
```

- 修改脚本命令

```
"scripts": {
    "start": "webpack-dev-server --open",
    "build": "webpack --mode production",
    "deploy": "gh-pages -o gitee -b master -d ./build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
```

#### 4 创建 gitee repository

- 通过 import repository 方式 import github 分支代码

```
https://github.com/ispong/react-keycap.git

git remote add gitee https://gitee.com/ispong/ispong.git
```

####5 修改.gitignore 文件

```
node_modules
.idea
build
```

- 上传代码

```
npm run deploy
```

### 有坑存在部署不生效 （可能文件名没有被触发 修改文件名即可）

### gh-page 无法提交.spa 文件
