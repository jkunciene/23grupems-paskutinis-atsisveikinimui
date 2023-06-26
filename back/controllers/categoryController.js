const Category = require('../models/Category');
const asyncHandler = require('express-async-handler')

// @desc Add new category
// @route POST /api/category
// @access Private (Only Admin)

const setCategory = asyncHandler(async (req, res) => {
 
  if (!req.body.name) {
    res.status(400)
    throw new Error('Please add category')
  }
  // check if category exists
  const categoryExists = await Category.findOne({ name })
  if (categoryExists) {
    res.status(400)
    throw new Error('Category already exists')
  }
  
  // Create category
  const category = await Category.create({ name })
  if (category) {res.status(201).send(category)}
  else {
    res.status(400)
    throw new Error('Invalid category data')
  }
})

module.exports = {
    setCategory,
}