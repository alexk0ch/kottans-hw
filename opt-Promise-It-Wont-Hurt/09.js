var q = require('q');

deferOne = q.defer();
deferTwo = q.defer();

function all (p1, p2) {
	var internal = q.defer();
	var counter = 0;
	var res = [];

	[p1, p2].forEach(function (defer) {
		defer.promise.then(
			function (val) {
				res.push(val);
				counter++;
				if (counter === 2) {
					internal.resolve(res);
				}
			},
			function () {
				internal.reject('Error')
			}
		)
	})

	return internal.promise
}

all(deferOne, deferTwo)
	.then(console.log)

setTimeout(function () {
	deferOne.resolve('PROMISES');
	deferTwo.resolve('FTW');
}, 200)