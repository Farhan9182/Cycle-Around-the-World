const express = require('express');
const {login, signup} = require('../controllers/authController');
const router = express.Router();

// Authenticate users using JWT
router.post('/login', login);
router.post('/signup', signup);

module.exports = router;
