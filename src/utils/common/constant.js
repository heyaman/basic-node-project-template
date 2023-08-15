const TABLE_NAME = {
    USER: 'User',
    CITY: 'City',
    ROLE: 'Role',
    AIRPORT: 'AirPort'
}
const USER_ROLE = {
    CUSTOMER: 'CUSTOMER',
    ADMIN: 'ADMIN',
    CREW_MEMBER: 'CREW_MEMBER',
    PILOT: 'PILOT'
}

const SEAT_TYPE = {
    ECONOMY: 'economy',
    BUSINESS: 'business',
    PREMIUM_ECONOMY: 'premium-economy',
    FIRST_CLASS: 'first-class'
}

const BOOKING_STATUS = {
    NOT_INITIATED: 'not_initiated',
    INITIATED: 'initiated',
    PENDING: 'pending',
    CANCELLED: 'cancel',
    COMPLETE: 'complete'
}

const PAYMENT_STATUS = {
    NOT_PAID: 'not_paid',
    SUCCESS: 'success',
    FAILED: 'failed',
}


module.exports = {
    TABLE_NAME,
    USER_ROLE,
    SEAT_TYPE,
    BOOKING_STATUS,
    PAYMENT_STATUS
}