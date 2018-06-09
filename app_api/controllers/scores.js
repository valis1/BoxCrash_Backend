var mongoose = require('mongoose');
var Score = mongoose.model('scores');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

var userCreate=function(req,res){
	Score.create({
		model:req.body.model,
		date:new Date();
	    },
	    function(err,user){
	    	if (err){
	    		sendJSONresponse(res,400,err);
	    	} else {
	    		sendJSONresponse(res,201,user);
	    	}
	    });
};

module.exports.userCreate=userCreate;