const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'production';

// babel缓存
// 文件缓存
//  1. hash文件名，每次打包一个哈希值，修改后所有文件名都变了
//  2. chunkhash文件名，同一个chunk，哈希值一样，但index为入口下面引入的依赖同属于一个chunk所以不行
//  3. contenthash文件名，文件内容生成哈希值

const commonCssLoader = [MiniCssExtractPlugin.loader,
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
];

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'built.[contenthash:10].js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        oneOf: [
          // 处理 css
          {
            test: /\.css$/i,
            use: [...commonCssLoader],
          },
          // 处理 less
          {
            test: /\.less$/i,
            use: [
              ...commonCssLoader,
              'less-loader',
            ],
          },
          {
            test: /\.js$/i,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    corejs: {
                      version: 3,
                    },
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
              // 开启缓存
              // 第一次构建
              // 第二次开始读取缓存
              cacheDirectory: true,
            },
          },
          {
            test: /\.(png|jpg|gif)$/i,
            type: 'asset/resource',
            generator: {
              filename: 'imgs/[hash:10][ext][query]',
            },
          },
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
          {
            exclude: /\.(js|less|css|html|png|jpg|gif)$/i,
            type: 'asset/resource',
            generator: {
              filename: 'media/[hash:10][ext][query]',
            },
          }],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/built.[contenthash:10].css',
    }),
    new ESLintPlugin({
      fix: true,
      files: 'src/js/*.js',
    }),
    new HTMLWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  mode: 'production',
};
