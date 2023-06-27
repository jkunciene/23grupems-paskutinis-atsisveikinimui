const Ad = require('../models/Ad');
const asyncHandler = require('express-async-handler');

// @desc Get All Ads info
// @route GET /api/ad
// @access PUBLIC

const getAllAds = asyncHandler( async (req, res)=>{
    const ads = await Ad.find();
    res.status(200).send(ads);
})

module.exports = {
    getAllAds,
    
}