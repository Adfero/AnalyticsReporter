angular.module('onemetric.controller.account', [
  'ui.bootstrap',
  'onemetric.service.user'
])
  .controller('AccountController', ['$window', '$scope', '$state', '$stateParams', 'User', 'uid', function($window, $scope, $state, $stateParams, User, uid) {
    $scope.user = User.get({ id: uid },function() {
      document.title = 'My Account';
    },function(response) {
      $state.go('notPermitted', {'status': response.status});
    });

    $scope.save = function() {
      $scope.alerts = [];
      if ($scope.user.isValid()) {
        $scope.user.$update(function() {
          $scope.alerts.push({
            'msg': 'Account saved.',
            'type': 'info'
          });
        });
      }
    }
  }])
