var q = require('q');
var qIO = require('q-io/http');

qIO.read('http://localhost:1337')
	.then(JSON.parse)
	.then(console.log)