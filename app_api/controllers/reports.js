var mongoose = require('mongoose');
mongoose.Promise = Promise;  
var Score = mongoose.model('score');


var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};



var getStatByUser=function(req,res){
    Score
    .findById(req.params.userID)
    .then(function(user){
    	let lessDate=user.last_updated_date;
        lessDate.setDate(user.last_updated_date.getDate() -1);
        let limit=10;
        let func="$gte";
        if (req.params.func=="down"){
            func="$lte"
        };
        let src={};
        src[func]=user.score;
    	return Score
    	           .find({"score":src,"last_updated_date":{"$gt":lessDate}},"score avgSpeed nick")
    	           .sort({"score":1,"last_updated_date":-1})
    	           .limit(limit)
    })
    .then(stat=>sendJSONresponse(res,200,stat))
    .catch(err=>sendJSONresponse(res,404,{error:err}))
};

module.exports.getStat=getStatByUser;