const {response} = require("express");
const {validationResult} = require('express-validator');

const createUser = (req, res = response) => {
    let resp;
    const {name, email, password} = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        resp = res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    } else {
        resp = res.status(201).json({
            ok: true,
            msg: 'register',
            name,
            email,
            password
        });
    }
    return resp;
};
const userLogin = (req, res = response) => {
    let resp;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        resp = res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    } else {
        resp = res.json({
            ok: true,
            msg: 'login'
        });
    }
};
const revalidateToken = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'renew token'
    });
};

module.exports = {
    createUser,
    userLogin,
    revalidateToken
};