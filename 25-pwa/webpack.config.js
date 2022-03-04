const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const { GenerateSW } = require('workbox-webpack-plugin');

/**
 * PWA 离线可访问
 * workbox ---> workbox-webpack-plugin
 */

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'built.[contenthash:10].js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  postcssPresetEnv(),
                ],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/built.css',
    }),
    new GenerateSW({
      /**
       * serviceworker 快速启动
       * 删除旧的 serviceworker
       * 生成serviceworker配置文件
       */
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
  mode: 'production',
};
