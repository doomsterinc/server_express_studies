var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello from the express!');
  console.log("server online in localhost:3000");
});

app.listen(3000);
