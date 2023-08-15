const { SEARCH_FLIGHT } = require("../schema");
const {   FlightService } = require("../services");
const BaseController = require("./base.controller");

class FlightController extends BaseController {

    static async searchFlight(req, res, next) {
        try {
            const { body = {} } = req;
            await this.validateSchema(SEARCH_FLIGHT, body);
            const result = await FlightService.searchFlights(body);
            this.successHandler(result, res);
        } catch (error) {
            this.errorHandler(error, res);
        }
    }

    static async createFlight(req, res, next) {
        try {
            const { body = {} } = req;
            await this.validateSchema(SEARCH_FLIGHT, body);
            const result = await FlightService.createFlight(body);
            this.successHandler(result, res);
        } catch (error) {
            this.errorHandler(error, res);
        }
    }
}
module.exports = FlightController;