const express = require('express');
const { UserController, FlightController } = require('../../controllers');


const router = express.Router();






router.post('/create', (req, res, next) => FlightController.createFlight(req, res, next));
router.post('/search', (req, res, next) => FlightController.searchFlight(req, res, next));
// router.get('/:id', (req, res, next) => UserController.signIn(req, res, next));

module.exports = router;
