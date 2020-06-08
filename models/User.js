module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
     Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true ,
        primaryKey: true
      },
      FirstName: {
        type: DataTypes.STRING
      },
      LastName: {
        type: DataTypes.STRING
      },
      Email: {
        type: DataTypes.STRING
      },

      Status: {
        type: DataTypes.STRING
      },
      Password:{
        type: DataTypes.STRING
      },
      
    },{
      sequelize,
      modelName:'User',
      tableName: 'User',
      createdAt: 'CreatedDate',
      updatedAt: 'UpdatedDate',
      freezeTableName: false
    });
    return User;
  }