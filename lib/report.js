var async = require('async');
var _ = require('underscore');
var reporters = require('../reporters').reporters;

exports.runReport = function(data,done) {
  async.waterfall(
    [
      function(callback) {
        callback(null, data, {
          'averages': {},
          'pages': {}
        });
      }
    ].concat(
      reporters.map(function(reporter) {
        return function(inData, outData, callback) {
          async.parallel({
            'average': function(callback) {
              reporter.average(inData,callback);
            },
            'page': function(callback) {
              reporter.page(inData,callback);
            }
          },function(err,results) {
            if (err) {
              return callback(err);
            } else {
              outData.averages[reporter.name] = results.average;
              if (results.page) {
                outData.pages[reporter.name] = _.object(
                  results.page.map(function(row) { return row.path }),
                  results.page.map(function(row) { return row.value })
                );
              } else {
                outData.pages[reporter.name] = _.object(
                  inData.urls.map(function(url) { return url.path; }),
                  inData.urls.map(function(url) { return false; })
                );
              }
              callback(null,inData, outData);
            }
          });
        };
      })
    ),
    function(err,inData,outData) {
      if (err) {
        done(err);
      } else {
        var report = {
          'report': data.reportId,
          'benchmarks': reporters.map(function(reporter) {
            return {
              'name': reporter.name,
              'value': outData.averages[reporter.name] || false,
              'weight': reporter.weight
            };
          }),
          'pages': inData.urls.map(function(url) {
            var page = {
              'url': url.path,
              'components': []
            };
            reporters.forEach(function(reporter) {
              page.components.push({
                'name': reporter.name,
                'value': outData.pages[reporter.name][url.path] || false
              });
            });
            var score = exports.calculateScore(url,inData,outData);
            page.score = score.score;
            page.rawScore = score.rawScore;
            return page;
          })
        };
        done(err,report);
      }
    }
  );
}

exports.calculateScore = function(url,inData,outData) {
  var total = reporters.reduce(function(previous,current) {
    if (outData.averages[current.name] !== false && outData.averages[current.name] != 0 && outData.pages[current.name][url.path] !== false) {
      return previous + ((outData.pages[current.name][url.path] / outData.averages[current.name]) * current.weight);
    } else {
      return previous;
    }
  },0.0);
  var number = reporters.reduce(function(previous,current) {
    return previous + (outData.averages[current.name] !== false && outData.pages[current.name][url.path] !== false ? 1 : 0);
  },0.0);
  var rawScore = number > 0 ? (total / number) : 0;
  var score = number > 0 ? (27 * Math.log(rawScore) + 50) : 0;
  return {
    'rawScore': rawScore,
    'score': (Math.round(score * 100) / 100)
  };
}

