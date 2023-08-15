const express = require('express');
const router = express.Router();
const { BookingController } = require('../../controllers');
const { validateAccessToken } = require('../../middlewares');




router.post('/cancelPendingBookings', (req, res, next) => BookingController.cancelPendingBookingsWithTimeout(req, res, next));

router.use('/', validateAccessToken.validateToken);

router.post('/create', (req, res, next) => BookingController.createBooking(req, res, next));
router.post('/:id/pay', (req, res, next) => BookingController.makePayment(req, res, next));

module.exports = router;
