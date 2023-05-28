const Joi = require('joi');
const CREATE_AIRPLANE = Joi.object({
    modelNumber: Joi.string().required(),
    capacity: Joi.number(),
    createdAt: Joi.date(),
    updatedAt: Joi.date(),
});
module.exports = {
    CREATE_AIRPLANE
}