const db = require('../dbConfig.js');

module.exports = {
    findByID: id => {
        return db('hitters').where({ id }).first();
    },
    getHitters() {
        return db('hitters');
    }
}