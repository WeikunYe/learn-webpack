/**
 * output
 * 1. string：一个入口，打包形成一个chunk，输出一个bundle
 * 2. array：多入口，打包形成一个chunk，输出一个bundle，一般用于HMR
 * 3. object: 多入口，多个chunk，多个bundle，chunk名称为key （特殊用法，value传数组）
 */

const path = require('path');

module.exports = {
  output: {
    // 文件名称
    filename: 'js/[name].js',
    // 输出文件目录
    path: path.resolve(__dirname, 'build'),
    // 所有资源的公共路径 (publicPath + path 为完整路径)
    publicPath: '/',
    chunkFileName: '[name]_chunk.js', // 非入口chunk文件名
    library: '[name]', // 整个库向外暴露的变量名
    libraryTarget: 'window', // 变量名添加到哪里 (window, global, commonjs)
  },
};
