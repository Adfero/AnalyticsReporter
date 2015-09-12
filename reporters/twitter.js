var OAuth = require('oauth');
var async = require('async');
var config = require('../config.json');
var querystring = require('querystring');
var unshortener = require('unshortener');

var twitterOAuth = new OAuth.OAuth(
  "https://twitter.com/oauth/request_token",
  "https://twitter.com/oauth/access_token", 
  config.twitter.key,
  config.twitter.secret, 
  "1.0",
  '',
  "HMAC-SHA1"
);

exports.name = 'twitter';

exports.weight = 1;

exports.average = function(data,done) {
  if (data.auth.twitter) {
    exports.getUserTweets(data,data.sampleStart,data.sampleEnd,function(err,tweets) {
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
    exports.getUserTweets(data,data.sampleStart,data.sampleEnd,function(err,tweets) {
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

exports.getUserTweets = function(data,start,end,done) {
  var allTweets = [];
  var finish = function() {
    var tweets = allTweets.filter(function(tweet) {
      var time = new Date(tweet.created_at);
      return time.getTime() >= start.getTime() && time.getTime() <= end.getTime();
    });
    async.each(
      tweets,
      function(tweet,eachCallback) {
        if (tweet.entities && tweet.entities.urls) {
          async.map(
            tweet.entities.urls,
            function(url,mapCallback) {
              unshortener.expand(
                url.expanded_url,
                function (err, url) {
                  if (err) {
                    mapCallback(err,url.path);
                  } else {
                    mapCallback(null,url.path)
                  }
                }
              )
            },
            function(err,urls) {
              if (err) {
                console.warn(err);
              }
              if (urls) {
                tweet.urls = urls;
              }
              eachCallback();
            }
          );
        } else {
          eachCallback();
        }
      },
      function(err) {
        done(err,tweets);
      }
    );
  }
  var doFetch = function(max_id) {
    var params = {
      'count': 200
    }
    if (max_id) {
      params.max_id = max_id;
    }
    var url = 'https://api.twitter.com/1.1/statuses/user_timeline.json?' + querystring.stringify(params);
    twitterOAuth.get(url,data.auth.twitter.token,data.auth.twitter.secret,function(err,body) {
      if (err) {
        done(err);
      } else {
        var data = JSON.parse(body);
        if (data && data.length) {
          allTweets = allTweets.concat(data);
          if (data.length > 0) {
            var lastTweet = data[data.length - 1];
            var lastTweetTime = new Date(lastTweet.created_at);
            if (lastTweetTime.getTime() > start.getTime()) {
              return doFetch(lastTweet.id_str);
            }
          }
        }
        finish();
      }
    });     
  }
  doFetch(null);
}
