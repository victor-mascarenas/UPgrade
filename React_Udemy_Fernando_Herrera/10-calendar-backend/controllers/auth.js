const {response} = require("express");
const User = require("../models/User");

const createUser = async (req, res = response) => {
    let resp;
    //const {name, email, password} = req.body;
    const user = new User(req.body);
    try {
        await user.save();
        resp = res.status(201).json({
            ok: true,
            msg: 'register'
        });
    } catch (error) {
        resp = res.status(500).json({
            ok: false,
            msg: 'Por favor contacte al administrador'
        });
    }
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