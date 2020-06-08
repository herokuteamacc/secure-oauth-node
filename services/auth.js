const Users = require('../models/index').User;
const config =  require('../config');
const CustomError = require('./CustomError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs   = require('fs');
const path = require('path');
//var privateKEY  = fs.readFileSync('./private.key', 'utf8');
const privateKEY = require('fs').readFileSync(path.resolve(__dirname, '../', 'config', 'certs', 'privatekey.pem'), 'utf8');

var i  = 'Mysoft corp';          // Issuer 
var s  = 'some@user.com';        // Subject 
var a  = 'http://mysoftcorp.in'; // Audience
// SIGNING OPTIONS
var signOptions = {
 //issuer:  i,
 //subject:  s,
// audience:  a,
 expiresIn:  '2h',
 algorithm:  "RS256"
};

const authenticate = params => {
	
	return Users.findOne({
		where: {
			Email: params.email
		},
		raw: true
	}).then(user => {
		
		if (!user){
			throw new CustomError('Authentication failed. User not found.');
		}
		if (!bcrypt.compareSync(params.password || '', user.Password))
			throw new CustomError('Authentication failed. Wrong password.');

const payload = {
			email: user.Email,
			id: user.Id,
			name: user.FirstName+" "+user.LastName,
			time: new Date()
		};
	
	const token = jwt.sign(payload, privateKEY,signOptions);
	return token;	
	});	
	
}

module.exports = {
	authenticate
}
