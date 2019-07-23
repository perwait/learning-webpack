import _ from 'lodash';
import './asset/style.css';
import Icon from './asset/icon.png';
import Data from './asset/data.xml';

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // 将图像添加到我们现有的 div。
  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  console.log(Data);

  return element;
}

document.body.appendChild(component());