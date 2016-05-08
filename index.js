var config = require('./config.json');
var models = require('./models');
var routes = require('./routes');
var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var MongoStore = require('connect-mongo')(session);
var flash = require('connect-flash');
var login = require('connect-ensure-login');
var passport = require('passport');
var mongoose = require('mongoose');
var login = require('connect-ensure-login');

mongoose.connect(config.mongo.connection_string);

var app = express();
app.use(logger('combined'));
app.use(bodyParser.urlencoded({
  extended:true,
  limit: '8mb'
}));
app.use(bodyParser.json({
  limit: '8mb'
}));
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(session({
  'secret': config.express.session_key,
  'resave': true,
  'proxy': true,
  'saveUninitialized': true,
  'store': new MongoStore({
    'mongooseConnection': mongoose.connection
  })
}));
app.use(flash());
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(passport.initialize());
app.use(passport.session());

require('./lib/passport.js')(app);

['Report','Site'].forEach(function(modelName) {
  var model = mongoose.model(modelName);
  app.param(modelName.toLowerCase(),model.getForAPI);
});

var goToLogin = login.ensureLoggedIn('/login');

var forwardIfLoggedIn = function(req,res,next) {
  if (req.user) {
    res.redirect('/');
  } else {
    next();
  }
}

var requireLoggedIn = function(req,res,next) {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
}

app.get('/',goToLogin,function(req,res) {
  res.render('index',{
    'title': 'One Metric'
  });
});

app.get('/signup',forwardIfLoggedIn,routes.account.signup);
app.post('/signup',forwardIfLoggedIn,routes.account.doSignup);

app.get('/login',forwardIfLoggedIn,routes.account.login);
app.post('/login',forwardIfLoggedIn,routes.account.doLogin);

app.get('/logout',requireLoggedIn,routes.account.logout);

app.get('/api/site',requireLoggedIn,routes.api.listSites);
app.post('/api/site',requireLoggedIn,routes.api.createSite);
app.get('/api/site/:site',requireLoggedIn,routes.api.readSite);
app.get('/api/site/:site/urls',requireLoggedIn,routes.api.listSiteURLs);
app.get('/api/site/:site/accounts/google',requireLoggedIn,routes.api.listGoogleAccounts);
app.put('/api/site/:site',requireLoggedIn,routes.api.updateSite);
app.delete('/api/site/:site',requireLoggedIn,routes.api.deleteSite);

app.get('/api/report',requireLoggedIn,routes.api.listReports);
app.post('/api/report',requireLoggedIn,routes.api.createReport);
app.get('/api/report/:report',requireLoggedIn,routes.api.readReport);
app.delete('/api/report/:report',requireLoggedIn,routes.api.deleteReport);

app.get('/auth/:site/google',requireLoggedIn,routes.auth.startGoogle);
app.get('/auth/google/callback',requireLoggedIn,routes.auth.finishGoogle);
app.get('/auth/:site/google/deauth',requireLoggedIn,routes.auth.deauthGoogle);

app.listen(config.express.port,function() {
  console.log('Server running.');
});
