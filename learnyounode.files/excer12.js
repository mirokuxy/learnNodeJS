// uppercase file server
/*
	transform stream data as it's passing through: through2-map
	
	var map = require('through2-map');
	inStream.pipe(map(function(chunk){
		return chunk.toString().split('').reverse().join('');
	})).pipe(outStream);

*/

var http = require('http');
var map = require('through2-map');

var port = process.argv[2];

var server = http.createServer(function(request,response){
	if(request.method != 'POST')
		return response.end('send me a POST\n');
	
	request.pipe(map(function(chunk){
		return chunk.toString().toUpperCase();
	})).pipe(response);
})

server.listen(port);