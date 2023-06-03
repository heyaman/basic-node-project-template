// const {AirPlaneRepository} = require("../repositories");

const { AirPlaneRepository } = require("../repositories");



class AirPortService {

    constructor() {
        this.airPort = new AirPlaneRepository();
    }

    async createAirPort(body = {}) {
        return this.airPort.insert(body);
    }

    async getAirPorts(params = {}) {
        const include = ['City'];
        return this.airPort.findMany(params, { include });
    }
}
module.exports = new AirPortService();