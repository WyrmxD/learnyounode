'use strict';

var fs = require('fs');

if (process.argv.length != 3) 
{
	return -1;
}

var filepath = process.argv[2];
var file_buffer = fs.readFileSync(filepath);
var num_lines = file_buffer.toString().split('\n') - 1;

console.log(num_lines.length);
