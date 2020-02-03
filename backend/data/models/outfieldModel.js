const db = require('../dbConfig.js');

module.exports = {
    findByID: id => {
        return db('outfield').where({ id }).first();
    },
    getOutfield() {
        return db('outfield');
    }
}