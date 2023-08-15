const express = require('express');
const app = express();
const { ServerConfig, LOGGER: { LOGGER } } = require('./config');
const apiRoutes = require('./routes');
const serverFactory = require('./libs/factory');
const { cancelPendingBookings } = require('./utils/common/cron-jobs/cron-job');


app.use(express.json());
app.use(express.urlencoded({extended: true}));

serverFactory.createServer('airport.server.js', ServerConfig.PORT + ServerConfig.SERVICE_PORT_MAPPING.AirPortService);
serverFactory.createServer('user.server.js', ServerConfig.PORT + ServerConfig.SERVICE_PORT_MAPPING.UserService);
serverFactory.createServer('flight.server.js', ServerConfig.PORT + ServerConfig.SERVICE_PORT_MAPPING.FlightPortService);
serverFactory.createServer('booking.server.js', ServerConfig.PORT + ServerConfig.SERVICE_PORT_MAPPING.BookingPortService);

app.listen(ServerConfig.PORT, () => {
    cancelPendingBookings();
    console.log(`App is Up and Running @ port: ${ServerConfig.PORT}`);
})