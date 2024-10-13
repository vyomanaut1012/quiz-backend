const express = require('express');
const router = express.Router();

const { signup } = require('../controllers/signUp/signUp.js');
const { signin } = require('../controllers/signIn/signIn.js');
const { quizcontroller } = require('../controllers/quizController/quizController.js');
const { fetchquizdata } = require('../controllers/quizController/fetchQuizData.js');
const { submissioncontroller } = require('../controllers/quizController/submissionController.js');

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/createnewquiz', quizcontroller);
router.post('/fetchquizdata', fetchquizdata);
router.post('/submission', submissioncontroller);

module.exports = router;