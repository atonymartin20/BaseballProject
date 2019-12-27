const express = require('express');

const catchersModel = require('../data/models/catchersModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    catchersModel
        .getCatchers()
        .then(catchers => {
            res.json(catchers);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not grab catchers', err });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    catchersModel
        .findByID(id)
        .then(catcher => {
            res.json(catcher);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not find catcher', err });
        });
});

module.exports = router;