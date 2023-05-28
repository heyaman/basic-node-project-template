

const { AirPlane } = require('../models');
const BaseRepository = require('./base.repository');
class AirPlaneRepository extends BaseRepository {
    constructor() {
        super(AirPlane);
    }
}

module.exports = AirPlaneRepository;