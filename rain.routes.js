var _ = require('lodash');
var Rain = require('./rain.model.js')

module.exports = function(app) {

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  // Add
  app.post('/api/rainfall', function (req, res, next) {
    var newRain = new Rain(req.body);
    newRain.save(function(err) {
      if (err) {
        res.json({info: 'rainfall entry error', error:err});
      };
      res.json({info:'rainfall added'});
    });
  });

  // Read
app.get('/api/rainfall', function (req, res, next) {
  Rain.find(function(err, rain) {
    if (err) {
      res.json({info: 'error during read'});
    }
    res.json({info: 'rain found', data: rain});
  })
});

  app.get('/api/rainfall/:id', function (req, res, next) {
    Rain.findById(req.params.id, function(err, rain) {
      if (err) {
        res.json({info: 'error during read', error:err});
      };
      if (rain) {
        res.json({info: 'rainfall found', data:rain});
      } else {
        res.json({info: 'rainfall not found'});
      }
    });
  });

}


// Sat Jul 02 2016 00:43:59 GMT+0930 (ACST)
