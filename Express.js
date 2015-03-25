/*
var express = require('express');

var app = express();

app.get('/',function(request,response){
	response.sendFile(__dirname + "/hello.js");
});
*/

//app.listen(8080);
/*
var request = require('request');
var url = require('url');
*/
/*
app.get('/tweets/:username',function(req,response){
	var username = req.params.username;

	options = {
		protocol: "http:",
		host: 'api.twitter.com',
		pathname: '/1/statuses/user_timeline.json',
		query: {screen_name: username, count:10}
	}

	var twitterUrl = url.format(options);
	request(twitterUrl).pipe(response);
});
*/
/*
app.get('/tweets/:username',function(req,response){
	var username = req.params.username;

	options = {
		protocol: "http:",
		host: 'api.twitter.com',
		pathname: '/1/statuses/user_timeline.json',
		query: {screen_name: username, count:10}
	}

	var twitterUrl = url.format(options);
	request(twitterUrl,function(err,res,body){
		var tweets = JSON.parse(body);
		console.log(tweets);
		response.locals = {tweets: tweets,name:username};
		response.render('tweets.ejs');
	});
});
*/

//-------------------------------
/*
var express = require('express');
var app = express();

var quotes = {
  'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
  'berners-lee': 'The Web does not just connect machines, it connects people',
  'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
  'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
};

app.get('/quotes/:name',function(req,response){
  var name = req.params.name;
  response.writeHead(200);
  response.write(quotes[name]);
  response.end();
});

app.listen(8080);
*/

// ejs quotes ----------------------
/*
<h2>Quote by <%= name %></h2>

<blockquote>
  <%= quote %>
</blockquote>
*/

/*
var express = require('express');
var app = express();

var quotes = {
  'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
  'berners-lee': 'The Web does not just connect machines, it connects people',
  'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
  'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
};

app.get('/quotes/:name', function(req, res) {
  var quote = quotes[req.params.name];
  res.locals = {name:req.params.name, quote:quote};
  res.render('quote.ejs');
  
});

app.listen(8080);
*/
var url = require('url');

options = {
  // add URL options here
  protocol: "http:",
  host: "search.twitter.com",
  pathname: "/search.json",
  query: {q:"codeschool"}
};

var searchURL = url.format(options);
console.log(searchURL);

var request = require('request');
request(searchURL,function(error,response,body){
  console.log(body);
});

var express = require('express');
var app = express(); // Create server here
app.get('/',function(req,res){
  request(searchURL).pipe(res);
});
app.listen(8080);