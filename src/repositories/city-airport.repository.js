

const { CityAirPort } = require('../models');
const BaseRepository = require('./base.repository');
class CityAirPortRepository extends BaseRepository {
    constructor() {
        super(CityAirPort);
    }
}

module.exports = CityAirPortRepository;