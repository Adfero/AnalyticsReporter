var async = require('async');
var config = require('../config.json');
var twitter = require('../lib/twitter');

exports.name = 'twitter';

exports.weight = 1;

exports.average = function(data,done) {
  if (data.auth.twitter) {
    twitter.getUserTweets(data,data.sampleStart,data.sampleEnd,function(err,tweets) {
      if (err) {
        return done(err);
      } else {
        return exports.calculateAverage(tweets,data,done);
      }
    })
  } else {
    done(null,false);
  }
}

exports.calculateAverage = function(tweets,data,done) {
  var matchedTweets = tweets.filter(function(tweet) {
    if (data.pattern) {
      if (tweet.urls) {
        for(var i = 0; i < tweet.urls.length; i++) {
          if (data.pattern.match(tweet.urls[i])) {
            return true;
          }
        }
      }
      return false;
    }
    return true;
  });
  if (matchedTweets.length > 0) {
    var average = matchedTweets.reduce(function(previous,current) {
      return previous + current.retweet_count;
    },0.0) / parseFloat(matchedTweets.length);
    done(null,average); 
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
        return exports.calculatePage(tweets,data,done);
      }
    })
  } else {
    done(null,false);
  }
}

exports.calculatePage = function(tweets,data,done) {
  var output = data.urls.map(function(url) {
    var totals = tweets.reduce(function(previous,tweet) {
      return previous + ((tweet.urls && tweet.urls.indexOf(url) >= 0) ? tweet.retweet_count : 0);
    },0);
    return {
      'path': url,
      'value': totals
    }
  });
  return done(null,output);
}
