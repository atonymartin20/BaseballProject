const db = require('../dbConfig.js');

module.exports = {
    findByID: id => {
        return db('reliefPitchers').where({ id }).first();
    },
    getReliefPitchers() {
        return db('reliefPitchers').orderBy('2020SteamerFWARProjection');
    }
}