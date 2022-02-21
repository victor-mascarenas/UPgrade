const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.static('public'));
/* app.get('/', (req, res) => {
    res.json({
        ok: true
    });
}); */

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});