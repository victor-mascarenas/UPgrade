const { response } = require("express");
const jwt = require('jsonwebtoken');
const { generateGeneric } = require("../helpers/responseGenerator");

const validateJWT = (req, res = response, next) => {
    const token = req.header('x-token');
    if (token) {
        try {
            const {uid, name} = jwt.verify(token, process.env.SECRET_JWT_SEED);
            req.uid = uid;
            req.name = name;
        } catch (error) {
            return generateGeneric(res, 401, 'Token invalido');
        }
    } else {
        return generateGeneric(res, 401, 'No hay token');
    }
    next();
};

module.exports = {
    validateJWT
};