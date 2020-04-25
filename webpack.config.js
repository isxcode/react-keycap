const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'development',
	devtool: 'source-map', // Enable sourcemaps for debugging webpack's output.
	entry: './src/index.tsx',
	output: {
		publicPath: '/', // react路由二级目录404
		filename: 'index.js', // 指定生成js文件的名称
		path: path.resolve(__dirname, './build'), // 指定打包目录
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [
		new CopyPlugin([
			{ from: './show', to: 'docs' },
			{ from: './public/static', to: 'static' },
		]),
		new CleanWebpackPlugin({
			cleanAfterEveryBuildPatterns: ['./build'], // 指定删除目录
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html', // 指定生成模板
			filename: 'index.html', // 指定生成文件名
		}),
	],
	devServer: {
		historyApiFallback: true, // browserRouter 无法识别路径问题
		contentBase: './build', // 设置本地运行文件
		port: 9999, // 设置本地启动端口号
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'], // 配置es和react语法解析
					},
				},
			},
			{
				// exclude: /node_modules/,  无法解析highlight.js的样式
				test: /\.(s[ac]ss|css)$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS 一定要加css-loader
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
			{
				exclude: /node_modules/,
				test: /\.(png|jpe?g|gif|svg})$/i, // 设置解析文件后缀
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
			{
				exclude: /node_modules/,
				test: /\.(md)$/,
				use: [
					{
						loader: 'raw-loader', // 解析成text文件
					},
				],
			},
		],
	},
};
