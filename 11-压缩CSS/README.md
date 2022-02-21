# 备注

## optimize-css-assets-webpack-plugin DeprecationWarning

optimize-css-assets-webpack-plugin 官方文档建议 webpack@5 使用 css-minimizer-webpack-plugin

我测试了一下, 用 css-minimizer-webpack-plugin 也可以压缩, 但是执行过程中会有一个 DeprecationWarning

所以最好还是用官方文档推荐的 css-minimizer-webpack-plugin

查看[官方文档](https://www.npmjs.com/package/optimize-css-assets-webpack-plugin)