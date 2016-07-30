var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/weather')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// set routes for api endpoints
var rainfall = require('./rain.routes.js')(app);

// add sensor services
require('./rain.service.js');

var server = app.listen(3000, function () {
  console.log('Express api starting...');
});
