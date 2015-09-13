var querystring = require('querystring');
var googleanalytics = require('../lib/googleanalytics');
var facebook = require('../lib/facebook');

exports.google = function(req,res) {
  if (req.report.auth.google.token) {
    loadData(req,function(error,accounts,properties,profiles) {
      if (error) {
        console.error(error);
      }
      var forms = {
        'googleAccount': [],
        'googleProperty': [],
        'googleProfile': []
      };
      if (accounts) {
        forms['googleAccount'] = accounts.map(function(account) {
          return {
            'value': account.id,
            'name': account.name
          }
        });
      }
      if (properties) {
        forms['googleProperty'] = properties.map(function(property) {
          return {
            'value': property.id,
            'name': property.name
          }
        });
      }
      if (profiles) {
        forms['googleProfile'] = profiles.map(function(profile) {
          return {
            'value': profile.id,
            'name': profile.name
          }
        });
      }
      res.send(forms);
    });
  } else {
    res.send(401);
  }
}

exports.facebook = function(req,res,next) {
  if (req.report.auth.facebook.token) {
    facebook.getPages(req.report.auth.facebook.token,function(err,pages) {
      if (err) {
        next(err);
      } else {
        res.send(pages);
      }
    });
  } else {
    res.send(401);
  }
}

function loadData(req,callback) {
  googleanalytics.loadAccounts(req.report.auth.google.token,function(err,accounts) {
    if (err) {
      callback(err);
    } else if (req.query['googleAccount']) {
      googleanalytics.loadProperties(req.report.auth.google.token,req.query['googleAccount'],function(err,properties) {
        if (err) {
          callback(err);
        } else if (req.query['googleProperty']) {
          googleanalytics.loadProfiles(req.report.auth.google.token,req.query['googleAccount'],req.query['googleProperty'],function(err,profiles) {
            if (err) {
              callback(err);
            } else {
              callback(null,accounts,properties,profiles);
            }
          });
        } else {
          callback(null,accounts,properties);
        }
      });
    } else {
      callback(null,accounts);
    }
  });
}