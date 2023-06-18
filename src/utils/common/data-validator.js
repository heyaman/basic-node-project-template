/**
 * @author - Chaitanya Patel
 * @description - Utilty to validate data
 */
const _ = require('lodash');

const CHECK_VALUE = function (value) {
    let result = false;
    if (value !== undefined && value !== '' && value !== null) {
        result = true;
    }
    return result
};

const CHECK_INTEGER = function (value) {
    let result = false;
    if (CHECK_VALUE(value)) {
        const intRegExp = new RegExp(/^[-+]?\d+$/gm);
        result = intRegExp.test(value);
    }
    return result
};

const CHECK_POSITIVE_INTEGER = function (value) {
    let result = false;
    if (CHECK_VALUE(value)) {
        const posIntRegExp = new RegExp(/^\+?(0|[1-9]\d*)$/gm);
        result = posIntRegExp.test(value);
    }
    return result
};

const IS_POSITIVE_INTEGER = function (value) {
    return Number.isInteger(value) && value >= 0;
}

const CHECK_DATE_OBJ = function (dateObj) {
    let result = false;
    if (CHECK_VALUE(dateObj)) {
        result = dateObj instanceof Date;
    }
    return result;
};

const CHECK_NON_EMPTY_ARRAY = function (data) {
    return data && _.isArray(data) && _.isEmpty(data) !== true;
};

const CHECK_NON_EMPTY_DICTIONARY = function (data) {
    return data && _.isObject(data) && _.isArray(data) !== true && _.isEmpty(data) !== true;
};

const CHECK_EMAIL_FORMAT = function (email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const CHECK_UPDATED_AT_VALUE = function (databaseDateTime, updateDateTime) {
    let result = true;
    if (CHECK_VALUE(databaseDateTime) && CHECK_VALUE(updateDateTime)) {
        let dbDateTimeObj = databaseDateTime;
        let updateDateTimeObj = updateDateTime;
        if (!CHECK_DATE_OBJ(dbDateTimeObj)) {
            dbDateTimeObj = new Date(dbDateTimeObj);
            if (!CHECK_DATE_OBJ(dbDateTimeObj)) {
                return true;
            }
        }
        if (!CHECK_DATE_OBJ(updateDateTimeObj)) {
            updateDateTimeObj = new Date(updateDateTimeObj);
            if (!CHECK_DATE_OBJ(updateDateTimeObj)) {
                return true;
            }
        }
        if (dbDateTimeObj.getTime() > updateDateTimeObj.getTime()) {
            result = false;
        }
    }
    return result;
};
const CHECK_NON_EMPTY_STRING = function (data) {
    return CHECK_VALUE(data) && typeof (data) === 'string';
}

const CHECK_NON_EMPTY_BOOLEAN = function(data){
    return CHECK_VALUE(data) && typeof (data) === 'boolean';
}



module.exports = {
    CHECK_VALUE,
    CHECK_DATE_OBJ,
    CHECK_NON_EMPTY_ARRAY,
    CHECK_NON_EMPTY_DICTIONARY,
    CHECK_INTEGER,
    CHECK_POSITIVE_INTEGER,
    CHECK_EMAIL_FORMAT,
    CHECK_UPDATED_AT_VALUE,
    CHECK_NON_EMPTY_STRING,
    CHECK_NON_EMPTY_BOOLEAN,
    IS_POSITIVE_INTEGER,
}
