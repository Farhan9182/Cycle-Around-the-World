'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tourist_spots', [
      {
        name: 'Antarctica',
        latitude: -90.0,
        longitude: 0.0,
        accessible_by_cycling: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Greenland',
        latitude: 71.7069,
        longitude: -42.6043,
        accessible_by_cycling: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Easter Island',
        latitude: -27.1219,
        longitude: -109.3665,
        accessible_by_cycling: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Machu Picchu',
        latitude: -13.1631,
        longitude: -72.5450,
        accessible_by_cycling: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mount Everest',
        latitude: 27.9881,
        longitude: 86.9250,
        accessible_by_cycling: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Great Barrier Reef',
        latitude: -18.2871,
        longitude: 147.6992,
        accessible_by_cycling: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Stonehenge',
        latitude: 51.1789,
        longitude: -1.8262,
        accessible_by_cycling: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Trans-Siberian Railway',
        latitude: 55.7558,
        longitude: 37.6176,
        accessible_by_cycling: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Uluru (Ayers Rock)',
        latitude: -25.3444,
        longitude: 131.0369,
        accessible_by_cycling: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'The Great Wall of China',
        latitude: 40.4319,
        longitude: 116.5704,
        accessible_by_cycling: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tourist_spots', null, {});
  },
};
