var config = require('../config.json');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

mongoose.connect(config.mongo.connection_string);

var UserSchema = new mongoose.Schema({
  'created': { type: Date, default: Date.now },
  'email': {'type': String, 'index': { 'unique': true }},
  'password': String,
  'reports': [String],
  'admin': {'type': Boolean, 'default': false},
  'active': {'type': Boolean, 'default': true},
});

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

UserSchema.methods.setPassword = function(password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

exports.User = mongoose.model('User',UserSchema);;

var Report = mongoose.model('Report',{
  'name': String,
  'created': { type: Date, default: Date.now },
  'sampleStart': String,
  'sampleStart': String,
  'pathPattern': String,
  'reportStart': String,
  'reportEnd': String,
  'reportURLs': String,
  'auth': {
    'google': {
      'token': String,
      'refresh': String,
      'account': {
        'account': String,
        'property': String,
        'profile': String
      }
    },
    'twitter': {
      'token': String,
      'secret': String
    },
    'facebook': {
      'token': String,
      'refresh': String,
      'page': String
    }
  }
});

exports.Report = Report;