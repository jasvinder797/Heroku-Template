
var express = require('express');
var app = express();
var path = require("path");
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8000);

app.use(express.static(path.join(__dirname,"static")))
var users = [];
io.on('connection', function (socket) {

	console.log("hello : "+socket.id);
    users.push(socket.id);
    console.log(users);
	socket.on('disconnect', function(){
		console.log("disconnect");
        for(var i = 0 ; i<users.length; i++){
            if(users[i]==socket.id);
            {
                users.splice(i,1);
            }
        }
        console.log(users);
	})

	 socket.emit('userList', users);
	socket.on('hello server', function(data){
		console.log(data);
	})


 
});