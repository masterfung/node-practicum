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
var helperDirectories = require('./helper-function');

helperDirectories(process.argv[2], process.argv[3], function(err, results){
	if (err) {
		console.log('Magical error has occured:', err);
	}

	results.forEach(function(item) {
		console.log(item);
	})
});
