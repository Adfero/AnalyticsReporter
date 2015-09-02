var utils = require('../lib/utils');

exports.index = function(req,res) {
  var now = new Date();
  var then = new Date(now.getTime() - 2592000000);
  res.render('index',{
    'title': 'Analytics Reporter',
    'auth': req.session ? (req.session.auth ? req.session.auth : {}) : {},
    'defaultDates': {
      'start': utils.formatDate(then),
      'end': utils.formatDate(now)
    }
  });
}