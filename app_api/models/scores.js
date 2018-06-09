var mongoose = require( 'mongoose' );

var scoresSchema = new mongoose.Schema({ 
    model:{type:String,required:true},
    created_date:{type:Date},
    last_updated_date:{type:Date,default: Date.now},
    score:{type:Number, default:0},
    speed:{type:Number, default:0},
    avgSpeed:{type:Number,default:0}
});

mongoose.model('score', scoresSchema);