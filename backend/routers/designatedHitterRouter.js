const express = require('express');

const designatedHitterModel = require('../data/models/designatedHitterModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    designatedHitterModel
        .getDesignatedHitter()
        .then(designatedHitter => {
            res.json(designatedHitter);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not grab designated hitter', err });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    designatedHitterModel
        .findByID(id)
        .then(designatedHitter => {
            res.json(designatedHitter);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not find designated hitter', err });
        });
});

module.exports = router;