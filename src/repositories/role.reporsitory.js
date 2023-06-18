

const { Role } = require('../models');
const BaseRepository = require('./base.repository');
class RoleRepository extends BaseRepository {
    constructor() {
        super(Role);
    }
}

module.exports = RoleRepository;