var express = require("express");
var fs = require("fs");
var app = express();

app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
  var page = fs.readFileSync("./index.html", "utf8");
  res.send(page);
});









var server = app.listen(80, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});