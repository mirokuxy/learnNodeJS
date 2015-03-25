// modules

//file: myHello.js

var hello = function(){
	console.log("hello\n");
}

module.exports = hello;	// export a single function hello()

// use

var hello = require("./myHello");
hello();

//--------------------------

// file : myGoodbye

// allow many exports in a single file
exports.goodbye = function(){
	console.log("bye!");
}

// use
var gb = require("./myGoodBye.js");
gb.goodbye();	
// or 
var gb2 = require("./myGoodbye.js").goodbye;
gb2();
// or
require("./myGoodbye.js").goodbye();	// when only need to call once

// ----------------------------
