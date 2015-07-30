var config = require('./config.json');
var express = require('express');
var session = require('express-session');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var MemcachedStore = require('connect-memcached')(session);
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var routes = require('./routes');
var User = require('./database').User;

var app = express();
app.use(logger('combined'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(session({
  secret: config.express.session_key,
  resave: true,
  proxy: true,
  saveUninitialized: true,
  store: new MemcachedStore({
    hosts: config.express.memcached_hosts
  })
}));
app.use(passport.initialize());
app.use(passport.session());
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

passport.use(new GoogleStrategy({
    clientID: config.google.key,
    clientSecret: config.google.secret,
    callbackURL: config.google.callback_root+"/oauth2callback"
  },
  function(token, tokenSecret, profile, done) {
    var user = {
      'id': profile.id,
      'token': token
    };
    User.update({'id': profile.id},user,function(err,updates) {
      if (updates.n == 0) {
        new User(user).save(done);
      } else {
        done(err, user);
      }
    });
  }
));

passport.serializeUser(function(user, done) {
  User.update({'id': user.id},user,function(err) {
    done(err, user.id);
  });
});

passport.deserializeUser(function(id, done) {
  User.findOne({'id': id},done);
});

app.get('/',routes.public.index);

app.get('/login',routes.auth.request);
app.get('/oauth2callback',routes.auth.callback);

app.get('/choose',routes.choose.index);

app.get('/report',routes.report.index);

app.listen(config.express.port,function() {
  console.log('Server running.');
});