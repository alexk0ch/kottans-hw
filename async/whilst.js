var http = require('http'), 
	async = require('async'),
	fs = require('fs'),
	url = process.argv[2],
	result = '', counter = 0;

async.until(
	
	function () {
		return result.trim() === "meerkat";
	}, 

	function (cb) {
		++counter;
		
		http.get(url, function (res) {
			var body = ''
			res.on('data', function (chunk) {
				body += chunk.toString();
			})
			res.on('end', function () {
				result = body;
				return cb(null, body);
			})
		})
	},

	function (err, results) {
		console.log(counter);
	})


