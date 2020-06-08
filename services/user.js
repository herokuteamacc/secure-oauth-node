const sequelize = require('../db');
const Users = require('../models').User;
//const UserRoles = require('../models').UserRole;
//const roleService = require("./role");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const addUser = user => Users.create(user);
const getUserByEmail = email => Users.findOne({where: {Email:email}});
const getUserById = id => Users.findOne({where: {Id:id}});

//const getUserRoles = (id) => {
//	return new Promise((resolve, reject) => {
//		console.log(id);
//		UserRoles.findAll({where: {User: id }})
//		.then(data => {

//			let roles = [];
//			if(data){
			
//				if(Array.isArray(data)){
//					data.map(d => roles.push(d.Role));
//				}else{
//					roles.push(data.Role);
//				}
				
//				if(roles.length){
//					roleService.getRoleNames(roles)
//					.then(userroles => {
//				
//						let userDet = data;
//						userDet.roles = userroles;
				
//						resolve(userroles)
//					})
//					.catch(err => {console.log(err);reject(err)});
//				}
//			}
//			reject(null);
//		})
//		.catch(err => {
//			console.log(err);
//			reject(null);
//		})
//	})
//}


//const getUserWithRolesByEmail = (email) => {
//	if(email){
//		return new Promise((resolve,reject)=>{
//			Users.findOne({where: {Email: email}})
//			.then(data => {
//				if(data){
//				
//					getUserRoles(data.Id).then(d =>{
//				
//						if(d){
//							data.roles = d;
//						}
//						data.roles = [];
//						resolve(data);
//					})
//					.then(de => console.log(de))
//					.catch(err => {
//						console.log(err);
//						reject(err);
//					})
//				}
//				reject(null);
//			})
//			.catch(err => {
//				console.log(err);
//				reject(err);
//			})
//		})
//	}

//}

//const getUserWithRoles = (email) => {
//	console.log(email);
//	return sequelize.query('SELECT u."Id",u."FirstName",u."LastName",u."Email",r."Name" FROM public."User" u FULL OUTER JOIN public."UserRole" ur on u."Id"=ur."User" FULL OUTER JOIN public."Role" r on ur."Role"=r."Id" Where u."Email"='+"'"+email+"'", { type: sequelize.QueryTypes.SELECT})
//
module.exports = {
    addUser,
    getUserByEmail,
    getUserById 
}
