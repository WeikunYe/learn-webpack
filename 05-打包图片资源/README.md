# 备注

## url-loader file-loader

**🛑🛑🛑注意**: `webpack@5` 自带 `url-loader` `file-loader` 和 `raw-loader`

因此无需按照视频教程中**配置和安装** `url-loader` 和 `file-loader`

只需要定义资源类型即可, [详细文档](https://webpack.js.org/guides/asset-modules/)

```javascript
{
    test: /\.(png|jpg|gif)$/i,
    type: 'asset/resource'
},
```

此外如需要对某个 loader 配置 options 也有变化, 参考 `./src/webpack.config.js` 内代码格式