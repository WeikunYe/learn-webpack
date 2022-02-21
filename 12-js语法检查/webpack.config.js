const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      // 语法检查 eslint-loader eslint
      // 只检查自己写的源代码 排除 node_modules
      // 设置检查规则: package.json 中 eslintConfig
      // 使用 airbnb 规则 eslint-config-airbnb-base eslint-plugin-import
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {

        },
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  mode: 'development',
};
