// require('./main.css');
// var h1 = document.createElement('h1');
// h1.innerHTML = 'Hello world!!!';
// document.body.appendChild(h1);

// var webpack_img = require('./images/what-is-webpack.png');
// var img = document.createElement('img');
// img.src = webpack_img;
// img.style = 'width: 50%';
// document.body.appendChild(img);

// require('./test.js');

import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './components/MyComponent';
import ToDoList from './components/ToDoList'


// add app div
var app_div = document.createElement('div');
app_div.setAttribute('id', 'app');
// app_div.style = 'margin: 0px auto;';
document.body.appendChild(app_div);

// 將 <MyComponent /> 元件插入 id 為 app 的 DOM 元素中
ReactDOM.render(<MyComponent name='ooo'/>, document.getElementById('app'));