
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var assets_api = require('./routes/api/assets');
var faye = require('faye');

var app = express();

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

app.get('/', routes.index);
app.get('/api/assets', assets_api.assets);

// web server from the express instance
var server = http.createServer(app);
// create faye instance from webserver
var bayeux = new faye.NodeAdapter({mount: '/faye'});
bayeux.attach(server);

var fayeclient = bayeux.getClient();
setInterval(function(){
  fayeclient.publish('/news',123);
},3000);

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});



