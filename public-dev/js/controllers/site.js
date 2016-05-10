angular.module('onemetric.controller.site', [
  'ui.bootstrap',
  'daterangepicker',
  'onemetric.service.site',
  'onemetric.service.report',
  'onemetric.service.google'
])
  .controller('SiteController', ['$window', '$scope', '$state', '$stateParams', 'Site', 'Report', 'Google', '$uibModal', function($window, $scope, $state, $stateParams, Site, Report, Google, $uibModal) {
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
      }
    };

    $scope.benchmarkURLsString = function(urls) {
      if ($scope.site && typeof urls != 'undefined') {
        $scope.site.benchmarkURLs = urls.split('\n');
      }
      return $scope.site && $scope.site.benchmarkURLs ? $scope.site.benchmarkURLs.join('\n') : '';
    }

    $scope.$watch('datePicker.benchmarkDates.startDate',function() {
      $scope.site.benchmarkStart = new Date($scope.datePicker.benchmarkDates.startDate);
    });
    $scope.$watch('datePicker.benchmarkDates.endDate',function() {
      $scope.site.benchmarkEnd = new Date($scope.datePicker.benchmarkDates.endDate);
    });

    if ($stateParams.siteId) {
      $scope.site = Site.get({'id': $stateParams.siteId},function() {
        document.title = $scope.site.name;

        $scope.site.benchmarkStart = $scope.datePicker.benchmarkDates.startDate = $scope.site.benchmarkStart || lastWeek;
        $scope.site.benchmarkEnd = $scope.datePicker.benchmarkDates.endDate = $scope.site.benchmarkEnd || now;

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

    $scope.save = function() {
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
        $scope.site.$update(function() {
          $scope.alerts = [{
            'msg': 'Site saved!',
            'type': 'success'
          }];
        });
      }
    }

    $scope.runReport = function() {
      $uibModal.open({
        'animation': true,
        'templateUrl': '/partials/reportModal.html',
        'controller': 'RunReportModal',
        'size': 'md',
        'resolve': {
          'site': function() {
            return $scope.site;
          },
          'doneCallback': function() {
            return function(site) {

            }
          }
        }
      });
    }

    $scope.showHideMap = {
      'settings': true,
      'reports': true
    };

    $scope.expandCollapse = function(section) {
      $scope.showHideMap[section] = !$scope.showHideMap[section];
    }

    $scope.getExpandCollapseArrow = function(section) {
      return $scope.showHideMap[section] ? 'top' : 'bottom';
    }

    $scope.showHide = function(section) {
      return $scope.showHideMap[section];
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
  }])
  .controller('RunReportModal', ['$scope', '$uibModalInstance', 'Report', 'site', 'doneCallback', function($scope, $uibModalInstance, Report, site, doneCallback) {
    $scope.report = new Report({
      'reportStart': site.benchmarkStart,
      'reportEnd': site.benchmarkEnd,
      'site': site,
      'reportURLs': []
    });

    $scope.alerts = [];
    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };


    $scope.datePicker = {
      'dateRange': {
        'startDate': $scope.report.reportStart,
        'endDate': $scope.report.reportEnd
      }
    };

    $scope.reportURLsString = function(urls) {
      if ($scope.report && typeof urls != 'undefined') {
        $scope.report.reportURLs = urls.split('\n');
      }
      return $scope.report && $scope.report.reportURLs ? $scope.report.reportURLs.join('\n') : '';
    };

    $scope.$watch('datePicker.startDate',function() {
      $scope.report.reportStart = new Date($scope.datePicker.dateRange.startDate);
    });
    $scope.$watch('datePicker.endDate',function() {
      $scope.report.reportEnd = new Date($scope.datePicker.dateRange.endDate);
    });

    $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };

    $scope.run = function() {
      var errors = $scope.report.generateValidationFeedback();
      if (errors.length > 0) {
        $scope.alerts = [];
        errors.forEach(function(error) {
          $scope.alerts.push({
            'msg': error,
            'type': 'danger'
          });
        });
      } else {
        $scope.report.$save(function() {
          $uibModalInstance.close();
          doneCallback($scope.report);
        });
      }
    };
  }]);
