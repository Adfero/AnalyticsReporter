var config = require('../config.json');
var OAuth = require('oauth');

var googleCallback = config.google.callback_root+"/auth/google/oauth2callback";
var oauth2 = new OAuth.OAuth2(
  config.google.key,
  config.google.secret, 
  '', 
  'https://accounts.google.com/o/oauth2/auth',
  'https://accounts.google.com/o/oauth2/token', 
  null);

exports.startGoogleAuth = function(req,res) {
  var authURL = oauth2.getAuthorizeUrl({
    response_type: 'code',
    redirect_uri: googleCallback,
    scope: [
      'https://www.googleapis.com/auth/plus.login',
      'https://www.googleapis.com/auth/analytics.readonly'
    ].join(' '),
    state: 'some random string to protect against cross-site request forgery attacks'
  });
  res.redirect(authURL);
}

exports.finishGoogleAuth = function(req,res,next) {
  var code = req.query.code;
  oauth2.getOAuthAccessToken(
    code,
    {
      'grant_type': 'authorization_code',
      'redirect_uri': googleCallback
    },
    function(err, accessToken, refreshToken, params) {
      if (err) {
        next(err);
      } else {
        req.session.auth = {
          'google': accessToken
        }
        res.redirect('/');
      }
    }
  );
}