module.exports = {
	port: 8000,
	dbConnectionString: {
		"database_url": process.env.DATABASE_URL,
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
	jwtSecret: 'MEgCQQC0FVPOr5FywqEVpWjKk+q0/57iw+JZcGVmhPLqivBXFA/BymcrHrKslGdxtJ6p7z87buYAjmVtc4hwJeuqqNBRAgMBAAE=',
	tokenExpireTime: '15s',
	tokenExpireTimeForAuth: 900,
}
//don't store this file in repository, it's unsecure
