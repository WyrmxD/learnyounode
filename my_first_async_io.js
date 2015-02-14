'use strict';

var fs = require('fs');

if (process.argv.length != 3) 
{
	return -1;
}

var filepath = process.argv[2];
fs.readFile(filepath, 'utf8', printTotal);

function printTotal(err, file_buffer)
{
	var num_lines = file_buffer.split('\n').length - 1;	
	console.log(num_lines);
}

