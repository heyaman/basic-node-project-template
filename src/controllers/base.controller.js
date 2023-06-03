const {
    ReasonPhrases,
    StatusCodes,
    getReasonPhrase,
    getStatusCode,
} = require('http-status-codes');
const { LOGGER } = require('../config');

class BaseController {

    static async validateSchema(schema, body) {
        try {
            await schema.validateAsync(body);
        } catch (error) {
            // LOGGER.error(`Schema ValidationError: ${JSON.stringify(body)}`);
            throw new Error(`Schema ValidationError`);
        }
    }

    static errorHandler(error, res) {
       return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error,
            message: error.message || 'Something went wrong'
        })

    }

    static successHandler(result, res) {
        return res.status(StatusCodes.OK).json({
            result: result,
            message: 'API is live'
        })
    }

}
module.exports = BaseController;