const mongoose = require('mongoose');

const DEV_STRING = 'mongodb:27017';
const SCHEMA = 'exams';

mongoose
    .connect(`mongodb://${DEV_STRING}/${SCHEMA}`, { useNewUrlParser: true })
    .catch( _err => {
        console.error(`CONNECTION ERROR: ${ _err.message }`);
    });

const dataBase = mongoose.connection;

module.exports = dataBase;