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


function login (req, res){
	const {error} = loginValidation(req.body); //basic login validation
	if(error) return res.status(400).send(error.details[0].message);
	return authService.authenticate(req.body)
	.then(token => {
		res.send({
			success: true,
			accessToken: { token }
		});

		//Verification using public key
		var verifyOptions = {
			expiresIn:  '2h',
			algorithm:  ["RS256"]
		   };
			const decodedToken = jwt.verify(token, publicKEY,verifyOptions);
			console.log("\nValues after validating with public key\n" + JSON.stringify(decodedToken));
		
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
