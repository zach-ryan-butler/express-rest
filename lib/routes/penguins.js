const { Router } = require('express');

const penguins = [];

module.exports =  Router()
    .post('/api/v1/penguins', (req, res) => {
        const {
            type,
            name,
            age
        } = req.body;

        const penguin = {
            type,
            name,
            age
        }

        penguins.push(penguin);
        res.send(penguin);
    });
