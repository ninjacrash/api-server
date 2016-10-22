var express = require('express');
var app = express();
var twilio = require('twilio');

app.get('/api', function(req, res) {
  var resp = new twilio.TwimlResponse();
  console.log(req.query);
  resp.say('test message');
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(resp.toString());
});

var server = app.listen(3001, function() {
  console.log('Server listening on port 3001');
});
