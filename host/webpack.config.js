const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    port: 3000,  // 主应用运行在 3000 端口
  },
  entry: './src/index.js',
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // 匹配 .js 和 .jsx 文件
        exclude: /node_modules/, // 排除 node_modules 目录
        use: {
          loader: 'babel-loader', // 使用 babel-loader
        },
      },
      {
        test: /\.css$/, // 匹配 .css 文件
        use: ['style-loader', 'css-loader'], // 使用 style-loader 和 css-loader
      },
      // 可以根据需要添加其他文件类型的处理规则
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // 解析文件时可省略的扩展名
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        remote1: 'remote1@http://localhost:3001/remoteEntry.js',
        remote2: 'remote2@http://localhost:3002/remoteEntry.js',
      },
      shared: {
        react: { singleton: true, eager: true },  // 确保使用单一的 React 实例
        'react-dom': { singleton: true, eager: true },
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devtool: 'source-map', // 可选：用于调试
};
