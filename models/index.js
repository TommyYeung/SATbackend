'use strict';



const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});






// const dbConfig = require("../config/config.json");

// const Sequelize = require("sequelize");
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.development.host,
//   dialect: dbConfig.development.dialect,
//   operatorsAliases: false,

//   pool: {
//     max: dbConfig.development.pool.max,
//     min: dbConfig.development.pool.min,
//     acquire: dbConfig.development.pool.acquire,
//     idle: dbConfig.development.pool.idle,
//   },
// });



// const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;





// db.School = require('./School');
// db.Image = require('./Image');
// db.School.hasMany(db.Image, { as: "imageID" });
// db.Image.belongsTo(db.School, {
//   foreignKey: "schoolID",
//   as: "School",
// });


module.exports = db;
