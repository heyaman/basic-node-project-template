// const {AirPlaneRepository} = require("../repositories");

const { AirPortRepository } = require("../repositories");



class AirPlaneService {

    constructor() {
        this.airport = new AirPortRepository();
    }
    async getAirPort() {
        return this.airport.findMany({});
    }

    async createAirPort(body = {}) {
        return  this.airport.insert(body);
    }
}
module.exports = new AirPlaneService();