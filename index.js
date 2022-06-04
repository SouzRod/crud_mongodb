const express = require('express');
const routes = require('./routes');
require('./database');

const port = 3333;

const app = express();

app.use(express.json());
app.use(routes);

app.listen(port, (err) => {
    if (err) console.error(err);

    console.info(`Server running on http://localhost:${port}`);
})

