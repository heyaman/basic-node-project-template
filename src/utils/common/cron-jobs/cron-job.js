const cron = require('node-cron');
const axios = require('axios');
require('dotenv').config();


function cancelPendingBookings() {
    cron.schedule('*/10 * * * *', () => {
        axios({
            method: 'post',
            url: process.env.CANCEL_BOOKING_URL,
            data: {

            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.error(error);
            });
    });
}

module.exports = {
    cancelPendingBookings
};