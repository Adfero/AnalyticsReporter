var config = require('./config.json');
var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var MemcachedStore = require('connect-memcached')(session);
var routes = require('./routes');

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
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/',routes.report.form);
app.post('/',routes.report.build);
app.get('/ajax/google',routes.ajax.google);
app.get('/ajax/facebook',routes.ajax.facebook);

app.get('/auth/google',routes.auth.startGoogleAuth);
app.get('/auth/google/oauth2callback',routes.auth.finishGoogleAuth);

app.get('/auth/twitter',routes.auth.startTwitterAuth);
app.get('/auth/twitter/callback',routes.auth.finishTwitterAuth);

app.get('/auth/facebook',routes.auth.startFacebookAuth);
app.get('/auth/facebook/oauth2callback',routes.auth.finishFacebookAuth);

app.listen(config.express.port,function() {
  console.log('Server running.');
});