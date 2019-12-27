const db = require('../dbConfig.js');

module.exports = {
    insert: catcher => {
        return db('catchers').insert(catcher, 'id');
    },
    findByID: id => {
        return db('catchers').where({ id }).first();
    },
    getCatchers() {
        return db('catchers').orderBy('firstName');
    },
    update: (id, catcher) => {
        return db('catchers').where({ id }).update(catcher);
    },
    remove: id => {
        return db('catchers').where({ id }).del();
    }
}