var http = require('http');
var bl = require('bl');

http.get(process.argv[2],function(response){
	//response.setEncoding('utf8');
	/*
	response.pipe(bl(function(err,data){
		if(err)
			return console.error(err);
		str = data.toString();
		console.log(str.length);
		console.log(str);
	}))
	*/
	str = "";
	// caution : not function(err,data) but function(data)
	response.on('data',function(data){
		//console.log(typeof data)
		str += data.toString();

	})

	response.on('end',function(){
		//str = str.toString();
		console.log(str.length);
		console.log(str);
	})

	//response.on('data',console.log);
	//response.on('error',console.error);
})