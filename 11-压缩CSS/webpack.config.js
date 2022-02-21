const { resolve } = require('path');
const HTMLWebpackPlugins = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');
// 不要用这个 官方文档建议 webpack@5 使用 css-minimizer-webpack-plugin
// 其实用 css-minimizer-webpack-plugin 压缩, 但是执行过程中会有一个 DeprecationWarning
// 所以最好还是用 optimize-css-assets-webpack-plugin 官方文档推荐的 css-minimizer-webpack-plugin
// const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

process.env.NODE_ENV = 'development';

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
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
    new HTMLWebpackPlugins({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/built.css',
    }),
  ],

  // webpack@5 这么写 不要加到 plugins 里面
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  // mode 也要 production
  // postcss-preset-env 貌似依赖 process.env.NODE_ENV 判断开发/生产环境, 默认是生产环境
  // CssMinimizerPlugin 貌似是依赖 webpack mode 判断开发/生产环境
  // 所以最好还是统一一下 process.env.NODE_ENV 和 webpack mode
  mode: 'production',
};
