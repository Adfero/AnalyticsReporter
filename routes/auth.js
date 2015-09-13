var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
var User = require('../lib/database').User;

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