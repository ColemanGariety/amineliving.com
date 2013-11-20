var express = require('express')
  , app = express()

app.get('/', function (req, res) {
  res.send('future home of amineliving.com')
})

app.listen(8080)
