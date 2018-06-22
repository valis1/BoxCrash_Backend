
var homeController=function(req,res){
	res.render('index', { title: 'STUB' });
};

var polyticsController=function(req,res){
	res.render('polytics',{title:"Privacy policy"});
};

module.exports.home=homeController;
module.exports.polytics=polyticsController