var collins = require('../lib/collins');

exports.index = function(req, res){
  res.render('index', { title: 'Provisioner Dash', assets: collins.assets()});
};
