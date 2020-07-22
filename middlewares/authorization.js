const jwt = require('jsonwebtoken');
const config =  require('../config');
const userService = require('../services/user');
const fs   = require('fs');
const path   = require('path');
const publicKEY = require('fs').readFileSync(path.resolve(__dirname, '../', 'config', 'certs', 'publickey.pem'), 'utf8');

var verifyOptions = {
	expiresIn:  '2h',
	algorithm:  ["RS256"]
   };

const checkAuth = (req, res, next) => {
	var token = req.headers['token'];
	if (!token)
		return res.status(403).send({ auth: false, message: 'No token provided.' });
	
	//const decodedToken = jwt.verify(token, publicKEY,verifyOptions);
	jwt.verify(token, publicKEY,verifyOptions, (err, decoded) => {
		if (err){
			return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
		}
	const email = decoded.email;
	const id = decoded.id;
	var userrole;
	userService.getUserWithRoles(email)
	.then(data => {
			const result = data;
			console.log(JSON.stringify(data));
			let dataObj = {};
			let user = {
					id: id,
					email:email,
					FirstName: data.FirstName,
					LastName: data.LastName,
					Email: data.Email,
					role: data.role
				};
			console.log(req.body);		
			const body = req.body;
			req.user = user;	
			req.body = body;
			
			next();
		})
		.catch(err => {
			console.log(err);
			res.status(500).send("Internal Server Error");
		});
	});
}

module.exports = checkAuth

