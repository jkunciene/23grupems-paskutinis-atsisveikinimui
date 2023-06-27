const express = require('express');
const router = express.Router();

const { protect } = require('../middleware/authMiddleware');

const {
    getAllAds,
    setAd
} = require('../controllers/adController');

router.route('/').get(getAllAds).post(protect, setAd)

module.exports = router