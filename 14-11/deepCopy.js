function deepCopy (source) {
	var out = {};

	if (source instanceof Object) {

		for (var key in source) {
			if (source[key] instanceof Array) {
				out[key] = [];
				source[key].forEach(function (elem) {
					out[key].push(elem);
				})		
			} else {
				out[key] = source[key];
			}
		}	

	} else {
		return source;
	}

	return out;
}