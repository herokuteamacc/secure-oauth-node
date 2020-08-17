const Users = require("../models/index").User;
const config = require("../config");
const CustomError = require("./CustomError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const awsconnect = require("../controllers/awsconnect");



var i = "Mysoft corp"; // Issuer
var s = "some@user.com"; // Subject
var a = "http://mysoftcorp.in"; // Audience
// SIGNING OPTIONS
var signOptions = {
  //issuer:  i,
  //subject:  s,
  // audience:  a,
  expiresIn: process.env.EXPIRES_IN,
  algorithm: process.env.ALGORITHM,
};

const authenticate = (params, privateKEY) => {
  //Creating a new promise
  return new Promise((resolve, reject) => {
    Users.findOne({
      where: {
        Email: params.email,
      },
      raw: true,
    })
      .then((user) => {
        if (!user) {
          throw new CustomError("Authentication failed. User not found.");
        }
        if (!bcrypt.compareSync(params.password || "", user.Password))
          throw new CustomError("Authentication failed. Wrong password.");

        const payload = {
          email: user.Email,
          id: user.Id,
          name: user.FirstName + " " + user.LastName,
          time: new Date(),
        };
        const token = jwt.sign(payload, privateKEY, signOptions);
        resolve(token);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

module.exports = {
  authenticate
};
