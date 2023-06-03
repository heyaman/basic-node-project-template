

const { AirPort } = require('../models');
const BaseRepository = require('./base.repository');
class AirPortRepository extends BaseRepository {
    constructor() {
        super(AirPort);
    }
}

module.exports = AirPortRepository;