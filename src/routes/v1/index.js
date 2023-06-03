const express = require('express');
const { AirPlaneController } = require('../../controllers');
const airPlaneRoutes= require('./airplane.route');
const airPortRoutes= require('./airport.route');
const router = express.Router();



router.use('/airplane', airPlaneRoutes);
router.use('/airport', airPortRoutes);

module.exports = router;
