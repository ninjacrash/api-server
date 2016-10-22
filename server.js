var express = require('express');
var app = express();
var twilio = require('twilio');
var parser = require('body-parser');
app.use(parser.urlencoded());

app.post('/', function(req, res) {
  var resp = new twilio.TwimlResponse();
  console.log(req.body);
  resp.message('test message');
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(resp.toString());
});

var server = app.listen(8890, function() {
  console.log('Server listening on port 8890');
});
