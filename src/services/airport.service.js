
const { AirPortRepository, CityAirPortRepository } = require("../repositories");
const { CHECK_NON_EMPTY_DICTIONARY, CHECK_VALUE } = require("../utils/common/data-validator");



class AirPortService {

    constructor() {
        this.airPort = new AirPortRepository();
        this.cityAirPort=new CityAirPortRepository();
    }

    async createAirPort(body = {}, options = {}) {
        const createdAirPort = await this.airPort.insert(body, options);
        if (CHECK_NON_EMPTY_DICTIONARY(createdAirPort)) {
            const { id: airPortId, cityId } = createdAirPort;
            if (CHECK_VALUE(airPortId) && CHECK_VALUE(cityId)) {
                await this.cityAirPort.insert({ cityId, airPortId }, options);
            }
        }
        return createdAirPort;
    }

async getAirPorts(params = {}) {
        const include = ['City'];
        return this.airPort.findMany(params, { include });
    }
}
module.exports = new AirPortService();