var Hapi = require('hapi');
var Rot13 = require('rot13-transform');
var Fs = require('fs');
var Path = require('path')

var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});

server.route({
  method: 'GET',
  path: '/',
  config: {
    handler: function(req, res) {
      var streamingObject = Fs.createReadStream(Path.join(__dirname, 'input.txt'));
      res(streamingObject.pipe(Rot13()));
    }
  }
})

server.start();
