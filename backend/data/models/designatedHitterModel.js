const db = require('../dbConfig.js');

module.exports = {
    findByID: id => {
        return db('designatedHitter').where({ id }).first();
    },
    getDesignatedHitter() {
        return db('designatedHitter');
    }
}