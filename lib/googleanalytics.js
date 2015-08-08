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
  var url = URLRoot+'data/ga?' + querystring.stringify({
    'ids': profile,
    'start-date': formatGADate(startDate),
    'end-date': formatGADate(endDate),
    'metrics': 'ga:hits,ga:avgSessionDuration,ga:bounceRate',
    'dimensions': 'ga:referralPath'
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
  return [dateObj.getFullYear(),dateObj.getMonth()+1,dateObj.getDate()].join('-');
}