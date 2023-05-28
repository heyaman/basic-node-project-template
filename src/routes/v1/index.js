const express = require('express');
const { AirPlaneController } = require('../../controllers');
const airPlaneRoutes= require('./airplane.route');
const router = express.Router();



router.use('/airplane', airPlaneRoutes);

module.exports = router;
