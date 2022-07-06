import axios from 'axios';

import { Exam } from '../interfaces/Exam';

const api = axios.create({
    baseURL: 'http://localhost:5007/api'
});

export const insertExam = (_payload: any) => api.post('/exam', _payload);
export const updateExam = (_id: string, _payload: Exam) => api.put(`/exam/${_id}`, _payload);
export const deleteExam = (_id: string) => api.delete(`/exam/${_id}`);
export const getExamById = (_id: string) => api.get(`/exam/${_id}`);
export const getExams = () => api.get('/exams');

const apis = {
    insertExam,
    updateExam,
    deleteExam,
    getExamById,
    getExams
};

export default apis;