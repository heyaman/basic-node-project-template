const express = require('express');
const { AirPlaneController } = require('../../controllers');
const airPlaneRoutes= require('./airplane.route');
const airPortRoutes= require('./airport.route');
const UserRoutes= require('./user.route');
const FlightRoutes= require('./flight.route');
const BookingRoutes= require('./booking.route');


const router = express.Router();



router.use('/airplane', airPlaneRoutes);
router.use('/airport', airPortRoutes);
router.use('/user', UserRoutes);
router.use('/flight', FlightRoutes);
router.use('/booking', BookingRoutes);

module.exports = router;
