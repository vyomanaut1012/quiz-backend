const Quiz = require('../../models/quiz/quiz.js');
const { v4: uuidv4 } = require('uuid');


exports.quizcontroller = async (req, res) => {

    const { quizData } = req.body;
    const quizID = uuidv4();
    console.log('quizData', quizData);

    const requestData = {
        quizId: quizID,
        quizData: quizData
    }

    try {
        const quiz = await Quiz.create(requestData);
        res.status(200).json({
            quizId: quizID,
            resCode: 200,
            resMessage: 'quiz data added Successfully',
            resType: 'success'
        });
    }
    catch (error) {
        res.status(200).json({
            resCode: 500,
            resType: 'danger',
            resMessage: 'something is going wrong during add quiz'
        })
        console.error('something is going wrong during add quiz');
    }

}