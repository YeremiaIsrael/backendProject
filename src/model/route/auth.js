const mongoose = require('mongoose')

const User = new mongoose.Schema({
  username:{
    type:String,
    min:6,
    required:true
  },
  fullname:{
    type:String,
    required:false,
  },
  email:{
    type:String,
    required:true,
    min:8
  },
  password:{
    type:String,
    required:true,
    min:8
  },
  address:{
    type:String,

  }
},{timestamps:true})

module.exports = mongoose.model("User", User)