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
            throw new Error(`Schema Validation failed`);
        }
    }

    static async errorHandler(error, res, transaction) {
        if (transaction) {
            await transaction.rollback();
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: 'error',
            error: error,
            message: error.message || 'Something went wrong'
        })

    }

    static async successHandler(result, res, transaction) {
        if (transaction) {
            await transaction.commit();
        }
        return res.status(StatusCodes.OK).json({
            'status': 'success',
            result: result,
            message: 'API is live'
        })
    }

}
module.exports = BaseController;