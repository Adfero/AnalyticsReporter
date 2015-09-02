var querystring = require('querystring');
var googleanalytics = require('../lib/googleanalytics');

exports.google = function(req,res) {
  if (req.session && req.session.auth && req.session.auth.google) {
    loadData(req,function(error,accounts,properties,profiles) {
      if (error) {
        console.error(error);
      }
      var forms = {
        'google-account': [],
        'google-property': [],
        'google-profile': []
      };
      if (accounts) {
        forms['google-account'] = accounts.map(function(account) {
          return {
            'value': account.id,
            'name': account.name
          }
        });
      }
      if (properties) {
        forms['google-property'] = properties.map(function(property) {
          return {
            'value': property.id,
            'name': property.name
          }
        });
      }
      if (profiles) {
        forms['google-profile'] = profiles.map(function(profile) {
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

function loadData(req,callback) {
  googleanalytics.loadAccounts(req.session.auth.google,function(err,accounts) {
    if (err) {
      callback(err);
    } else if (req.query['google-account']) {
      googleanalytics.loadProperties(req.session.auth.google,req.query['google-account'],function(err,properties) {
        if (err) {
          callback(err);
        } else if (req.query['google-property']) {
          googleanalytics.loadProfiles(req.session.auth.google,req.query['google-account'],req.query['google-property'],function(err,profiles) {
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