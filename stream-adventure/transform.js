var through = require('through');

var toUpper = function(buffer) {
  this.queue(buffer.toString().toUpperCase());
}


process.stdin.pipe(through(toUpper)).pipe(process.stdout);
