const express = require('express');

const firstBaseModel = require('../data/models/firstBaseModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    firstBaseModel
        .getFirstBase()
        .then(firstBase => {
            res.json(firstBase);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not grab first basemen', err });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    firstBaseModel
        .findByID(id)
        .then(firstBase => {
            res.json(firstBase);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not find first basemen', err });
        });
});

module.exports = router;