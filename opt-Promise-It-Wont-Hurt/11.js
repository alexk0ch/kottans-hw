var q = require('q');
var qIO = require('q-io/http');
var toString = Object.prototype.toString;


qIO.read('http://localhost:7000')
	.then(function (val) {
		var id = val.toString()
		return id
	})
	.then(function (id) {
		qIO.read('http://localhost:7001/' + id)
			.then(function (user) {
				return JSON.parse(user.toString())
			})
			.then(console.log)
	})

//фак, в ответе куда проще оказалось.. перемудрил))