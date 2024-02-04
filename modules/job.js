const mongoose=require('mongoose');


const JobSchema=mongoose.Schema({
    title:{type:String,required:true},
    agentName:{type:String,required:true},
    location:{type:String,required:true},
    salary:{type:String,required:true},
    period:{type:String,required:true},
    hiring:{type:Boolean,required:true,default:true},
    contact:{type:String,required:true},
    description:{type:String,required:true},
    requirement:{Array:String,required:true},
    agentId:{type:String,required:true},
    imageUrl:{
        type:String,required:true
    }
},{timestamps:true});

module.exports=mongoose.model('Job',JobSchema);
