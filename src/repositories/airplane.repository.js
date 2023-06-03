

const { AirPort } = require('../models');
const BaseRepository = require('./base.repository');
class AirPlaneRepository extends BaseRepository {
    constructor() {
        super(AirPort);
    }
}

module.exports = AirPlaneRepository;