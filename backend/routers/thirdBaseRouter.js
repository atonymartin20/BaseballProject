const express = require('express');

const thirdBaseModel = require('../data/models/thirdBaseModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    thirdBaseModel
        .getThirdBase()
        .then(thirdBase => {
            res.json(thirdBase);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not grab third basemen', err });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    thirdBaseModel
        .findByID(id)
        .then(thirdBase => {
            res.json(thirdBase);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not find third basemen', err });
        });
});

module.exports = router;