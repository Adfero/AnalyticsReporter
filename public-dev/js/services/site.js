angular.module('onemetric.service.site', [
  'ngResource'
])
  .factory('Site', ['$resource', function($resource) {
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
        && this.reportURLs
        && this.reportURLs.length > 0
        && this.benchmarkURLs
        && this.benchmarkURLs.length > 0
        && this.reportStart
        && this.reportEnd
        && this.benchmarkStart
        && this.benchmarkEnd;
    };

    Site.prototype.generateValidationFeedback = function() {
      var errors = [];
      if (!this._isFullString(this.name)) {
        errors.push('Please provide a name.');
      }
      if (!this._isFullString(this.url)) {
        errors.push('Please provide a url.');
      }
      if (!this._isValidDateRange(this.benchmarkStart,this.benchmarkEnd)) {
        errors.push('Please provide a benchmark date range.');
      }
      if (!this._isValidDateRange(this.reportStart,this.reportEnd)) {
        errors.push('Please provide a report date range.');
      }
      if (!(this.benchmarkStart
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
      if (!this._isValidArrayOfUrls(this.reportURLs)) {
        errors.push('Please provide a set of valid report URLs.');
      }
      if (!this._isValidArrayOfUrls(this.benchmarkURLs)) {
        errors.push('Please provide a set of valid sample URLs.');
      }
      return errors;
    };

    Site.prototype.isGoogleAuthenticated = function() {
      return this.auth && this.auth.google && this.auth.google.token;
    }

    Site.prototype._isFullString = function(string) {
      return string && string.trim().length > 0;
    }

    Site.prototype._isValidDateRange = function(date1,date2) {
      return date1 && date2 && date1.getTime() < date2.getTime();
    }

    Site.prototype._isValidArrayOfUrls = function(array) {
      if (array && array.length > 0) {
        return array
          .filter(function(url) {
            return url.trim().length > 0 && url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) != null;
          }).length > 0;
      } else {
        return false;
      }
    }

    return Site;
  }]);
