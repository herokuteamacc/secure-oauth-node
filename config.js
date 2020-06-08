module.exports = {
	port: 8000,
	dbConnectionString: {
		"username": "adkkvnxchgujol",
		"password": "047dbad45f6056f340b96762852c5ff0c419238f50d70eb45acf0f348f28cfe3",
		"database": "denffg3ohkuvb9",
		"host": "ec2-34-225-82-212.compute-1.amazonaws.com",
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
