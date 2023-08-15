

const { Booking } = require('../models');
const BaseRepository = require('./base.repository');
class BookingRepository extends BaseRepository {
    constructor() {
        super(Booking);
    }
}

module.exports = BookingRepository;