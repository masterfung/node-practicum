module.exports = function(dirname, ext, callback) {
  var fs = require('fs'),
      ext = "." + ext;
      
  fs.readdir(dirname, function(err, list) {
    if (err) {
      return callback(err);
    }
    var results = [];
    list.forEach(function(item) {
      if (item.indexOf(ext) > -1) {
        results.push(item);
      }
  });
    callback(null, results)
  })
};
