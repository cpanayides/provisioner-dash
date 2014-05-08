
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var assets_api = require('./routes/api/assets');
var Primus = require('primus.io');

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

//TODO: remove primus and replace with faye for real pubsub
// web server from the express instance
var server = http.createServer(app);
// create primus instance from webserver
var primus = Primus(server,{transformer: 'engine.io'})
.on('connection',function(spark){
  console.log("connection");
  spark.send("hello");
  spark.on('data',function(d){
    console.log("got generic data: " + d);
  });
  spark.on('hi', function(m){
    console.log("got hi, sending ping in 1s");
    setTimeout(function(){
      spark.send("ping","wake up");
    },1000);
  });
  spark.on('pong',function(){
    console.log("got pong");
  });
  /*
  spark.on('data',function(d){
    console.log("got client data: " + d);
    if (d === "pong"){
      console.log("pong, pinging in 1s");
      setTimeout(function(){
        spark.write("ping");
      },1000);
    } else if (d === "hi") {
      console.log("client said hi, starting ping");
      setTimeout(function(){
        spark.write("ping");
      },1000);
    }
  });
  */
})
.on('disconnect',function(spark){
  console.log("got disconnect");
});

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});



