const mongoose=require('mongoose');

const CandidateSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    party:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    votes:[
        {
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'User',
                required:true,
            },
            votedat:{
                type:Date,
                default:Date.now()
            }
        }
    ],
    votecount:{
        type:Number,
        default:0
    }
})