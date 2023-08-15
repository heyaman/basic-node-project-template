

const { PaymentHistory } = require('../models');
const BaseRepository = require('./base.repository');
class PaymentHistoryRepository extends BaseRepository {
    constructor() {
        super(PaymentHistory);
    }
}

module.exports = PaymentHistoryRepository;