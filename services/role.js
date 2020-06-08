const sequelize = require('../db');
const Role = require('../models').Role;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


function getStandardRole(){
    return Role.findOne({Name:'standard'})
}

function getAdminRole(){
    return Role.findOne({Name:'licensed'})
}
function getLicensedRole(){
    return Role.findOne({Name:'licensed'})
}

function getRoleNames(roleId){
    let roleWhere;
    if(Array.isArray(roleId)){
        roleWhere = roleId;
    }else{
        roleWhere = [roleId];
    }
    return Role.findAll({
        attributes:["Name"],
        where:{
            Id: {
                [Op.in]:roleWhere
            }
        }
    })
}

module.exports = {
    getStandardRole,
    getLicensedRole,
    getAdminRole,
    getRoleNames
}