var http = require('http');
var bl = require('bl');

if (process.argv.length != 3) {
	return -1;
}

var url = process.argv[2];

http.get(url, function(response){
	response.pipe(bl(function(err, data){

		if (err) {
			return console.error(err);
		}
		data = data.toString();
		console.log(data.length);
		console.log(data);
	}))
})