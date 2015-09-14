var googleanalytics = require('../lib/googleanalytics');

exports.name = 'avgTimeOnPage';

exports.label = 'Average Time On Page';

exports.weight = 1;

exports.average = function(data,done) {
  googleanalytics.getAvgTimePerPath(
    data.auth.google.token,
    data.auth.google.account.profile,
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
