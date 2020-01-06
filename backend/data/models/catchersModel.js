const db = require('../dbConfig.js');

module.exports = {
    findByID: id => {
        return db('catchers').where({ id }).first();
    },
    getCatchers() {
        return db('catchers').orderBy('SteamerFWARProjection', 'DESC');
    }
}