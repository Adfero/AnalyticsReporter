angular.module('onemetric.service.validationTools', [])
  .factory('validationTools', [function() {
    return {
      'isFullString': function(string) {
        return string && string.trim().length > 0;
      },
      'isValidDateRange': function(date1,date2) {
        return date1 && date2 && date1.getTime() < date2.getTime();
      },
      'isValidArrayOfUrls': function(array) {
        if (array && array.length > 0) {
          return array
            .filter(function(url) {
              return url.trim().length > 0 && url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) != null;
            }).length > 0;
        } else {
          return false;
        }
      }
    };
  }]);
