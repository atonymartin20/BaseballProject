const express = require('express');

const twoWayPlayerModel = require('../data/models/twoWayPlayerModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    twoWayPlayerModel
        .getTwoWayPlayer()
        .then(player => {
            res.json(player);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not grab two way players', err });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    twoWayPlayerModel
        .findByID(id)
        .then(player => {
            res.json(player);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not find two way player', err });
        });
});

module.exports = router;