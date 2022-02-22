const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

process.env.NODE_ENV = 'production';

// CSS 处理
// 1. MiniCssExtractPlugin: 提取 js 中的 css 样式, 打包成一个 css 文件并在 html 中引用
// 2. less-loader/sass-loader: 编译 less sass
// 3. postcssPresetEnv: 兼容性处理, 根据环境不同(开发/生产)编译不同兼容性的 css 文件, 注意这里 webpack@5 写法不同, 注意定义 browserslist
// 4. css-minimizer-webpack-plugin: 压缩 css 注意这里 webpack@5 写法不同

// JS 处理
// 1. eslint-loader

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
      // js lint
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/built.css',
    }),
    new ESLintPlugin({
      fix: true,
    }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  mode: 'production',
};
