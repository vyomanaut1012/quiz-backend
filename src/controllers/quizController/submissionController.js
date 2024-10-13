const Submission = require("../../models/submission/submission.js");
const Quiz = require('../../models/quiz/quiz.js');

exports.submissioncontroller = async (req, res) => {

    const { quizId, submissionData } = req.body;

    const requestData = {
        quizId: quizId,
        submissionData: submissionData,
    };

    let correctAnswersCount = 0;

    try {
        const quizData = await Quiz.findOne({ quizId });

        if (!quizData) {
            return res.status(404).json({
                resCode: 404,
                resMessage: 'Quiz not found',
                resType: 'error'
            });
        }

        submissionData.forEach((submission) => {
            const question = quizData.quizData.find((q) => q.questionId === submission.questionId);
            if (question && question.correctOption === submission.selectedOption) {
                correctAnswersCount++;
            }
        });

        console.log('correctAnswersCount', correctAnswersCount);
        res.status(200).json({
            resCode: 200,
            resMessage: 'Quiz submission evaluated successfully',
            score: correctAnswersCount,
            totalQuestions: quizData.quizData.length,
            resType: 'success'
        });

    } catch (error) {
        console.error('Error during quiz evaluation:', error);
        res.status(500).json({
            resCode: 500,
            resMessage: 'Internal server error during quiz evaluation',
            resType: 'danger'
        });
    }


}