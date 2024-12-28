const express = require('express');
const cors = require('cors');
const courses = require('./data/courses');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/courses', (req, res) => {
  res.json(courses);
});

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('Course not found');
  res.json(course);
});

app.post('/api/quizzes/:id', (req, res) => {
  const { answers } = req.body;
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('Course not found');

  const quiz = course.quiz;
  let score = 0;

  quiz.forEach((q, index) => {
    if (answers[index] === q.answer) score++;
  });

  res.json({ score, total: quiz.length });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
