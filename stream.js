var http = require('http');
var fs = require('fs');

/*
http.createServer(function(request,response){
	response.writeHead(200);
	request.on('readable',function(){
		var chunk = null;
		while( (chunk = request.read()) != null){
			//console.log(chunk.toString());
			response.write(chunk);   // no need to use toString(), write() will do that.
		}
	});

	request.on('end',function(){
		response.end();
	});
}).listen(8080);
*/
// a simpler version

/*
http.createServer(function(request,response){
	response.writeHead(200);
	request.pipe(response);
}).listen(8080);
*/
//-----------------------
//var fs = require('fs');

/*
var file = fs.createReadStream("hello.js");
var newFile = fs.createWriteStream("hello_copy.js");

file.pipe(newFile);
*/

//----------------------
// upload a file
/*
http.createServer(function(request,response){
	var newFile = fs.createWriteStream("newFile");
	request.pipe(newFile);

	request.on('end',function(){
		response.end("uploaded");
	});
}).listen(8080);
*/

//------------------------

/* ??? not working

http.createServer(function(request,response){
	var newFile = fs.createWriteStream("NewFile");
	var fileBytes = request.headers['content-length'];
	var uploadedBytes = 0;

	request.on('readable',function(){
		var chunk = null;
		while(null != (chunk = request.read())){
			uploadedBytes += chunk.length;
			var progress = (uploadedBytes / fileBytes) * 100;
			repsonse.write("progress : " + parseInt(progress,10) + "%\n");
		}
	});

	request.on('end',function(){
		response.end();
	});

	request.pipe(newFile);
}).listen(8080); 

*/

//----------------------
//var fs = require('fs');
// read from file to console
/*
var file = fs.createReadStream('hello.js');

file.on('readable',function(){
	var chunk = null;
  while(null !== (chunk = file.read())){
  	console.log(chunk.toString());      
  }
});

//file.pipe(process.stdout);

*/

//------------------------
//var fs = require('fs');
/*
var file = fs.createReadStream('hello.js');
var destFile = fs.createWriteStream('hello_copy.js');

//file.pipe(destFile);	// pipe automatically close the writable stream "destFile"
file.pipe(destFile,{end:false});  // turn off automatic closing of writable stream

file.on('end', function(){
  destFile.end('Finished!');
});
*/

//-----------------------------
//var fs = require('fs');
//var http = require('http');
//serve as index.html

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});

  var file = fs.createReadStream("hello.js");
  file.pipe(response);
  
}).listen(8080);

