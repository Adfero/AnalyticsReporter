var config = require('../config.json');
var oauth = require('../lib/oauth');

exports.startGoogleAuth = function(req,res) {
  var authURL = oauth.googleOAuth.getAuthorizeUrl({
    response_type: 'code',
    redirect_uri: oauth.googleCallback,
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
  oauth.googleOAuth.getOAuthAccessToken(
    code,
    {
      'grant_type': 'authorization_code',
      'redirect_uri': oauth.googleCallback
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
  oauth.twitterOAuth.getOAuthRequestToken(function(error, oauthToken, oauthTokenSecret, results){
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
  oauth.twitterOAuth.getOAuthAccessToken(
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

exports.startFacebookAuth = function(req,res,next) {
  var authURL = oauth.facebookOAuth.getAuthorizeUrl({
    response_type: 'code',
    redirect_uri: oauth.facebookCallback,
    scope: [
      'read_insights'
    ].join(','),
    state: 'some random string to protect against cross-site request forgery attacks'
  });
  res.redirect(authURL);
}

exports.finishFacebookAuth = function(req,res,next) {
  var code = req.query.code;
  oauth.facebookOAuth.getOAuthAccessToken(
    code,
    {
      'grant_type': 'authorization_code',
      'redirect_uri': oauth.facebookCallback
    },
    function(err, accessToken, refreshToken, params) {
      if (err) {
        next(err);
      } else {
        if (!req.session.auth) {
          req.session.auth = {};
        }
        req.session.auth.facebook = accessToken;
        console.warn(req.session.auth);
        res.redirect('/');
      }
    }
  );
}
