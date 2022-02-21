const { resolve } = require("path");
const HTMLWebpackPlugins = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports={
    entry: "./src/js/index.js",
    output:{
        filename: "js/built.js",
        path: resolve(__dirname, "build"),
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                // MiniCssExtractPlugin.loader 提取 css 成单独文件, 而不是 style-loader 插入 head 标签
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugins({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            // 重命名
            filename: "css/built.css"
        })
    ],
    mode: "development"
}