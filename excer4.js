var fs = require('fs');

// add 'utf8' to automatically do toString()
fs.readFile(process.argv[2],'utf8',function(err,file){
	var lines = file.split('\n').length - 1;
	console.log(lines);
});