/**
 * webpack 配置文件
 * 所有构建工具都是基于nodejs平台运行，模块化默认使用commonjs
 */

// resolve 拼接绝对路径
const { resolve } = require("path");

module.exports = {
    // webpack 配置
    // 入口起点
    entry: "./src/index.js",
    // 输出
    output: {
        filename: "built.js",
        // 输出路径：一般为绝对路径
        // __dirname 是 nodejs 的变量，代表当前文件的目录绝对路径
        path: resolve(__dirname, "build")
    },
    // loader 配置
    module: {
        rules: [
            // 详细 loader 配置
            {
                // 匹配哪些文件
                test: /\.css$/,
                // 使用哪些 loader
                use: [
                    // use数组中执行顺序是从右向左（从下到上）依次执行
                    // 创建style标签，将js中的样式资源插入标签中，添加到head标签中生效
                    "style-loader",
                    // 将css文件编译成commonjs模块加载在js中，里面的内容是样式字符串
                    "css-loader"
                ]
            },
            {
                // 匹配 less 文件
                test: /\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    // 将 less 编译为 css
                    "less-loader"
                ]
            }
        ]
    },
    // plugins 配置
    plugins: [],
    // 模式 development 或者 production
    mode: "development"
}