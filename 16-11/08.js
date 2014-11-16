function duckCount () {
	return [].slice.call(arguments).reduce(function (acc, inc) {
		if (Object.prototype.hasOwnProperty.call(inc, 'quack')) acc++;
		return acc;
	}, 0)
}

module.exports = duckCount;