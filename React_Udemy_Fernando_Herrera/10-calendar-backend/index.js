const express = require('express');
const dbConnection = require('./database/config.js');
require('dotenv').config();
const cors = require('cors');

const app = express();

dbConnection();

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.use('/api/auth', require('./routes/auth.js'));
app.use('/api/events', require('./routes/events.js'));

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});