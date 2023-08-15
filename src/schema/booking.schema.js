const Joi = require('joi');
const CREATE_BOOKING = Joi.object({
    flightId: Joi.number().required(),
    noOfSeat: Joi.number().required(),
    userId: Joi.number().required()
});
module.exports = {
    CREATE_BOOKING
}