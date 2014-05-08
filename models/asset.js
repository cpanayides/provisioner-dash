var _ = require("underscore");
// constructor for Asset from raw json
module.exports = function(model){
  // try and flatten the model somewhat as to be useful, and exclude other things that arent used
  console.log("inflating " + model.ASSET.TAG + " in model.asset");
  return _.extend({},model.ATTRIBS['0'], model.ASSET); //, model);
};
