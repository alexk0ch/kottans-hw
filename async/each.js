var http = require('http'), 
	async = require('async'),
	fs = require('fs'),
	urls = [ process.argv[2], process.argv[3] ];


async.each(urls, function (url, done) {
	http.get(url, function (res) {
		var body = ''
		res.on('data', function (chunk) {
			body += chunk.toString();
		})
		res.on('end', function () {
			return done(null, body);
		})
		res.on('error', function (err) {	
			return done(err)
		})
	})
	.on('error', function (err) {
		done(err);
	})
},
function (err, results) {
	if (err) return console.log(err);
	console.log(results)
})


