// require('./main.css');
var h1 = document.createElement('h1');
h1.innerHTML = 'Hello world!!!';
document.body.appendChild(h1);

var webpack_img = require('./images/what-is-webpack.png');
var img = document.createElement('img');
img.src = webpack_img;
img.style = 'width: 50%';
document.body.appendChild(img);

require('./test.js');