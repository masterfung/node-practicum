var through = require('through');
var split = require('split');

process.stdin.pipe(split()).on('data', function(line) {
  console.log(line.toString())
}).pipe(process.stdout)
