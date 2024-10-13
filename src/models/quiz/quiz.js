const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new mongoose.Schema({

    quizId: {
        type: String,
        required: true,
        unique: true,
    },
    quizData: [
        {
            questionId: {
                type: String,
                required: true
            },
            question: {
                type: String,
                required: true
            },
            option1: {
                type: String,
                required: true
            },
            option2: {
                type: String,
                required: true
            },
            option3: {
                type: String,
                required: true
            },
            option4: {
                type: String,
                required: true
            },
            correctOption: {
                type: String,
                required: true
            },
        }
    ]
});

const Quiz = mongoose.model('quiz', quizSchema);
module.exports = Quiz;
