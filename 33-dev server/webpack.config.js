module.exports = {
  mode: 'development',
  devServer: {
    // 启动 gzip 压缩
    compress: true,
    // 端口
    port: 3000,
    // 域名
    host: 'localhost',
    // 监视目录下文件变化并重新打包
    watchFiles: ['src/*'],
    // 自动打开浏览器
    open: true,
    // 开启 HRM
    hot: true,
    // 日志信息
    clientLogLevel: 'none',
    // 除了启动信息，其他都不打印
    quite: true,
    // 不要全屏提示 webpack@5 在 client 下配置
    client: {
      overlay: true,
    },
    // 代理服务器
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' },
      },
    },
  },
};
