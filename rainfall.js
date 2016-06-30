var _ = require('lodash');

module.exports = function(app) {

  _rainfall = [];

  // Add
  app.post('/rainfall', function (req, res) {
    _rainfall.push(req.body);
    res.json({info: 'rainfall added'});
  });

  // Read
  app.get('/rainfall', function (req, res) {
    res.send(_rainfall)
  });

}
