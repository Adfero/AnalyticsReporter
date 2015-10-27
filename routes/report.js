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
      var data = {
        'auth': req.report.auth,
        'sampleStart': new Date(req.report.sampleStart),
        'sampleEnd': new Date(req.report.sampleEnd),
        'reportStart': new Date(req.report.reportStart),
        'reportEnd': new Date(req.report.reportEnd),
        'pattern': pattern,
        'urls': req.report.reportURLs.split('\n').map(function(urlStr) {
          return urlParser.parse(urlStr+'');
        })
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
      if (data.sampleEnd.getTime() - data.sampleStart.getTime() != data.reportEnd.getTime() - data.reportStart.getTime()) {
        req.flash('report','The sample and report times can be different periods but they must be equal in length.');
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
        'title': 'Report',
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
          ],
          'data': reportArchive.pages
        },
        'benchmark': reportArchive.benchmarks,
        'chartData': JSON.stringify(reportArchive.pages)
      });
    }
  });
}
