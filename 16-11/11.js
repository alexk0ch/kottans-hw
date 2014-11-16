module.exports = function (arr, fn) {
	return arr.reduce(function (acc, inc, index, arr) {
		acc.push(fn(inc));
		return acc;
	}, [])
};