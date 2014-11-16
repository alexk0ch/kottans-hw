function countWords (inputWords) {
	return inputWords.reduce(function (storage, inc) {
		!storage[inc] ? storage[inc] = 1 : storage[inc] += 1;
		return storage;
	}, {})
}

module.exports = countWords;