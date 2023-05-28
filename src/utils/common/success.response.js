const {
    ReasonPhrases,
    StatusCodes,
    getReasonPhrase,
    getStatusCode,
} = require('http-status-codes');
const { Logger } = require('winston');
function successHandler(data={}, res){
    Logger.info('success message: ',data.message);
    Logger.info('result : ',data.result);
    res.status(StatusCodes.OK).json({
        success: true,
        error: {},
        data: data.result
    })

}
module.exports = {
    successHandler: successHandler
}