var url = require('url');
var UrlPattern = require('url-pattern');
var reporters = require('../reporters').reporters;
var async = require('async');
var _ = require('underscore');
var utils = require('../lib/utils');
var Report = require('../lib/database').Report;

function renderForm(req,res,errors) {
  var now = new Date();
  var then = new Date(now.getTime() - 2592000000);
  res.render('report/form',{
    'title': req.report.name,
    'defaultDates': {
      'start': utils.formatDate(then),
      'end': utils.formatDate(now)
    },
    'report': req.report,
    'message': req.flash('report')
  });
}

exports.list = function(req,res,next) {
  Report
    .find({
      '_id': {
        '$in': req.user.reports
      }
    })
    .sort({created: -1})
    .exec(function(err,reports) {
      if (err) {
        next(err)
      } else {
        res.render('report/list',{
          'title': 'Reports',
          'reports': reports
        });
      }
    });
}

exports.newReport = function(req,res,next) {
  res.render('report/new',{
    'title': 'New Report'
  });
}

exports.saveNewReport = function(req,res,next) {
  var report = new Report(req.body);
  report.save(function(err) {
    if (err) {
      next(err);
    } else {
      req.user.reports.push(report._id+'');
      req.user.save(function() {
        if (err) {
          next(err);
        } else {
          req.report = report;
          renderForm(req,res);
        }
      })
    }
  })
}

exports.form = function(req,res) {
  renderForm(req,res,false);
}

exports.build = function(req,res,next) {
  ['sampleStart','sampleEnd','reportStart','reportEnd','pathPattern','reportURLs'].forEach(function(prop) {
    req.report[prop] = req.body[prop];
  });
  req.report.auth.google.account.account = req.body['googleAccount'];
  req.report.auth.google.account.property = req.body['googleProperty'];
  req.report.auth.google.account.profile = req.body['googleProfile'];
  req.report.auth.facebook.page = req.body['facebookPage'];

  var data = {
    'google': {
      'token': req.session.auth ? req.session.auth.google : false,
      'profile': req.body['googleProfile']
    },
    'facebookPage': (req.body['facebookPage'] && req.body['facebookPage'].length > 0) ? req.body['facebookPage'] : false,
    'auth': req.session.auth,
    'sampleStart': new Date(req.body['sampleStart']),
    'sampleEnd': new Date(req.body['sampleEnd']),
    'reportStart': new Date(req.body['reportStart']),
    'reportEnd': new Date(req.body['reportEnd']),
    'pattern': (!req.body['pathPattern'] || (req.body['pathPattern'] && req.body['pathPattern'].trim().length == 0)) ? false : new UrlPattern(req.body['pathPattern']),
    'urls': req.body['reportURLs'].split('\n').map(function(urlStr) {
      return url.parse(urlStr);
    })
  }

  var errors = [];

  if (!data.google.token || !data.google.profile) {
    errors.push('Please log into your Google account and select a Google Analytics profile.');
  }
  if (data.sampleEnd.getTime() <= data.sampleStart.getTime()) {
    errors.push('The sample time period end date must be after the sample time period start date.');
  }
  if (data.reportEnd.getTime() <= data.reportStart.getTime()) {
    errors.push('The report time period end date must be after the report time period start date.');
  } 
  if (data.sampleEnd.getTime() - data.sampleStart.getTime() != data.reportEnd.getTime() - data.reportStart.getTime()) {
    errors.push('The sample and report times can be different periods but they must be equal in length.');
  } 
  if (data.pattern !== false && typeof data.pattern != 'object') {
    errors.push('That is not a valid URL sample pattern.');
  } 
  if (data.urls.length == 0) {
    errors.push('Please provide at least one report URL.');
  }
  data.urls.forEach(function(url) {
    if (!url || url.href.trim() == '') {
      errors.push('Please provide valid reporting URLs');
    }
  })

  if (errors.length > 0) {
    renderForm(req,res,errors);
  } else {
    async.waterfall(
      [
        function(callback) {
          callback(null, data, {
            'averages': {},
            'pages': {}
          });
        }
      ].concat(
        reporters.map(function(reporter) {
          return function(inData, outData, callback) {
            async.parallel({
              'average': function(callback) {
                reporter.average(inData,callback);
              },
              'page': function(callback) {
                reporter.page(inData,callback);
              }
            },function(err,results) {
              if (err) {
                return callback(err);
              } else {
                outData.averages[reporter.name] = results.average;
                outData.pages[reporter.name] = _.object(
                  results.page.map(function(row) { return row.path }),
                  results.page.map(function(row) { return row.value })
                );
                callback(null,inData, outData);
              }
            });
          };
        })
      ),
      function(err,inData,outData) {
        if (err) {
          console.log(err);
          next(err);
        } else {
          var rows = inData.urls.map(function(url) {
            var total = reporters.reduce(function(previous,current) {
              if (outData.averages[current.name] !== false) {
                return previous + ((outData.pages[current.name][url.path] / outData.averages[current.name]) * current.weight);
              } else {
                return previous;
              }
            },0.0);
            var number = reporters.reduce(function(previous,current) {
              return previous + (outData.averages[current.name] !== false ? 1 : 0);
            },0.0);
            var returnData = {
              'path': url.path,
              'score': (Math.round((total / number) * 10000) / 100) + '%'
            };
            reporters.forEach(function(reporter) {
              returnData[reporter.name] = outData.pages[reporter.name][url.path];
            });
            return returnData;
          });
          res.render('report/view',{
            'title': 'Report',
            'table': {
              'fields': [
                {
                  'name': 'path',
                  'label': 'Path'
                },
                {
                  'name': 'score',
                  'label': 'Score'
                }
                ].concat(reporters.map(function(reporter) {
                  return {
                    'name': reporter.name,
                    'label': reporter.label
                  };
                })),
              'data': rows
            },
            'benchmark': reporters.map(function(reporter) {
              return {
                'label': reporter.label,
                'value': outData.averages[reporter.name],
                'weight': reporter.weight
              }
            })
          });
        }
      }
    );
  }
}
