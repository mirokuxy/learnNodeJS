// third party library which takes care of async : async ( npm.im/async) , after(npm.im/after)


var http = require('http');
var bl = require('bl');

var str = [];
var current = 0;
var finished = 0;
var total = 3;


var DoResponse = function(response){
	var now = current;
	current++;

	response.pipe(bl(function(err,data){
		if(err)
			return console.error(err);
		str[now] = data.toString();
		//console.log(str.length);
		//console.log(str);
		finished++;
		if(finished == total){
			str.forEach(function(line){
				console.log(line);
			})
		}
	}))	
};

var myGet = function(index){
	http.get(process.argv[2+index],function(response){
		var now = index;

		response.pipe(bl(function(err,data){
			if(err)
				return console.error(err);
			str[now] = data.toString();
			//console.log(str.length);
			//console.log(str);
			finished++;
			if(finished == total){
				str.forEach(function(line){
					console.log(line);
				})
			}
		}))	
	});
};

myGet(0);
myGet(1);
myGet(2);