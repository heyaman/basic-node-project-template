
const { CityRepository, CityAirPortRepository } = require("../repositories");

const city = new CityRepository();
const cityAirPort = new CityAirPortRepository();

class CityService {


    static getCities(query = {}, options = {}) {

        return city.findMany(query, options);
    }

    static getCityAirPort(query, options) {
        return cityAirPort.findMany(query, options);
    }
}
module.exports = CityService;