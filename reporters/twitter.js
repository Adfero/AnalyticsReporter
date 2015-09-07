var OAuth = require('oauth');
var config = require('../config.json');
var querystring = require('querystring');

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
    getUserTweets(data,data.sampleStart,data.sampleEnd,function(err,tweets) {
      if (err) {
        return done(err);
      } else {
        var matchedTweets = tweets.filter(function(tweet) {
          if (data.pattern) {
            if (tweet.entities && tweet.entities.urls) {
              console.error( tweet.entities.urls);
              for(var i = 0; i < tweet.entities.urls.length; i++) {
                if (data.pattern.match(tweet.entities.urls[i].expanded_url)) {
                  return true;
                }
              }
            }
            return false;
          }
          return true;
        });
        console.error(matchedTweets);
        var average = matchedTweets.reduce(function(previous,current) {
          return previous + current.retweet_count;
        },0.0) / parseFloat(matchedTweets.length);
        return done(null,average); 
      }
    })
  } else {
    done(null,false);
  }
}

exports.page = function(data,done) {
  if (data.auth.twitter) {
    getUserTweets(data,data.sampleStart,data.sampleEnd,function(err,tweets) {
      if (err) {
        return done(err);
      } else {
        var urls = {};
        data.urls.forEach(function(url) {
          urls[url] = 0;
        });
        var matchedTweets = tweets.forEach(function(tweet) {
          if (tweet.entities && tweet.entities.urls) {
            for(var i = 0; i < tweet.entities.urls.length; i++) {
              var url = tweet.entities.urls[i].expanded_url;
              if (data.urls.indexOf(url) >= 0) {
                urls[url] += tweet.retweet_count;
              }
            }
          }
          return false;
        });
        var output = [];
        for(var url in urls) {
          output.push({
            'path': url,
            'value': urls[url]
          });
        }
        return done(null,output);
      }
    })
  } else {
    done(null,false);
  }
}

function getUserTweets(data,start,end,done) {
  var allTweets = [];
  var finish = function() {
    done(null,allTweets.filter(function(tweet) {
      var time = new Date(tweet.created_at);
      return time.getTime() >= start.getTime() && time.getTime() <= end.getTime();
    }));
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