const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
    // 告诉webpack那些库不参与打包，使用时的名称
    // 注意加 context
    new webpack.DllReferencePlugin({
      context: path.join(__dirname, 'src/'),
      manifest: path.resolve(__dirname, './dll/manifest.json'),
    }),
    // 将某个文件打包出去并在html内引用
    // 注意加文件输出路径和公共路径
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, './dll/jquery.js'),
      // 文件输出目录
      outputPath: 'vendor',
      // 脚本或链接标记的公共路径
      publicPath: 'vendor',
    }),
  ],
  mode: 'development',
};
