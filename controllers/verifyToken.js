const jwt = require('jsonwebtoken');
const fs   = require('fs');
const path   = require('path');
const publicKEY = fs.readFileSync(path.resolve(__dirname, '../', 'config', 'certs', 'publickey.pem'), 'utf8');

function tokenVerifyUsingPublicKey(token){

var verifyOptions = {
    issuer:  process.env.iss,
    subject:  process.env.sub,
    audience:  process.env.aud,
    expiresIn:  process.env.EXPIRES_IN,
    algorithm:  process.env.ALGORITHM
   };
    const decodedToken = jwt.verify(token, publicKEY,verifyOptions);
    console.log("\nJWT verification result: " + JSON.stringify(decodedToken));
//return decodedToken;
//return decodedToken;
};

module.exports
{
    tokenVerifyUsingPublicKey 
};