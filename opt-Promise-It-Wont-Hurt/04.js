var q = require('q');
var d = q.defer();

d.promise
	.then(console.log)
	.fail(console.log);

d.resolve('SECOND');

console.log('FIRST');