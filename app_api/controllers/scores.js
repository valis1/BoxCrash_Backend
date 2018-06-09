var mongoose = require('mongoose');
var Score = mongoose.model('score');
var Nick= mongoose.model('nick')

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

var getNick=function(){
	var r_num=Math.floor(Math.random() * 556) + 1;
	var nick=Nick.findOne({ num: r_num }, function (err, nick) {
		if (err){
		     console.log(err)
		}

	});
	return nick
};


var userCreate=function(req,res){
    var r_num=Math.floor(Math.random() * 556) + 1;
    Nick.findOne({ num: r_num }, function (err, nick_data) {
		if (err){
		     sendJSONresponse(res,400,{error:'Something go Wrong in Nick.findOne '})
		} else{
            Score.create({
		       model:req.body.model,
		       created_date:new Date(),
		       last_updated_date:new Date(),
		       nick:nick_data.nickName
	        },
	        function(err,user){
	    	  if (err){
	    		sendJSONresponse(res,400,{error:'Something Go Wrong in score.create'});
	    	  } else {
	    		sendJSONresponse(res,201,user);
	    	 }
	    });

		}

	});
};

var getStatistic=function(req,res){
	sendJSONresponse(res,200,{stat:'ok'});
};

var userUpdate=function(req,res){
	sendJSONresponse(res,200,{stat:'ok'});
}


module.exports.userCreate=userCreate;
module.exports.getStatistic=getStatistic;
module.exports.userUpdate=userUpdate;