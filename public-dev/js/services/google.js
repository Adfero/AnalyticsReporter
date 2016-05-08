angular.module('onemetric.service.google', [])
  .factory('Google', ['$http',function($http) {
    return {
      'fetchAccounts': function(site,account,property,done) {
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
          'url': '/api/site/' + site._id + '/accounts/google?' + params.join('&')
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
      }
    };
  }]);
