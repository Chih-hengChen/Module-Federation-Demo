const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    port: 3002,  // Remote 2 运行在 3002 端口
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
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // 解析文件时可省略的扩展名
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'remote2',
      filename: 'remoteEntry.js',
      exposes: {
        './Alert': './src/Alert', // 暴露 Alert 组件
        './Button': './src/Button', // 暴露 Alert 组件
      },
      shared: {
        react: { singleton: true, eager: true },  // 确保使用单一的 React 实例
        'react-dom': { singleton: true, eager: true },
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'), // 确保路径正确
    }),
  ],
  devtool: 'source-map', // 可选：用于调试
};
