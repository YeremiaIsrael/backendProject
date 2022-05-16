const User = require('../model/users')
const bcrypt = require('bcrypt')

exports.updateUserData = async (req,res)=>{
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      try{
        res.status(200).json('password has been updated')
      } catch(e){
        return e
      }
    }

    try {
      const user = await User.findByIdAndUpdate(req.params.id,
        {
          $set: req.body,
        })
      res.status(200).json('account has been updated')
    } catch (e) {
      return e
    }
  } else{
    return res.status(403).json('you can only update your account')
  }
}

exports.deleteSingleUser = async (req,res)=>{
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findByIdAndDelete({_id:req.params.id})
      res.status(200).json('Account has been deleted')
    } catch (e) {
      res.status(500).json(e)
    }
  } else{
    res.status(403).json('You can only delete your account')
  }
}
