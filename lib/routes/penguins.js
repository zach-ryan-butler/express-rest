const { Router } = require('express');

const penguins = [];

module.exports =  Router()
    .post('/', (req, res) => {
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
    })
    
    .get('/', (req, res) => {
        res.send(penguins);
    })

    .get('/:id', (req, res) => {
        res.send(penguins[req.params.id]);
    })

    .get('/:id', (req, res) => {
        const {
            type,
            name,
            age
        } = req.body;

        const newItem = {
            type,
            name,
            age
        }

        penguins[req.params.id] = newItem;

        send(newItem);
    });

    
