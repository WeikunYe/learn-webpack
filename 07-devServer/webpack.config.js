const { resolve } = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports={
    entry: "./src/index",
    output: {
        filename: "built.js",
        path:resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use:[
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.html$/,
                use:{
                    loader: "html-loader"
                }
            },
            // 打包其他资源, 排除 css js html
            // webpack@5 内置 file-loader, 使用 asset/resource type 即可
            // 配置资源输出文件名和目录用 generator filename
            {
                //test: /\.(eot|svg|ttf|woff)$/,
                exclude: /\.(html|js|css)$/,
                type: "asset/resource",
                generator: {
                    filename: "assets/[hash:10][ext]"
                }

            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode: "development",
    // 开发服务器 devServer 自动化 (自动编译, 刷新浏览器等)
    // 特点: 只会在内存中编译打包, 不会有任何输出
    // 启动指令: npx webpack-dev-server 也可以是 webpack serve (webpack-cli)
    devServer: {
        // webpack@5 不再有 contentBase 配置
        //contentBase: resolve(__dirname, "build"),
        // webpack@5 使用 static: 该配置项允许配置从目录提供静态文件的选项（默认是 'public' 文件夹）。将其设置为 false 以禁用：
        // 事实上这个 demo 我们的资源均由 webpack 打包 (如 index.html, iconfont.css, font下的字体文件等), 不需要配置 static
        // 启动后可以观察终端输出: Content not from webpack is served from 'C:\Users\61431\Desktop\webpack\07-devServer\public' directory
        /* static: {
            directory: resolve(__dirname, 'build'),
        }, */
        // 启动gzip压缩
        compress: true,
        // 端口
        port: 3000,
        // 定义 devServer watch 的文件, 默认好像不 watch html
        watchFiles: ['src/*'],
        // 自动打开浏览器
        open: true
    }
}