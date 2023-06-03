const AirPlaneSchema = require('./airplane.schema');
const UserSchema = require('./user.schema');
const AirPortSchema = require('./airport.schema');
module.exports = {
    CREATE_AIRPLANE: AirPlaneSchema.CREATE_AIRPLANE,
    CREATE_USER: UserSchema.CREATE_USER,
    CREATE_AIRPORT: AirPortSchema.CREATE_AIRPORT
}