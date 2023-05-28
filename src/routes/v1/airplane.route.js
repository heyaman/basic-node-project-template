const express = require('express');
const { AirPlaneController } = require('../../controllers');

const router = express.Router();




router.get('/', (req, res, next) => AirPlaneController.getAirPlanes(req, res, next));

router.post('/', (req, res, next) => AirPlaneController.createAirPlane(req, res, next));

module.exports = router;
