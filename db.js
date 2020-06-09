const config = require('./config');
const Sequelize = require('sequelize');
/*
var sequelize = new Sequelize(
    config.dbConnectionString.database,
    config.dbConnectionString.username,
    config.dbConnectionString.password,
    config.dbConnectionString);*/
var sequelize = new Sequelize(process.env[config.dbConnectionString.database_url]);
require('sequelize-values')(sequelize);

module.exports = sequelize;
