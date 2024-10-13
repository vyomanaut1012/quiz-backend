const Quiz = require('../../models/quiz/quiz.js');

exports.fetchquizdata = async (req, res) => {

    const { quizId } = req.body;

    try {

        const quizData = await Quiz.findOne({ quizId });
        res.status(200).json({
            resCode: 200,
            resType: 'success',
            resMessage: 'quiz data send sccessfully',
            quizData: quizData
        });

    }
    catch (error) {
        res.status(200).json({
            resCode: 500,
            resType: 'danger',
            resMessage: 'something is going wrong during fetching quiz data'
        })
        console.error('something is going wrong during fetching quiz data');
    }

}