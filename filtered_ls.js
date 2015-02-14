'use strict';

var fs = require('fs');
var path = require('path');

if (process.argv.length != 4) 
{
	return -1;
}

var folder = process.argv[2];
var extension = process.argv[3];

fs.readdir(folder, function(err, dir_content) {
	dir_content.forEach(function (file) {
		if (path.extname(file) === '.' + extension) {
			console.log(file);
		}
	});
})
