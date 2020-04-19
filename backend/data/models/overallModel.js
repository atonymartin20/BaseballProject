const db = require('../dbConfig.js');

module.exports = {
    findByID: id => {
        return db('overall').where({ id }).first();
    },
    getPlayers() {
        return db('overall');
    }
}