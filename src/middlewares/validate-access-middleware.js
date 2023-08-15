const { StatusCodes } = require("http-status-codes");
const { verifyAccessToken } = require("../utils/common/access-token/acess-token-manger");

const validateAccessToken = async (req, res, next) => {
    try {
        const accessToken = req.headers['access-token'];
        const tokenVerified = await verifyAccessToken(accessToken);
        req.session = tokenVerified;
        if (next && typeof next === 'function') {
            next();
        }

    } catch (error) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            status: 'error',
            error: error,
            message: error.message || 'Access-token Malformed!!'
        })
    }

}

module.exports = {
    validateToken: validateAccessToken
};