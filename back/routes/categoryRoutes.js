const express = require('express');
const router = express.Router();

const {
    setCategory,
} = require('../controllers/categoryController');


const { protect } = require('../middleware/authMiddleware');
const { protectAdmin } = require('../middleware/adminAuthMiddleware');

router.post('/', protectAdmin, setCategory);


module.exports = router