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
    hot: true,
  },
  mode: 'development',
  // 源代码到构建后代码映射
  // [inline- | hidden- | eval-][nosources-][cheap-[module-]]source-map
  // inline-source-map：内联，构建速度快
  // 错误代码、以及源代码位置
  // hidden-source-map：外部
  // 错误代码、没有位置 （隐藏源代码）有构建后代码
  // eval-source-map：每个js文件生成source map
  // 错误代码、以及源代码位置
  // nosources-source-map
  // 错误代码、看不到源代码（隐藏源代码）也隐藏构建后代码
  // cheap-source-map：外部
  // 错误代码、以及源代码位置（只能精确到行）
  // cheap-module-source-map：外部 module指webpack module下loaders也加进来
  // 错误代码、以及源代码位置
  // 生产环境：速度快，调试优化：eval-source-map
  // 速度快 eval > inline > cheap 等 （eval-cheap-source-map最快，然后eval-source-map）
  // 调试最友好：source-map > cheap-module-source-map > cheap-source-map
  // 生产环境：
  // 隐藏源码：hidden/nosources
  // 文件大小：不用eval（文件会变得很大）
  // 调试：source-map > cheap
  devtool: 'source-map',
};
