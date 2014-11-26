var q = require('q');

q.fcall(JSON.parse, process.argv[2])
	.then(console.log)
	.fail(console.log)