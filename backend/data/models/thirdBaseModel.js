const db = require('../dbConfig.js');

module.exports = {
    findByID: id => {
        return db('thirdBase').where({ id }).first();
    },
    getThirdBase() {
        return db('thirdBase').orderBy('firstName');
    }
}