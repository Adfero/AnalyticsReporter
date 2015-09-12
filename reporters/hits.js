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
  var validGaData = gaData.rows.filter(function(current) {
    var url = current[0]+current[1];
    return !data.pattern || data.pattern.match('http://'+url) || data.pattern.match('https://'+url);
  })
  var average = validGaData.reduce(function(previous,current) {
    return previous + parseFloat(current[2]);
  },0.0) / parseFloat(validGaData.length);
  return done(null,average);
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
        return exports.calculatePage(gaData,data,done);
      }
    }
  )
}

exports.calculatePage = function(gaData,data,done) {
  var domains = data.urls.map(function(url) {
    return url.host;
  })
  var filteredGaData = gaData.rows.filter(function(row) {
    return domains.indexOf(row[0]) >= 0;
  });
  done(null,filteredGaData.map(function(row) {
    return {
      'path': row[1],
      'value': parseFloat(row[2])
    }
  }));
}