console.log('index.js');


document.getElementById('btn').onclick = function () {
  // webpack@5 不再使用 webpackChunkName 详见 README 或者官方文档
  // prefetch 还是使用 webpackPrefetch magic comment 有兼容性问题慎用！
  import(/* webpackPrefetch: true */'./test').then(({mul})=>{
    console.log(mul(1, 2));
  });
};
