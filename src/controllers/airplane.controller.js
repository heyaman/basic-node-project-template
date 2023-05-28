const { CREATE_AIRPLANE } = require("../schema");
const { AirPlaneService } = require("../services");
const BaseController = require("./base.controller");



class AirPlaneController extends BaseController {

    static async getAirPlanes(req, res, next) {
        try {
            const { body = {} } = req;
            const result = await AirPlaneService.getAirPlanes();
            console.log(result);
            this.successHandler(result, res);
        } catch (error) {
            this.errorHandler(error, res);
        }
    }

    static async createAirPlane(req, res, next) {
        try {
            const { body = {} } = req;
            await this.validateSchema(CREATE_AIRPLANE, body);
            const result = await AirPlaneService.createAirPlane(body);
            this.successHandler(result, res);


        } catch (error) {
            this.errorHandler(error, res);
        }
    }
}
module.exports = AirPlaneController;