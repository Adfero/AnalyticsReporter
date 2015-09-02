var url = require('url');
var UrlPattern = require('url-pattern');
var reporters = require('../reporters').reporters;
var async = require('async');

exports.form = function(req,res) {
  res.render('report',{
    'title': 'Build Your Report'
  })
}

exports.build = function(req,res,next) {
  // googleanalytics.getSocialPostsPerPath(req.session.auth.google,req.body['google-profile'],sampleStart,sampleEnd,['/insights/2015/08/an-event-apart-2015'],function(err,data) {
  //   console.log(data);
  // });
  var data = {
    'google': {
      'token': req.session.auth.google,
      'profile': req.body['google-profile']
    },
    'sampleStart': new Date(req.body['sample-start']),
    'sampleEnd': new Date(req.body['sample-end']),
    'reportStart': new Date(req.body['report-start']),
    'reportEnd': new Date(req.body['report-end']),
    'pattern': (!req.body['path-pattern'] || (req.body['path-pattern'] && req.body['path-pattern'].trim().length == 0)) ? false : new UrlPattern(req.body['path-pattern']),
    'urls': req.body['report-urls'].split('\n').map(function(urlStr) {
      return url.parse(urlStr).path;
    })
  }

  async.waterfall(
    [
      function(callback) {
        callback(null, data, {
          'averages': {},
          'page': {}
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
              outData.page[reporter.name] = results.page;
            }
          });
        };
      })
    ),
    function(err,result) {
      res.send(result);
    }
  );
}
