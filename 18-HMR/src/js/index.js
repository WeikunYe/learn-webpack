import '../styles/iconfont.css';
import '../styles/index.less';
import print from './print';

console.log('index.js 被加载了');

print();

function add(a, b) {
  return a + b;
}

console.log(add(1, 2));

/* if (module.hot) {
  module.hot.accept('./print.js', () => {
    print();
  });
} */
