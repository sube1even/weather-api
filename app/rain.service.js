// This js file needs to run on boot
console.log("app.js running");
var Cylon = require('cylon');
var request = require('request');

// {"amount":"1","date":datetime}

Cylon.robot({
  connections: {
    raspi: { adaptor: 'raspi' }
  },

  devices: {
    button: { driver: 'button', pin: 11 }
  },

  work: function(my) {
    console.log("Waiting for rain...");
    my.button.on('push', function() {
        console.log("Raining");
        var datetime = Date();

        request.post( 'http://localhost:3000/api/rainfall', { form: {"amount":1,"date":datetime} },
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log(body)
                }
            }
        );

    });
  }
}).start();