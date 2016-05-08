var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');
var config = require('../config');

module.exports = function(app) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use(new LocalStrategy(
    {
      'usernameField': 'email',
      'passwordField': 'password'
    },
    function(username, password, done) {
      User.findOne({ 'email': username }, function(err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        if (!user.active) {
          return done(null, false, { message: 'Account not active.' });
        }
        return done(null, user);
      });
    }
  ));

  passport.use(
    'local-signup',
    new LocalStrategy({
      'usernameField': 'email',
      'passwordField': 'password',
      'passReqToCallback': true
    },
    function(req, username, password, done) {
      User.findOne({ 'email': username }, function(err, user) {
        if (err) {
          done(err);
        } else if (user) {
          done(null, false, req.flash('signupMessage', 'That email is already taken.'));
        } else {
          var newUser = new User({
            'email': username
          });
          newUser.setPassword(password);
          newUser.save(function(err) {
            if (err) {
              done(err);
            } else {
              done(null, newUser);
            }
          });
        }
      });
    }
  ));
};
