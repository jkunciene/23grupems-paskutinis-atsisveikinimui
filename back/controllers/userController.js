const User = require('../models/User');

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')

// @desc Register new user
// @route POST /api/user
// @access PUBLIC

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please add all fields')
  }
  // check if user exists
  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }
  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  // Create User
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role: 'simple'
  })
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
      role: user.role
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc Login a user
// @route POST /api/user/login
// @access PUBLIC
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
  
    const user = await User.findOne({ email })
  
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
        role: user.role
      })
    } else {
      res.status(400)
      throw new Error('Invalid credentials')
    }
  })
  
// Generate JWT
const generateToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: '10d'
    })
  }

module.exports = {
    registerUser,
    loginUser
}