var passport = require('passport');

exports.request = passport.authenticate('google', { scope: [
  'https://www.googleapis.com/auth/plus.login',
  'https://www.googleapis.com/auth/analytics.readonly'
]});

exports.callback = [
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/choose');
  }
]