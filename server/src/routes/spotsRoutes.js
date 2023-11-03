const express = require('express');
const {getTouristSpots, getSpotDetails} = require('../controllers/spotsController');
const {authenticateUser} = require('../middleware/verifyToken');
const router = express.Router();

// Return a list of tourist spots with names (without latitude and longitude)
router.get('/', authenticateUser, getTouristSpots);

// Return detailed information about a specific tourist spot
router.get('/:spotName', authenticateUser, getSpotDetails);

module.exports = router;
