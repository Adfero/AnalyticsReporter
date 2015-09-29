var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
var User = require('../lib/database').User;
var utils = require('../lib/utils');

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  function(username, password, done) {
    User.findOne({ email: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      if (!user.active) {
        return done(null, false, { message: 'Account disabled.' });
      }
      return done(null, user);
    });
  }
));

exports.login = [
  function(req,res) {
    res.render('account/login',{
      'title': 'Login',
      'message': req.flash('failureFlash')
    });
  }
]

exports.doLogin = passport.authenticate('local', { 
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
});

exports.doLogout = function(req, res){
  req.logout();
  res.redirect('/');
}

function sendResetPage(req,res) {
  res.render('account/reset',{
    'title': 'Reset Your Password',
    'message': req.flash('info')
  });
}

exports.resetPassword = sendResetPage;

exports.doResetPassword = function(req,res,next) {
  if (req.body.email) {
    User.findOne({ email: req.body.email }, function(err, user) {
      if (err) {
        next(err);
      } else if (!user) {
        req.flash('info', 'No account exists with that email.');
        sendResetPage(req,res);
      } else {
        utils.sendUserResetEmail(user,function(err) {
          if (err) {
            next(err);
          } else {
            req.flash('info', 'Please check your email for a password reset link.');
            sendResetPage(req,res);
          }
        })
      }
    });
  } else {
    res.sendStatus(400);
  }
}

exports.doFinishResetPassword = function(req,res,next) {
  if (req.params.hash) {
    User.findOne(
      {
        resetHash: req.params.hash,
        resetExpiration: {
          $gte: new Date()
        }
      },function(err, user) {
        if (err) {
          next(err);
        } else if (!user) {
          res.sendStatus(404);
        } else {
          user.resetHash = null;
          user.resetExpiration = null;
          user.save(function(err) {
            if (err) {
              next(err);
            } else {
              req.logIn(user, function (err) {
                if(err) {
                  next(err);
                } else {
                  res.redirect('/account');
                }
              })
            }
          });
        }
      }
    );
  } else {
    res.sendStatus(400);
  }
}

exports.userAccount = renderUserForm;

exports.saveUserAccount = function(req,res,next) {
  if (!req.body.password || (req.body.password && req.body.password.trim() == '')) {
    req.flash('validation', 'Please specify a password.');
    return renderUserForm(req,res);
  } else if (req.body.password != req.body['verify-password']) {
    req.flash('validation', 'Password entry mismatch.');
    return renderUserForm(req,res);
  }
  req.user.setPassword(req.body.password);
  req.user.save(function(err) {
    if (err) {
      next(err);
    } else {
      renderUserForm(req,res);
    }
  });
}

function renderUserForm(req,res) {
  res.render('account/form',{
    'title': 'User',
    'user': req.user,
    'message': req.flash('validation')
  });
}