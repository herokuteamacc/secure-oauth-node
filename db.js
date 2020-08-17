const config = require('./config');
const Sequelize = require('sequelize');
/*Aditya - commenting 18th Aug 
var sequelize = new Sequelize(
    config.dbConnectionString.database,
    config.dbConnectionString.username,
    config.dbConnectionString.password,
    config.dbConnectionString);*/
    var sequelize = new Sequelize(config.dbConnectionString);
require('sequelize-values')(sequelize);

module.exports = sequelize;
