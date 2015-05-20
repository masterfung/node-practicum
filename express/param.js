var express = require('express');
var path = require('path');

var app = express();

app.put('/message/:id', function(req, res) {
  var obtainedID = req.params.id;
  var str = require('crypto').createHash('sha1').update(new Date().toDateString() + obtainedID).digest('hex')
  res.send(str)
});

app.listen(process.argv[2])
