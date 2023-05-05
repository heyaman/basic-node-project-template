const express = require('express');
const app = express();
const { ServerConfig, LOGGER:{LOGGER} } = require('./config');
const apiRoutes = require('./routes');

app.use('/api', apiRoutes);



app.listen(ServerConfig.PORT, () => {
    LOGGER.info(`Server is up and running successfully @ port: ${ServerConfig.PORT}`);
});