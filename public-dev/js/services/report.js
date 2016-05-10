angular.module('onemetric.service.report', [
  'ngResource',
  'onemetric.service.validationTools'
])
  .factory('Report', ['$resource', 'validationTools', function($resource, validationTools) {
    var dateFormatterInterceptor = function(response) {
      ['reportStart','reportEnd'].forEach(function(prop) {
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
    };

    Report.prototype.generateValidationFeedback = function() {
      var errors = [];
      if (!validationTools.isValidDateRange(this.reportStart,this.reportEnd)) {
        errors.push('Please provide a report date range.');
      }
      if (!(this.site
        && this.site.benchmarkStart
        && this.site.benchmarkEnd
        && this.reportStart
        && this.reportEnd
        && (
          this.site.benchmarkEnd.getTime() - this.site.benchmarkStart.getTime() == this.reportEnd.getTime() - this.reportStart.getTime()
          || (this.site.benchmarkEnd.getTime() - this.site.benchmarkStart.getTime()) % (this.reportEnd.getTime() - this.reportStart.getTime()) == 0
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
