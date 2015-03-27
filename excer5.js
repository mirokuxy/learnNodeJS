/*
var fs = require('fs');

var Path = process.argv[2];
var Ext = process.argv[3];

fs.readdir(Path,function(err,list){
	for(i in list){
		name = list[i];
		ext = name.split('.')[1];
		//console.log(name, ext);

		if(ext == Ext) console.log(name);
	}
})
*/

var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2],function(err,list){
	list.forEach(function(name){
		if(path.extname(name) === '.' + process.argv[3])
			console.log(name);
	})
})