var async = require('async');
var unshortener = require('unshortener');
var querystring = require('querystring');
var config = require('../config.json');
var utils = require('./utils');
var oauth = require('./oauth');

var URLRoot = 'https://graph.facebook.com/v2.4/';

exports.getPages = function(token,done) {
  var url = URLRoot + 'me/accounts?limit=10000000';
  oauth.facebookOAuth().get(url,token,function(err,body) {
    if (err) {
      done(err);
    } else {
      var data = JSON.parse(body);
      if (data && data.data && data.data.length) {
        done(null,data.data.map(function(page) {
          return {
            'id': page.id,
            'name': page.name
          }
        }));
      } else {
        done(null,[]);
      }
    }
  });
}

exports.getPagePosts = function(data,start,end,done) {
  var allPosts = [];
  var finish = function() {
    async.each(
      allPosts,
      function(post,eachCallback) {
        if (post.link) {
          unshortener.expand(
            post.link,
            function (err, url) {
              if (err) {
                console.warn(err);
              }
              if (url) {
                post.link = url;
              }
              eachCallback();
            }
          )
        } else {
          eachCallback();
        }
      },
      function(err) {
        done(err,allPosts);
      }
    );
  }
  var doFetch = function(url) {
    oauth.facebookOAuth().get(url,data.auth.facebook.token,function(err,body) {
      if (err) {
        done(err);
      } else {
        var data = JSON.parse(body);
        if (data && data.data && data.data.length) {
          allPosts = allPosts.concat(data.data);
        }
        if (data && data.paging && data.paging.next) {
          doFetch(data.paging.next);
        } else {
          finish();
        }
      }
    });
  }
  var firstURL = URLRoot + data.auth.facebook.page + '/feed?' + querystring.stringify({
    'fields': 'likes.limit(10000),link,created_time,shares',
    'limit': 100,
    'since': (start.getTime() / 1000),
    'until': (end.getTime() / 1000)
  });
  doFetch(firstURL);
}

exports.doPageCall = function(data,start,end,process,done) {
  if (data.auth.facebook.token && data.auth.facebook.page) {
    exports.getPagePosts(data,start,end,function(err,posts) {
      if (err) {
        return done(err);
      } else {
        return process(posts,data,done);
      }
    })
  } else {
    done(null,false);
  }
}

exports.postsMatchingPattern = function(posts,pattern) {
  return posts.filter(function(post) {
    if (pattern && post.link) {
      return pattern.match(post.link.href)
    }
    return post.link;
  });
}