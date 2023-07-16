

const { City } = require('../models');
const BaseRepository = require('./base.repository');
class CityRepository extends BaseRepository {
    constructor() {
        super(City);
    }
}

module.exports = CityRepository;