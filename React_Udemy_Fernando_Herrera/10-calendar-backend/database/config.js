const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION);
        console.log('DB en linea');
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = dbConnection;