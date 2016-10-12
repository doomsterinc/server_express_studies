var express = require('express');
var app = express();
const PORT = 3000;

app.get('/about', function(req, res){
  res.send('About us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
  console.log("Express server online in localhost:" + PORT);
});
