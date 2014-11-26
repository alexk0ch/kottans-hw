var q = require('q');

function parsePromised (invJSON) {
	var def = q.defer();
	try {
		var res = JSON.parse(invJSON);
	} catch (e) {
		def.reject(e);
	}
	def.resolve(res);
	return def.promise;
}

parsePromised(process.argv[2])
	.then(console.log)
	.fail(console.log)