var express = require('express')
var path = require('path')
 
// creating express server
var app = express();
 
 
app.use(express.static(path.join(__dirname,"static")))
 
// setting port number for running server
var port = process.env.PORT || 8000;
 
// starting express server
app.listen(port, function() {
 console.log("Server is running at : http://localhost:" + port);
});