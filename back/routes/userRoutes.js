const express = require('express');
const router = express.Router();

const {
    registerUser,
} = require('../controllers/userController');

const { protect } = require('../middleware/authMiddleware');
const { protectAdmin } = require('../middleware/adminAuthMiddleware');

router.post('/', registerUser);

module.exports = router