angular.module('onemetric.controller.site', [
  'ui.bootstrap',
  'daterangepicker',
  'onemetric.service.site',
  'onemetric.service.report',
  'onemetric.service.google'
])
  .controller('SiteController', ['$window', '$scope', '$state', '$stateParams', 'Site', 'Report', 'Google', function($window, $scope, $state, $stateParams, Site, Report, Google) {
    var now = new Date();
    var lastWeek = new Date(now.getTime() - (86400000 * 7));

    $scope.alerts = [];
    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };

    $scope.datePicker = {
      'benchmarkDates': {
        'startDate': lastWeek,
        'endDate': now
      },
      'reportDates': {
        'startDate': lastWeek,
        'endDate': now
      }
    };

    $scope.benchmarkURLsString = function(urls) {
      if ($scope.site && typeof urls != 'undefined') {
        $scope.site.benchmarkURLs = urls.split('\n');
      }
      return $scope.site && $scope.site.benchmarkURLs ? $scope.site.benchmarkURLs.join('\n') : '';
    }
    $scope.reportURLsString = function(urls) {
      if ($scope.site && typeof urls != 'undefined') {
        $scope.site.reportURLs = urls.split('\n');
      }
      return $scope.site && $scope.site.reportURLs ? $scope.site.reportURLs.join('\n') : '';
    }

    $scope.$watch('datePicker.benchmarkDates.startDate',function() {
      $scope.site.benchmarkStart = new Date($scope.datePicker.benchmarkDates.startDate);
    });
    $scope.$watch('datePicker.benchmarkDates.endDate',function() {
      $scope.site.benchmarkEnd = new Date($scope.datePicker.benchmarkDates.endDate);
    });
    $scope.$watch('datePicker.reportDates.startDate',function() {
      $scope.site.reportStart = new Date($scope.datePicker.reportDates.startDate);
    });
    $scope.$watch('datePicker.reportDates.endDate',function() {
      $scope.site.reportEnd = new Date($scope.datePicker.reportDates.endDate);
    });

    if ($stateParams.siteId) {
      $scope.site = Site.get({'id': $stateParams.siteId},function() {
        document.title = $scope.site.name;

        $scope.site.benchmarkStart = $scope.datePicker.benchmarkDates.startDate = $scope.site.benchmarkStart || lastWeek;
        $scope.site.benchmarkEnd = $scope.datePicker.benchmarkDates.endDate = $scope.site.benchmarkEnd || now;
        $scope.site.reportStart = $scope.datePicker.reportDates.startDate = $scope.site.reportStart || lastWeek;
        $scope.site.reportEnd = $scope.datePicker.reportDates.endDate = $scope.site.reportEnd || now;

        loadGoogleAccounts(function() {
          setTimeout(function() {
            $scope.$watch('site.auth.google.account.account',function() {
              if ($scope.site && $scope.site.auth && $scope.site.auth.google && $scope.site.auth.google.account) {
                $scope.site.auth.google.account.property = null;
              }
              loadGoogleAccounts();
            });
            $scope.$watch('site.auth.google.account.property',function() {
              if ($scope.site && $scope.site.auth && $scope.site.auth.google && $scope.site.auth.google.account) {
                $scope.site.auth.google.account.profile = null;
              }
              loadGoogleAccounts();
            });
          },500)
        });

      },function(response) {
        $state.go('notPermitted', {'status': response.status});
      });
      // $scope.reports = Report.find({'site': $stateParams.siteId});
    } else {
      $scope.site = new Site();
      document.title = 'New Site';
    }

    $scope.disableSaveButton = function() {
      return !$scope.site.isValid();
    }

    $scope.generateReport = function() {
      if ($scope.site._id) {
        $scope.site.$update(function() {
          var report = new Report({'site': $scope.site._id});
          report.$save(function() {
            $state.go('report',{'reportId': report._id});
          });
        });
      }
    }

    $scope.saveAndReport = function() {
      validateAndSave(function() {
        $scope.alerts = [{
          'msg': 'Site saved!',
          'type': 'success'
        }];
      });
    }

    $scope.save = function() {
      validateAndSave(function() {
        $scope.alerts = [{
          'msg': 'Site saved!',
          'type': 'success'
        }];
      });
    }

    function validateAndSave(callback) {
      var errors = $scope.site.generateValidationFeedback();
      if (errors.length > 0) {
        $scope.alerts = [];
        errors.forEach(function(error) {
          $scope.alerts.push({
            'msg': error,
            'type': 'danger'
          });
        });
      } else {
        $scope.site.$update(callback);
      }
    }

    function loadGoogleAccounts(done) {
      if ($scope.site && $scope.site.auth && $scope.site.auth.google) {
        var account = $scope.site.auth.google.account ? $scope.site.auth.google.account.account : null;
        var property = $scope.site.auth.google.account ? $scope.site.auth.google.account.property : null;
        Google.fetchAccounts($scope.site,account,property,function(err,data) {
          if (err) {
            $scope.site.auth.google = null;
          } else {
            if (!$scope.google) {
              $scope.google = data;
            }
            if (account) {
              $scope.google.properties = data.properties;
            }
            if (property) {
              $scope.google.profiles = data.profiles;
            }
          }
          done && done();
        });
      }
    }

  }]);
