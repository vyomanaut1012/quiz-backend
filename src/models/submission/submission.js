const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const submissionSchema = new mongoose.Schema({

    quizId: {
        type: String,
        required: true,
    },
    submissionData: [
        {
            questionId: {
                type: String,
                required: true
            },
            selectedOption: {
                type: String,
                required: true
            }
        }
    ]
});

const Submission = mongoose.model('submission', submissionSchema);
module.exports = Submission;
