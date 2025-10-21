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
    required:true,
    enum: ["Action", "Adventure", "Puzzle", "Sports", "Racing", "Strategy"]
  },
  img:{
    type:String,
    required:true
  }
  })

  const Game=mongoose.model("Game",gameSchema)

  module.exports=Game
