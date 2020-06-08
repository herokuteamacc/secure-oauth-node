module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define("Role", {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Name: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: 'Role',
        tableName: 'Role',
        createdAt: 'CreatedDate',
        updatedAt: 'UpdatedDate',
        freezeTableName: false
    });
    
    return Role;
}