var https = require("https");
var querystring = require("querystring");
var _ = require('underscore');
var Asset = require('../models/asset');
var fs = require('fs');

//read in collins credentials
//TODO this should be dont by app on startup, and passed into collins
var creds = _.defaults(JSON.parse(fs.readFileSync('./conf/app.json')).collins || {}, {
  host: "http://localhost:9000",
  username: "blake",
  password: "admin:first"
});

//TODO: remove me, this is just parsing a static list of assets for testing
var s = JSON.parse(fs.readFileSync('./data/assets.json'));

/*
//TODO: parse URL from creds file and use correct protocol/hostname
exports.assets = function(params, handler){
  var err = arguments[2];
  var opts = {
    auth: creds.username + ":" + creds.password,
    hostname: "collins.ewr01.tumblr.net",
    port: 443,
    path: "/api/assets?" + querystring.stringify(params),
    method: "GET",
    headers: {
      accept: "application/json"
    }
  };
  console.log("Collins request to " + opts.hostname + " " + opts.path);
  return https.request(opts)
     .on("error", err)
     .on("response",handler)
     .end();
};
*/

exports.assets = function(){
  var params = arguments[0] || {};
  //TODO instead of reading static assets, lets query collins. see above
  return _.map(s,function(x){ return Asset(x); });
};
