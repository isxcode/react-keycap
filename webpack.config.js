const webpack = require('webpack')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

const config = {
  // 入口
  entry: {
    button: './components/demo/index.tsx',
    input: './components/input/index.tsx',
  },
  // 出口
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name]/[name].js',
    library: 'react+-keycap',
    libraryTarget: 'umd',
    // libraryExport: '',
  },
  module: {
    // loader test指定解析那些类型的文件 use指定解析时候用哪个加载器 exclude指定不解析的文件
    rules: [
      // js 解析
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      // ts 解析
      { test: /\.ts(x)?$/, use: 'ts-loader', exclude: /node_modules/ },
      // scss 解析
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'], exclude: /node_modules/ },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  // 插件
  plugins: [
    new CleanWebpackPlugin(),
    // new CopyPlugin({
    //   patterns: [
    //     { from: 'types', to: './' },
    //   ],
    // }),
  ],
}

module.exports = config;