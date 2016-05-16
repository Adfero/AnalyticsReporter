'use strict';

var Reporter = require('./reporter');
var OAuth = require('oauth');
var async = require('async');
var url = require('url');
var querystring = require('querystring');

const URLRoot = 'https://www.googleapis.com/analytics/v3/';

class GoogleAnalyticsReporter extends Reporter {
  constructor(config,profile,token) {
    super(config);
    this.profile = profile;
    this.token = token;
    this.oauthClient = new OAuth.OAuth2(
      this.config.google.key,
      this.config.google.secret,
      '',
      'https://accounts.google.com/o/oauth2/auth',
      'https://accounts.google.com/o/oauth2/token',
      null
    );
  }

  generateReportData(startDate,endDate,pageURLs,done) {
    let _this = this;
    var urlObjects = null;
    var urlRegex = null;
    if (typeof pageURLs == 'string') {
      urlRegex = pageURLs;
    } else {
      var urlObjects = pageURLs.map(function(urlStr) {
        return url.parse(urlStr);
      });
    }
    async.waterfall([
      function(next) {
        let params = {
          'ids': 'ga:'+_this.profile,
          'start-date': _this.formatDate(startDate),
          'end-date': _this.formatDate(endDate),
          'metrics': ['ga:hits','ga:avgTimeOnPage'].join(','),
          'dimensions': ['ga:hostname','ga:pagePath'].join(',')
        };
        if (urlObjects) {
          params.filters = urlObjects.map(function(urlObj) {
            return 'ga:pagePath==' + _this.encodeFilter(urlObj.path);
          }).join(',');
        } else {
          params.filters = 'ga:pagePath=~' + _this.encodeFilter(urlRegex);
        }
        var url = URLRoot+'data/ga?' + querystring.stringify(params);
        _this.oauthClient.get(url,_this.token,function(err, data) {
          if (err) {
            next(err);
          } else {
            var dataObj = JSON.parse(data);
            next(null,dataObj)
          }
        });
      },
      function(gaData,next) {
        if (urlObjects && gaData && gaData.rows) {
          var domains = urlObjects.map(function(urlObj) {
            return urlObj.host;
          });
          var filteredGaData = gaData.rows.filter(function(row) {
            return domains.indexOf(row[0]) >= 0;
          });
          next(null,filteredGaData.map(function(row) {
            return {
              'url': _this.getURLForHostnameAndPath(urlObjects,row[0],row[1]),
              'metrics': {
                'hits': parseInt(row[2]),
                'avgTimeOnPage': parseFloat(row[3])
              }
            };
          }));
        } else if (gaData && gaData.rows) {
          var regexed = gaData.rows.map(function(row) {
            return {
              'url': url.parse(url.resolve(row[0],row[1])),
              'metrics': {
                'hits': parseInt(row[2]),
                'avgTimeOnPage': parseFloat(row[3])
              }
            };
          });
          next(null,regexed);
        } else if (urlObjects) {
          next(null,urlObjects.map(function(urlObj) {
            return {
              'url': urlObj,
              'metrics': {
                'hits': 0,
                'avgTimeOnPage': 0
              }
            };
          }));
        } else {
          next(null,[]);
        }
      }
    ],done);
  }

  encodeFilter(str) {
    return str.replace(/\\/g,'\\').replace(/,/g,'\\,').replace(/;/g,'\;')
  }

  getURLForHostnameAndPath(urls,hostname,path) {
    return urls.find(function(url) {
      return url.host == hostname && url.path == path;
    })
  }
}

module.exports = GoogleAnalyticsReporter;
