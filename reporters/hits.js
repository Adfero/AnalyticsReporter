var googleanalytics = require('../lib/googleanalytics');
var async = require('async');

exports.name = 'hits';

exports.label = 'Hits';

exports.weight = 2;

exports.average = function(data,done) {
  async.parallel(data.sampleDateSegments.map(function(dateSegment) {
    return function(callback) {
      googleanalytics.getHitsPerPath(
        data.auth.google.token,
        data.auth.google.account.profile,
        dateSegment.start,
        dateSegment.end,
        null,
        function(err,gaData) {
          if (err) {
            return done(err);
          } else {
            return googleanalytics.calculateAverage(gaData,data,callback);
          }
        }
      );
    };
  }),done);
}

exports.page = function(data,done) {
  googleanalytics.getHitsPerPath(
    data.auth.google.token,
    data.auth.google.account.profile,
    data.reportStart,
    data.reportEnd,
    data.urls.map(function(url) {
      return url.path;
    }),
    function(err,gaData) {
      if (err) {
        return done(err);
      } else {
        return googleanalytics.calculatePage(gaData,data,done);
      }
    }
  )
}
