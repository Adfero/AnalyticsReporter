'use strict';

var async = require('async');

class Reporter {
  constructor(config) {
    this.config = config;
  }

  generateReportData(startDate,endDate,pageURLs,done) {
    done(new Error('Method not implemented'));
  }

  generateReport(benchmarkStartDate,benchmarkEndDate,reportStartDate,reportEndDate,benchmarkURLs,reportURLs,done) {
    let _this = this;

    let reportLength = reportEndDate.getTime() - reportStartDate.getTime();
    let benchmarkLength = benchmarkEndDate.getTime() - benchmarkStartDate.getTime();
    let benchmarkDates = [];

    if (sampleLength % reportLength == 0) {
      for(var period = benchmarkStartDate.getTime(); period < benchmarkEndDate.getTime(); period += reportLength) {
        benchmarkDates.push({
          'start': new Date(period),
          'end': new Date(period + reportLength)
        });
      }
    } else {
      return done(new Error('Benchmark timespan must be equal to or a multiple of the report timespan'));
    }

    async.waterfall([
      function(next) {
        async.parallel(
          benchmarkDates.map(function(benchmarkDate) {
            return function(next1) {
              _this.generateReportData(benchmarkDate.start,benchmarkDate.end,benchmarkURLs,next1);
            }
          })
        ,next);
      },
      function(benchmarkData,next) {
        var averages = {};
        benchmarkData.forEach(function(row) {
          for(var metric in row.metrics) {
            if (!averages[metric]) {
              averages[metric] = {
                'count': 0,
                'total': 0
              }
            }
            averages[metric].count += row.metrics[metric];
            averages[metric].total++;
          }
        });
        for(var metric in averages) {
          averages[metric] = averages[metric].count / averages[metric].total;
        }
        next(null,averages);
      },
      function(averages,next) {
        _this.generateReportData(reportStartDate.start,reportEndDate.end,reportURLs,function(err,reportData) {
          next(err,averages,reportData);
        });
      }
    ],function(err,averages,reportData) {
      if (err) {
        done(err);
      } else {
        done(null,{
          'averages': averages,
          'reportData': reportData
        })
      }
    });
  }

  formatDate(dateObj) {
    var prependZero = function(val) {
      if (val < 10) {
        return '0' + val;
      } else {
        return val;
      }
    }
    return [dateObj.getFullYear(),prependZero(dateObj.getMonth()+1),prependZero(dateObj.getDate())].join('-');
  }
}

module.exports = Reporter;
