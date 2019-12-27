const express = require('express');

const reliefPitcherModel = require('../data/models/reliefPitcherModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    reliefPitcherModel
        .getReliefPitcher()
        .then(reliefPitcher => {
            res.json(reliefPitcher);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not grab relief pitcher', err });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    reliefPitcherModel
        .findByID(id)
        .then(reliefPitcher => {
            res.json(reliefPitcher);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not find relief pitcher', err });
        });
});

module.exports = router;