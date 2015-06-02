var Hapi = require('hapi');
var Joi = require('joi');

var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});

server.state('session', {
  path: '/{path*}',
  encoding: 'base64json',
  ttl: 10,
  domain: 'localhost'

})

server.route({
  method: 'GET',
  path: '/set-cookie',
  handler: function(req, res) {
    return res({
      message: 'success',
    }).state('session',
    {key: 'makemehapi'})
  },
  config: {
    state: {
      parse: true,
      failAction: 'log'
    }
  }
});

server.route({
  method: 'GET',
  path: '/check-cookie',
  handler: function(req, res) {
    var session = req.state.session;
    var result;
    if (session) {
      result = {
        user: 'hapi'
      }
    } else {
      result = new Hapi.error.unauthorized('Authentication Not Found!')
    }
    return res(result);
  }
});

server.start();
