var User = require('./lib/database').User;

if (process.argv.length == 4) {
  var user = new User({
    'email': process.argv[2],
    'admin': true
  });
  user.setPassword(process.argv[3]);
  user.save(function(err) {
    if (err) {
      console.error(err);
    } else {
      console.log(user);
    }
  })
} else {
  console.error('Please provide an email and password');
}