var querystring = require("querystring");
var _ = require('underscore');
var Asset = require('../models/asset');
var fs = require('fs');
var url = require('url');

//read in collins credentials
//TODO this should be dont by app on startup, and passed into collins
var creds = _.defaults(JSON.parse(fs.readFileSync('./conf/app.json')).collins || {}, {
  host: "http://localhost:9000",
  username: "blake",
  password: "admin:first"
});
// break up the collins host string
var u = url.parse(creds.host);
var protocol;
if (/http:/.exec(u.protocol)){
  protocol = require("http");
} else {
  protocol = require("https");
}

// remove me, this is just parsing a static list of assets for testing
//var s = JSON.parse(fs.readFileSync('./data/assets.json'));

// assets(parameters, success(assets), error(exception)
exports.assets = function(){
  var params = arguments[0] || {};
  var success = arguments[1] || function(){};
  var error = arguments[2] || function(){};
  var opts = {
    auth: creds.username + ":" + creds.password,
    hostname: u.hostname,
    port: u.port,
    path: "/api/assets?" + querystring.stringify(params),
    method: "GET",
    headers: {
      accept: "application/json"
    }
  };
  console.log("Collins request to " + opts.hostname + " " + opts.path);
  protocol.get(opts,function(res){
    console.log("got " + res.statusCode + " from collins");
    var body = '';
    res.on('data',function(d){ body += d; });
    res.on('end',function(){
      try {
        var jsp = JSON.parse(body).data.Data;
        var assets = _.map(jsp,function(x){ return Asset(x); });
        console.log("" + assets.length + " assets found");
        success(assets);
      } catch (ex) {
        console.error(ex.message);
        error(ex);
      }
    });
  }).on('error', error);
};

/*
exports.assets = function(){
  var params = arguments[0] || {};
  //TODO instead of reading static assets, lets query collins. see above
  return _.map(s,function(x){ return Asset(x); });
};
*/
