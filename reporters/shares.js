var facebook = require('../lib/facebook');
var async = require('async');

exports.name = 'shares';

exports.label = 'Shares';

exports.weight = 0.25;

exports.average = function(data,done) {
  async.parallel(data.sampleDateSegments.map(function(dateSegment) {
    return function(callback) {
      facebook.doPageCall(data,dateSegment.start,dateSegment.end,exports.calculateAverage,callback);
    };
  }),done);
}

exports.page = function(data,done) {
  facebook.doPageCall(data,data.reportStart,data.reportEnd,exports.calculatePage,done);
}

exports.calculateAverage = function(posts,data,done) {
  var matchedPosts = facebook.postsMatchingPattern(posts,data.pattern);
  if (matchedPosts.length > 0) {
    var average = matchedPosts.reduce(function(previous,current) {
      return previous + (current.shares ? current.shares.count : 0);
    },0.0) / parseFloat(matchedPosts.length);
    done(null,average); 
  } else {
    done(null,0); 
  }
}

exports.calculatePage = function(posts,data,done) {
  var output = data.urls.map(function(url) {
    var totals = posts.reduce(function(previous,post) {
      return previous + ((post.link.href == url.href && post.shares) ? post.shares.count : 0);
    },0);
    return {
      'path': url.path,
      'value': totals
    }
  });
  return done(null,output);
}
