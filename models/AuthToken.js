module.exports = (sequelize, DataTypes) => {
    const AuthToken = sequelize.define("AuthToken", {
      Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true ,
        primaryKey: true
      },
      Token: {
        type: DataTypes.STRING
      },
      AssetName: {
        type: DataTypes.STRING
      },
      Expiry: {
        type: DataTypes.DATE
      },
      User: {
    	  type: DataTypes.INTEGER
      }
    },{
      sequelize,
      modelName:'AuthToken',
      tableName: 'AuthToken',
      createdAt: 'CreatedDate',
      updatedAt: 'ModifiedDate',
      freezeTableName: false
    });
    return AuthToken;
  }