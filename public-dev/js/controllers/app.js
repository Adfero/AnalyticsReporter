angular.module('onemetric.controller.app', [
  'ui.bootstrap',
  'daterangepicker',
  'onemetric.service.site'
])
  .controller('AppController', ['$window', '$scope', '$state', '$stateParams', '$uibModal', 'Site', function($window, $scope, $state, $stateParams, $uibModal, Site) {
    $scope.$state = $state;
    $scope.sites = Site.query();
    $scope.addSite = function() {
      $uibModal.open({
        'animation': true,
        'templateUrl': '/partials/siteModal.html',
        'controller': 'AddSiteModal',
        'size': 'md',
        'resolve': {
          'doneCallback': function() {
            return function(site) {
              $scope.sites = Site.query();
              $state.go('app.site',{'siteId': site._id});
            }
          }
        }
      });
    };
  }])
  .controller('AddSiteModal', ['$scope', '$uibModalInstance', 'Site', 'doneCallback', function($scope, $uibModalInstance, Site, doneCallback) {
    $scope.site = new Site();

    $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };

    $scope.invalidInput = function() {
      return !$scope.site.isValid();
    };

    $scope.add = function() {
      $scope.site.$save(function() {
        $uibModalInstance.close();
        doneCallback($scope.site);
      });
    };
  }]);
