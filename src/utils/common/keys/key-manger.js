const path = require('path');
const fs = require('fs');

class KeyManager {

    constructor(environment) {
        this.env = environment;
        this.loadKeys();
    }

    loadKeys() {
        let publicPath, privatePath;

        publicPath = path.join(__dirname, 'rsa-keys', 'id_rsa.pub');
        privatePath = path.join(__dirname, 'rsa-keys', 'id_rsa');


        if (!publicPath || !privatePath)
            throw new Error("Invalid keys path, cannot start without rsa key set for authentication");

        this.loadKeysFromFiles(privatePath, publicPath);
    }

    loadKeysFromFiles(privatePath, publicPath) {
        this.privateKey = fs.readFileSync(privatePath, 'utf8');
        this.publicKey = fs.readFileSync(publicPath, 'utf8');
    }

    getPublicKey() {
        return this.publicKey;
    }

    getPrivateKey() {
        return this.privateKey;
    }

}

module.exports = new KeyManager(process.env.APP_ENV);