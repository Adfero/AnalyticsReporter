var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var schema = new mongoose.Schema({
  'created': { type: Date, default: Date.now },
  'modified': { type: Date, default: Date.now },
  'email': {'type': String, 'index': { 'unique': true }},
  'password': String,
  'sites': [
    {
      'type': mongoose.Schema.Types.ObjectId,
      'ref': 'Site'
    }
  ],
  'active': {
    'type': Boolean,
    'default': true
  }
});

schema.pre('save', function(next) {
  this.modified = new Date();
  next();
});

schema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

schema.methods.setPassword = function(password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

schema.methods.getSites = function(done) {
  var Site = mongoose.model('Site');
  Site
    .find({
      '_id': {
        '$in': this.sites
      }
    })
    .sort({
      'name': 1
    })
    .exec(done);
}

var User = mongoose.model('User',schema);
