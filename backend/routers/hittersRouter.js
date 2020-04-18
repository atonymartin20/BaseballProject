const express = require('express');

const hittersModel = require('../data/models/hittersModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    hitterssModel
        .getHitters()
        .then(hitters => {
            res.json(hitters);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not grab hitters', err });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    hittersModel
        .findByID(id)
        .then(hitter => {
            res.json(hitter);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not find hitter', err });
        });
});

module.exports = router;