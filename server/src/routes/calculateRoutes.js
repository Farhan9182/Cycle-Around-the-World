const express = require('express');
const {calculateTime} = require('../controllers/calculateController');
const {authenticateUser} = require('../middleware/verifyToken');
const router = express.Router();

// Accept user input for calculating cycling time and return cycling time
router.post('/cyclingTime', authenticateUser, calculateTime);

module.exports = router;
