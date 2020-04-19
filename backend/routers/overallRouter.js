const express = require('express');

const overallModel = require('../data/models/overallModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    overallModel
        .getPlayers()
        .then(players => {
            res.json(players);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not grab players', err });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    overallModel
        .findByID(id)
        .then(player => {
            res.json(player);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not find player', err });
        });
});

module.exports = router;