module.exports = function () {
	var args = [].slice.call(arguments).slice(1);
	return [].slice.apply(arguments[0], args)
	// Function.call.bind(Array.prototype.slice)
}