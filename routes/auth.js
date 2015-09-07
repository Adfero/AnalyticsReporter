var config = require('../config.json');
var OAuth = require('oauth');

var googleCallback = config.callback_root+"/auth/google/oauth2callback";
var googleOAuth = new OAuth.OAuth2(
  config.google.key,
  config.google.secret, 
  '', 
  'https://accounts.google.com/o/oauth2/auth',
  'https://accounts.google.com/o/oauth2/token', 
  null);

var twitterCallback = config.callback_root+"/auth/twitter/callback";
var twitterOAuth = new OAuth.OAuth(
  "https://twitter.com/oauth/request_token",
  "https://twitter.com/oauth/access_token", 
  config.twitter.key,
  config.twitter.secret, 
  "1.0",
  twitterCallback,
  "HMAC-SHA1"
);

exports.startGoogleAuth = function(req,res) {
  var authURL = googleOAuth.getAuthorizeUrl({
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
  googleOAuth.getOAuthAccessToken(
    code,
    {
      'grant_type': 'authorization_code',
      'redirect_uri': googleCallback
    },
    function(err, accessToken, refreshToken, params) {
      if (err) {
        next(err);
      } else {
        if (!req.session.auth) {
          req.session.auth = {};
        }
        req.session.auth.google = accessToken;
        res.redirect('/');
      }
    }
  );
}

exports.startTwitterAuth = function(req,res,next) {
  twitterOAuth.getOAuthRequestToken(function(error, oauthToken, oauthTokenSecret, results){
    if (error) {
      delete req.session.auth.twitter;
      next(error);
    } else {  
      if (!req.session.auth) {
        req.session.auth = {};
      }
      req.session.auth.twitter = {
        'token': oauthToken,
        'secret': oauthTokenSecret
      }
      res.redirect("https://twitter.com/oauth/authorize?oauth_token="+req.session.auth.twitter.token);      
    }
  });
}

exports.finishTwitterAuth = function(req,res,next) {
  twitterOAuth.getOAuthAccessToken(
    req.query.oauth_token, 
    req.session.secret,
    req.query.oauth_verifier,
    function(error, oauthAccessToken, oauthAccessTokenSecret, results) {
      if (error) {
        delete req.session.auth.twitter;
        next(error);
      } else {
        req.session.auth.twitter = {
          'token': oauthAccessToken,
          'secret': oauthAccessTokenSecret
        }
        res.redirect('/');
      }
    }
  );
}