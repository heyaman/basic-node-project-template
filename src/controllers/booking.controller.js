const BaseController = require("./base.controller");
const db = require("../models");
const { CREATE_BOOKING } = require("../schema");
const { BookingService } = require("../services");
const { decodeAccessToken } = require("../utils/common/access-token/acess-token-manger");
const memDB = {};


class BookingController extends BaseController {

    static async createBooking(req, res, next) {
        const transaction = await db.sequelize.transaction();
        try {
            const { body = {}, headers = {} } = {} = req;
            const { payload: { userId } = {} } = {} = decodeAccessToken(headers['access-token']);
            await this.validateSchema(CREATE_BOOKING, { ...body, userId });
            const result = await BookingService.createBooking({ ...body, userId }, { transaction });
            this.successHandler(result, res, transaction);

        } catch (error) {
            this.errorHandler(error, res, transaction)
        }
    }

    static async cancelPendingBookingsWithTimeout(req, res, nex) {
        try {
            const result = await BookingService.cancelPendingBookingsWithTimeout();
            this.successHandler(result, res, transaction);

        } catch (error) {
            this.errorHandler(error, res);
        }

    }

    static async makePayment(req, res, next) {
        const transaction = await db.sequelize.transaction();
        try {
            const idempotencyKey = req.headers['x-idempotency-key'];
            if (!idempotencyKey) {
                throw new Error("idempotency key is required to process payments")
            }
            if (memDB[`${idempotencyKey}`]) {
                throw new Error("Payment already in progress !!")
            }
            memDB[`${idempotencyKey}`] = req.headers['x-idempotency-key'];
            const { params: { id }, body = {} } = req;
            const result = await BookingService.makePayment({ ...body, bookingId: id }, { transaction });

            this.successHandler(result, res, transaction);

        } catch (error) {
            this.errorHandler(error, res, transaction);
        }
    }

}
module.exports = BookingController;