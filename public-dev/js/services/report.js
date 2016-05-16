angular.module('onemetric.service.report', [
  'ngResource',
  'onemetric.service.validationTools'
])
  .factory('Report', ['$resource', 'validationTools', function($resource, validationTools) {
    var dateFormatterInterceptor = function(response) {
      ['reportStart','reportEnd','benchmarkStart','benchmarkEnd'].forEach(function(prop) {
        if (response.resource[prop]) {
          response.resource[prop] = new Date(Date.parse(response.resource[prop]));
        }
      });
      return response;
    }

    var Report = $resource('/api/report/:id', { id: '@_id' }, {
      'query': {
        'method': 'GET',
        'isArray': true,
        'interceptor': {
          'response': dateFormatterInterceptor,
        }
      }
    });

    Report.prototype.getReportURLsSummary = function() {
      return this.reportURLs ? this.reportURLs.join(', ') : '';
    };

    Report.prototype.isValid = function() {
      return this.reportURLs
        && this.reportURLs.length > 0
        && this.reportStart
        && this.reportEnd
        && ((this.benchmarkURLs && this.benchmarkURLs.length > 0) || (this.benchmarkURLRegex && this.benchmarkURLRegex.trim().length > 0))
        && this.benchmarkStart
        && this.benchmarkEnd
        && validationTools.isValidDateRange(this.benchmarkStart,this.benchmarkEnd)
        && ((this.benchmarkURLs && validationTools.isValidArrayOfUrls(this.benchmarkURLs)) || !this.benchmarkURLs)
    };

    Report.prototype.generateValidationFeedback = function() {
      var errors = [];
      if (!validationTools.isValidDateRange(this.reportStart,this.reportEnd)) {
        errors.push('Please provide a report date range.');
      }
      if (!validationTools.isValidDateRange(this.benchmarkStart,this.benchmarkEnd)) {
        errors.push('Please provide a benchmark date range.');
      }
      if (!this.benchmarkURLRegex && (!this.benchmarkURLs || !validationTools.isValidArrayOfUrls(this.benchmarkURLs))) {
        errors.push('Please provide a set of valid benchmark URLs.');
      } else if (!this.benchmarkURLs && (!this.benchmarkURLRegex || this.benchmarkURLRegex.trim().length == 0)) {
        errors.push('Please provide a benchmark URL regular expression.');
      }
      if (!(this.site
        && this.benchmarkStart
        && this.benchmarkEnd
        && this.reportStart
        && this.reportEnd
        && (
          this.benchmarkEnd.getTime() - this.benchmarkStart.getTime() == this.reportEnd.getTime() - this.reportStart.getTime()
          || (this.benchmarkEnd.getTime() - this.benchmarkStart.getTime()) % (this.reportEnd.getTime() - this.reportStart.getTime()) == 0
        )
      )) {
        errors.push('Please provide a benchmark date range that is equal-to or a multiple of the report date range.');
      }
      if (!validationTools.isValidArrayOfUrls(this.reportURLs)) {
        errors.push('Please provide a set of valid report URLs.');
      }
      return errors;
    };

    return Report;
  }]);
