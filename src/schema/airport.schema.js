const Joi = require('joi');
const CREATE_AIRPORT = Joi.object({
    name: Joi.string().required(),
    uniqueIdentifier: Joi.string().required(),
    cityId: Joi.number().required(),
    createdAt: Joi.date(),
    updatedAt: Joi.date(),
});
module.exports = {
    CREATE_AIRPORT
}