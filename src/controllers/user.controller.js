const { CREATE_USER } = require("../schema");
const { UserService } = require("../services");
const BaseController = require("./base.controller");

class User extends BaseController {

    static async createUser(req, res, next) {
        try {
            const { body = {} } = req;
            await this.validateSchema(CREATE_USER, body);
            const result = await UserService.createUser(body);
            this.successHandler(result, res);
        } catch (error) {
            this.errorHandler();
        }

    }
}
module.exports = User;