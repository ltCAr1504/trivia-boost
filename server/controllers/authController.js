const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.loginUser = async (req,res) => {
    const { email, password } = req.body
  try {

    const user = await User.findOne({ email })
    if(!user) return res.status(401).json({message: 'User not found'})

    const validate = await bcrypt.compare(password, user.password)
    if(!validate) return res.status(401).json({message: 'Wrong Password'})

    const token = jwt.sign({userId: user._id}, procces.env.JWT_SECRET, {expiresIn: '1h'});
    res.json({token})
  }
  catch(err) {
    console.error('Login Error', err)
    res.status(500).json({message: 'Server Error'})
  }

}


exports.signupUser = async (req,res) => {
    const {username, password , email } = req.body

    try{

    }
    catch(err) {
        console.err('Register Error',err)
    }
    res.status(500).json({message: 'Server Error'})
}
