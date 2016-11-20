var jQuery = require('./assets/jquery/jquery-3.1.1.js');
window.jQuery = jQuery;
window.$ = jQuery;
require('./assets/bootstrap/js/bootstrap.js');
require('./assets/bootstrap/css/bootstrap.css');



var btn = document.createElement('button');
btn.className = 'btn btn-primary';
btn.innerText = 'test button';
btn.onclick = function() {alert('click');};
document.body.appendChild(btn);