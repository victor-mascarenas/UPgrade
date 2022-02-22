const moment = require('moment');

const isDate = (value) => {
    let result = false;
    if (value) {
        const date = moment(value);
        if (date.isValid()) {
            result = true;
        }
    }
    return result;
};

module.exports = {
    isDate
};