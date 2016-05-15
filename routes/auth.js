var mongoose = require('mongoose');
var Site = mongoose.model('Site');
var config = require('../config');
var GoogleAnalyticsReporter = require('../lib/reporter/googleAnalyticsReporter.js');

var gaReporter = new GoogleAnalyticsReporter(config);
var googleCallback = config.callback_root + '/auth/google/callback';

exports.startGoogle = function(req,res) {
  var authURL = gaReporter.oauthClient.getAuthorizeUrl({
    'response_type': 'code',
    'redirect_uri': googleCallback,
    'scope': [
      'https://www.googleapis.com/auth/plus.login',
      'https://www.googleapis.com/auth/analytics.readonly'
    ].join(' '),
    'state': req.site._id+'',
    'access_type': 'offline',
    'approval_prompt': 'force'
  });
  res.redirect(authURL);
}

exports.finishGoogle = function(req,res,next) {
  if (req.query.state) {
    Site.findById(req.query.state,function(err,site) {
      if (err) {
        next(err);
      } else if (site && req.user.sites.indexOf(site._id+'') >= 0) {
        req.site = site;
        var code = req.query.code;
        var now = new Date().getTime();
        gaReporter.oauthClient.getOAuthAccessToken(
          code,
          {
            'grant_type': 'authorization_code',
            'redirect_uri': googleCallback
          },
          function(err, accessToken, refreshToken, params) {
            if (err) {
              next(err);
            } else {
              if (!req.site.auth) {
                req.site.auth = {};
              }
              if (!req.site.auth.google) {
                req.site.auth.google = {};
              }
              req.site.auth.google.token = accessToken;
              req.site.auth.google.refresh = refreshToken;
              req.site.auth.google.expires = new Date(now + (params['expires_in'] * 1000));
              req.site.auth.google.token = accessToken;
              wrapCallback(req,res,next);
            }
          }
        );
      } else {
        next(new Error('Report not found or not valid'));
      }
    });
  } else {
    next();
  }
}

exports.deauthGoogle = function(req,res,next) {
  req.report.auth.google = null;
  deauth(req,res,next);
}

function wrapCallback(req,res,next) {
  req.site.save(function(err) {
    if (err) {
      next(err);
    } else {
      res.redirect('/#/site/' + req.site._id + '/settings');
    }
  })
}

function deauth(req,res,next) {
  req.site.save(function(err) {
    if (err) {
      next(err);
    } else {
      res.redirect(req.header('Referer'));
    }
  });
}
