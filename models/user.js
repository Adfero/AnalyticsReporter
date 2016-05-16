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

schema.methods.toAPIObject = function() {
  var obj = this.toObject();
  delete obj.password;
  return obj;
}

schema.statics.getForAPI = function(req,res,next,id) {
  User.findById(id,function(err,object) {
    if (err) {
      next(err);
    } else if (req.user && object && object._id.toString() == req.user._id.toString()) {
      req._user = object;
      next();
    } else {
      res.sendStatus(404);
    }
  })
};

var User = mongoose.model('User',schema);
