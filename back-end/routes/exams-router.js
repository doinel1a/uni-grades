const express = require('express');

const ExamController = require('../controllers/grade-controller');

const router = express.Router();

router.post('/exam', ExamController.insertExam);
router.put('/exam/:id', ExamController.updateExam);
router.delete('/exam/:id', ExamController.deleteExam);
router.get('/exam/:id', ExamController.getExamById);
router.get('/exams', ExamController.getExams);

module.exports = router;