require('dotenv').config();

const database = process.env.DB_NAME;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.DB_LOCAL_PORT;

module.exports = {
    local: {
      username,
      password,
      database,
      host,
      port,
      dialect: 'mysql',
      dialectOptions: {
        bigNumberStrings: true,
      },
    },
};