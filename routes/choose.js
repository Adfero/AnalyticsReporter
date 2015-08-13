var querystring = require('querystring');
var googleanalytics = require('../lib/googleanalytics');

exports.index = function(req,res) {
  loadData(req,function(error,accounts,properties,profiles) {
    if (error) {
      console.error(error);
    }
    if (req.query.profile) {
      res.redirect('/report?' + querystring.stringify({
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
      if (properties && req.query.account && isValidData(req.query.account,accounts)) {
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
      if (profiles && req.query.property && isValidData(req.query.property,properties)) {
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

function isValidData(choice,dataset) {
  if (choice) {
    for(var i = 0; i<dataset.length; i++) {
      if (dataset[i].id == choice) {
        return true;
      }
    }
    return false;
  } else {
    return true;
  }
}

function loadData(req,callback) {
  googleanalytics.loadAccounts(req.user.token,function(err,accounts) {
    if (err) {
      callback(err);
    } else if (req.query.account) {
      googleanalytics.loadProperties(req.user.token,req.query.account,function(err,properties) {
        if (err) {
          callback(err);
        } else if (req.query.property) {
          googleanalytics.loadProfiles(req.user.token,req.query.account,req.query.property,function(err,profiles) {
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
