var express = require('express');
var path = require('path');

var app = express();

app.get('/search', function(req, res) {
  var userQuery = req.query;
  res.send(userQuery)
});

app.listen(process.argv[2]);
