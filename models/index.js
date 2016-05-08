['report','site','user'].forEach(function(inc) {
  module.exports[inc] = require('./' + inc);
});
