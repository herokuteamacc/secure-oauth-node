const config =  require('../config');
//const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authService = require('../services/auth');
const userService = require('../services/user');
const { registerValidation, loginValidation } = require('../validation'); //require validation files for register and login
const roleService = require('../services/userrole');
const verifyToken = require('./verifyToken');
const jwt = require('jsonwebtoken');
const fs   = require('fs');
const path   = require('path');
const publicKEY = require('fs').readFileSync(path.resolve(__dirname, '../', 'config', 'certs', 'publickey.pem'), 'utf8');
const awsconnect = require("./awsconnect");

function login (req, res){
	const {error} = loginValidation(req.body); //basic login validation
	if(error) return res.status(400).send(error.details[0].message);

   awsconnect.getPrivateKey()
  .then(str => {
 	return authService.authenticate(req.body, str)
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
})
.catch((err) => {
  console.log(err);
  reject(err);
})};

function register (req, res){

	const { 
		firstName,
		lastName, 
		email,
		password,
	 } = req.body;
	const {error} = registerValidation(req.body); //pass error through registration validation
	if(error) return res.status(400).send(error.details[0].message); 
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
