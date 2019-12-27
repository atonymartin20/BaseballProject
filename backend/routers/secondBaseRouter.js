const express = require('express');

const secondBaseModel = require('../data/models/secondBaseModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    secondBaseModel
        .getSecondBase()
        .then(secondBase => {
            res.json(secondBase);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not grab second basemen', err });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    secondBaseModel
        .findByID(id)
        .then(secondBase => {
            res.json(secondBase);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not find second basemen', err });
        });
});

module.exports = router;