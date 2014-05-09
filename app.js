
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    http = require('http'),
    path = require('path'),
    assets_api = require('./routes/api/assets'),
    faye = require('faye'),
    redis = require('faye-redis'),
    fs = require('fs'),
    _ = require('underscore'),
    app = express();

//read in config files for redis
var app_conf = JSON.parse(fs.readFileSync('./conf/app.json'));

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// web server from the express instance
var server = http.createServer(app);
// create faye instance from webserver
var bayeux = new faye.NodeAdapter({
  mount: '/faye',
  engine: {
    type: redis,
    host: app_conf.redis.host || "localhost",
    port: app_conf.redis.port || 6379,
    namespace: "faye"
  }
});
bayeux.attach(server);

var fayeclient = bayeux.getClient();
var i = 0;
setInterval(function(){
  fayeclient.publish('/news',i++);
},3000);
fayeclient.subscribe('/aj',function(message){
  console.log("Got message from aj! " + message);
});
fayeclient.subscribe('/firehose/*',function(message){
  console.log("firehose event: " + message);
});

/** set up routes **/
app.get('/', routes.index);
app.post('/firehose/asset/:tag', routes.firehose(fayeclient,'asset'));
app.post('/firehose/log/:tag', routes.firehose(fayeclient,'log'));
app.get('/api/assets', assets_api.assets);

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});



