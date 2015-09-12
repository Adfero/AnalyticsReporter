var twitter = require('../lib/twitter');

exports.name = 'retweets';

exports.label = 'Retweets';

exports.weight = 2;

exports.average = function(data,done) {
  if (data.auth.twitter) {
    twitter.getUserTweets(data,data.sampleStart,data.sampleEnd,function(err,tweets) {
      if (err) {
        return done(err);
      } else {
        return twitter.calculateAverage(tweets,data,done);
      }
    })
  } else {
    done(null,false);
  }
}

exports.page = function(data,done) {
  if (data.auth.twitter) {
    twitter.getUserTweets(data,data.sampleStart,data.sampleEnd,function(err,tweets) {
      if (err) {
        return done(err);
      } else {
        return twitter.calculatePage(tweets,data,done);
      }
    })
  } else {
    done(null,false);
  }
}
