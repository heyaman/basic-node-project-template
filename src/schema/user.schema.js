const Joi = require('joi');
const SIGN_UP = Joi.object({
    username: Joi.string().required(),
    lastName: Joi.string(),
    firstName: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string().required(),
    createdAt: Joi.date(),
    updatedAt: Joi.date(),
});
const SIGN_IN = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string().required(),
});
module.exports = {
    SIGN_UP,
    SIGN_IN
}