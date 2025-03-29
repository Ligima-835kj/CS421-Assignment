const express = require('express');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');
const subjectRoutes = require('./routes/subjectRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(studentRoutes);
app.use(subjectRoutes);

module.exports = app;
