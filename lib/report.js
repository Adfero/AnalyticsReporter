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
              outData.pages[reporter.name] = _.object(
                results.page.map(function(row) { return row.path }),
                results.page.map(function(row) { return row.value })
              );
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
        var rows = inData.urls.map(function(url) {
          var total = reporters.reduce(function(previous,current) {
            if (outData.averages[current.name] !== false && outData.averages[current.name] != 0) {
              return previous + ((outData.pages[current.name][url.path] / outData.averages[current.name]) * current.weight);
            } else {
              return previous;
            }
          },0.0);
          var number = reporters.reduce(function(previous,current) {
            return previous + (outData.averages[current.name] !== false ? 1 : 0);
          },0.0);
          var score = number > 0 ? (27 * Math.log(total / number) + 50) : 0;
          var returnData = {
            'path': url.path,
            'score': (Math.round(score * 100) / 100)
          };
          reporters.forEach(function(reporter) {
            returnData[reporter.name] = outData.pages[reporter.name][url.path];
          });
          return returnData;
        });
        done(null,rows,outData);
      }
    }
  );
}