const db = require('../dbConfig.js');

module.exports = {
    findByID: id => {
        return db('startingPitchers').where({ id }).first();
    },
    getStartingPitchers() {
        return db('startingPitchers').orderBy('2020SteamerFWARProjection');
    }
}