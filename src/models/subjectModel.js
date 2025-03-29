const db = require('../config/db');

const getAllSubjects = (callback) => {
    db.query('SELECT name, year FROM subjects', (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
    });
};

module.exports = { getAllSubjects };
