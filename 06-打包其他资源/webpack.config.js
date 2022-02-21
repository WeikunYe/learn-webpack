const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      // 打包其他资源, 排除 css js html
      // webpack@5 内置 file-loader, 使用 asset/resource type 即可
      // 配置资源输出文件名和目录用 generator filename
      {
        // test: /\.(eot|svg|ttf|woff)$/,
        exclude: /\.(html|js|css)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[hash:10][ext]',
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
