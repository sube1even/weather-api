var mongoose = require('mongoose');

var rainSchema = mongoose.Schema({
  amount: Number,
  date: Date
});

module.exports = mongoose.model('Rain', rainSchema);
