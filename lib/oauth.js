var OAuth = require('oauth');
var config = require('../config.json');

exports.googleCallback = config.callback_root+"/auth/google/oauth2callback";

exports.googleOAuth = new OAuth.OAuth2(
  config.google.key,
  config.google.secret, 
  '', 
  'https://accounts.google.com/o/oauth2/auth',
  'https://accounts.google.com/o/oauth2/token', 
  null
);

exports.twitterCallback = config.callback_root+"/auth/twitter/callback";

exports.twitterOAuth = new OAuth.OAuth(
  "https://twitter.com/oauth/request_token",
  "https://twitter.com/oauth/access_token", 
  config.twitter.key,
  config.twitter.secret, 
  "1.0",
  exports.twitterCallback,
  "HMAC-SHA1"
);
