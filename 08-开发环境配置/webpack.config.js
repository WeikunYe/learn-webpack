const { resolve } = require("path");
const HTMLWebpackPlugins = require("html-webpack-plugin");

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/built.js",
        path: resolve(__dirname, "build"),
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            // 不需要匹配图片, webpack@5 排除 js css html less 等相关资源, 均可使用 asset/resource
            // 如需要配置 limit 需要 使用 asset/resource 并匹配所有图片文件
            /* {
                test: /\.(png|jpg|gif|jpeg)$/,
                type: "asset/resource",
                generator: {
                    filename: "static/[hash:10][ext][query]"
                }
            }, */
            // 如果想按照老师那样将不同类型资源分别输出到不同的目录下需要分开写 图片资源一个 rule 字体资源一个 rule 等
            // 我懒得弄了
            {
                exclude: /\.(js|css|less|html)$/,
                type: "asset/resource",
                generator: {
                    filename: "static/[hash:10][ext][query]"
                }
            },
            {
                test: /\.html$/,
                use:{
                    loader: "html-loader"
                }
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugins({
            template: "./src/index.html"
        })
    ],
    devServer: {
        compress: true,
        port: 3000,
        watchFiles: ["src/*"],
        open: true
    },
    mode: "development"
}