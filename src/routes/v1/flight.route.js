const express = require('express');
const { UserController, FlightController } = require('../../controllers');


const router = express.Router();







router.post('/search', (req, res, next) => FlightController.searchFlight(req, res, next));
// router.get('/:id', (req, res, next) => UserController.signIn(req, res, next));

module.exports = router;
