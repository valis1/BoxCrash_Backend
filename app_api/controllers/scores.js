var mongoose = require('mongoose');
mongoose.Promise = Promise;  
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
    Nick
       .findOne({ num: r_num })
       .then(function (nick_data) {
            return Score.create({
		       model:req.body.model,
		       created_date:new Date(),
		       last_updated_date:new Date(),
		       nick:nick_data.nickName
	        })})
	    .then(user => sendJSONresponse(res,201,user))
	    .catch(err=> sendJSONresponse(res,400,{error:err}));
};


var getStatistic=function(req,res){	
	Score
	     .findById(req.params.userID)
	     .then(user=>sendJSONresponse(res,200,user))
	     .catch(err=>sendJSONresponse(res,404,{error:err}));
};

var userUpdate=function(req,res){
	Score
	     .findById(req.params.userID)
	     .then(function(user){
	     	var src=parseInt(req.body.scores);
	     	if (src>user.score){
	     	user.score=src;
	     	 }
	     	var last_speed=parseInt(req.body.speed);
	     	if (last_speed!=0){
	     	    user.avgSpeed=Math.floor((last_speed+user.speed)/2);
	     	    user.speed=last_speed;
	     	}
	     	user.last_updated_date=new Date()
	     	return user.save();
	     })
	     .then(function(user){
	     	return Score
	     	          .find({})
	     	          .where('score')
	     	          .gt(user.score)
	     	          .sort({'score':1,"last_updated_date":-1})
	     	          .limit(1);
	     })
	     .then(user=>sendJSONresponse(res,200,user))
	     .catch(err=>sendJSONresponse(res,404,{error:err}))
};

module.exports.userCreate=userCreate;
module.exports.getStatistic=getStatistic;
module.exports.userUpdate=userUpdate;