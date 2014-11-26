var q = require('q');
var d = q.defer();

function attachTitle (name) {
	return 'DR. ' + name
}

d.promise
	.then(attachTitle)
	.then(console.log)

d.resolve('MANHATTAN')