const { resolve } = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "built.js",
        path: resolve(__dirname, "build")
    },
    module: {
        rules: [
            // loader 配置
            
        ]
    },
    plugins: [
        // plugins 配置
        // html-webpack-plugin
        // 功能：默认会创建一个空的HTML文件，并引入打包所输出的所有资源(JS, CSS)

        new HTMLWebpackPlugin({
            // 定义需要打包的HTML文件，并随JS CSS一起打包
            template: "./src/index.html"
        })
    ],
    mode: "development"
}