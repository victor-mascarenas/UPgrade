const bcrypt = require("bcryptjs/dist/bcrypt");
const {response} = require("express");
const { encrypt } = require("../helpers/crypto");
const { generateGeneric } = require("../helpers/responseGenerator");
const { generateJWT } = require("../helpers/tokens");
const User = require("../models/User");

const isEmailRelatedToAnyUser = async (email) => {
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
        if (await isEmailRelatedToAnyUser(email)) {
            resp = generateGeneric(res, 400, 'El correo ya esta asignado a un usuario');
        } else {
            const user = new User(req.body);
            user.password = encrypt(password);
            await user.save();
            const token = await generateJWT(user.id, user.name);
            resp = res.status(201).json({
                ok: true,
                uid: user.id,
                name: user.name,
                token
            });
        }
    } catch (error) {
        resp = generateGeneric(res, 500, 'Por favor contacte al administrador');
    }
    return resp;
};
const userLogin = async (req, res = response) => {
    let resp;
    const {email, password} = req.body;
    try {
        const dbUser = await User.findOne({
            email
        });
        if (!dbUser) {
            resp = generateGeneric(res, 400, 'El usuario no existe con ese email');
        } else {
            const validPassword = bcrypt.compareSync(password, dbUser.password);
            if (!validPassword) {
                resp = generateGeneric(res, 400, 'Contraseña invalida');
            } else {
                const token = await generateJWT(dbUser.id, dbUser.name);
                resp = res.status(201).json({
                    ok: true,
                    uid: dbUser.id,
                    name: dbUser.name,
                    token
                });
            }
        }
    } catch (error) {
        resp = generateGeneric(res, 500, 'Por favor contacte al administrador');
    }
    return resp;
};
const revalidateToken = async (req, res = response) => {
    let resp;
    const {uid, name} = req;
    try {
        const token = await generateJWT(uid, name);
        resp = res.status(200).json({
            ok: true,
            token
        });
    } catch (error) {
        resp = generateGeneric(res, 500, 'Por favor contacta al administrador');
    }
    return resp;
};

module.exports = {
    createUser,
    userLogin,
    revalidateToken
};