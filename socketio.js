var express = require('express');
var app = express();
// set app() as the default function listener of server 'request'
var server = require('http').createServer(app);

var io = require('socket.io')(server);

io.on('connection',function(client){
	console.log('Client connected...');

	//client.emit('messages',{hello: 'world'});
	client.on('join',function(name){
		client.nickname = name;
		console.log(client.nickname + " joined");
	})
	
	client.on('messages',function(data){
		console.log(data);
		
		var nickname = client.nickname;
		client.broadcast.emit("messages", nickname + ": " + data);
		client.emit("messages",nickname + ": " + data);
	})

});

app.get('/',function(req,res){
	res.sendFile(__dirname  + "/index.html");
});

server.listen(8080);

// --
// use !== to compare true