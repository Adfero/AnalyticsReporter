var assert = require('assert');
var url = require('url');
var google = require('./reporters/hits');
var twitter = require('./reporters/twitter');
var data = require('./testData.json');
var UrlPattern = require('url-pattern');

var urls = data.inData.urls.map(function(urlStr) {
  return url.parse(urlStr);
})

var inData = {
  'urls': urls
}
var inDataPattern = {
  'urls': data.inData.urls,
  'pattern': new UrlPattern(data.inData.pattern)
}

describe('Hits', function() {
  it('Calculates average page hits', function(done) {
    google.calculateAverage(
      data.google.average.data,
      inData,
      function(err,average) {
        assert.equal(err,null);
        assert.equal(average,data.google.average.expected.standard);
        done();
      }
    )
  });

  it('Calculates average page hits with pattern', function(done) {
    google.calculateAverage(
      data.google.average.data,
      inDataPattern,
      function(err,average) {
        assert.equal(err,null);
        assert.equal(average,data.google.average.expected.pattern);
        done();
      }
    )
  });

  it('Calculates single page hits', function(done) {
    google.calculatePage(
      data.google.page.data,
      inData,
      function(err,pages) {
        assert.equal(err,null);
        assert.equal(pages.length,data.inData.urls.length);
        for(var i = 0; i < data.inData.urls.length; i++) {
          assert.equal(pages[i].path,urls[i].path);  
          assert.equal(pages[i].value,data.google.page.expected[i]);
        }
        done();
      }
    )
  });
});

describe('Twitter', function() {
  it('Calculates average retweets', function(done) {
    twitter.calculateAverage(
      data.tweets.data,
      inData,
      function(err,average) {
        assert.equal(err,null);
        assert.equal(average,data.tweets.expected.average.standard);
        done();
      }
    )
  });

  it('Calculates average retweets with pattern', function(done) {
    twitter.calculateAverage(
      data.tweets.data,
      inDataPattern,
      function(err,average) {
        assert.equal(err,null);
        assert.equal(average,data.tweets.expected.average.pattern);
        done();
      }
    )
  });

  it('Calculates single page retweets', function(done) {
    twitter.calculatePage(
      data.tweets.data,
      inData,
      function(err,pages) {
        assert.equal(err,null);
        assert.equal(pages.length,data.inData.urls.length);
        for(var i = 0; i < data.inData.urls.length; i++) {
          assert.equal(pages[i].path,urls[i].path);  
          assert.equal(pages[i].value,data.tweets.expected.page[i]);
        }
        done();
      }
    )
  });
});