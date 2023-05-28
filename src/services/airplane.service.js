// const {AirPlaneRepository} = require("../repositories");

const { AirPlaneRepository } = require("../repositories");



class AirPlaneService {

    constructor() {
        this.airplane = new AirPlaneRepository();
    }
    async getAirPlanes() {
        return this.airplane.findMany({});
    }

    async createAirPlane(body = {}) {
        return this.airplane.insert(body);
    }
}
module.exports = new AirPlaneService();