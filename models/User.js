const mongoose=require("mongoose")

const userSchema= new mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true // Each user has their own name and no two users have the same username
  },
  password:{
    type:String,
    required:true
  },
})

const User=mongoose.model("User",userSchema)

module.exports=User
