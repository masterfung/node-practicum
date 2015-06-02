var Hapi = require('hapi');
var Joi = require('joi');

var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});

server.route({
  method: 'POST',
  path: '/login',
  handler: function(req, res) {
    res('login successful')
  },
  config: {
    validate: {
      payload: Joi.object({
        username: Joi.string(),
        password: Joi.string().alphanum(),
        accessToken: Joi.string().alphanum(),
        birthyear: Joi.number().integer().min(1875).max(2015),
        email: Joi.string().email()
      })
      .options({
        allowt
        iUnknown: true
      })
      .with('usermame', 'birthyear')
      .without('password', 'accessToken')
    }
  }
})

server.start();
