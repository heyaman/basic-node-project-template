const express = require('express');
const { AirPlaneController } = require('../../controllers');
const airPlaneRoutes= require('./airplane.route');
const airPortRoutes= require('./airport.route');
const UserRoutes= require('./user.route');
const FlightRoutes= require('./flight.route');


const router = express.Router();



router.use('/airplane', airPlaneRoutes);
router.use('/airport', airPortRoutes);
router.use('/user', UserRoutes);
router.use('/flight', FlightRoutes);

module.exports = router;
