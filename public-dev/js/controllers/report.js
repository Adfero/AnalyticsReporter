angular.module('onemetric.controller.report', [
  'ui.bootstrap',
  'onemetric.service.site',
  'onemetric.service.report'
])
  .controller('ReportController', ['$window', '$scope', '$state', '$stateParams', 'Report', function($window, $scope, $state, $stateParams, Report) {
    $scope.report = Report.get({ id: $stateParams.reportId },function() {
      document.title = 'Report';
    },function(response) {
      $state.go('notPermitted', {'status': response.status});
    });
  }])
