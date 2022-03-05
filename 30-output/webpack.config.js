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
