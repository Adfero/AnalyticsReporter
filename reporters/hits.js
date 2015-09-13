var googleanalytics = require('../lib/googleanalytics');

exports.name = 'hits';

exports.label = 'Hits';

exports.weight = 2;

exports.average = function(data,done) {
  googleanalytics.getHitsPerPath(
    data.google.token,
    data.google.profile,
    data.sampleStart,
    data.sampleEnd,
    null,
    function(err,gaData) {
      if (err) {
        return done(err);
      } else {
        return googleanalytics.calculateAverage(gaData,data,done);
      }
    }
  )
}

exports.page = function(data,done) {
  googleanalytics.getHitsPerPath(
    data.google.token,
    data.google.profile,
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

exports.calculateAverage = googleanalytics.calculateAverage

exports.calculatePage = googleanalytics.calculatePage