const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Exam = new Schema(
    {
        subject: {
            type: String, required: true
        },
        grade: {
            type: Number, requied: true
        },
        credits: {
            type: Number, required: true
        }
    }
);

module.exports = mongoose.model('exams', Exam);