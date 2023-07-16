const Joi = require('joi');
const SEARCH_FLIGHT = Joi.object({
    fromCity: Joi.string().required(),
    toCity: Joi.string().required(),
    travelingDate:  Joi.date().greater('now').required(),
    noOfSeat: Joi.number().required(),
});
module.exports = {
    SEARCH_FLIGHT
}