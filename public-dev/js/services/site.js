angular.module('onemetric.service.site', [
  'ngResource',
  'onemetric.service.validationTools'
])
  .factory('Site', ['$resource', 'validationTools', function($resource, validationTools) {
    var dateFormatterInterceptor = function (response) {
      ['reportStart','reportEnd','benchmarkStart','benchmarkEnd'].forEach(function(prop) {
        if (response.resource[prop]) {
          response.resource[prop] = new Date(Date.parse(response.resource[prop]));
        }
      });
      return response;
    }

    var Site = $resource('/api/site/:id', { id: '@_id' }, {
      'update': {
        'method': 'PUT',
        'interceptor': {
          'response': dateFormatterInterceptor,
        }
      },
      'get': {
        'method': 'GET',
        'interceptor': {
          'response': dateFormatterInterceptor,
        }
      }
    });

    Site.prototype.isValid = function() {
      return this._id ? this.isDeepValid() : this.isBasicValid();
    };

    Site.prototype.isBasicValid = function() {
      return this.name
        && this.name.trim().length > 0
        && this.url
        && this.url.trim().length > 0;
    };

    Site.prototype.isDeepValid = function() {
      return this.isBasicValid()
        && this.benchmarkURLs
        && this.benchmarkURLs.length > 0
        && this.benchmarkStart
        && this.benchmarkEnd;
    };

    Site.prototype.generateValidationFeedback = function() {
      var errors = [];
      if (!validationTools.isFullString(this.name)) {
        errors.push('Please provide a name.');
      }
      if (!validationTools.isFullString(this.url)) {
        errors.push('Please provide a url.');
      }
      if (!validationTools.isValidDateRange(this.benchmarkStart,this.benchmarkEnd)) {
        errors.push('Please provide a benchmark date range.');
      }
      if (!validationTools.isValidArrayOfUrls(this.benchmarkURLs)) {
        errors.push('Please provide a set of valid sample URLs.');
      }
      return errors;
    };

    Site.prototype.isGoogleAuthenticated = function() {
      return this.auth && this.auth.google && this.auth.google.token;
    }

    return Site;
  }]);
