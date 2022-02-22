const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  // 在 entry 中带上 @babel/polyfill
  // 使用 core-js 就不需要 @babel/polyfill
  // entry: ['@babel/polyfill', './src/js/index.js'],
  entry: './src/js/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      // js 兼容性处理 babel-loader
      // 下载 babel-loader @babel/core @babel/preset-env
      // 1. 基本 js 兼容性处理 --> @babel/preset-env 但是不能转换 promise 等语法
      // 2. 全部 js 兼容性处理 --> @babel/polyfill 所有兼容性代码全部包括 打包后文件体积太大
      // 3. 按需加载 --> core-js
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          // 预设：指示 babel 做哪些兼容性处理
          presets: [
            [
              '@babel/preset-env',
              {
                // 按需加载
                useBuiltIns: 'usage',
                // 指定 core-js 版本
                corejs: {
                  version: 3,
                },
                // 指定兼容性做到哪个浏览器
                targets: {
                  chrome: '60',
                  firefox: '60',
                  ie: '9',
                  safari: '10',
                  edge: '11',
                },
              },
            ],
          ],
        },
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
    new ESLintPlugin({
      files: 'src/js/*.js',
    }),
  ],
  mode: 'development',
};
