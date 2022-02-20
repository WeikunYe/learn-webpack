const { resolve } = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports={
    entry: "./src/index.js",
    output: {
        filename: "built.js",
        path: resolve(__dirname, "build")
    },
    module:{
        rules:[
            {
                test: /\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ],
            },
            // webpack@5 新功能 Assets Modules, 只需定义 assets 类型, webpack会用自带 url-loader file-loader raw-loader 编译
            {
                test: /\.(png|jpg|gif)$/i,
                type: 'asset/resource',
                // 自定义资源的目录和文件名格式
                // 目录名/[哈希前10位][文件扩展名][query parameter]
                generator: {
                    filename: "static/[hash:10][ext][query]"
                }
            },
            /* webpack@5 自带 url-loader file-loader raw-loader 无需配置
               如果 webpack@5 use loader 需要配置 options, 参考一下格式
            {
                // 处理图片
                test: /\.(jpg|png|gif)$/i,
                // 需要 url-loader 和 file-loader
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            // 图片小于8kb, 图片编译成base64
                            // 减小请求数量, 但会图片本身大小会变大
                            limit: 8 * 1024,
                            // webpack 5 无需声明此项
                            esModule: false
                        }
                    }
                ],
            }
            */
           {
               // 处理 html 中的图片, 因为入口是 index.js, 但构建的依赖树中并没有任何地方引用了 index.html
               test: /\.html$/,
               use:{
                   // 处理 html 中引入的图片, 从而能被 url-loader 打包处理
                   loader: "html-loader"
               }
           }
        ]
    }, 
    plugins:[
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode: "development"
}