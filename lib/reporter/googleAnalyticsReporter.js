'use strict';

var Reporter = require('./reporter');
var OAuth = require('oauth');
var async = require('async');

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
    async.waterfall([
      function(next) {
        let params = {
          'ids': 'ga:'+_this.profile,
          'start-date': _this.formatDate(startDate),
          'end-date': _this.formatDate(endDate),
          'metrics': ['ga:hits','ga:avgTimeOnPage'].join(','),
          'dimensions': ['ga:hostname','ga:pagePath'].join(','),
          'filters': pageURLs.map(function(url) {
            return 'ga:pagePath==' + url.path;
          }).join(',')
        };
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
        if (gaData && gaData.rows) {
          var domains = pageURLs.map(function(url) {
            return url.host;
          });
          var filteredGaData = gaData.rows.filter(function(row) {
            return domains.indexOf(row[0]) >= 0;
          });
          next(null,filteredGaData.map(function(row) {
            return {
              'url': _this.getURLForHostnameAndPath(row[0],row[1]),
              'metrics': {
                'hits': parseInt(row[2]),
                'avgTimeOnPage': parseFload(row[3])
              }
            };
          }));
        } else {
          next(new Error('Invlid GA data'));
        }
      }
    ],done);
  }

  getURLForHostnameAndPath(urls,hostname,path) {
    return urls.find(function(url) {
      return url.host == hostname && url.path == path;
    })
  }
}

module.exports = GoogleAnalyticsReporter;
