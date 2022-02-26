/**
 * HMR: hot module replacement 热模块替换 / 模块热替换
 * 作用：一个模块变化，只重新打包变化模块
 * 样式文件：可以，通过style-loader实现
 * js文件：默认没有
 * html文件：默认没有，且没有热更新：修改entry加上html
 */
const { resolve } = require('path');
const HTMLWebpackPlugins = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/js/index.js', './src/index.html'],
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        exclude: /\.(js|css|less|html)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/[hash:10][ext][query]',
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugins({
      template: './src/index.html',
    }),
  ],
  devServer: {
    compress: true,
    port: 3000,
    watchFiles: ['src/*'],
    open: true,
    // 记得重启 webpack
    hot: true,
  },
  mode: 'development',
};
