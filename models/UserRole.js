module.exports = (sequelize, DataTypes) => {
    const UserRole = sequelize.define("UserRole", {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        User: {
            type: DataTypes.INTEGER,
            references: 'User', 
            referencesKey: 'Id'
        },
        Role: {
            type: DataTypes.INTEGER,
            references: 'Role', 
            referencesKey: 'Id'
        },
    }, {
        sequelize,
        modelName: 'UserRole',
        tableName: 'UserRole',
        createdAt: 'CreatedDate',
        updatedAt: 'UpdatedDate',
        freezeTableName: false
    });
   
    // UserRole.associate = function(models) {
    //     UserRole.belongsTo(models.User);
    // };
    // UserRole.associate = function(models) {
    //     UserRole.belongsTo(models.Role);
    // };
    return UserRole;
}