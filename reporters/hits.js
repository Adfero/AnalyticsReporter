var googleanalytics = require('../lib/googleanalytics');

exports.name = 'hits';

exports.weight = 1;

exports.average = function(data,done) {
  googleanalytics.getHitsPerPath(
    data.google.token,
    data.google.profile,
    data.sampleStart,
    data.sampleEnd,
    null,
    function(err,data) {
    if (err) {
      return done(err);
    } else {
      var validUrls = data.rows.reduce(function(previous,current) {
        return previous + ((!data.pattern || data.pattern.match(current[0])) ? 1 : 0);
      },0)
      var average = data.rows.reduce(function(previous,current) {
        return previous + ((!data.pattern || data.pattern.match(current[0])) ? parseFloat(current[1]) : 0);
      },0.0) / parseFloat(validUrls);
      return done(null,average);
    }
  })
}

exports.page = function(data,done) {
  googleanalytics.getHitsPerPath(
    data.google.token,
    data.google.profile,
    data.reportStart,
    data.reportEnd,
    data.urls,
    function(err,data) {
    if (err) {
      done(err);
    } else {
      done(null,data.rows.map(function(row) {
        return {
          'path': row[0],
          'value': parseFloat(row[1])
        }
      }));
    }
  })
}