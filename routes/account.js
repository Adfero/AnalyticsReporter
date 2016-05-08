var passport = require('passport');

exports.signup = function(req,res,next) {
  res.render('account/signup',{
    'title': 'Signup',
    'message': req.flash('failureFlash')
  });
}

exports.doSignup = passport.authenticate('local-signup', {
  successRedirect : '/',
  failureRedirect : '/signup',
  failureFlash : true
});

exports.login = function(req,res,next) {
  res.render('account/login',{
    'title': 'Login',
    'message': req.flash('failureFlash')
  });
}

exports.doLogin = passport.authenticate('local', {
  successRedirect: '/login',
  failureRedirect: '/login',
  failureFlash: true
});

exports.logout = function(req,res){
  req.logout();
  res.redirect('/');
}
