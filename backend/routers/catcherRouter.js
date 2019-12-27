const express = require('express');

const catchersModel = require('../data/models/catchersModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    catchersModel
        .getCatchers()
        .then(catchers => {
            res.json(catchers);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not grab catchers', err });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    catchersModel
        .findByID(id)
        .then(catcher => {
            res.json(catcher);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not find catcher', err });
        });
});

router.post('/', (req, res) => {
    const catcher = req.body;
    catchersModel
        .insert(catcher)
        .then(catcher => {
            res.status(201).json(catcher);
        })
        .catch(err => {
            res.status(404).json({
                error: 'Trouble creating catcher', err
            });
        });
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const catcher = req.body;
    catchersModel
        .update(id, catcher)
        .then(updatedCatcher => {
            if(updatedCatcher) {
                catchersModel
                    .findByID(id)
                    .then(catcher => {
                        res.json(catcher);
                    })
                    .catch(err => {
                        res.status(500).json({ error: 'Could not return updated Catcher.', err });
                    });
            }
            else {
                res.status(404).json({ error: 'Catcher with this id does not exist.', err });
            }
        })
        .catch(err => {
            res.status(500).json({ error: 'Catcher will not be modified.', err });
        });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    catchersModel
        .remove(id)
        .then(removed => {
            if (removed) {
                res.json({ message: 'Catcher has been deleted.' });
            }
            else {
                res.status(500).json({ message: 'Id does not exist. '});
            }
        })
        .catch(err => {
            res.status(500).json({ error: 'The catcher was not removed.', err });
        });
});

module.exports = router;
