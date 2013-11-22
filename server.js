var express = require('express')
  , server = express()

server.use(express.static(__dirname + '/public/assets'))
server.use(express.static(__dirname + '/public'))

var port = process.env.PORT || 5000;
server.listen(port, function() {
  console.log("Listening on " + port);
})