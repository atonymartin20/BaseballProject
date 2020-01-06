const db = require('../dbConfig.js');

module.exports = {
    findByID: id => {
        return db('secondBase').where({ id }).first();
    },
    getSecondBase() {
        return db('secondBase').orderBy('SteamerFWARProjection');
    }
}