
var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

var getStat=function(req,res){
	sendJSONresponse(res,200,{stat:'ok'});
};

module.exports.getStat=getStat