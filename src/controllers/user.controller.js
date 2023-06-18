
const db = require("../models");
const { SIGN_UP, SIGN_IN } = require("../schema");
const { UserService } = require("../services");
const BaseController = require("./base.controller");
class User extends BaseController {

    static async signUp(req, res, next) {
        const transaction = await db.sequelize.transaction();
        try {
            const { body = {} } = req;
            await this.validateSchema(SIGN_UP, body);
            const result = await UserService.signUp(body, {transaction});
            this.successHandler(result, res, transaction);
        } catch (error) {
            this.errorHandler(error, res, transaction);
        }
    }

    static async signIn(req, res, next) {
        try {
            const { body = {} } = req;
            await this.validateSchema(SIGN_IN, body);
            const result = await UserService.signIn(body);
            this.successHandler(result, res);
        } catch (error) {
            this.errorHandler(error, res);
        }
    }
}
module.exports = User;