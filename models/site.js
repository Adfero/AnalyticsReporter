var mongoose = require('mongoose');
var async = require('async');
var GoogleAnalyticsReporter = require('../lib/reporter/googleAnalyticsReporter.js');
var AggregateReporter = require('../lib/reporter/aggregateReporter.js');
var config = require('../config');
var SitemapURLGenerator = require('../lib/urlGenerator/sitemapUrlGenerator.js');

var schema = new mongoose.Schema({
  'name': String,
  'url': String,
  'created': { type: Date, default: Date.now },
  'modified': { type: Date, default: Date.now },
  'benchmarkURLs': [ String ],
  'benchmarkStart': Date,
  'benchmarkEnd': Date,
  'auth': {
    'google': {
      'token': String,
      'refresh': String,
      'expires': Date,
      'account': {
        'account': String,
        'property': String,
        'profile': String
      }
    }
  }
});

schema.pre('save', function(next) {
  this.modified = new Date();
  next();
});

schema.methods.buildReport = function(report,done) {
  if (this.auth && this.auth.google && this.auth.google.account) {
    var gaReporter = new GoogleAnalyticsReporter(config,this.auth.google.account.profile,this.auth.google.token);
    var aggregateReporter = new AggregateReporter([gaReporter],{
      'hits': 1,
      'avgTimeOnPage': 1
    });
    var _this = this;
    aggregateReporter.generateReport(this.benchmarkStart,this.benchmarkEnd,report.reportStart,report.reportEnd,this.benchmarkURLs,report.reportURLs,function(err,data) {
      if (err) {
        done(err);
      } else {
        report.averages = data.averages;
        report.data = data.reportData;
        report.save(function(err) {
          done(err,report);
        });
      }
    });
  } else {
    done();
  }
};

schema.methods.getURLs = function(done) {
  var generator = new SitemapURLGenerator(this.url);
  generator.findURLs(done);
};

schema.methods.loadGoogleAccounts = function(account,property,done) {
  if (this.auth && this.auth.google && this.auth.google.account) {
    var gaReporter = new GoogleAnalyticsReporter(config,this.auth.google.account.profile,this.auth.google.token);
    var URLRoot = 'https://www.googleapis.com/analytics/v3/';
    var handler = function(next) {
      return function(err,data) {
        if (err) {
          next(err);
        } else {
          var object = JSON.parse(data);
          next(null,object.items);
        }
      }
    };
    async.parallel({
      'accounts': function(next) {
        gaReporter.oauthClient.get(URLRoot+'management/accounts',gaReporter.token,handler(next));
      },
      'properties': function(next) {
        if (account) {
          gaReporter.oauthClient.get(URLRoot+'management/accounts/' + account + '/webproperties',gaReporter.token,handler(next));
        } else {
          next(null,[])
        }
      },
      'profiles': function(next) {
        if (account && property) {
          gaReporter.oauthClient.get(URLRoot+'management/accounts/' + account + '/webproperties/' + property + '/profiles',gaReporter.token,handler(next));
        } else {
          next(null,[])
        }
      }
    },done);
  } else {
    done();
  }
}

schema.methods.getReports = function(done) {
  mongoose.model('Report')
    .find({
      'site': this.id
    })
    .sort({
      'created': -1
    })
    .exec(done);
}

schema.statics.getForAPI = function(req,res,next,id) {
  Site.findById(id,function(err,object) {
    if (err) {
      next(err);
    } else if (object) {
      req.site = object;
      next();
    } else {
      res.sendStatus(404);
    }
  })
};

var Site = mongoose.model('Site',schema);
