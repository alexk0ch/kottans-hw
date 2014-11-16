var slice = Array.prototype.slice;

function logger (namespace) {
	return function () {
		var argv = slice.call(arguments);
		argv.unshift(namespace);
		console.log.apply(console, argv)
	}
}

module.exports = logger;