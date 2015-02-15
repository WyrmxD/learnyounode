var fs = require('fs');
var path = require('path');

module.exports = function(dir, extension, callback) {

	fs.readdir(dir, function(err, dir_content) {

		if (err) {
			return callback(err);
		}

		file_list = dir_content.filter(function (file) {
			return path.extname(file) === '.' + extension;
		});

		callback(null, file_list);
	})	
}