const {response} = require("express");


const createUser = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'register'
    });
};
const userLogin = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'login'
    });
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