const Student = require('../models/studentModel');

const getStudents = (req, res) => {
    Student.getAllStudents((err, students) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.json(students);
    });
};

module.exports = { getStudents };
