'use strict';

class URLGenerator {
  constructor(rootURL) {
    this.rootURL = rootURL;
  }

  findURLs(done) {
    done(new Error('Must override findURLs()'));
  }
}

module.exports = URLGenerator;
