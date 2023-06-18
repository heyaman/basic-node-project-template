require('dotenv').config()
const servicePortMappings = {
    'UserService': 1,
    'AirPortService': 2,
    'FlightPortService': 3
}

module.exports = {
    PORT: process.env.PORT,
    SERVICE_PORT_MAPPING: servicePortMappings,
    JWT_EXPIRY: process.env.JWT_EXPIRY,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_ALGORITHM: process.env.JWT_ALGORITHM
}