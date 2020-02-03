const db = require('../dbConfig.js');

module.exports = {
    findByID: id => {
        return db('firstBase').where({ id }).first();
    },
    getFirstBase() {
        return db('firstBase');
    }
}