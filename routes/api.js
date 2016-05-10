var mongoose = require('mongoose');
var Site = mongoose.model('Site');
var Report = mongoose.model('Report');
var async = require('async');

exports.listSites = function(req,res,next) {
  req.user.getSites(function(err,sites) {
    if (err) {
      next(err);
    } else {
      res.send(sites.map(function(site) {
        return site.toObject();
      }));
    }
  })
};

exports.createSite = function(req,res,next) {
  async.waterfall([
    function(next1) {
      var site = new Site(req.body);
      site.save(function(err) {
        next1(err,site);
      });
    },
    function(site,next1) {
      if (!req.user.sites) {
        req.user.sites = [];
      }
      req.user.sites.push(site._id);
      req.user.save(function(err) {
        next1(err,site);
      });
    }
  ],function(err,site) {
    if (err) {
      next(err);
    } else {
      res.send(site.toObject());
    }
  });
};

exports.readSite = function(req,res,next) {
  res.send(req.site.toObject());
};

exports.listSiteURLs = function(req,res,next) {
  req.site.getURLs(function(err,urls) {
    if (err) {
      next(err);
    } else {
      res.send(urls);
    }
  })
};

exports.listGoogleAccounts = function(req,res,next) {
  req.site.loadGoogleAccounts(req.query.account,req.query.property,function(err,data) {
    if (err) {
      next(err);
    } else {
      res.send(data);
    }
  })
};

exports.updateSite = function(req,res,next) {
  ['reportURLs','benchmarkURLs','reportStart','reportEnd','benchmarkStart','benchmarkEnd'].forEach(function(prop) {
    req.site[prop] = req.body[prop];
  });
  if (!req.auth) {
    req.auth = {
      'google': {}
    };
  }
  if (req.body.auth && req.body.auth.google) {
    req.site.auth.google.account = req.body.auth.google.account;
  }
  req.site.save(function(err) {
    if (err) {
      next(err);
    } else {
      res.send(req.site.toObject());
    }
  });
};

exports.deleteSite = function(req,res,next) {
  req.site.remove(function(err) {
    if (err) {
      next(err);
    } else {
      res.send({});
    }
  })
};

exports.listReports = function(req,res,next) {
  if (req.query.site) {
    async.waterfall([
      function(next1) {
        Site.findById(req.query.site,next1);
      },
      function(site,next1) {
        site.getReports(next1);
      }
    ],function(err,reports) {
      if (err) {
        next(err);
      } else {
        res.send(reports.map(function(report) {
          return report.toObject();
        }));
      }
    });
  }
};

exports.createReport = function(req,res,next) {
  if (req.body.site) {
    async.waterfall([
      function(next1) {
        if (typeof req.body.site == 'object') {
          req.body.site = req.body.site._id;
        }
        Site.findById(req.body.site,next1);
      },
      function(site,next1) {
        var report = new Report(req.body);
        site.buildReport(report,next1);
      }
    ],function(err,report) {
      if (err) {
        next(err);
      } else {
        res.send(report.toObject());
      }
    });
  }
};

exports.readReport = function(req,res,next) {
  res.send(req.report.toObject());
};

exports.deleteReport = function(req,res,next) {
  req.report.remove(function(err) {
    if (err) {
      next(err);
    } else {
      res.send({});
    }
  })
};
