var facebook = require('../lib/facebook');

exports.name = 'likes';

exports.label = 'Likes';

exports.weight = 0.25;

exports.average = function(data,done) {
  facebook.doPageCall(data,data.sampleStart,data.sampleEnd,exports.calculateAverage,done);
}

exports.page = function(data,done) {
  facebook.doPageCall(data,data.reportStart,data.reportEnd,exports.calculatePage,done);
}

exports.calculateAverage = function(posts,data,done) {
  var matchedPosts = facebook.postsMatchingPattern(posts,data.pattern);
  if (matchedPosts.length > 0) {
    var average = matchedPosts.reduce(function(previous,current) {
      return previous + (current.likes ? current.likes.data.length : 0);
    },0.0) / parseFloat(matchedPosts.length);
    done(null,average); 
  } else {
    done(null,false); 
  }
}

exports.calculatePage = function(posts,data,done) {
  var output = data.urls.map(function(url) {
    var totals = posts.reduce(function(previous,post) {
      return previous + ((post.link.href == url.href && post.likes) ? post.likes.data.length : 0);
    },0);
    return {
      'path': url.path,
      'value': totals
    }
  });
  return done(null,output);
}
