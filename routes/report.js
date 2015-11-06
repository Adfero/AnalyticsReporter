var urlParser = require('url');
var UrlPattern = require('url-pattern');
var utils = require('../lib/utils');
var Report = require('../lib/database').Report;
var reportBuilder = require('../lib/report');
var reporters = require('../reporters').reporters;
var ReportArchive = require('../lib/database').ReportArchive;

function renderForm(req,res,errors) {
  var now = new Date();
  var then = new Date(now.getTime() - 2592000000);
  res.render('report/form',{
    'title': req.report.name,
    'tabs': reportTabs(req),
    'defaultDates': {
      'start': utils.formatDate(then),
      'end': utils.formatDate(now)
    },
    'report': req.report,
    'message': req.flash('report')
  });
}

function reportTabs(req) {
  return [
    {
      'url': '/report/' + req.report._id,
      'label': 'Report'
    },
    {
      'url': '/report/' + req.report._id + '/archive',
      'label': 'Archive'
    }
  ];
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

exports.archive = function(req,res,next) {
  ReportArchive
    .find({
      'report': req.params.id
    })
    .sort({
      'created': -1
    })
    .exec(function(err,reportArchives) {
      if (err) {
        next(err);
      } else {
        res.render('report/archives',{
          'title': req.report.name,
          'tabs': reportTabs(req),
          'archives': reportArchives
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
  req.report.auth.facebook.page = req.body.facebookPage && req.body.facebookPage.length > 0 ? req.body.facebookPage : false;

  var report = req.report;
  report.save(function(err) {
    if (err) {
      next(err);
    } else {
      var pattern = false;
      try {
        pattern = (!req.report.pathPattern || (req.report.pathPattern && req.report.pathPattern.trim().length == 0)) ? false : new UrlPattern(req.report.pathPattern)
      } catch(e) {
        console.error(e);
      }
      var sampleStart = new Date(req.report.sampleStart);
      var sampleEnd = new Date(req.report.sampleEnd);
      var data = {
        'auth': req.report.auth,
        'sampleStart': sampleStart,
        'sampleEnd': sampleEnd,
        'reportStart': new Date(req.report.reportStart),
        'reportEnd': new Date(req.report.reportEnd),
        'sampleDateSegments': [
          {
            'start': sampleStart,
            'end': sampleEnd
          }
        ],
        'pattern': pattern,
        'urls': req.report.reportURLs.split('\n').map(function(urlStr) {
          return urlParser.parse(urlStr+'');
        })
      }

      var reportLength = data.reportEnd.getTime() - data.reportStart.getTime();
      var sampleLength = data.sampleEnd.getTime() - data.sampleStart.getTime();

      if (sampleLength % reportLength == 0) {
        data.sampleDateSegments = [];
        for(var period = data.sampleStart.getTime(); period < data.sampleEnd.getTime(); period += reportLength) {
          data.sampleDateSegments.push({
            'start': new Date(period),
            'end': new Date(period + reportLength)
          });
        }
      }

      if (!data.auth.google.token || !data.auth.google.account.profile) {
        req.flash('report','Please log into your Google account and select a Google Analytics profile.');
        return renderForm(req,res);
      }
      if (data.sampleEnd.getTime() <= data.sampleStart.getTime()) {
        req.flash('report','The sample time period end date must be after the sample time period start date.');
        return renderForm(req,res);
      }
      if (data.reportEnd.getTime() <= data.reportStart.getTime()) {
        req.flash('report','The report time period end date must be after the report time period start date.');
        return renderForm(req,res);
      } 
      if (sampleLength != reportLength && sampleLength % reportLength != 0) {
        req.flash('report','The sample period must be equal to or an exact multiple of the report period.');
        return renderForm(req,res);
      } 
      if (data.pattern !== false && typeof data.pattern != 'object') {
        req.flash('report','That is not a valid URL sample pattern.');
        return renderForm(req,res);
      } 
      if (data.urls.length == 0) {
        req.flash('report','Please provide at least one report URL.');
        return renderForm(req,res);
      }
      for(var i=0; i<data.urls.length; i++) {
        var url = data.urls[i];
        if (!url || url.href.trim() == '') {
          req.flash('report','Please provide valid reporting URLs');
          return renderForm(req,res);
        }
      }

      reportBuilder.runReport(data,function(err,reportArchiveData) {
        if (err) {
          next(err);
        } else {
          reportArchiveData.report = report._id+'';
          var reportArchive = new ReportArchive(reportArchiveData);
          reportArchive.save(function(err) {
            if (err) {
              next(err);
            } else {
              res.redirect('/report/' + report._id + '/' + reportArchive._id);
            }
          })
        }
      });
    }
  });
}

exports.view = function(req,res,next) {
  ReportArchive.findOne({
    '_id': req.params.archiveid,
    'report': req.params.id
  },function(err,reportArchive) {
    if (err) {
      next(err);
    } else if (!reportArchive) {
      res.sendStatus(404);
    } else {
      res.render('report/view',{
        'title': req.report.name,
        'reportUrl': '/report/' + reportArchive.report,
        'table': {
          'fields': [
            {
              'name': 'url',
              'label': 'Path'
            },
            {
              'name': 'score',
              'label': 'Score'
            }
          ].concat(reporters),
          'data': reportArchive.pages.map(function(page) {
            var obj = {
              'url': page.url,
              'score': page.score
            }
            reporters.forEach(function(reporter) {
              var filtered = page.components.filter(function(component) {
                return component.name == reporter.name;
              });
              if (filtered.length > 0) {
                obj[reporter.name] = filtered[0].value;
              }
            });
            return obj;
          })
        },
        'benchmark': reportArchive.benchmarks,
        'chartData': JSON.stringify(reportArchive.pages)
      });
    }
  });
}
