// import _ from 'lodash';
import './asset/style.css';
// import Icon from './asset/icon.png';
// import Data from './asset/data.xml';
// import printMe from './print.js';
// import {
//   cube
// } from './math';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
} else {
  console.log('Looks like we are in production mode!');
}

async function getComponent() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
  // var element = document.createElement('div');
  // var btn = document.createElement('button');
  // var element1 = document.createElement('pre');

  // Lodash, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element1.innerHTML = [
  //   'Hello webpack',
  //   '5 cubed is equal to' + cube(5)
  // ].join('\n\n')

  // element.classList.add('hello');

  // 将图像添加到我们现有的 div。
  // var myIcon = new Image();
  // myIcon.src = Icon;
  // element.appendChild(myIcon);

  // console.log(Data);

  // btn.innerHTML = 'Click me and check the console!';
  // btn.onclick = printMe;
  // element.appendChild(btn);

  // return element;
}

// var element = component();
// document.body.appendChild(element);

// if (module.hot) {
//   module.hot.accept('./print.js', function () {
//     console.log('Accepting the updated printMe module!');
//     // printMe();
//     document.body.removeChild(element);
//     element = component(); // 重新渲染页面后，component 更新 click 事件处理
//     document.body.appendChild(element);
//   })
// }

getComponent().then(component => {
  document.body.appendChild(component);
})