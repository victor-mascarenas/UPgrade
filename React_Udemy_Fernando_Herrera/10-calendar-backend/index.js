const express = require('express');

const port = 3001;

const app = express();

app.get('/', (req, res) => {
    res.json({
        ok: true
    });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});