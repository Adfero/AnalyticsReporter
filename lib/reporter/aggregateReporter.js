'use strict';

var async = require('async');

class AggregateReporter {
  constructor(reporters,weightMap) {
    this.reporters = reporters;
    this.weightMap = weightMap;
  }

  generateReport(benchmarkStartDate,benchmarkEndDate,reportStartDate,reportEndDate,benchmarkURLs,reportURLs,done) {
    var _this = this;
    async.parallel(
      this.reporters.map(function(reporter) {
        return function(next) {
          reporter.generateReport(benchmarkStartDate,benchmarkEndDate,reportStartDate,reportEndDate,benchmarkURLs,reportURLs,next);
        }
      }),
      function(err,reports) {
        if (err) {
          done(err);
        } else {
          var mergedAverages = {};
          var mergedReports = [];
          reports.forEach(function(report) {
            for(var average in report.averages) {
              mergedAverages[average] = report.averages[average];
            }
            report.reportData.forEach(function(reportRow) {
              var mergeReportRow = mergedReports.find(function(reportRow1) {
                return reportRow.url.toString() == reportRow1.url.toString();
              });
              if (!mergeReportRow) {
                mergeReportRow = {
                  'url': reportRow.url.href,
                  'metrics': {}
                };
                mergedReports.push(mergeReportRow)
              }
              for(var metric in reportRow.metrics) {
                mergeReportRow.metrics[metric] = reportRow.metrics[metric];
              }
            });
          });
          mergedReports.forEach(function(reportRow) {
            var averages = [];
            for(var metric in reportRow.metrics) {
              var weight = _this.weightMap[metric] || 1;
              averages.push(
                (reportRow.metrics[metric] / mergedAverages[metric]) * weight
              );
            }
            reportRow.score = averages.reduce(function(previous,average) {
              return previous + average;
            },0.0);
          });
          done(null,{
            'averages': mergedAverages,
            'reportData': mergedReports
          });
        }
      }
    );
  }
}

module.exports = AggregateReporter;
