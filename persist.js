var express = require('express');
var app = express();
// set app() as the default function listener of server 'request'
var server = require('http').createServer(app);

var io = require('socket.io')(server);

app.get('/',function(req,res){
	res.sendFile(__dirname  + "/index.html");
});

server.listen(8080);



var messages = [];

var storeMessage = function(name,data){
	messages.push({name:name,data:data});
	if(messages.length > 10){
		messages.shift();
	}
}

io.on('connection',function(client){
	console.log("new connection");

	client.on('join',function(name){
		//client.set('nickname',name);
		client.nickname = name;
		client.broadcast.emit('messages',name + " joined the chat");	

		messages.forEach(function(message){
			client.emit('messages',message.name + ': ' + message.data);
		})	
	});
	client.on('messages',function(message){
		//client.get('nickname',function(error,name){
		name = client.nickname;
		client.broadcast.emit('messages',name + ': ' + message);
		client.emit('messages', name + ': ' + message);
		storeMessage(name,message);
	})
}) 