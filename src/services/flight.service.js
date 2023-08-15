const {
    FlightRepository
} = require("../repositories");
const {
    Op
} = require("sequelize");
const {
    CHECK_VALUE,
    CHECK_NON_EMPTY_ARRAY,
    CHECK_NON_EMPTY_DICTIONARY
} = require("../utils/common/data-validator");
const {
    CityService
} = require(".");
const {
    getCities,
    getCityAirPort
} = require("./city.service");
const city = require("../models/city");
const {
    TABLE_NAME: {
        AIRPORT,
        CITY
    }
} = require("../utils/common/constant");
const moment = require('moment');




class FlightService {

    constructor() {
        this.flight = new FlightRepository();
    }

    createFlight(body, options) {
        return this.flight.insert(body);
    }

    async searchFlights(query = {}, options) {
        const filtersForFlightSearch = await this.prepareFilterForFlightSearch(query, options) || {};
        if (CHECK_NON_EMPTY_DICTIONARY(filtersForFlightSearch)) {
            const { departureAirportId,
                arrivalAirportId,
                travelingDate,
                noOfSeat } = filtersForFlightSearch;
            return this.flight.findMany({
                departureAirportId: {
                    [Op.eq]: departureAirportId
                },
                arrivalAirportId: {
                    [Op.eq]: arrivalAirportId
                },
                travelingDate: {
                    [Op.gte]: travelingDate
                },
                travelingDate: {
                    [Op.gte]: travelingDate
                },
            }, {
                include: [AIRPORT, CITY]
            })
        }



    }

    /**
     * This function prepares a filter for flight search based on the given query parameters.
     * @param query - An object containing the following properties:
     * @param options - The `options` parameter is not used in the `prepareFilterForFlightSearch`
     * function. It is not necessary for the function to work properly.
     * @returns An object with the properties `departureAirportId`, `arrivalAirportId`,
     * `travelingDate`, and `noOfSeat`. If any of these properties are missing or invalid, an error
     * will be thrown. If no valid data is found, an empty object will be returned.
     */
    async prepareFilterForFlightSearch(query, options) {
        const {
            fromCity = '', toCity = '', travelingDate = '', noOfSeat = 0
        } = query;
        if (!(CHECK_VALUE(fromCity) && CHECK_VALUE(toCity))) {
            throw new Error('traveling city details missing ')
        }
        const cities = await getCities({
            name: {
                [Op.in]: [fromCity, toCity]
            }
        });
        if (CHECK_NON_EMPTY_ARRAY(cities)) {
            for (const city of cities) {
                const {
                    name: cityName,
                    id: cityId
                } = city;
                if (cityName === fromCity) {
                    var travelFromCityId = cityId;
                }
                if (cityName == toCity) {
                    var travelToCityId = cityId;
                }
            }
        }
        if (!(CHECK_VALUE(travelFromCityId) && CHECK_VALUE(travelToCityId))) {
            throw new Error('traveling city details missing ')
        }
        const cityAirPort = await getCityAirPort({
            cityId: {
                [Op.in]: [travelFromCityId, travelToCityId]
            }
        }, {
            include: [AIRPORT, CITY]
        });
        if (CHECK_NON_EMPTY_ARRAY(cityAirPort)) {
            const sourceAirPortCityDetails = cityAirPort.find(({
                City: {
                    name: cityName
                } = {}
            }) => {
                return cityName === fromCity
            });
            const destinationAirPortCityDetails = cityAirPort.find(({
                City: {
                    name: cityName
                } = {}
            }) => {
                return cityName === toCity
            });
            if (CHECK_NON_EMPTY_DICTIONARY(sourceAirPortCityDetails) && CHECK_NON_EMPTY_DICTIONARY(destinationAirPortCityDetails)) {
                const {
                    AirPort: {
                        id: departureAirportId
                    } = {}
                } = sourceAirPortCityDetails;
                const {
                    AirPort: {
                        id: arrivalAirportId
                    } = {}
                } = destinationAirPortCityDetails;
                if (!(CHECK_VALUE(departureAirportId) && CHECK_VALUE(arrivalAirportId))) {
                    throw new Error('source/destination airportId is missing');
                }
                return {
                    departureAirportId,
                    arrivalAirportId,
                    travelingDate: moment(travelingDate).format('YYYY-MM-DD'),
                    noOfSeat: noOfSeat
                };
            }


        }
        return {};
    }

    getFlightById(id) {
        return this.flight.findOne({ id });
    }

    decrementSeatByFlightId(id, decrementCount, {
        transaction
    } = {}) {
        return this.flight.decrement({ id }, { seatRemaining: decrementCount }, { transaction });
    }
}
module.exports = new FlightService();