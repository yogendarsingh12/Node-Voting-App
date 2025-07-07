const mongoose = require('mongoose');

const mongoUrl='mongodb://localhost:27017/Votingdb';

mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db=mongoose.connection;

db.on('connected',()=>{
    console.log("MongoDb Connect Currently");
})

db.on('disconnected',()=>{
    console.log("MongoDb Disconnected Now");
})
db.on('error',(err)=>{
    console.log("MongoDb has an Error",err);

})

module.exports=db;