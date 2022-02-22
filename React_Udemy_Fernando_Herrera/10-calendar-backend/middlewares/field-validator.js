const {response} = require('express');
const {validationResult} = require('express-validator');
const { generateGeneric } = require('../helpers/responseGenerator');

const validateFields = (req, res = response, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return generateGeneric(res, 400, errors.mapped());
    } else {
        next();
    }
};

module.exports = validateFields;