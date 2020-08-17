const config = require('./config');
const Sequelize = require('sequelize');

//var sequelize = new Sequelize(
  //  config.dbConnectionString.database_url,
    //config.dbConnectionString.username,
    //config.dbConnectionString.password,
    //config.dbConnectionString);
var sequelize = new Sequelize(process.env.DATABASE_URL, process.env.DIALECT);
require('sequelize-values')(sequelize);

module.exports = sequelize;
