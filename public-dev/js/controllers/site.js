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
          'size': 'md',
          'resolve': {
            'report': function() {
              return new Report({
                'reportStart': $scope.reports && $scope.reports.length > 0 ? $scope.reports[0].reportStart : $scope.site.benchmarkStart,
                'reportEnd': $scope.reports && $scope.reports.length > 0 ? $scope.reports[0].reportEnd : $scope.site.benchmarkEnd,
                'site': $scope.site,
                'reportURLs': $scope.reports && $scope.reports.length > 0 ? $scope.reports[0].reportURLs : []
              });;
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
      return '/api/report/' + report._id + '/csv';
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
  }])
  .controller('SiteSettingsController', ['$window', '$scope', '$state', '$stateParams', 'Site', '$uibModal', function($window, $scope, $state, $stateParams, Site, $uibModal) {
    $scope.alerts = [];
    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };

    var now = new Date();
    var lastWeek = new Date(now.getTime() - (86400000 * 7));

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
        document.title = $scope.site.name + ' Settings | One Metric';

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
    }

    $scope.findURLs = function() {
      $uibModal.open({
        'animation': true,
        'templateUrl': '/partials/findURLsModal.html',
        'controller': 'FindURLsModal',
        'size': 'lg',
        'resolve': {
          'site': function() {
            return $scope.site;
          },
          'doneCallback': function() {
            return function(urls) {
              //TODO
            }
          }
        }
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
  }])
  .controller('FindURLsModal', ['$scope', '$uibModalInstance', 'site', 'doneCallback', function($scope, $uibModalInstance, site, doneCallback) {
    $scope.site = site;
    $scope.alerts = [];

    $scope.findURLs = function() {
      $scope.site.findURLs(function(err,urls) {
        if (err) {
          $scope.alerts.push({
            'msg': 'There was an error fetching URLs for this site.',
            'type': 'danger'
          });
        } else {
          $scope.urls = urls;
        }
      })
    }

    $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };

    // $scope.invalidInput = function() {
    //   return !$scope.site.isValid();
    // };
    //
    // $scope.add = function() {
    //   $scope.site.$save(function() {
    //     $uibModalInstance.close();
    //     doneCallback($scope.site);
    //   });
    // };
  }]);
