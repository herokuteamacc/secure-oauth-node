const sequelize = require('../db');
const UserRole = require('../models').UserRole;

const addUserRole = userrole => UserRole.create(userrole); 
    
    module.exports = {
		addUserRole
}