

const { Flight } = require('../models');
const BaseRepository = require('./base.repository');
class FlightRepository extends BaseRepository {
    constructor() {
        super(Flight);
    }
}

module.exports = FlightRepository;