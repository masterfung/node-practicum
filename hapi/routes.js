var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});

server.route({
  path: '/{name}',
  method: 'GET',
  handler: function(req, res) {
    res('Hello ' + encodeURIComponent(req.params.name));
  }
})

server.start();
