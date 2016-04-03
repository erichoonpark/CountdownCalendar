var express = require('express');
var calenderGenerator = require('./PDFdocument');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  calenderGenerator(req.query.event,req.query.days,res);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

