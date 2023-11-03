const express = require('express');
const {calculateTime, estimateTime} = require('../controllers/calculateController');
const {authenticateUser} = require('../middleware/verifyToken');
const router = express.Router();

// Accept user input for calculating cycling time
router.post('/', authenticateUser, calculateTime);

// Return the estimated time it would take to cycle
router.get('/estimate', authenticateUser, estimateTime);

module.exports = router;
