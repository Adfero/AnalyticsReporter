var app = angular.module('onemetric', [
  'ui.router',
  'onemetric.controller.app',
  'onemetric.controller.site',
  'onemetric.controller.report'
]);

angular.module('onemetric')
  .filter('metric', function() {
    return function(input) {
      var map = {
        'hits': 'Hits',
        'avgTimeOnPage': 'Average Time on Page'
      }
      return map[input] ? map[input] : input;
    };
  })
  .config(['$stateProvider',function($stateProvider) {
    $stateProvider
      .state('notPermitted', {
        params: {
          status: 404
        },
        templateUrl: '/partials/error.html',
        controller: function($scope, $stateParams) {
          $scope.errorMessage = $stateParams.status == 404 ? 'Object not found' : 'Not permitted';
        }
      })
      .state('app', {
        url: '/',
        templateUrl: '/partials/app.html',
        controller: 'AppController'
      })
      .state('app.site', {
        url: 'site/:siteId',
        templateUrl: '/partials/site.html',
        controller: 'SiteController'
      })
      .state('app.siteSettings', {
        url: 'site/:siteId/settings',
        templateUrl: '/partials/siteSettings.html',
        controller: 'SiteSettingsController'
      })
      .state('app.report', {
        url: 'site/:siteId/report/:reportId',
        templateUrl: '/partials/report.html',
        controller: 'ReportController'
      })
  }])
  .run(['$state', '$rootScope', '$location', '$window', function($state, $rootScope, $location, $window) {
    if (window.location.hash == '') {
      $state.go('app');
    }
  }]);
