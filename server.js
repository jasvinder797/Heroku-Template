var express = require('express');
var app = express();
var path = require("path");
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8000);

app.use(express.static(path.join(__dirname,"static")))

io.on('connection', function (socket) {
socket.on('userName',function(data)
     {
       console.log('user'); 
       socket.emit('userList', data);
       socket.broadcast.emit('userList', data)
     })
      socket.on('sendMessage',function(userName,message)
     {
       console.log("send"); 
       socket.emit('displayMsg', userName,message);
       socket.broadcast.emit('displayMsg', userName,message)
     })
	 
});