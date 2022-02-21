# 备注

09-提取 css 和 兼容性处理做一起了

## postcss-loader

webpack@5 配置稍微有些变化 参考 `webpack.config.js`

此外可以新建一个 `postcss.config.js` 配置

```javascript
// postcss.config.js
module.exports = {
  plugins: [
    [
      "postcss-preset-env",
      {
        // Options
      },
    ],
  ],
};
```

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
};
```

## 关于 browserslist

数组或者 `or` 是 union 操作: `> .5% or last 2 versions` 等于 `> .5%, last 2 versions` 意思是 任何满足 `> .5%` 或者 `last 2 versions` 的浏览器, 相当于取并集 (类似于 `if(a || b)`)

`and` 是 intersection 操作: `> .5% and last 2 versions` 意思是 既要满足`> .5%` 而且要满足 `last 2 versions` 的浏览器, 相当于取交集 (类似于 `if(a && b)`)

可以在终端运行 `npx browserslist` + `'query'` 来测试 例如 `npx browserslist '> .5%'`

注意要定期更新本地 browserslist: `npx browserslist@latest --update-db`