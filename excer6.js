
var myModule = require('./excer6_module.js');

myModule(process.argv[2],process.argv[3],function(err,files){
	//console.log(files);
	if(err) 
		return console.error('There was an error: ', err);
	
	files.forEach(function(name){
		console.log(name);
	})
})