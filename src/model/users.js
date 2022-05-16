const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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

User.pre("save",async function(next){
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(this.password, salt)
    this.password = hash
  }
  next()
})

User.methods.comparePassword = async function(password){
  const result = await bcrypt.compareSync(password, this.password)
  return result
}

module.exports = mongoose.model("User", User)
