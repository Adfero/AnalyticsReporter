var googleanalytics = require('../lib/googleanalytics');

exports.name = 'avgTimeOnPage';

exports.label = 'Average Time On Page';

exports.weight = 0.5;

exports.average = function(data,done) {
  googleanalytics.getAvgTimePerPath(
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
  googleanalytics.getAvgTimePerPath(
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
