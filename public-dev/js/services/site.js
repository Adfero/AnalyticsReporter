angular.module('onemetric.service.site', [
  'ngResource',
  'onemetric.service.validationTools'
])
  .factory('Site', ['$resource', '$http', 'validationTools', function($resource, $http, validationTools) {
    var Site = $resource('/api/site/:id', { id: '@_id' }, {
      'update': {
        'method': 'PUT'
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
        && this.hasGoogleProfile();
    };

    Site.prototype.generateValidationFeedback = function() {
      var errors = [];
      if (!validationTools.isFullString(this.name)) {
        errors.push('Please provide a name.');
      }
      if (!validationTools.isFullString(this.url)) {
        errors.push('Please provide a url.');
      }
      if (!this.hasGoogleProfile()) {
        errors.push('Please log in to your Google account and select a profile.');
      }
      return errors;
    };

    Site.prototype.hasGoogleProfile = function() {
      return this.isGoogleAuthenticated() && this.auth && this.auth.google && this.auth.google.account && this.auth.google.account.profile;
    };

    Site.prototype.isGoogleAuthenticated = function() {
      return this.auth && this.auth.google && this.auth.google.token;
    };

    Site.prototype.fetchGoogleAccounts = function(site,account,property,done) {
      var object = {
        'accounts': [],
        'properties': [],
        'profiles': []
      }
      var params = [];
      if (account) {
        params.push('account=' + encodeURIComponent(account));
      }
      if (property) {
        params.push('property=' + encodeURIComponent(property));
      }
      $http({
        'method': 'GET',
        'url': '/api/site/' + this._id + '/accounts/google?' + params.join('&')
      }).then(
        function(response) {
          object.accounts = response.data.accounts;
          object.properties = response.data.properties;
          object.profiles = response.data.profiles;
          done(null,object);
        },
        function(error) {
          done(error);
        }
      );
      return object;
    };

    Site.prototype.findURLs = function(done) {
      $http({
        'method': 'GET',
        'url': '/api/site/' + this._id + '/urls?sitemapPath=' + encodeURIComponent(this.sitemapPath)
      }).then(
        function(response) {
          done(null,response.data);
        },
        function(error) {
          done(error);
        }
      );
    }

    return Site;
  }]);
