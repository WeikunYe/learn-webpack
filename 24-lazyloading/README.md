# 备注

## webpackChunkName

webpack@5 不再使用 `webpackChunkName` magic comment。

可以在 `webpack.config.js` 中配置 `chunkIds`

```javascript
module.exports = {
  optimization: {
    chunkIds: 'named',
  },
};
```

- `natural`: 数字ID
- `named`: 文件名字
- 其他见文档