var http = require('http');  // require modules

http.createServer(function(request,response){
	response.writeHead(200);
	response.write("hello, dos is running\n");
	setTimeout(function(){
		response.write('dog is done\n');
		response.end();
	},5000); // 5000ms = 5 seconds
	//response.end();
}).listen(8080);

console.log('Listening on port 8080...');

/*
run script : node hello.js

connect server : curl http://localhost:8080

*/

// --------------------------------
var fs = require('fs');

fs.readFile('index.html',function(error,contents){
	console.log(contents);
});	// readFile : non-blocking

//-----------------------------------
var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200,{'Content-Type':'text/html'});
  fs.readFile("index.html",function(error,contents){
    response.write(contents);
  	response.end();
  });
}).listen(8080);

//------------------------------------