var config = require('../config.json');
var oauth = require('../lib/oauth');

function makeCallback(req,type) {
  return config.callback_root + '/report/' + req.report._id + '/auth/' + type + '/callback';
}

function wrapCallback(req,res,next) {
  var report = req.report;
  report.save(function(err) {
    if (err) {
      next(err);
    } else {
      res.redirect('/report/' + report._id);
    }
  })
}

exports.startGoogle = function(req,res) {
  var authURL = oauth.googleOAuth().getAuthorizeUrl({
    response_type: 'code',
    redirect_uri: makeCallback(req,'google'),
    scope: [
      'https://www.googleapis.com/auth/plus.login',
      'https://www.googleapis.com/auth/analytics.readonly'
    ].join(' '),
    state: 'some random string to protect against cross-site request forgery attacks'
  });
  res.redirect(authURL);
}

exports.finishGoogle = function(req,res,next) {
  var code = req.query.code;
  oauth.googleOAuth().getOAuthAccessToken(
    code,
    {
      'grant_type': 'authorization_code',
      'redirect_uri': makeCallback(req,'google')
    },
    function(err, accessToken, refreshToken, params) {
      if (err) {
        next(err);
      } else {
        req.report.auth.google.token = accessToken;
        req.report.auth.google.refresh = refreshToken;
        wrapCallback(req,res,next);
      }
    }
  );
}

exports.startTwitter = function(req,res,next) {
  oauth.twitterOAuth(makeCallback(req,'twitter')).getOAuthRequestToken(function(error, oauthToken, oauthTokenSecret, results){
    if (error) {
      delete req.session.auth.twitter;
      next(error);
    } else {
      req.session.twitter = {
        'token': oauthToken,
        'secret': oauthTokenSecret
      }
      res.redirect("https://twitter.com/oauth/authorize?oauth_token="+req.session.twitter.token);      
    }
  });
}

exports.finishTwitter = function(req,res,next) {
  oauth.twitterOAuth().getOAuthAccessToken(
    req.query.oauth_token, 
    req.session.secret,
    req.query.oauth_verifier,
    function(error, oauthAccessToken, oauthAccessTokenSecret, results) {
      if (error) {
        delete req.session.twitter;
        next(error);
      } else {
        req.report.auth.twitter.token = oauthAccessToken;
        req.report.auth.twitter.secret = oauthAccessTokenSecret;
        wrapCallback(req,res,next);
      }
    }
  );
}

exports.startFacebook = function(req,res,next) {
  var authURL = oauth.facebookOAuth().getAuthorizeUrl({
    response_type: 'code',
    redirect_uri: makeCallback(req,'facebook'),
    scope: [
      'read_insights'
    ].join(','),
    state: 'some random string to protect against cross-site request forgery attacks'
  });
  res.redirect(authURL);
}

exports.finishFacebook = function(req,res,next) {
  var code = req.query.code;
  oauth.facebookOAuth().getOAuthAccessToken(
    code,
    {
      'grant_type': 'authorization_code',
      'redirect_uri': makeCallback(req,'facebook')
    },
    function(err, accessToken, refreshToken, params) {
      if (err) {
        next(err);
      } else {
        req.report.auth.facebook.token = accessToken;
        req.report.auth.facebook.refresh = refreshToken;
        wrapCallback(req,res,next);
      }
    }
  );
}
