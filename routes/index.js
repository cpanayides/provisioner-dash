var collins = require('../lib/collins');

exports.index = function(req, res){
  collins.assets({size: 9999},function(assets){
    res.render('index', { title: 'Provisioner Dash', assets: assets});
  }, function(err){
    res.statusCode = 500;
    res.write("Unable to query collins: " + err.message);
  });
};

exports.firehose = function(faye, type){
  return function(req, res){
    var tag = req.params.tag;
    var body = req.body;
    console.log("got a firehose " + type + " post: " + tag);
    console.log(body);
    if (type === 'asset'){
      collins.asset(tag, function(asset){
        faye.publish("/asset/update",asset);
      },function(e){
        console.error("Unable to get collins asset: " + e.message);
      });
    } else {
      console.log("Unknown firehose message type, not publishing anything: " + type);
    }
    // unhandled message type wont publish anything
    res.send(202);
  };
};
