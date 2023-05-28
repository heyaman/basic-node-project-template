const { Logger } = require('winston');

function errorHandler(errorObj = {}, res) {
   Logger.error('errorCode %s: ',errorObj.statusCode);
   Logger.error('errorDescription %s: ',errorObj.description);
    res.status(errorObj.statusCode).json({
        status: 'error',
        error: {
            code: errorObj.statusCode,
            description: errorObj.description,
            message: errorObj.message
        }
    });


}
module.exports = {
    ErrorHandler: errorHandler
}