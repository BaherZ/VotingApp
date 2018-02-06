let mongoose = require('mongoose');
let {Schema} = mongoose;

let pollSchema = new Schema({
    author:{
        type:String,
        required:true
    },
    topic:{
        type:String,
        required:true,
        unique:true
    },
    voteNum:{
        type:Number,
        default:0
    },
    options:{
        type:Array,
        required:true
    },
    postTime:{
        type:Date,
        default:Date.now
    }
    
});