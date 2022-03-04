// 使用 dll 技术对某些库进行单独打包

const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    // 最终打包的名字: [要打包的各种库]
    jquery: ['jquery'],
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dll'),
    // 注意 webpack@5 使用 fullhash
    library: '[name]_[fullhash:10]', // 打包的库向外暴露出的内容名字
  },
  plugins: [
    // 打包生成一个manifest，提供映射关系 [name]_[hash] ---> [name]
    new webpack.DllPlugin({
      name: '[name]_[fullhash:10]', // 映射库暴露的名称
      path: resolve(__dirname, 'dll/manifest.json'), // 输出文件路径
    }),
  ],
  mode: 'production',
};
