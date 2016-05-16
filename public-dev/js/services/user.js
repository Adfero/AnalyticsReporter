angular.module('onemetric.service.user', [
  'ngResource'
])
  .factory('User', ['$resource', '$http', function($resource, $http) {
    var User = $resource('/api/user/:id', { id: '@_id' }, {
      'update': {
        'method': 'PUT'
      }
    });

    User.prototype.isValid = function() {
      return this.email && this.email.trim().length > 0;
    };

    return User;
}]);
