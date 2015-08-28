var googleanalytics = require('../lib/googleanalytics');
var url = require('url');

exports.form = function(req,res) {
  // googleanalytics.loadReferrals(req.user.token,req.query.profile,new Date(Date.now() - 2629740000),new Date(),function(err,data) {
  //   console.log(err);
  //   res.send(data)
  // });
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
  googleanalytics.getSocialPostsPerPath(req.user.token,req.query.profile,sampleStart,sampleEnd,['/insights/2015/08/an-event-apart-2015'],function(err,data) {
    console.log(data);
  })
  //token,profile,startDate,endDate,path,metrics,dimensions,callback
  buildAverages(req.user.token,req.query.profile,sampleStart,sampleEnd,function(err,averageHits) {
    buildReportActuals(req.user.token,req.query.profile,reportStart,reportEnd,urls,function(err,actuals) {
      actuals.forEach(function(actual) {
        actual.hitsScore = actual.hits / averageHits;
        return actual;
      });
      res.send(actuals);
    });
  })
}

function buildAverages(token,profile,sampleStart,sampleEnd,callback) {
  googleanalytics.getHitsPerPath(token,profile,sampleStart,sampleEnd,null,function(err,data) {
    if (err) {
      console.error(err);
      next(err);
    } else {
      var average = data.rows.reduce(function(previous,current) {
        return previous + parseFloat(current[1]);
      },0.0) / parseFloat(data.rows.length);
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
