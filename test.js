var assert = require('assert');
var url = require('url');
var hits = require('./reporters/hits');
var retweets = require('./reporters/retweets');
var likes = require('./reporters/likes');
var shares = require('./reporters/shares');
var report = require('./lib/report');
var data = require(process.env.TEST_DATA);
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

describe('Google', function() {
  it('Calculates average page hits', function(done) {
    hits.calculateAverage(
      data.hits.average.data,
      inData,
      function(err,average) {
        assert.equal(err,null);
        assert.equal(average,data.hits.average.expected.standard);
        done();
      }
    )
  });

  it('Calculates average page hits with pattern', function(done) {
    hits.calculateAverage(
      data.hits.average.data,
      inDataPattern,
      function(err,average) {
        assert.equal(err,null);
        assert.equal(average,data.hits.average.expected.pattern);
        done();
      }
    )
  });

  it('Calculates single page hits', function(done) {
    hits.calculatePage(
      data.hits.page.data,
      inData,
      function(err,pages) {
        assert.equal(err,null);
        assert.equal(pages.length,data.inData.urls.length);
        for(var i = 0; i < data.inData.urls.length; i++) {
          assert.equal(pages[i].path,urls[i].path);  
          assert.equal(pages[i].value,data.hits.page.expected[i]);
        }
        done();
      }
    )
  });
});

describe('Twitter', function() {
  it('Calculates average retweets', function(done) {
    retweets.calculateAverage(
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
    retweets.calculateAverage(
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
    retweets.calculatePage(
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

describe('Facebook', function() {
  it('Calculates average likes', function(done) {
    likes.calculateAverage(
      data.facebook.data,
      inData,
      function(err,average) {
        assert.equal(err,null);
        assert.equal(average,data.facebook.expected.likes.average.standard);
        done();
      }
    )
  });

  it('Calculates average likes with pattern', function(done) {
    likes.calculateAverage(
      data.facebook.data,
      inDataPattern,
      function(err,average) {
        assert.equal(err,null);
        assert.equal(average,data.facebook.expected.likes.average.pattern);
        done();
      }
    )
  });

  it('Calculates single page likes', function(done) {
    likes.calculatePage(
      data.facebook.data,
      inData,
      function(err,pages) {
        assert.equal(err,null);
        assert.equal(pages.length,data.inData.urls.length);
        for(var i = 0; i < data.inData.urls.length; i++) {
          assert.equal(pages[i].path,urls[i].path);  
          assert.equal(pages[i].value,data.facebook.expected.likes.page[i]);
        }
        done();
      }
    )
  });

  it('Calculates average shares', function(done) {
    shares.calculateAverage(
      data.facebook.data,
      inData,
      function(err,average) {
        assert.equal(err,null);
        assert.equal(average,data.facebook.expected.shares.average.standard);
        done();
      }
    )
  });

  it('Calculates average shares with pattern', function(done) {
    shares.calculateAverage(
      data.facebook.data,
      inDataPattern,
      function(err,average) {
        assert.equal(err,null);
        assert.equal(average,data.facebook.expected.shares.average.pattern);
        done();
      }
    )
  });

  it('Calculates single page shares', function(done) {
    shares.calculatePage(
      data.facebook.data,
      inData,
      function(err,pages) {
        assert.equal(err,null);
        assert.equal(pages.length,data.inData.urls.length);
        for(var i = 0; i < data.inData.urls.length; i++) {
          assert.equal(pages[i].path,urls[i].path);  
          assert.equal(pages[i].value,data.facebook.expected.shares.page[i]);
        }
        done();
      }
    )
  });
});

describe('Score Calculator', function() {
  it('Calculates proper page scores', function(done) {
    var scores = report.calculateScores(inData,data.outData);
    assert.equal(scores.length,data.scoreData.length);
    for(var i = 0; i < scores.length; i++) {
      assert.equal(scores[i].path,data.scoreData[i].path);
      assert.equal(scores[i].score,data.scoreData[i].score);
    }
    done();
  });
});
