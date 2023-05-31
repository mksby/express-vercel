const express = require("express");
const app = express();

app.use('/api/welcome', (req, res) => {
    res.send({ message: 'Welcome to api!! mainjs' });
});

module.exports = app;
