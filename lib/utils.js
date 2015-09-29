var nodemailer = require('nodemailer');
var config = require('../config');

exports.formatDate = function(dateObj) {
  var prependZero = function(val) {
    if (val < 10) {
      return '0' + val;
    } else {
      return val;
    }
  }
  return [dateObj.getFullYear(),prependZero(dateObj.getMonth()+1),prependZero(dateObj.getDate())].join('-');
}

exports.sendUserResetEmail = function(user,callback) {
  user.resetHash = uid(32);
  user.resetExpiration = new Date(Date.now() + 86400000);
  user.save(function(err) {
    if (err) {
      callback(err);
    } else {
      var url = config.callback_root + '/login/reset/' + user.resetHash;
      var message = "A password reset for One Metric has been generated for your account. Visit " + url + " to complete the reset. This link will expire on " + user.resetExpiration + ".";
      var transporter = nodemailer.createTransport(config.smtp.transport);
      transporter.sendMail({
        'from': config.smtp.from,
        'to': user.email,
        'subject': 'Password Reset',
        'text': message
      },callback);
    }
  });
}

function uid(len) {
  var buf = []
    , chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    , charlen = chars.length;

  for (var i = 0; i < len; ++i) {
    buf.push(chars[getRandomInt(0, charlen - 1)]);
  }

  return buf.join('');
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
