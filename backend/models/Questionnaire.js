const mongoose = require('mongoose');

const QuestionnaireSchema = new mongoose.Schema({
    businessType: {
        type: String,
        required: true,
    },
    businessSize: {
        type: String,
        required: true,
    },
    yearlyIncome: {
        type: String,
        required: true,
    },
    lookingForFunds: {
        type: String,
        required: true,
    },
    biggestProblem: {
        type: String,
        required: true,
    },
});

const Questionnaire = mongoose.model('Questionnaire', QuestionnaireSchema);
module.exports = Questionnaire;