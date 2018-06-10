var mongoose = require( 'mongoose' );

var scoresSchema = new mongoose.Schema({ 
    model:{type:String,required:true},
    nick:{type:String,required:true},
    created_date:{type:Date},
    last_updated_date:{type:Date},
    score:{type:Number, default:0},
    speed:{type:Number, default:0},
    avgSpeed:{type:Number,default:0},
    raiting:{type:Number}
});

var nickSchema=new mongoose.Schema({
	num:Number,
	nickName:String
});

var statSchema=new mongoose.Schema({
	type:{type:String,default:'Prodution'},
	best_score:Number,
	total_gamers:Number,
	nowPlaying:Number,
	best_speed:Number
});

mongoose.model('score', scoresSchema);
mongoose.model('nick', nickSchema,'nicknames');
mongoose.model('state',statSchema)