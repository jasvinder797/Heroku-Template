
var express = require('express');
var app = express();
var path = require("path");
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 8000;
app.use(express.static(path.join(__dirname,"static")))
io.on('connection', function (socket) {

     socket.on('userName',function(userName,color)
     {
       console.log('user'); 
       socket.emit('userList', userName,color);
       socket.broadcast.emit('userList', userName,color)
     })
      socket.on('sendMessage',function(userName,message,color)
     {
       console.log("send"); 
       socket.emit('displayMsg', userName,message,color);
       socket.broadcast.emit('displayMsg', userName,message,color)
     })
	// socket.on('disconnect', function(){
	// console.log("disconnect");
    //        socket.emit('userList', data);
    //      socket.broadcast.emit('userList', data)
    //    })	
});

server.listen(port, function() {
 console.log("Server is running at : http://localhost:" + port);
});