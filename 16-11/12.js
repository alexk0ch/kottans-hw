function Spy (target, method) {
	var o = {
		count : 0
	};
	var orig = target[method];
	target[method] = function () {
		o.count++;
		return orig.apply(this, arguments);
	}
	return o;
}

module.exports = Spy;