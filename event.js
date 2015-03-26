var events = require('events');
var EventEmitter = events.EventEmitter;

var chat = new EventEmitter();
chat.on('message',function(message){
	console.log(message);
});

//----------------------
var events = require('events');
var EventEmitter = events.EventEmitter;

var chat = new EventEmitter();
var users = [], chatlog = [];

// .on : register events
chat.on('message', function(message) {
  chatlog.push(message);
});

chat.on('join', function(nickname) {
  users.push(nickname);
});

// Emit events here
chat.emit('join', 'haha');
chat.emit('message',"hello");
// .emit : spawn events

//-------------------------------
var http = require('http');

var server = http.createServer();
server.on('request',function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});
server.listen(8080);

//---------------------------------
var http = require('http');

var server = http.createServer();
server.on('request', function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});
  
server.on('request',function(request,response){
  //response.end();
  console.log("New request coming in...");
});

server.on('close',function(){
	console.log("Closing down the server...");	
});

server.listen(8080);
//-------------------------------