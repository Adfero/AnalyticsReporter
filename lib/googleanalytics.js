var OAuth = require('oauth');
var querystring = require('querystring');
var config = require('../config.json');

var URLRoot = 'https://www.googleapis.com/analytics/v3/';

var oauth2 = new OAuth.OAuth2(
  config.google.key,
  config.google.secret, 
  '', 
  'https://accounts.google.com/o/oauth2/auth',
  'https://accounts.google.com/o/oauth2/token', 
  null);

exports.loadAccounts = function(token,callback) {
  oauth2.get(URLRoot+'management/accounts',token,function (e, data) {
    if (e) {
      callback(e);
    } else if (data) {
      var accounts = JSON.parse(data);
      callback(null,accounts.items)
    }
  });
}

exports.loadProperties = function(token,account,callback) {
  oauth2.get(URLRoot+'management/accounts/' + account + '/webproperties',token,function (e, data) {
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
  oauth2.get(url,token,function (e, data) {
    if (e) {
      callback(e);
    } else if (data) {
      var profiles = JSON.parse(data);
      callback(null,profiles.items)
    }
  });
}

exports.loadReferrals = function(token,profile,startDate,endDate,callback) {
  gaDataCall(token,profile,startDate,endDate,callback,['ga:sessions'],['ga:source','ga:fullReferrer','ga:pagePath']);
}

exports.loadSocialActions = function(token,profile,startDate,endDate,callback) {
  gaDataCall(token,profile,startDate,endDate,callback,['ga:socialActivities'],['ga:socialActivityNetworkAction']);
}

function gaDataCall(token,profile,startDate,endDate,callback,metrics,dimensions) {
  var url = URLRoot+'data/ga?' + querystring.stringify({
    'ids': 'ga:'+profile,
    'start-date': formatGADate(startDate),
    'end-date': formatGADate(endDate),
    'metrics': metrics.join(','),
    'dimensions': dimensions.join(',')
  });
  oauth2.get(url,token,function (e, data) {
    if (e) {
      callback(e);
    } else if (data) {
      var dataObj = JSON.parse(data);
      callback(null,dataObj)
    }
  });
}

function formatGADate(dateObj) {
  var prependZero = function(val) {
    if (val < 10) {
      return '0' + val;
    } else {
      return val;
    }
  }
  return [dateObj.getFullYear(),prependZero(dateObj.getMonth()+1),prependZero(dateObj.getDate())].join('-');
}