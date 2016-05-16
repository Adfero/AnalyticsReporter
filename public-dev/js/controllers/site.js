angular.module('onemetric.controller.site', [
  'ui.bootstrap',
  'daterangepicker',
  'onemetric.service.site',
  'onemetric.service.report'
])
  .controller('SiteController', ['$window', '$scope', '$state', '$stateParams', 'Site', 'Report', '$uibModal', function($window, $scope, $state, $stateParams, Site, Report, $uibModal) {
    $scope.alerts = [];
    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };

    if ($stateParams.siteId) {
      $scope.site = Site.get({'id': $stateParams.siteId},function() {
        document.title = $scope.site.name + ' | One Metric';
        if (!$scope.site.isValid()) {
          $scope.alerts.push({
            'msg': 'The settings for this site are invalid. Please check its settings before running a report.',
            'type': 'danger'
          });
        }
      });
      loadReports();
    }

    $scope.runReport = function() {
      if ($scope.site.isValid()) {
        $uibModal.open({
          'animation': true,
          'templateUrl': '/partials/reportModal.html',
          'controller': 'RunReportModal',
          'size': 'lg',
          'resolve': {
            'report': function() {
              var start = $scope.reports && $scope.reports.length > 0 ? $scope.reports[0].reportStart : $scope.site.benchmarkStart;
              var end = $scope.reports && $scope.reports.length > 0 ? $scope.reports[0].reportEnd : $scope.site.benchmarkEnd
              return new Report({
                'reportStart': start,
                'reportEnd': end,
                'benchmarkStart': start,
                'benchmarkEnd': end,
                'site': $scope.site,
                'reportURLs': $scope.reports && $scope.reports.length > 0 ? $scope.reports[0].reportURLs : [],
                'benchmarkURLs': $scope.reports && $scope.reports.length > 0 ? $scope.reports[0].benchmarkURLs : [],
                'benchmarkURLRegex': $scope.reports && $scope.reports.length > 0 ? $scope.reports[0].benchmarkURLRegex : null
              });
            },
            'doneCallback': function() {
              return function(report) {
                loadReports();
              }
            }
          }
        });
      }
    }

    $scope.downloadLink = function(report) {
      return '/api/report/' + report._id + '/download';
    }

    function loadReports() {
      $scope.reports = Report.query({'site': $stateParams.siteId});
    }
  }])
  .controller('RunReportModal', ['$scope', '$uibModalInstance', 'Report', 'report', 'doneCallback', function($scope, $uibModalInstance, Report, report, doneCallback) {
    $scope.report = report;

    $scope.alerts = [];
    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };

    $scope.benchmarkURLType = report.benchmarkURLs ? 'benchmarkURLs' : 'benchmarkURLRegex';

    $scope.datePicker = {
      'reportDates': {
        'startDate': $scope.report.reportStart,
        'endDate': $scope.report.reportEnd
      },
      'benchmarkDates': {
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

    $scope.benchmarkURLsString = function(urls) {
      if ($scope.report && typeof urls != 'undefined') {
        $scope.report.benchmarkURLs = urls.split('\n');
      }
      return $scope.report && $scope.report.benchmarkURLs ? $scope.report.benchmarkURLs.join('\n') : '';
    }

    $scope.$watch('datePicker.reportDates.startDate',function() {
      $scope.report.reportStart = new Date($scope.datePicker.reportDates.startDate);
    });
    $scope.$watch('datePicker.reportDates.endDate',function() {
      $scope.report.reportEnd = new Date($scope.datePicker.reportDates.endDate);
    });
    $scope.$watch('datePicker.benchmarkDates.startDate',function() {
      $scope.report.benchmarkStart = new Date($scope.datePicker.benchmarkDates.startDate);
    });
    $scope.$watch('datePicker.benchmarkDates.endDate',function() {
      $scope.report.benchmarkEnd = new Date($scope.datePicker.benchmarkDates.endDate);
    });

    $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };

    $scope.run = function() {
      if ($scope.benchmarkURLType == 'benchmarkURLs') {
        $scope.report.benchmarkURLRegex = null;
      } else {
        $scope.report.benchmarkURLs = null;
      }
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
  }])
  .controller('SiteSettingsController', ['$window', '$scope', '$state', '$stateParams', 'Site', '$uibModal', function($window, $scope, $state, $stateParams, Site, $uibModal) {
    $scope.alerts = [];
    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };

    if ($stateParams.siteId) {
      $scope.site = Site.get({'id': $stateParams.siteId},function() {
        document.title = $scope.site.name + ' Settings | One Metric';

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
    }

    $scope.save = function() {
      $scope.alerts = [];
      var errors = $scope.site.generateValidationFeedback();
      if (errors.length > 0) {
        errors.forEach(function(error) {
          $scope.alerts.push({
            'msg': error,
            'type': 'danger'
          });
        });
      } else {
        $scope.site.$update(function() {
          $state.go('app.site', {'siteId': $scope.site._id});
        });
      }
    }

    function loadGoogleAccounts(done) {
      if ($scope.site && $scope.site.auth && $scope.site.auth.google) {
        var account = $scope.site.auth.google.account ? $scope.site.auth.google.account.account : null;
        var property = $scope.site.auth.google.account ? $scope.site.auth.google.account.property : null;
        $scope.site.fetchGoogleAccounts($scope.site,account,property,function(err,data) {
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
