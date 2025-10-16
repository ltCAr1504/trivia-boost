const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.loginUser = async (req,res) => {
    const { email, password } = req.body
  try {

    const user = await User.findOne({ email })
    if(!user) return res.status(401).json({message: 'Invalid Credentials'})

    const isPasswordValidate = await bcrypt.compare(password, user.password)
    if(!isPasswordValidate) return res.status(401).json({message: 'Invalid Credentials'})

    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
    return res.status(200).json({token})
  }
  catch(err) {
    console.error('Login Error', err)
    res.status(500).json({message: 'Internal server Error'})
  }

}


exports.signupUser = async (req,res) => {
    const {username, password , email } = req.body

    try{

      const [emailExists, usernameExists] = await Promise.all([
        User.findOne({email}),
        User.findOne({username})

      ])

        
        if(emailExists) return res.status(400).json({message: 'The email you have provided is already associated with an account.'})
        
        if(usernameExists) return res.status(400).json({message: 'This username already exists'})
        
        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
          username,
          email,
          password: hashedPassword,
        })

        await newUser.save()
        console.log('New user save')

        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
          expiresIn: '1h'}
        );

        return res.status(201).json({token})

    }
    catch(err) {
        console.error('Register Error',err)
        res.status(500).json({message: 'Internal server Error'})
    }
}
