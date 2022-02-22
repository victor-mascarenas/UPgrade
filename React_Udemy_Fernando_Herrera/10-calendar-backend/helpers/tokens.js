const jwt = require('jsonwebtoken');

const generateJWT = (uid, name) => {
    return new Promise((resolve, reject) => {
        const payload = {
            uid,
            name,
            time: new Date().getTime()
        };
        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '2h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('Error al generar el token');
            } else {
                resolve(token);
            }
        });
    });
};

module.exports = {
    generateJWT
};