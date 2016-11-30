var express = require('express');
var path = require('path');
// var logger = require('morgan');
// var bodyParser = require('body-parser');

var app = express();

app.set('port', process.env.PORT || 3000);
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static('build'));

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

app.get('/', function(req, res){
  // res.send('Hello!')
  res.sendFile(path.resolve(__dirname, '.', 'build', 'index.html'));
});