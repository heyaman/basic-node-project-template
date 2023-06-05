const express = require('express');
const app = express();
const apiRoutes = require('../routes');


exports.start = (port) => {
    app.use('/api', apiRoutes);
    app.listen(port, () => {
        console.log(`AirPort Service up and running @ port: ${port}`);
    })
}
