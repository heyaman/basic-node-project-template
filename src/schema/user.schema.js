const Joi = require('joi');
const CREATE_USER = Joi.object({
    firstName: Joi.string().required(),
    lastName:  Joi.string(),
});
module.exports = {
    CREATE_USER
}