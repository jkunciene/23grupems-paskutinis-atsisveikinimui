const express = require('express');
const router = express.Router();

const {
    setCategory,
    getAllCategories
} = require('../controllers/categoryController');


const { protect } = require('../middleware/authMiddleware');
const { protectAdmin } = require('../middleware/adminAuthMiddleware');

router.post('/', protectAdmin, setCategory).get('/', getAllCategories)


module.exports = router