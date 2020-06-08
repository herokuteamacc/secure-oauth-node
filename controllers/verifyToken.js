const jwt = require('jsonwebtoken');
const fs   = require('fs');
const path   = require('path');
const publicKEY = require('fs').readFileSync(path.resolve(__dirname, '../', 'config', 'certs', 'publickey.pem'), 'utf8');

function tokenVerifyUsingPublicKey(token){

var verifyOptions = {
    expiresIn:  '12h',
    algorithm:  ["RS256"]
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