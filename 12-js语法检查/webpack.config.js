const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      // 注意: webpack@5 不再使用 eslint-loader
      // 语法检查 eslint-loader eslint
      // 只检查自己写的源代码 排除 node_modules
      // 设置检查规则: package.json 中 eslintConfig
      // 使用 airbnb 规则 eslint-config-airbnb-base eslint-plugin-import
      /* {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {

        },
      }, */
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
    // webpack@5 使用 eslint-webpack-plugin
    // 不要安装 eslint-loader
    // 安装 eslint eslint-webpack-plugin eslint-config-airbnb-base eslint-plugin-import
    new ESLintPlugin({
      fix: true,
    }),
  ],
  mode: 'development',
};
