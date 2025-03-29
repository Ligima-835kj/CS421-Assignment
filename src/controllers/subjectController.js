const Subject = require('../models/subjectModel');

const getSubjects = (req, res) => {
    Subject.getAllSubjects((err, subjects) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.json(subjects);
    });
};

module.exports = { getSubjects };
