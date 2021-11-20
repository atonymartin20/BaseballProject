const db = require('../dbConfig.js');

module.exports = {
    findByID: id => {
        return db('retiredPlayers').where({ id }).first();
    },
    getRetiredPlayers() {
        return db('retiredPlayers');
    }
}