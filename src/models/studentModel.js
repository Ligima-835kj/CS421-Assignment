const db = require('../config/db');

const getAllStudents = (callback) => {
    db.query('SELECT name, program FROM students', (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
    });
};

module.exports = { getAllStudents };
