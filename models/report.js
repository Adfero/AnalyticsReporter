var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  'created': { type: Date, default: Date.now },
  'site': {
    'type': mongoose.Schema.Types.ObjectId,
    'ref': 'Site'
  },
  'reportURLs': [ String ],
  'reportStart': Date,
  'reportEnd': Date,
  'averages': mongoose.Schema.Types.Mixed,
  'data': [
    {
      'url': String,
      'metrics': mongoose.Schema.Types.Mixed,
      'score': Number
    }
  ]
});

schema.statics.getForAPI = function(req,res,next,id) {
  Report.findById(id,function(err,object) {
    if (err) {
      next(err);
    } else if (object) {
      req.report = object;
      next();
    } else {
      res.sendStatus(404);
    }
  })
};

var Report = mongoose.model('Report',schema);
