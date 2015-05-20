// #1
// console.log("HELLO WORLD");

// #2
// var sum = 0;
//
// for (var i = 2; i < process.argv.length; i++) {
// 	sum += parseInt(process.argv[i]);
// };
//
// console.log(sum);

// #3
// var fs = require('fs');
//
// var content = fs.readFileSync(process.argv[2], 'utf-8');
// var lines = content.split('\n');
// console.log(lines.length-1);

// #4
// var fs = require('fs');
//
// var content = fs.readFile(process.argv[2], 'utf-8', function(err, data) {
// 	var lines = data.split('\n');
// 	console.log(lines.length-1);
// });

// #5
// var fs = require('fs'),
//     ext = '.'+process.argv[3];
//
// var content = fs.readdir(process.argv[2], function (err, list) {
// 	list.forEach(function(item) {
// 		if (item.indexOf(ext) > -1) {
// 			console.log(item);
// 		}
// 	});
//
// });

// #6
// var helperDirectories = require('./helper-function');
//
// helperDirectories(process.argv[2], process.argv[3], function(err, results){
// 	if (err) {
// 		console.log('Magical error has occured:', err);
// 	}
//
// 	results.forEach(function(item) {
// 		console.log(item);
// 	})
// });

// #7
// var http = require('http');
//
// http.get(process.argv[2], function(response) {
// 	response.on("data", function(data) {
// 		console.log(data.toString());
// 	})
// })


// #8
// var http = require('http');
// var concatStream = require('concat-stream');
//
// http.get(process.argv[2], function(response) {
// 	response.pipe(concatStream(function(err, data) {
// 		if (err) {
// 			console.log('Error has occured:', err);
// 		}
// 		console.log(data.toString().length);
// 		console.log(data.toString());
// 	})
// )})

// #9
var http = require('http');
var bl = require('bl');

var results = [],
    count = 0;

function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i])
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
				return console.error("Something went wrong: ", err)
			}

      results[index] = data.toString()
      count += 1;

      if (count === 3) {
				printResults();
			}

    }))
  })
}

for (var i = 0; i < 3; i++) {
	httpGet(i);
}
