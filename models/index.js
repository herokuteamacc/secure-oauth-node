const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';

const config = require('../config');

const db = {};

let sequelize;


sequelize = new Sequelize(
				config.dbConnectionString.database,
				config.dbConnectionString.username,
				config.dbConnectionString.password, 
				{
					host: config.dbConnectionString.host,
					dialect: 'postgres',
					protocol: 'postgres', 
					port: 5432,
					pool: {
						max: 5,
						min: 0,
						acquire: 30000,
						idle: 10000
					},
					dialectOptions: {
						ssl: {
							require: true,
							rejectUnauthorized: false 
						}
					}
				}
);

console.log("DB Connected");
fs
  .readdirSync(__dirname)
  .filter((file) =>
    (file.indexOf('.') !== 0) &&
    (file !== basename) &&
    (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;