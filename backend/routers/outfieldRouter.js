const express = require('express');

const outfieldModel = require('../data/models/outfieldModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    outfieldModel
        .getOutfield()
        .then(outfield => {
            res.json(outfield);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not grab outfield', err });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    outfieldModel
        .findByID(id)
        .then(outfield => {
            res.json(outfield);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not find outfield', err });
        });
});

module.exports = router;