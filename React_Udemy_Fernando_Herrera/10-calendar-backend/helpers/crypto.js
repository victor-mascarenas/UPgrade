const bcrypt = require("bcryptjs/dist/bcrypt");

const encrypt = (data) => {
    const salt = bcrypt.genSaltSync();
    const result = bcrypt.hashSync(data, salt);
    return result;
};

module.exports = {
    encrypt
};