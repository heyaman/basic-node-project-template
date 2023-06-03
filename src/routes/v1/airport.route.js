const express = require('express');
const { AirPortController } = require('../../controllers');

const router = express.Router();

router.get('/', (req, res, next) => AirPortController.getAirPort(req, res, next));

router.post('/', (req, res, next) => AirPortController.createAirPort(req, res, next));

module.exports = router;