var collins = require('../lib/collins');

exports.index = function(req, res){
  collins.assets({size: 9999},function(assets){
    res.render('index', { title: 'Provisioner Dash', assets: assets});
  }, function(err){
    res.statusCode = 500;
    res.write("Unable to query collins: " + err.message);
  });
};
