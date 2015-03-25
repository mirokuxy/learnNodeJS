var http = require('http');  // require modules

http.createServer(function(request,response){
	response.writeHead(200);
	response.write("hello, this is dog\n");
	response.end();
}).listen(8080);

console.log('Listening on port 8080...');

/*
run script : node hello.js

connect server : curl http://localhost:8080

*/Finished!