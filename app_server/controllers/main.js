
var scoreController=function(req,res){
	res.render('index', { title: 'Express' });
};

module.exports.score=scoreController;