const Users = require('../models/users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const login = async (req, res) => {
    try {
        const {username, password} = req.body;

        // Check if the user exists
        const existingUser = await Users.findOne({
            where: {
                username,
            },
        });
        if (! existingUser) {
            return res.status(401).json({message: 'Invalid credentials'});
        }

        // Verify the password
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (! isPasswordValid) {
            return res.status(401).json({message: 'Invalid credentials'});
        }

        // Create and send a JWT token
        const token = jwt.sign({
            username: existingUser.username,
            id: existingUser.id,
        }, process.env.JWT_SECRET, {expiresIn: '1h'});

        res.status(200).json({token, userDetails: existingUser});
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({message: 'Internal server error'});
    }
};

const signup = async (req, res) => {
    try {
        const {username, password, email} = req.body;
        // Check if the user already exists
        const existingUser = await Users.findOne({
            where: {
                username,
            },
        });
        if (existingUser) {
            res.status(409).json({message: 'Username already exists'});
            return;
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Add new user
        await Users.create({
            email,
            username,
            password: hashedPassword,
        });

        res.status(201).json({message: 'User created successfully'});
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({message: error.message});
    }
};

module.exports = {
    login,
    signup
};
