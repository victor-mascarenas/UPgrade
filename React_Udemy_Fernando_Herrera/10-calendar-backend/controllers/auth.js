const {response} = require("express");
const { encrypt } = require("../helpers/crypto");
const User = require("../models/User");

const isEmailRelatedToAnyUser = (email) => {
    let related = false;
    const dbUser = await User.findOne({
        email
    });
    if (dbUser) {
        related = true;
    }
    return related;
};

const createUser = async (req, res = response) => {
    let resp;
    const {email, password} = req.body;
    try {
        if (isEmailRelatedToAnyUser(email)) {
            resp = res.status(400).json({
                ok: false,
                msg: 'El correo ya esta asignado a un usuario'
            });
        } else {
            const user = new User(req.body);
            user.password = encrypt(password);
            await user.save();
            resp = res.status(201).json({
                ok: true,
                uid: user.id,
                name: user.name
            });
        }
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