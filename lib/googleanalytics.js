var querystring = require('querystring');
var config = require('../config.json');
var utils = require('./utils');
var oauth = require('./oauth');

var URLRoot = 'https://www.googleapis.com/analytics/v3/';

exports.loadAccounts = function(token,callback) {
  oauth.googleOAuth().get(URLRoot+'management/accounts',token,function (e, data) {
    if (e) {
      callback(e);
    } else if (data) {
      var accounts = JSON.parse(data);
      callback(null,accounts.items)
    }
  });
}

exports.loadProperties = function(token,account,callback) {
  oauth.googleOAuth().get(URLRoot+'management/accounts/' + account + '/webproperties',token,function (e, data) {
    if (e) {
      callback(e);
    } else if (data) {
      var properties = JSON.parse(data);
      callback(null,properties.items)
    }
  });
}

exports.loadProfiles = function(token,account,property,callback) {
  var url = URLRoot+'management/accounts/' + account + '/webproperties/' + property + '/profiles';
  oauth.googleOAuth().get(url,token,function (e, data) {
    if (e) {
      callback(e);
    } else if (data) {
      var profiles = JSON.parse(data);
      callback(null,profiles.items)
    }
  });
}

exports.getHitsPerPath  = function(token,profile,startDate,endDate,paths,callback) {
  exports.gaDataCall(token,profile,startDate,endDate,paths,['ga:hits'],['ga:hostname','ga:pagePath'],callback);  
}

exports.getAvgTimePerPath  = function(token,profile,startDate,endDate,paths,callback) {
  exports.gaDataCall(token,profile,startDate,endDate,paths,['ga:avgTimeOnPage'],['ga:hostname','ga:pagePath'],callback);  
}

exports.getSocialPostsPerPath  = function(token,profile,startDate,endDate,paths,callback) {
  exports.gaDataCall(token,profile,startDate,endDate,paths,['ga:socialInteractions'],['ga:hostname','ga:pagePath'],callback);  
}

exports.gaDataCall = function(token,profile,startDate,endDate,paths,metrics,dimensions,callback) {
  var params = {
    'ids': 'ga:'+profile,
    'start-date': utils.formatDate(startDate),
    'end-date': utils.formatDate(endDate),
    'metrics': metrics.join(','),
    'dimensions': dimensions.join(',')
  };
  if (paths) {
    params.filters = paths.map(function(path) {
      return 'ga:pagePath==' + path;
    }).join(',');
  }
  var url = URLRoot+'data/ga?' + querystring.stringify(params);
  oauth.googleOAuth().get(url,token,function (e, data) {
    if (e) {
      callback(e);
    } else if (data) {
      var dataObj = JSON.parse(data);
      callback(null,dataObj)
    }
  });
}

exports.calculateAverage = function(gaData,data,done) {
  if (gaData && gaData.rows && gaData.rows.length) {
    var validGaData = gaData.rows.filter(function(current) {
      var url = current[0]+current[1];
      return !data.pattern || data.pattern.match('http://'+url) || data.pattern.match('https://'+url);
    })
    var average = validGaData.reduce(function(previous,current) {
      return previous + parseFloat(current[2]);
    },0.0) / parseFloat(validGaData.length);
    return done(null,average);
  } else {
    return done(null,0);
  }
}

exports.calculatePage = function(gaData,data,done) {
  if (gaData && gaData.rows && gaData.rows.length) {
    var domains = data.urls.map(function(url) {
      return url.host;
    })
    var filteredGaData = gaData.rows.filter(function(row) {
      return domains.indexOf(row[0]) >= 0;
    });
    return done(null,filteredGaData.map(function(row) {
      return {
        'path': row[1],
        'value': parseFloat(row[2])
      };
    }));
  } else {
    return done(null,data.urls.map(function(url) {
      return {
        'path': url.path,
        'value': 0
      };
    }));
  }
}
