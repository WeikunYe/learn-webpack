// 这样直接在代码中引用 @babel/polyfill 有点奇怪
// 参考 webpack.config.js entry 中配置 @babel/polyfill
// import '@babel/polyfill';

const add = (a, b) => a + b;

console.log(add(1, 2));

const promise = new Promise((resolve) => {
  setTimeout(() => {
    console.log('定时器执行了');
    resolve();
  }, 1000);
});

console.log(promise);
