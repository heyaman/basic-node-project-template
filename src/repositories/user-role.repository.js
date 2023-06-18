

const { UserRoles } = require('../models');
const BaseRepository = require('./base.repository');
class UserRoleRepository extends BaseRepository {
    constructor() {
        super(UserRoles);
    }
}

module.exports = UserRoleRepository;