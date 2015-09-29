var config = require('./config.json');
var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var MemcachedStore = require('connect-memcached')(session);
var routes = require('./routes');
var passport = require('passport');
var User = require('./lib/database').User;
var flash = require('connect-flash');
var login = require('connect-ensure-login');
var Report = require('./lib/database').Report;
var googleanalytics = require('./lib/googleanalytics');

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
app.use(flash());
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

var goToLogin = login.ensureLoggedIn('/login');

function forwardIfLoggedIn(req,res,next) {
  if (req.user) {
    res.redirect('/');
  } else {
    next();
  }
}

function mustBeAdmin(req,res,next) {
  if (req.user && req.user.admin) {
    next();
  } else {
    res.send(401);
  }
}

function reportCheck(req,res,next) {
  Report.findById(req.params.id,function(err,report) {
    if (err) {
      next(err);
    } else if (report) {
      if (req.user.reports.indexOf(report._id+'') >= 0) {
        req.report = report;
        if (req.report.auth.google.expires && req.report.auth.google.expires.getTime() < (new Date()).getTime()) {
          googleanalytics.refresh(req.report.auth.google.refresh,function(err,token,refresh,expires) {
            if (err) {
              req.report.auth.google.token = null;
              req.report.auth.google.refresh = null;
              req.report.auth.google.expires = null;
            } else {
              req.report.auth.google.token = token;
              req.report.auth.google.refresh = refresh;
              req.report.auth.google.expires = expires;
            }
            req.report.save(function(err) {
              if (err) {
                console.error(err);
              }
              next();
            });
          });
        } else {
          next();
        }
      } else {
        res.send(401);
      }
    } else {
      next(new Error('Report not found'));
    }
  });
}

app.get('/login',forwardIfLoggedIn,routes.auth.login);
app.post('/login',routes.auth.doLogin);
app.get('/login/reset',forwardIfLoggedIn,routes.auth.resetPassword);
app.post('/login/reset',forwardIfLoggedIn,routes.auth.doResetPassword);
app.post('/logout',routes.auth.doLogout);

app.get('/',goToLogin,routes.report.list);
app.get('/report',goToLogin,routes.report.newReport);
app.post('/report',goToLogin,routes.report.saveNewReport);
app.get('/report/:id',goToLogin,reportCheck,routes.report.form);
app.post('/report/:id',goToLogin,reportCheck,routes.report.build);

app.get('/report/:id/auth/google',goToLogin,reportCheck,routes.reportAuth.startGoogle);
app.get('/report/auth/google/callback',goToLogin,routes.reportAuth.finishGoogle);
app.get('/report/:id/auth/google/deauth',goToLogin,reportCheck,routes.reportAuth.deauthGoogle);
app.get('/report/:id/auth/twitter',goToLogin,reportCheck,routes.reportAuth.startTwitter);
app.get('/report/:id/auth/twitter/callback',goToLogin,reportCheck,routes.reportAuth.finishTwitter);
app.get('/report/:id/auth/twitter/deauth',goToLogin,reportCheck,routes.reportAuth.deauthTwitter);
app.get('/report/:id/auth/facebook',goToLogin,reportCheck,routes.reportAuth.startFacebook);
app.get('/report/:id/auth/facebook/callback',goToLogin,reportCheck,routes.reportAuth.finishFacebook);
app.get('/report/:id/auth/facebook/deauth',goToLogin,reportCheck,routes.reportAuth.deauthFacebook);

app.get('/report/:id/ajax/google',goToLogin,reportCheck,routes.ajax.google);
app.get('/report/:id/ajax/facebook',goToLogin,reportCheck,routes.ajax.facebook);

app.get('/admin/users',goToLogin,mustBeAdmin,routes.admin.list);
app.post('/admin/users',goToLogin,mustBeAdmin,routes.admin.list);
app.get('/admin/user',goToLogin,mustBeAdmin,routes.admin.user);
app.post('/admin/user',goToLogin,mustBeAdmin,routes.admin.saveUser);
app.get('/admin/user/:id',goToLogin,mustBeAdmin,routes.admin.user);
app.post('/admin/user/:id',goToLogin,mustBeAdmin,routes.admin.saveUser);

app.listen(config.express.port,function() {
  console.log('Server running.');
});
