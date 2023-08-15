
const jwt = require('jsonwebtoken');
const { JWT_EXPIRY, JWT_ALGORITHM } = require('../../../config/server-config');
const keyManager = require('./keys/key-manger');
const { CHECK_NON_EMPTY_DICTIONARY } = require('../data-validator');

const generateAccessToken = (payload = {}) => {
    if (!CHECK_NON_EMPTY_DICTIONARY(payload)) {
        throw new Error('payload missing to generate token');
    }
    const privateKey = keyManager.getPrivateKey();
    return jwt.sign(payload, privateKey, { algorithm: JWT_ALGORITHM, expiresIn: JWT_EXPIRY });
}

const verifyAccessToken = (accessToken) => {
    const publicKey = keyManager.getPublicKey();
    return jwt.verify(accessToken, publicKey, {
        algorithm: JWT_ALGORITHM,
        tokenType: 'access-token'
    });
}

const decodeAccessToken = (token) => {
    if (!token) {
        throw new Error('Access token missing');
    }
    return jwt.decode(token, { complete: true });
};
module.exports = {
    generateAccessToken,
    verifyAccessToken,
    decodeAccessToken

}