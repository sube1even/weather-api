var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rainfall')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var rainfall = require('./rainfall_routes.js')(app);

var server = app.listen(3000, function () {
  console.log('server running');
});
