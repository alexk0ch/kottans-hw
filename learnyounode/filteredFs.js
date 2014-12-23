var fs = require('fs'),
	path = require('path');

function filteredFs (dirName, extName, callback) {
	return fs.readdir(
		dirName, function (err, list) {
			if (err) return callback(err)
			return callback(null, list.filter(function (fileName) {
				return path.extname(fileName) === '.' + extName
			}))
		}
	)
}

module.exports = filteredFs;