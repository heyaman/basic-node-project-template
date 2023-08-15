const { BookingRepository, PaymentHistoryRepository } = require("../repositories");
const { BOOKING_STATUS } = require("../utils/common/constant");
const { CHECK_NON_EMPTY_DICTIONARY, CHECK_VALUE } = require("../utils/common/data-validator");
const flightService = require("./flight.service");
const moment = require('moment');
const {
   Op
} = require("sequelize");
require('dotenv').config();
const FLIGHT_PRICE = process.env.FLIGHT_PRICE || 0;

class BookingService {
   constructor() {
      this.bookingRepository = new BookingRepository();
      this.paymentHistory = new PaymentHistoryRepository();
   }

   async createBooking(body = {}, options = {}) {
      const {
         flightId,
         noOfSeat = 0
      } = body;
      const flightDetails = await flightService.getFlightById(flightId);
      if (CHECK_NON_EMPTY_DICTIONARY(flightDetails)) {
         const {
            seatRemaining = 0
         } = flightDetails;
         if (noOfSeat > seatRemaining) {
            throw new Error('All Seats are Booked!!')
         }
         const amount = noOfSeat * FLIGHT_PRICE;
         var createdBooking = await this.bookingRepository.insert({
            ...body,
            amount
         }, options);
         await flightService.decrementSeatByFlightId(flightId, noOfSeat, options);
      }
      return createdBooking;
   }

   async makePayment(params = {}, { transaction } = {}) {
      const { bookingId, amount: amountToBePaid } = params;
      if (!(CHECK_VALUE(bookingId) && CHECK_VALUE(amountToBePaid))) {
         throw new Error('Params missing to proceed with payment');
      }
      const bookingDetails = await this.bookingRepository.findOne({ id: bookingId }, { transaction });
      if (CHECK_NON_EMPTY_DICTIONARY(bookingDetails)) {
         const { createdAt = new Date(), amount: balance } = bookingDetails;
         if (Date.now() - createdAt.getTime() >= 10 * 60 * 1000) {
            throw new Error('Payment window time expired.please retry after sometime!');
         }
         if (amountToBePaid != balance) {
            throw new Error('balance & amount to be paid mismatch');
         }
         const paymentHistory = await this.paymentHistory.insert({
            bookingId,
            amount: amountToBePaid,
            amountPaid: 0,
            balance: amountToBePaid
         }, { transaction });
         const paymentPromise=new Promise((resolve, reject)=>{
            setTimeout(()=>{
               if(paymentSuccess){
                  resolve();
               }else{
                  reject()
               }

            },2000);
         });
         paymentPromise
         .then(function onApprovePayment(){
           // here i need to mark payyment success and its 
         })
         .catch(function onDeclinedPayment(){
             // here i need to mark payment as failed  and its respective balance amount
            // also need need to update flight seats

         });
         return paymentHistory;
      }

   }

   async cancelPendingBookingsWithTimeout() {
      const tenMinutesAgo = moment().subtract(1, 'minutes');
      const timeoutPendingBookingCount = await this.bookingRepository.findCount({
         status: BOOKING_STATUS.PENDING,
         createdAt: {
            [Op.lte]: tenMinutesAgo
         }
      });
      let skip = 0, limit = 10;
      while (skip <= timeoutPendingBookingCount) {
         this.bookingRepository.update({}, { status: BOOKING_STATUS.CANCELLED }, { limit, offset: skip });
         skip += limit;
      }

   }

}
module.exports = new BookingService();