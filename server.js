var express = require('express');
var app = express();
const PORT = 3000;

var middleware = {
  requireAutentication: function (req,res, next) {
      console.log("private route hit!");
  }
};

//app.use(middleware.requireAutentication);

app.get('/about', middleware.requireAutentication, function(req, res){
  res.send('About us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
  console.log("Express server online in localhost:" + PORT);
});
