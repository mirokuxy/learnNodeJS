var express = require('express');
var app = express();
// set app() as the default function listener of server 'request'
var server = require('http').createServer(app);

var io = require('socket.io')(server);

app.get('/',function(req,res){
	res.sendFile(__dirname  + "/index.html");
});

server.listen(8080);

var redis = require('redis');

var chatdb = redis.createClient();

/*
var messages = [];

var storeMessage = function(name,data){
	messages.push({name:name,data:data});
	if(messages.length > 10){
		messages.shift();
	}
}
*/

var storeMessage = function(name,data){
	var message = JSON.stringify({name:name,data:data});

	chatdb.lpush('messages',message,function(err,response){
		chatdb.ltrim('messages',0,9);
	})
}

io.on('connection',function(client){
	
	console.log("new connection");

	client.on('join',function(name){
		//client.set('nickname',name);
		client.nickname = name;
		client.broadcast.emit('messages',name + " joined the chat");	

		chatdb.lrange('messages',0,-1,function(er,messages){
			messages = messages.reverse();

			messages.forEach(function(message){
				message = JSON.parse(message);
				client.emit('messages',message.name + ': ' + message.data);
			})	
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