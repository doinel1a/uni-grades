const Exam = require('../database/models/Exam');

insertExam = async (req, res) => {
    const body = req.body;

    if(!body)
    {
        return res.status(400).json({
            success: false,
            error: 'You must provide an Exam!'
        });
    }

    const exam = new Exam(body);

    if(!exam)
    {
        return res.status(400).json({
            success: false,
            error: err
        });
    }

    // const checkExam = await Exam.findOne({ subject: req.params.subject}, (_err, _exam) => {
    //     console.log(checkExam)

    //     if(_exam)
    //     {
    //         return res.status(422).json({
    //             success: false,
    //             message: 'Subject alredy exsists!'
    //         });
    //     }
    // });

    exam
        .save()
        .then( () => {
            return res.status(201).json({
                success: true,
                id: exam._id,
                message: "Exam's grade inserted successfully!"
            });
        })
        .catch( _err => {
            return res.status(400).json({
                success: false,
                _err,
                error: "Exam's grade not inserted!"
            });
        });
};

updateExam = async (req, res) => {
    const body = req.body;

    if(!body)
    {
        return res.status(400).json({
            success: false,
            error: 'You must provide an Exam to update!'
        });
    }

    await Exam.findOne({ _id: req.params.id}, (_err, _exam) => {
        if(_err)
        {
            return res.status(404).json({
                success: false,
                _err,
                message: 'Exam not found!'
            });
        }

        _exam.subject = body.subject;
        _exam.grade = body.grade;
        _exam.credits = body.credits;

        _exam
            .save()
            .then( () => {
                return res.status(200).json({
                    success: true,
                    id: _exam._id,
                    message: 'Exam updated!'
                });
            })
            .catch( _err => {
                return res.status(404).json({
                    success: false,
                    _err,
                    message: 'Exam not updated!'
                });
            });
    })
};

deleteExam = async (req, res) => {
    await Exam.findOneAndDelete({ _id: req.params.id }, (_err, _exam) => {
        if(_err)
        {
            return res.status(400).json({
                success: false,
                error: 'You must provide an Exam to update!'
            });
        }

        if(!_exam)
        {
            return res.status(404).json({
                success: false,
                _err,
                message: 'Exam not found!'
            });
        }

        return res.status(200).json({
            success: true,
            data: _exam
        });
    })
    .catch( _err => {
        err => console.log(err);
    });
};

getExamById = async (req, res) => {
    await Exam.findOne({ _id: req.params.id }, (_err, _exam) => {
        if(_err)
        {
            return res.status(400).json({
                success: false,
                error: 'You must provide an Exam to update!'
            });
        }

        if(!_exam)
        {
            return res.status(404).json({
                success: false,
                _err,
                message: 'Exam not found!'
            });
        }

        return res.status(200).json({
            success: true,
            data: _exam
        });
    })
    .catch( _err => {
        err => console.log(err);
    });
};

getExams = async (req, res) => {
    await Exam.find({}, (_err, _exams) => {
        if(_err)
        {
            return res.status(400).json({
                success: false,
                errror: _err
            });
        }

        if(!_exams.length)
        {
            return res.status(404).json({
                success: false,
                error: 'Exams not found!!'
            });
        }

        return res.status(200).json({
            success: true,
            data: _exams
        });
    })
    .catch( _err => {
        err => console.log(err);
    });
};

module.exports = {
    insertExam,
    updateExam,
    deleteExam,
    getExamById,
    getExams
};