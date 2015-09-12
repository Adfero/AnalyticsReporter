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
    function(err,gaData) {
      if (err) {
        return done(err);
      } else {
        return exports.calculateAverage(gaData,data,done);
      }
    }
  )
}

exports.calculateAverage = function(gaData,data,done) {
  var validUrls = gaData.rows.reduce(function(previous,current) {
    return previous + ((!data.pattern || data.pattern.match(current[0])) ? 1 : 0);
  },0)
  var average = gaData.rows.reduce(function(previous,current) {
    return previous + ((!data.pattern || data.pattern.match(current[0])) ? parseFloat(current[1]) : 0);
  },0.0) / parseFloat(validUrls);
  return done(null,average);
}

exports.page = function(data,done) {
  googleanalytics.getHitsPerPath(
    data.google.token,
    data.google.profile,
    data.reportStart,
    data.reportEnd,
    data.urls,
    function(err,gaData) {
      if (err) {
        return done(err);
      } else {
        return exports.calculatePage(gaData,data,done);
      }
    }
  )
}

exports.calculatePage = function(gaData,data,done) {
  done(null,gaData.rows.map(function(row) {
    return {
      'path': row[0],
      'value': parseFloat(row[1])
    }
  }));
}