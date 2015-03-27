// file://usr/lib/node_modules/learnyounode/node_apidoc/***.html
// deal with data : strftime (github.com/samsonjs/strftime)

var net = require('net');

var to2digits = function(num){
	num = num.toString();
	if(num.length < 2)
		num = '0' + num;
	return num;
}

var server = net.createServer(function(socket){
	var date = new Date();

	//console.log(date);

	var year = to2digits(date.getFullYear());
	//console.log(date.getMonth());
	// caution: getMonth() return 0~11
	var month = to2digits( date.getMonth() + 1 );
	//console.log(month);
	var day = to2digits( date.getDate() );
	var hour = to2digits( date.getHours() );
	var min = to2digits( date.getMinutes() );

	//console.log(typeof month);

	socket.end(year + '-' + month + '-' + day + ' ' + hour + ':' + min + '\n');
})

server.listen(process.argv[2]);