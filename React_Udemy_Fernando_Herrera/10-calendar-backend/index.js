const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.static('public'));

app.use('/api/auth', require('./routes/auth.js'));

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});