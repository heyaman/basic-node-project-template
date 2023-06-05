exports.createServer = (serverTypeName, port) => {
    const server = require(`../servers/${serverTypeName}`);
    server.start(port);
}