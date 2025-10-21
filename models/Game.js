const mongoose=require("mongoose")

const gameSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  category:{
    type:String,
    required:true
  },
  img:{
    type:String,
    required:true
  },
  user_id:{
    type:mongoose.Schema.Types.ObjectId, // Like an ID number in MongoDB
    ref:"User",
    required:true
  }
  })

  const Game=mongoose.model("Game",gameSchema)

  module.exports=Game
