//console.log(process.argv);

var sum = 0;

var len = process.argv.length;
for(var j=2;j<len;j++)
	sum += parseFloat(process.argv[j]);

console.log(sum);