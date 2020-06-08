//Validation schema
const Joi = require('@hapi/joi');

//Register validation 
const registerValidation = (data) => {
const schema = Joi.object(
    { // 19. A Joi schema object for validating created user 
    firstName: Joi.string()
             .min(2)
             .required(),
    lastName: Joi.string()
             .min(2)
             .required(),
    email: Joi.string()
                .min(6)
                .required()
                .email(),
    password: Joi.string()
    .min(6)
    .required()
});
return schema.validate(data);
};
//validation for login - check if same email
const loginValidation = (data) => {
    const schema = Joi.object(
        { // 19. A Joi schema object for validating created user 
        email: Joi.string()
                    .min(6)
                    .required()
                    .email(),
        password: Joi.string()
        .min(6)
        .required()
    });
    return schema.validate(data);
    };
    
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation; //export from here to be imported in auth.js
