/**
 * index.js Webpack 入口文件
 *
 * 1. 运行指令
 *  开发环境：webpack ./src/index.js -o ./build --mode=development
 *  生产环境：webpack ./src/index.js -o ./build --mode=production
 *
 * 2. 结论
 *    1. webpack 可以处理 JavaScript JSON, 不能处理 CSS/IMAGE 等
 *    2. 生产环境开发环境将ES6模块化编译成浏览器能识别的模块化
 *    3. 生产环境比开发环境多一个代码压缩
 */
// import "./index.css"
import data from './data.json';

console.log(data);

function add(a, b) {
  return a + b;
}

console.log(add(1, 2));
