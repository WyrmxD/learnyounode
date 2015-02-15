var http = require('http');
var bl = require('bl');

if (process.argv.length != 5) {
	return -1;
}

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

function myGet(url, callback) {

	http.get(url, function(response){
		response.pipe(bl(function(err, data){

			if (err) {
				return callback(err);
			}
			callback(null, data);
		}))
	})
}

myGet(url1, function(err, data) {
	if (err)
		return console.error('Error: ' + err);
	console.log(data.toString());
	
	myGet(url2, function(err, data) {
		if (err)
			return console.error('Error: ' + err);
		console.log(data.toString());
		
		myGet(url3, function(err, data) {
			if (err)
				return console.error('Error: ' + err);
			console.log(data.toString());
		})
	})
});
