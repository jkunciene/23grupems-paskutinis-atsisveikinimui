const express = require('express');
const router = express.Router();

const {
    getAllAds,
} = require('../controllers/adController');

router.get('/', getAllAds);

module.exports = router