var OAuth = require('oauth');
var config = require('../config.json');
var querystring = require('querystring');

var oauth2 = new OAuth.OAuth2(
  config.google.key,
  config.google.secret, 
  '', 
  'https://accounts.google.com/o/oauth2/auth',
  'https://accounts.google.com/o/oauth2/token', 
  null);

exports.index = function(req,res) {
  loadData(req,function(error,accounts,properties,profiles) {
    if (error) {
      console.error(error);
    }
    if (req.query.account && req.query.property && req.query.profile) {
      res.redirect('/report?' + querystring.stringify({
        'account': req.query.account,
        'property': req.query.property,
        'profile': req.query.profile
      }));
    } else {
      var forms = [];
      if (accounts) {
        forms.push({
          'name': 'account',
          'label': 'Account',
          'options': accounts.map(function(account) {
            return {
              'value': account.id,
              'name': account.name,
              'selected': req.query.account == account.id
            }
          })
        });
      }
      if (properties && req.query.account) {
        forms.push({
          'name': 'property',
          'label': 'Properties',
          'options': properties.map(function(property) {
            return {
              'value': property.id,
              'name': property.name,
              'selected': req.query.property == property.id
            }
          })
        });
      }
      if (profiles && req.query.property) {
        forms.push({
          'name': 'profile',
          'label': 'Profiles',
          'options': profiles.map(function(profile) {
            return {
              'value': profile.id,
              'name': profile.name,
              'selected': req.query.profile == profile.id
            }
          })
        });
      }
      res.render('choose',{
        'title': 'Choose Your Account',
        'forms': forms
      })
    }
  });
}

function loadData(req,callback) {
  loadAccounts(req,function(err,accounts) {
    if (err) {
      callback(err);
    } else if (req.query.account) {
      loadProperties(req,function(err,properties) {
        if (err) {
          callback(err);
        } else if (req.query.property) {
          loadProfiles(req,function(err,profiles) {
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
  })
}

function loadAccounts(req,callback) {
  oauth2.get('https://www.googleapis.com/analytics/v3/management/accounts',req.user.token,function (e, data) {
    if (e) {
      callback(e);
    } else if (data) {
      var accounts = JSON.parse(data);
      callback(null,accounts.items)
    }
  });
}

function loadProperties(req,callback) {
  oauth2.get('https://www.googleapis.com/analytics/v3/management/accounts/' + req.query.account + '/webproperties',req.user.token,function (e, data) {
    if (e) {
      callback(e);
    } else if (data) {
      var properties = JSON.parse(data);
      callback(null,properties.items)
    }
  });
}

function loadProfiles(req,callback) {
  var url = 'https://www.googleapis.com/analytics/v3/management/accounts/' + req.query.account + '/webproperties/' + req.query.property + '/profiles';
  oauth2.get(url,req.user.token,function (e, data) {
    if (e) {
      callback(e);
    } else if (data) {
      var profiles = JSON.parse(data);
      callback(null,profiles.items)
    }
  });
}