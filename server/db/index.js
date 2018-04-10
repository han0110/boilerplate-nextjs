require('dotenv').config();
const fs = require('fs');

const Sequelize = require('sequelize');

const files = fs
  .readdirSync(`${__dirname}/models`)
  .map(file => file.slice(0, -3));

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    operatorsAliases: false,
    logging: process.env.NODE_ENV === 'develop',
  },
);

const db = {};

try {
  files.forEach((file) => {
    db[file] = sequelize.import(`${__dirname}/models/${file}`);
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;
} catch (e) {
  console.error(e);
  process.exit(1);
}

Object.keys(db).forEach((model) => {
  if (db[model].associate) {
    db[model].associate(db);
  }
});


module.exports = db;
