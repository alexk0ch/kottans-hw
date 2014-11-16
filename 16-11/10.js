module.exports = function (ns) {
	return console.log.bind(console, ns);
};