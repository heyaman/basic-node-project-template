const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const saltRounds = 10;
const { UserRepository, UserRoleRepository, RoleRepository } = require("../repositories");
const { CHECK_VALUE, CHECK_NON_EMPTY_ARRAY, CHECK_NON_EMPTY_DICTIONARY } = require("../utils/common/data-validator");
const { TABLE_NAME: { USER, ROLE }, USER_ROLE } = require('../utils/common/constant');
const { JWT_SECRET, JWT_ALGORITHM, JWT_EXPIRY } = require('../config/server-config');
const { KEY_MANAGER } = require('../utils/common');
const TokenManager= require('../utils/common/access-token/acess-token-manger');


class User {
    constructor() {
        this.user = new UserRepository();
        this.role = new RoleRepository();
        this.userRole = new UserRoleRepository();
    }

    async signUp(body = {}, options = {}) {
        const { username = '', password = '', role = '' } = body;
        const { transaction } = options;
        if (CHECK_VALUE(username)) {
            const result = await this.getUsers({ username });
            if (CHECK_NON_EMPTY_ARRAY(result)) {
                throw new Error('User already exist');
            }
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const createdUser = await this.user.insert({ ...body, username, password: hashedPassword }, { transaction });
            delete createdUser.password;
            const [roleDetails] = await this.getRoles({ name: role || USER_ROLE.CUSTOMER }) || [];
            if (CHECK_NON_EMPTY_DICTIONARY(createdUser) && CHECK_NON_EMPTY_DICTIONARY(roleDetails)) {
                const { id: userId } = createdUser;
                const { id: roleId } = roleDetails
                if (CHECK_VALUE(userId) && CHECK_VALUE(roleId)) {
                    await this.userRole.insert({ userId, roleId }, { transaction });
                }
            }
            return createdUser;
        }
        return {};
    }

    async signIn(body = {}) {
        const { username = '', password = '' } = body;
        if (CHECK_VALUE(username)) {
            const userDetails = await this.getUsers({ username });
            if (!CHECK_NON_EMPTY_ARRAY(userDetails)) {
                throw new Error(`User does not exist`);
            }
            const { password: savedPassword, id: userId } = userDetails[0];
            const isPasswordSame = await bcrypt.compare(password, savedPassword);
            if (!isPasswordSame) {
                throw new Error(`Password does not match`);
            }
            if (CHECK_VALUE(userId)) {
                const userRoleDetails = await this.getUserRoles({ userId }, { include: [USER, ROLE] });
                if (CHECK_NON_EMPTY_ARRAY(userRoleDetails) && CHECK_NON_EMPTY_DICTIONARY(userRoleDetails[0])) {
                    const { roleId, Role = {} } = userRoleDetails[0];
                    const accessToken = TokenManager.generateAccessToken({ userId, roleId });
                    return { accessToken, userDetails, roleDetails: Role };
                }
            }
        }
        return {};
    }

    async getUsers(query = {}, options = {}) {
        return this.user.findMany(query, options);
    }

    async getRoles(query = {}, options = {}) {
        return this.role.findMany(query, options);
    }

    async getUserRoles(query = {}, options = {}) {
        return this.userRole.findMany(query, options);
    }

}
module.exports = new User();