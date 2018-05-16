const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// default to env port or 3000 if not defined
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/', require('./routes')(express));

exports.server = app.listen(port, () => {
    console.log('Server Active On Port', port);
});