const express = require('express');

const retiredPlayersModel = require('../data/models/retiredPlayersModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    retiredPlayersModel
        .getRetiredPlayers()
        .then(retiredPlayers => {
            res.json(retiredPlayers);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not grab retired players', err });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    retiredPlayersModel
        .findByID(id)
        .then(retiredPlayers => {
            res.json(retiredPlayers);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not find retired players', err });
        });
});

module.exports = router;