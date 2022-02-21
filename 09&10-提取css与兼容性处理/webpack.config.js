const { resolve } = require('path');
const HTMLWebpackPlugins = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');

// 改变 NODE_ENV 变量 观察输出 css 的变化
process.env.NODE_ENV = 'production';

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
        // MiniCssExtractPlugin.loader 提取 css 成单独文件, 而不是 style-loader 插入 head 标签
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          // css 兼容性处理
          // postcss-preset-env: 帮助 postcss 找到 browserslist 里面的配置, 通过配置加载指定的css兼容性样式
          // webpack@5 配置方法
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  postcssPresetEnv({
                    // 定义 css features: 0 (experimental) - 4 (stable) or fasle (disable)
                    // default 2
                    // stage: 4,
                    // 支持任何标准的 broserslist 配置
                    // package.json 已经配置了 browserslist 此处无需配置, 除非 package.json 没有配置 可以在这里配置
                    // browsers: "last 2 versions"
                  }),
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
      // 重命名
      filename: 'css/built.css',
    }),
  ],
  mode: 'development',
};
