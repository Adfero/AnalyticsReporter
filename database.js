var config = require('./config.json');
var mongoose = require('mongoose');

mongoose.connect(config.mongo.connection_string);

exports.User = mongoose.model('User', {
  id: String,
  token: String
});
