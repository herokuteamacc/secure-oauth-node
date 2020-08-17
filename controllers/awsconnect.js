const getPrivateKey = () => {

var AWS = require('aws-sdk');
//this is being used for demo, should not be used in PROD. If not used, then will throw 'self-signed-certificate-in-certificate-chain' error. 
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; //this is being used for demo, should not be used in PROD.

return new Promise((resolve, reject) =>{
AWS.config.update({
    accessKeyId: "AKIAQL377ZCZHCUQLFVJ",//move it to Heroku config vars and use process.env.AWS_BUCKET_KEY
    secretAccessKey: "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"//move it to Heroku config vars and use process.env.AWS_BUCKET_SECRET
  });

var s3 = new AWS.S3();

var bucketParams = {
    Bucket : 'herokuappcert',
    Key:'privatekey.pem'//publickey.pem
  };
  
  
  s3.getObject(bucketParams, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Accessed private key from S3");
      const str = data.Body.toString('ascii');
      resolve(str);
    }
  });
})
};

module.exports = {
  getPrivateKey
};
