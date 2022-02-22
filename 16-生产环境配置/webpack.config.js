const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'production';

// CSS 处理
// 1. MiniCssExtractPlugin: 提取 js 中的 css 样式, 打包成一个 css 文件并在 html 中引用
// 2. less-loader/sass-loader: 编译 less sass
// 3. postcssPresetEnv: 兼容性处理, 根据环境不同(开发/生产)编译不同兼容性的 css 文件, 注意这里 webpack@5 写法不同, 注意定义 browserslist
// 4. css-minimizer-webpack-plugin: 压缩 css 注意这里 webpack@5 写法不同

// JS 处理
// 1. eslint-webpack-plugin: 注意 webpack@5 不再使用 eslint-loader

// 复用 css loader
const commonCssLoader = [MiniCssExtractPlugin.loader,
  'css-loader',
  {
    loader: 'postcss-loader',
    options: {
      plugins: [
        postcssPresetEnv(),
      ],
    },
  },
];

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      // 处理 css
      {
        test: /\.css$/i,
        use: [
          ...commonCssLoader,
        ],
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
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/built.css',
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
