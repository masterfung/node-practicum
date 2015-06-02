var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});

server.route({
  method: 'POST',
  path: '/upload',
  handler: function (req, res) {
    var body = '';
    req.payload.file.on('data', function(data) {
      body += data
    });
    req.payload.file.on('end', function() {
      var result = {
        description: req.payload.description,
        file: {
          data: body,
          filename: req.payload.file.hapi.filename,
          headers: req.payload.file.hapi.headers
        }
      };
      res(JSON.stringify(result));
    })
  },
  config: {
    payload: {
      output: 'stream',
      parse: true,
      allow: 'multipart/form-data'
    }
  }
})

server.start();
