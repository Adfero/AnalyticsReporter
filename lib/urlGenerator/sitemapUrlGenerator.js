'use strict';
var xml2js = require('xml2js');
var request = require('request');
var parser = new xml2js.Parser();
var URLGenerator = require('./urlGenerator');
var url = require('url');
var async = require('async');

class SitemapURLGenerator extends URLGenerator {
  constructor(rootURL,sitemapPath) {
    super(rootURL);
    this.sitemapPath = sitemapPath;
  }

  findURLs(done) {
    var _this = this;
    async.waterfall([
      function(next) {
        var sitemapURL = url.resolve(_this.rootURL,_this.sitemapPath);
        request(sitemapURL,next);
      },
      function(response,body,next) {
        parser.parseString(body,next);
      },
      function(xml,next) {
        if (xml && xml.urlset && xml.urlset.url) {
          done(null,xml.urlset.url.map(function(row) {
            return row.loc[0];
          }));
        } else {
          next(null,[]);
        }
      }
    ],done);
  }
}

module.exports = SitemapURLGenerator;
