var mymodule = require('./mymodule.js');

if (process.argv.length != 4) {
	return -1;
}

var folder = process.argv[2];
var extension = process.argv[3];

mymodule(folder, extension, function(err, data){
	if (err) {
		return console.log('Something went wrong', err);
	}
	
	data.forEach(function (file) {
		console.log(file);
	});
});