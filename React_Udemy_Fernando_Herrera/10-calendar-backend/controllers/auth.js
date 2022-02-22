const {response} = require("express");

const createUser = (req, res = response) => {
    let resp;
    const {name, email, password} = req.body;
    resp = res.status(201).json({
        ok: true,
        msg: 'register',
        name,
        email,
        password
    });
    return resp;
};
const userLogin = (req, res = response) => {
    let resp;
    resp = res.json({
        ok: true,
        msg: 'login'
    });
    return resp;
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