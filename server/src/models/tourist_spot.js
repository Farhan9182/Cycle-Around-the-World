const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const TouristSpot = sequelize.define('tourist_spot', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  latitude: {
    type: DataTypes.DECIMAL(10, 6),
    allowNull: false,
  },
  longitude: {
    type: DataTypes.DECIMAL(10, 6),
    allowNull: false,
  },
  accessible_by_cycling: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = TouristSpot;
