const express = require('express');

const shortStopModel = require('../data/models/shortStopModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    shortStopModel
        .getShortStop()
        .then(shortStop => {
            res.json(shortStop);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not grab shortstop', err });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    shortStopModel
        .findByID(id)
        .then(shortStop => {
            res.json(shortStop);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not find shortstop', err });
        });
});

module.exports = router;