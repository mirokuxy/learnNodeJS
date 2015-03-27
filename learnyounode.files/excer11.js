// http file server
// http callback (request,response) request,response both streams

var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var filePath = process.argv[3];
var file = fs.createReadStream(filePath);

var server = http.createServer(function(request,response){
	file.pipe(response);
})

server.listen(port);
// caution: port here is a string, but still works anyhow~~