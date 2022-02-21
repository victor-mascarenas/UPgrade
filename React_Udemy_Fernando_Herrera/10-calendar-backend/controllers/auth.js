const {response} = require("express");


const createUser = (req, res = response) => {
    let resp;
    const {name, email, password} = req.body;
    if (name.length < 5) {
        resp = res.status(400).json({
            ok: false,
            msg: 'El nombre debe de ser de 5 letras'
        });
    }
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