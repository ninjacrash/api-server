var express = require('express');
var app = express();

app.get('/api', function(req, res) {
  res.sendStatus(200);
});

var server = app.listen(3001, function() {
  console.log('Server listening on port 3001');
});
