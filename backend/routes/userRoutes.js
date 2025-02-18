const express = require('express');
const { signupUser, loginUser, getUserDetails } = require('../controllers/userController');
const { forgotPassword } = require('../controllers/forgotPasswordController');
const { changePassword } = require('../controllers/changePasswordController');
const authMiddleware = require('../middleware/authMiddleware');
const Questionnaire = require('../models/Questionnaire');
const router = express.Router();

router.post('/signup', signupUser);
router.post('/login', loginUser);
router.get('/user/details', authMiddleware, getUserDetails);
router.post('/questionnaire', async (req, res) => {
    try {
        const questionnaireData = req.body;
        const userQuestionnaire = new Questionnaire(questionnaireData);
        await userQuestionnaire.save(); // Save the data to MongoDB
        res.status(201).json({ message: 'Questionnaire submitted successfully' });
    } catch (error) {
        console.error('Error saving questionnaire:', error);
        res.status(500).json({ message: 'Error saving questionnaire', error });
    }
});

module.exports = router;


// router.post('/forgot-password', forgotPassword);
// router.post('/change-password', changePassword);

module.exports = router;