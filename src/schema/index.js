const AirPlaneSchema = require('./airplane.schema');
const UserSchema = require('./user.schema');
const AirPortSchema = require('./airport.schema');
const FlightSchema = require('./flight.schema');
const BookingSchema = require('./booking.schema');

module.exports = {
    CREATE_AIRPLANE: AirPlaneSchema.CREATE_AIRPLANE,
    CREATE_USER: UserSchema.CREATE_USER,
    CREATE_AIRPORT: AirPortSchema.CREATE_AIRPORT,
    SIGN_UP: UserSchema.SIGN_UP,
    SIGN_IN: UserSchema.SIGN_IN,
    SEARCH_FLIGHT: FlightSchema.SEARCH_FLIGHT,
    CREATE_BOOKING: BookingSchema.CREATE_BOOKING

}