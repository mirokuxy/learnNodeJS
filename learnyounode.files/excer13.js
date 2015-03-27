var http = require('http');
var url = require('url');

var port = process.argv[2];
var server = http.createServer(function(request,response){
	if(request.method != 'GET')
		return response.end('send me a get request\n');

	console.log(request.url);

	var res = url.parse(request.url,true);
	var query = res.query;
	var path = res.pathname;

	console.log(query);

	var date = new Date(query.iso);
	
	response.writeHead(200, { 'Content-Type' : 'application/json' });

	if(path == '/api/parsetime'){
		var reply = {hour:date.getHours(), minute:date.getMinutes(), second:date.getSeconds()};
		reply = JSON.stringify(reply);
		response.end(reply);
	}
	else if(path == '/api/unixtime'){
		var reply = {unixtime: date.getTime()};
		reply = JSON.stringify(reply);
		response.end(reply);
	}
});

server.listen(port);