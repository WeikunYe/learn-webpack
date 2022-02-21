# 备注

## file-loader

webpack@5 内置 file-loader 只需定义 `type` 即可

```javascript
{
    exclude: /\.(html|js|css)$/,
    type: "asset/resource",
}
```

## 对应关系

webpack@4 三个 loader 对应 webpack@5 三个 type

- `file-loader` 对应 `{type: "asset/resource"}`: emits a separate file and exports the URL
- `url-loader` 对应 `{type: "asset/inline"}`: exports a data URI of the asset
- `raw-loader` 对应 `{type: "asset/source"}`: exports the source code of the asset

详细见[文档](https://webpack.js.org/guides/asset-modules/)

webpack@5 asset module 特性也可以看这篇[技术博客](https://blog.csdn.net/lin_fightin/article/details/115140736)的前半部分, 感觉讲的挺清楚的