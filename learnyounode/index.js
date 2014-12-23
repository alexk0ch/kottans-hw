var http 		= require('http'),
	fs 			= require('fs'),
	net 		= require('net'),
	path 		= require('path'),
	filteredFs 	= require('./filteredFs'),
	strftime 	= require('strftime'),
	stMap 		= require('through2-map'),
	url 		= require('url');


// console.log('HELLO WORLD');



// console.log(
// 	process.argv.slice(2).reduce(function (sum, num) {
// 		return sum += +num
// 	}, 0)
// )



// console.log(
// 	fs.readFileSync(process.argv[2])
// 		.toString()
// 		.split('\n')
// 		.length - 1
// )



// fs.readFile(
// 		process.argv[2], function (err, data) {
// 			console.log(
// 				data
// 				.toString()
// 				.split('\n')
// 				.length - 1
// 			)
// 		}
// 	)



// fs.readdir(
// 		process.argv[2], function (err, list) {
// 			console.log(
// 				list.filter(function (file) {
// 					return path.extname(file) === '.' + process.argv[3]
// 				})
// 				.join('\n')
// 			)
// 		}
// 	)



// filteredFs.apply(console, process.argv.slice(2).concat(function (err, elem) {
// 	console.log(elem.join('\n'));
// }))



// http.get(process.argv[2], function (res) {
// 	res.setEncoding('utf8')
// 	res.on('data', console.log)
// })



// http.get(process.argv[2], function (res) {
// 	res.setEncoding('utf8')

// 	var stack = [];

// 	res
// 		.on('data', pushToStack)
// 		.on('end', print)

// 	function pushToStack (data) {
// 		stack.push(data);
// 	}

// 	function print () {
// 		var resStr = stack.join('');
// 		console.log( [resStr.length, resStr].join('\n') )
// 	}
// })




// var urls = process.argv.slice(2).map(function (url) {
// 	return { url: url }
// })

// urls.done = 0;

// urls.forEach(function (urlState) {
// 	http.get(urlState.url, function (res) {
// 		res.setEncoding('utf8');

// 		var stack = [];

// 		res
// 			.on('data', pushToStack)
// 			.on('end', collect)

// 		function pushToStack (data) { stack.push(data) }
// 		function collect () { 
// 			urlState.data = stack.join('');
// 			urls.done++;

// 			if (urls.done === urls.length)
// 				urls.forEach(function (urlState) {
// 					console.log(urlState.data)
// 				})
// 		}
// 	})
// })




// var server = net.createServer(netProcessor)
// 				.listen(process.argv[2])

// function netProcessor (socket) {
//   socket.end(strftime('%F %T').slice(0, -3))
// }

// var http = require('http');
// var fs = require('fs');
// var file = process.argv[3];
// console.log(file)
// var server = http.createServer(function (req, res) {
// 	var stream = fs.createReadStream(file)
// 	stream.on('readable', function () {
// 		stream.pipe(res)
// 	})
// });
// server.listen(process.argv[2])

// var server = http.createServer(function (req, res) {
// 	if(req.method !== "POST") return
// 	var body = '';

// 	req.on('data', function (data) {
// 		body += data
// 	})

// 	req.on('end', function () {
// 		res.end(body.toUpperCase())
// 	})

// 	или с либой:
// 	req.pipe(stMap(function (chunk) {
//       return chunk.toString().toUpperCase()
//     })).pipe(res)

// }).listen(process.argv[2])

var server = http.createServer(mid).listen(process.argv[2])

function mid (req, res) {
	res.writeHead(200, { 'Content-Type': 'application/json' })

	var params = url.parse(req.url, true);
	var d = new Date(params.query.iso);
	var result = null;

	if (params.pathname === '/api/parsetime') {
		result = {
			hour 	: d.getHours(),
			minute	: d.getMinutes(),
			second 	: d.getSeconds()
		}
	}

	if (params.pathname === '/api/unixtime') {
		result = {unixtime : d.getTime()}
	}

	res.end(JSON.stringify(result))
	
}