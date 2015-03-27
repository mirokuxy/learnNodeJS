// Stream object can emit events : 
// 3 most popular ones : data, error, end

/*
var http = require('http');

http.get(process.argv[2],function(response){
	response.on('data',function(data){
		str = data.toString();
		console.log(str);
	})
})
*/

var http = require('http');

http.get(process.argv[2],function(response){
	response.setEncoding('utf8');
	response.on('data',console.log);
	response.on('error',console.error);
})