var googleanalytics = require('../lib/googleanalytics');

exports.index = function(req,res) {
  googleanalytics.loadReferrals(req.user.token,req.query.profile,new Date(Date.now() - 2629740000),new Date(),function(err,data) {
    console.log(err);
    res.send(data)
  });
}