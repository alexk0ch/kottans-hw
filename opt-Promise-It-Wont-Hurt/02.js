var q = require('q');
var d = q.defer();

function printError (error) {
	console.log(error.message)
}

// d.promise.then(null, console.log)
d.promise.fail(console.log)
setTimeout(d.reject('REJECTED!'), 300);