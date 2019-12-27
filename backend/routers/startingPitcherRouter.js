const express = require('express');

const startingPitcherModel = require('../data/models/startingPitcherModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    startingPitcherModel
        .getStartingPitcher()
        .then(startingPitcher => {
            res.json(startingPitcher);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not grab starting pitcher', err });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    startingPitcherModel
        .findByID(id)
        .then(startingPitcher => {
            res.json(startingPitcher);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not find starting pitcher', err });
        });
});

module.exports = router;