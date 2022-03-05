const path = require('path');

module.exports = {
  // 解析模块规则
  resolve: {
    // 配置模块解析别名，优点是简写，缺点是没有路径提示
    // import '$css/index.css'
    alias: {
      $css: path.resolve(__dirname, 'src/css'),
    },
    // 配置省略文件路径名
    // import '$css/index'
    extensions: ['.js', '.json', '.css'],
    // 默认node_modules, 可以配置去哪里找node_modules, 尤其是目录层级复杂的项目
    modules: [path.resolve(__dirname, '../node_modules'), 'node_modules'],
  },
};
