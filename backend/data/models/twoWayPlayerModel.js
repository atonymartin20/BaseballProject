const db = require('../dbConfig.js');

module.exports = {
    findByID: id => {
        return db('twoWayPlayer').where({ id }).first();
    },
    getTwoWayPlayer() {
        return db('twoWayPlayer');
    }
}