var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
var jade = require('jade');

var app = express();

app.set('view engine', 'jade');
app.set('views', process.argv[3]);

app.use(bodyparser.urlencoded({extended: false}));
app.use(require('stylus').middleware(process.argv[3]));
app.use(express.static(process.argv[3]));

app.listen(process.argv[2])
