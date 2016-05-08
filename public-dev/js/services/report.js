angular.module('onemetric.service.report', [
  'ngResource'
])
  .factory('Report', ['$resource', function($resource) {
    var Report = $resource('/api/report/:id', { id: '@_id' });

    return Report;
  }]);
