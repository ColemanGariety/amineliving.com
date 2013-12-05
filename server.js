var express = require('express')
  , server = express()
  , fs = require('fs')

server.set('view engine', 'html');
server.engine('html', require('hbs').__express)

server.get('/', function (req, res) {
  res.render('layout', { yield: fs.readFileSync('./views/index.html') })
})

server.get('/about', function (req, res) {
  res.render('layout', { yield: fs.readFileSync('./views/about.html') })
})

server.get('/download', function (req, res) {
  res.render('layout', { yield: fs.readFileSync('./views/download.html') })
})

server.get('/merch', function (req, res) {
  res.render('layout', { yield: fs.readFileSync('./views/merch.html') })
})

server.get('/tour', function (req, res) {
  res.render('layout', { yield: fs.readFileSync('./views/tour.html') })
})

server.use(express.static(__dirname + '/public'))

var port = process.env.PORT || 5000;
server.listen(port, function() {
  console.log("Listening on " + port);
})