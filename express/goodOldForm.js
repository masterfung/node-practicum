var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
var jade = require('jade');

var app = express();

app.set('view engine', 'jade');
app.set('views', process.argv[3]);

app.use(bodyparser.urlencoded({extended: false}))

app.get('/home', function(req, res) {
  res.render('index', {
    'date': new Date().toDateString()
  })
});

app.post('/form', function(req, res) {
  res.send(req.body.str.split('').reverse().join(''));
});

app.listen(process.argv[2])
