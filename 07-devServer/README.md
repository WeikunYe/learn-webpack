# 备注

## webpack-dev-server

webpack@5 不再有 `contentBase` 配置 使用 `static`

**注意**: 这个 demo 我们的资源均由 webpack 打包 (如 index.html, iconfont.css, font下的字体文件等), 不需要配置 static (详细解释参考 webpack.config.js 注释)

devServer 默认好像不 `watch` `html` 文件, 需要加上 `watchFiles: ['src/*']` 数组内为匹配的文件类型, `src/*` 匹配 `src` 目录下所有文件

## 启动指令

可以使用 `npx webpack-dev-serve`

也可以使用 `webpack serve` 因为我们 devdependency 安装了 `webpack-cli`