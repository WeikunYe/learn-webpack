# 备注

## eslint-loader

`eslint-loader` deprecated。 使用 `eslint-webpack-plugin`

`eslint-loader` deprecated [声明](https://www.npmjs.com/package/eslint-loader)

`eslint-webpack-plugin` [文档](https://www.npmjs.com/package/eslint-webpack-plugin)

## Unexpected console statement 警告

停止 unexpected console statement 警告可以创建一个 .eslntrc.js 文件，配置 "no-console: off"

不要直接 disable-next-line 因为该声明会忽略任何错误：例如下一行不仅有 unexpected console statement 错误，那么其他错误也被忽略了。

建议还是使用 eslint 规则合理配置

```javascript
// .eslntrc.js
module.exports = {
  rules: {
    'no-console': 'off',
  },
};
```