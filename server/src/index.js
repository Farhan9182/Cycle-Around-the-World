require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/sequelize');
const authRoutes = require('./routes/authRoutes');
const spotsRoutes = require('./routes/spotsRoutes');
const calculateRoutes = require('./routes/calculateRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// CORS setup
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Routes
app.use('/auth', authRoutes);
app.use('/spots', spotsRoutes);
app.use('/calculate', calculateRoutes);

// Error handling middleware
app.use((error, req, res, next) => {
  console.error(error);
  res.status(error.status || 500).json({ message: error.message || 'An error occurred' });
});

// Sync the Sequelize model with the database
sequelize.sync()
  .then(() => {
    console.log('Database and tables have been synced');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
