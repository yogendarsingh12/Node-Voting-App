const mongoose=require('mongoose');

const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    addharCardNumber:{
        type:String,
        unique:true,
        maxlength:12,
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
    },
    address:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['voter','admin'],
        default:'voter'
    }
    ,
    isVoted:{
        type:Boolean,
        default:false,
    }
})

const User=mongoose.model('User',UserSchema);

module.exports=User;