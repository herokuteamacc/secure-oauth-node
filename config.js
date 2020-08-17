module.exports = {
	port: 8000,
	dbConnectionString: {
		"database_url": "DATABASE_URL",
		//"username": "zwsnatruliheot",
		//"password": "bb814044f39269c6d366741a924fdb1019620bede82e2a2eec8feca12a29fec6",
		//"database": "d692mr8rhikal0",
		//"host": "ec2-52-202-146-43.compute-1.amazonaws.com",
		"dialect": "postgres",
		"port": 5432,
		"operatorsAliases": false,
		"dialectOptions": {
			"ssl": {
					"require": true,
					"rejectUnauthorized": false 
					}
			}
	},
	saltRounds: 2,
}
//don't store this file in repository, it's unsecure
