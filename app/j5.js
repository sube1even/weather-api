// This js file needs to run on boot
console.log("app.js running");
var request = require('request');
var datetime = new Date();

var raspi = require('raspi-io');
var five = require('johnny-five');
var board = new five.Board({
  io: new raspi()
});

board.on('ready', function () {

  // Create a new `button` hardware instance.
  var button = new five.Button("P1-13");

  console.log("Waiting for rain...");
  button.on("press", function () {

    console.log("Raining");

    request.post('http://localhost:3000/api/rainfall', { form: { "amount": 1, "date": datetime } },
      function (error, response, body) {
        if (!error && response.statusCode == 200) {
          console.log(body)
        }
      }
    );

  });


});

 



