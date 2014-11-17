module.exports = function curryN(fn, n) {
	if (!n) n = fn.length;
	return function (arg) {
		if (n === 1) {
			return fn.apply(this, arguments);
		} else {
			n--;
			return curryN(fn.bind(this, arg), n)
		}
	};
}

//Stolen from Lexa Aza. I am too dumb to handle this. xD
