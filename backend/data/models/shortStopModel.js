const db = require('../dbConfig.js');

module.exports = {
    findByID: id => {
        return db('shortStop').where({ id }).first();
    },
    getShortStop() {
        return db('shortStop');
    }
}