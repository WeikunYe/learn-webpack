# Webpack5实战教程(从入门到精通)

[视频地址](https://www.bilibili.com/video/BV1e7411j7T5)

## 使用指南

- 课程使用的是 `webpack@4`, 我使用的 `webpack@5`
- 🛑🛑🛑版本区别导致有些配置代码不一样, 我把和课程不一样的地方都标注在每个分P目录下的 `README.md` **请一定要先看每个目录下的 README**🛑🛑🛑
- 课程使用的是 `npm`, 这里使用的是 `yarn`，如果想用 `npm` 删掉 `yarn.lock` 再 `npm install` 即可

## Webpack 是什么

定义：**Webpack 是一种前端资源构建工具，一个静态模块打包器 (module bundler)。**

- 构建工具： 将 `LESS/SASS` 编译成 `CSS`，将 `ES6` 语法适配浏览器等。
- 静态模块打包器：观察下列代码，`index.js` 文件引入 `jquery`，样式等资源。
    - Webpack 会从定义的入口文件 `index.js` 为起点，记录和构建依赖关系树。
    - Webpack 依次引入依赖，形成 `chunk` (代码块)。
    - 对每个代码块进行打包：如 `LESS` 编译成 `CSS` 等。
    - 打包好的资源输出为 `bundle`。
    ```javascript
    // index.js
    // 引入js资源
    import $ from "jquery";
    // 引入样式
    import "./index.less";
    // 引入图片·字体等
    ```

## Webpack 5个核心概念

### Entry

入口，指示 Webpack 以哪个文件作为入口起点开始打包，分析构建内部依赖图。

### Output

输出，指示 Webpack 打包后的资源 bundles 输出到哪里去，以及如何命名。

### Loader

Loader 让 Webpack 能够去处理非 JavaScript 文件 (Webpack 本身只能理解 JavaScript 和 JSON)。

### Plugins

插件用于执行更广泛的任务，如打包优化和压缩，重新定义环境变量等等。

### Mode

模式，指示 Webpack 使用相应模式的配置。模式有两种，会启用不同的插件

- development：本地调试运行环境
- production: 优化上线运行环境