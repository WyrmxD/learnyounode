'use strict';

var total = 0;
var len = process.argv.length;
for (var i = 2; i < len; i++) {
	total += +process.argv[i];
};

console.log(total);