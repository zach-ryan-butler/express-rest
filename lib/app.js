const express = require('express');
const app = express()
const penguinRoutes = require('./routes/penguins');

app.use(express.json());

app.use(penguinRoutes);


module.exports = app;