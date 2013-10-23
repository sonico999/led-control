var express = require('express')
	, app = express()
	, server = require('http').createServer(app)
  	, io = require('socket.io').listen(server)
	, dgram = require('dgram');

var client = dgram.createSocket('udp4');
var message = new Buffer("100 101 102");

app.use(express.static(__dirname + '/'));

io.sockets.on('connection', function(socket) {
	console.log("Server Connected");
	socket.on('message', function(data) {
		console.log(data);
		client.send(message, 0, message.length, 8888, '10.8.22.190')
	});
});

server.listen(3000);