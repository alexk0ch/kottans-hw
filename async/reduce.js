var http = require('http'), 
	async = require('async'),
	fs = require('fs'),
	url = process.argv[2];

async.reduce(['one', 'two', 'three'], 0, function (memo, item, cb) {
	http.get(url + '?number=' + item, function (res) {
		var body = ''
		res.on('data', function (chunk) {
			body += chunk.toString();
		})
		res.on('end', function () {
			return cb(null, memo + +body);
		})
	})
},
function (err, results) {
	console.log(results)
})


