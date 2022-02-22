const {response} = require("express");
const User = require("../models/User");
const { use } = require("../routes/auth");

const createUser = async (req, res = response) => {
    let resp;
    const {name, email, password} = req.body;
    try {
        let dbUser = await User.findOne({
            email
        });
        if (dbUser) {
            resp = res.status(400).json({
                ok: false,
                msg: 'El correo ya esta asignado a un usuario'
            });
        } else {
            const user = new User(req.body);
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