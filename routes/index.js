var express = require('express');
var router = express.Router();
const Question = require("../model/Question");

router.get('/', function(req, res, next) {
  res.send("SchnitzelQuest");
});

// Get all questions
router.get('/questions', async function(req, res, next) {
  try {
    const questions = await Question.find({});
    console.log(questions);
    console.log(typeof(questions));
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get a single question by ID
router.get('/question/:id', async function(req, res) {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }
    res.json(question);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a new question using POST method
router.post('/question/create', async function(req, res) {
  const { category, question, answer } = req.body;

  try {
    const newQuestion = new Question({ category, question, answer });
    const item = await newQuestion.save();
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
