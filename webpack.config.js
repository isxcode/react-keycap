const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'index_bundle.js', // 指定生成js文件的名称
    path: path.resolve(__dirname, './build'), // 指定打包目录
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new CopyPlugin([
      {from: './blogs', to: 'blogs'},
      {from: './public/static', to:'static'}
    ]),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['./build'] // 指定删除目录
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html", // 指定生成模板
      filename: "index.html" // 指定生成文件名
    })],
  devServer: {
    contentBase: './build', // 设置本地运行文件
    port: 9999 // 设置本地启动端口号
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
            presets: ['@babel/preset-env', '@babel/preset-react'] // 配置es和react语法解析
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // 设置解析文件后缀
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  }
};
