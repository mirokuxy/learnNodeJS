var fs = require('fs');
var path = require('path');

module.exports = function(myPath,myExt,callback){
	fs.readdir(myPath,function(err,list){
		if(err) 
			return callback(err);

		/*
		files = [];
		list.forEach(function(name){
			if(path.extname(name) === '.' + myExt)
				//console.log(name);
			files.push(name);
		})
		*/
		
		files = list.filter(function(file){
			return path.extname(file) === '.' + myExt
		})

		

		callback(null,files);
	})	
}
