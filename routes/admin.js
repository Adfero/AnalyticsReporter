var User = require('../lib/database').User;

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
  var updateUser = function(user) {
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
        updateUser(user);
      } else {
        next();
      }
    });
  } else {
    updateUser(new User());
  }
}

function renderUserForm(req,res,user) {
  res.render('admin/user',{
    'title': 'User',
    'user': user,
    'message': req.flash('validation')
  });
}