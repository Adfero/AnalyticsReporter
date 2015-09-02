var googleanalytics = require('../lib/googleanalytics');
var url = require('url');
var UrlPattern = require('url-pattern');

exports.form = function(req,res) {
  res.render('report',{
    'title': 'Build Your Report'
  })
}

exports.build = function(req,res,next) {
  var sampleStart = new Date(req.body['sample-start']);
  var sampleEnd = new Date(req.body['sample-end']);
  var reportStart = new Date(req.body['report-start']);
  var reportEnd = new Date(req.body['report-end']);
  var urls = req.body['report-urls'].split('\n').map(function(urlStr) {
    return url.parse(urlStr).path;
  });
  // googleanalytics.getSocialPostsPerPath(req.session.auth.google,req.body['google-profile'],sampleStart,sampleEnd,['/insights/2015/08/an-event-apart-2015'],function(err,data) {
  //   console.log(data);
  // })
  buildAverages(req.session.auth.google,req.body['google-profile'],sampleStart,sampleEnd,req.body['path-pattern'],function(err,averageHits) {
    buildReportActuals(req.session.auth.google,req.body['google-profile'],reportStart,reportEnd,urls,function(err,actuals) {
      actuals.forEach(function(actual) {
        actual.hitsScore = actual.hits / averageHits;
        return actual;
      });
      res.send(actuals);
    });
  })
}

function buildAverages(token,profile,sampleStart,sampleEnd,pattern,callback) {
  if (!pattern || (pattern && pattern.trim().length == 0)) {
    pattern = false;
  } else {
    pattern = new UrlPattern(pattern);
  }
  googleanalytics.getHitsPerPath(token,profile,sampleStart,sampleEnd,null,function(err,data) {
    if (err) {
      console.error(err);
      next(err);
    } else {
      var validUrls = data.rows.reduce(function(previous,current) {
        return previous + ((!pattern || pattern.match(current[0])) ? 1 : 0);
      },0)
      var average = data.rows.reduce(function(previous,current) {
        return previous + ((!pattern || pattern.match(current[0])) ? parseFloat(current[1]) : 0);
      },0.0) / parseFloat(validUrls);
      callback(null,average);
    }
  })
}

function buildReportActuals(token,profile,reportStart,reportEnd,paths,callback) {
  googleanalytics.getHitsPerPath(token,profile,reportStart,reportEnd,paths,function(err,data) {
    if (err) {
      console.error(err);
      next(err);
    } else {
      callback(null,data.rows.map(function(row) {
        return {
          'path': row[0],
          'hits': parseFloat(row[1])
        }
      }));
    }
  })
}
