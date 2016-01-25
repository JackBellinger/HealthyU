var express = require('express');
var requestProxy = require('express-request-proxy');

var server = express();
server.use(express.static('./public'));
server.get('/api/postmates/*', requestProxy({
	url: "https://api.postmates.com/v1/*",
	headers: {
		'authorization': 'Basic NDE2YWI0OGUtNGRlYS00NGY0LTljMzItZjYyMWFmNDE4MTBiOg==',
		'cache-control': 'no-cache',
		'postman-token': '06e18990-7dc4-c810-7979-7f08e6db370c'
	}
}));
server.post('/api/postmates/*', requestProxy({
	url: "https://api.postmates.com/v1/*",
	headers: {
		'authorization': 'Basic NDE2YWI0OGUtNGRlYS00NGY0LTljMzItZjYyMWFmNDE4MTBiOg==',
		'cache-control': 'no-cache',
		'postman-token': '06e18990-7dc4-c810-7979-7f08e6db370c'
	}
}));
server.listen(3000, function() {
	console.log('The server is running on port 3000');
});