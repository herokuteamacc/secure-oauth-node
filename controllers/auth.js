const config =  require('../config');
//const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authService = require('../services/auth');
const userService = require('../services/user');
const roleService = require('../services/userrole');
const verifyToken = require('./verifyToken');
const jwt = require('jsonwebtoken');
const fs   = require('fs');
const path   = require('path');
const publicKEY = require('fs').readFileSync(path.resolve(__dirname, '../', 'config', 'certs', 'publickey.pem'), 'utf8');


function login (req, res){
	return authService.authenticate(req.body)
	.then(token => {
		res.send({
			success: true,
			data: { token }
		});		
	})
	.catch(err => {
		if (err.type === 'custom'){
			return res.send({
				success: false,
				message: err.message
			});
		}
		return res.send({
			success: false,
			message: 'Authentication failed. Unexpected Error.'
		});
	})
};

function register (req, res){

	const { 
		firstName,
		lastName, 
		email,
		password,
	 } = req.body;
	var login = req.body.login;
	return userService.getUserByEmail(req.body.email || '')
	.then(exists => {
		if (exists){
			res.status(500).send({
				success: false,
				message: 'Registration failed. User with this email already registered.'
			});
			return;
		}

		var user = {
			FirstName: firstName,
			LastName: lastName,
			Email: email,
			Password: bcrypt.hashSync(req.body.password, config.saltRounds),
            Status:'registered'
		};
		return userService.addUser(user)
		.then((user) => {
			res.send({success: true})
		const id = user.Id;
		console.log(id);
		const userrole = {
		User : id,
		Role : 1
		};
		return roleService.addUserRole(userrole)
		});
	
		});
};
module.exports = {
	login,
	register
}
