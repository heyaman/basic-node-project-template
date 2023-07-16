const db = require("../models");
const { CREATE_AIRPORT } = require("../schema");
const { AirPortService } = require("../services");
const BaseController = require("./base.controller");

class AirPort extends BaseController {

    static async createAirPort(req, res, next) {
        const transaction = await db.sequelize.transaction();
        try {
            const { body = {} } = req;
            await this.validateSchema(CREATE_AIRPORT, body);
            const result = await AirPortService.createAirPort(body, { transaction });
            this.successHandler(result, res, transaction);
        } catch (error) {
            this.errorHandler(error, res, transaction);
        }

    }

    static async getAirPort(req, res, next) {
        try {
            const result = await AirPortService.getAirPorts({});
            this.successHandler(result, res);
        } catch (error) {
            this.errorHandler(error, res);
        }
    }
}
module.exports = AirPort;