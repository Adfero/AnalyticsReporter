var User = require('../lib/database').User;
var Report = require('../lib/database').Report;
var utils = require('../lib/utils');

exports.list = function(req,res,next) {
  User
    .find()
    .sort({created: -1})
    .exec(function(err,users) {
      if (err) {
        next(err)
      } else {
        res.render('admin/users',{
          'title': 'Users',
          'users': users
        });
      }
    });
}

exports.user = function(req,res,next) {
  if (req.params.id) {
    User.findById(req.params.id,function(err,user) {
      if (err) {
        next(err);
      } else if (user) {
        renderUserForm(req,res,user)
      } else {
        next();
      }
    })
  } else {
    renderUserForm(req,res,new User());
  }
}

exports.saveUser = function(req,res,next) {
  var updateUser = function(user,newUser) {
    var data = req.body;
    User.findOne({ email: data.email }, function(err, checkUser) {
      if (err) {
        next(err);
      } else if (checkUser && checkUser._id+'' != user._id+'') {
        req.flash('validation', 'That email address is already in use.');
        return renderUserForm(req,res,user);
      } else {
        if (data.password) {
          if (data.password != data['verify-password']) {
            req.flash('validation', 'Password entry mismatch.');
            return renderUserForm(req,res,user);
          }
          if (data.password.length > 0) {
            user.setPassword(data.password);
          }
        }
        delete data.password;
        delete data['verify-password'];
        ['active','admin'].forEach(function(prop) {
          user[prop] = data[prop] == prop;
          delete data[prop];
        });
        for(var prop in data) {
          user[prop] = data[prop];
        }
        user.save(function(err) {
          if (err) {
            next(err);
          } else {
            console.log(newUser);
            if (newUser) {
              utils.sendUserResetEmail(user,function(err,info) {
                if (err) {
                  console.error(err);
                } else {
                  console.info(info);
                }
              })
            }
            res.redirect('/admin/users');
          }
        });
      }
    });
  }
  if (req.params.id) {
    User.findById(req.params.id,function(err,user) {
      if (err) {
        next(err);
      } else if (user) {
        updateUser(user,false);
      } else {
        next();
      }
    });
  } else {
    updateUser(new User(),true);
  }
}

function renderUserForm(req,res,user) {
  Report
    .find()
    .sort({'name': 1})
    .exec(function(err,reports) {
      if (err) {
        console.error(err);
      }
      res.render('admin/user',{
        'title': 'User',
        'user': user,
        'message': req.flash('validation'),
        'reports': (reports || []).map(function(report) {
          return {
            '_id': report._id,
            'name': report.name,
            'access': user.reports.indexOf(report._id) >= 0
          }
        })
      });
    });
}