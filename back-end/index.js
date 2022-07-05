const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const dataBase = require('./database/index');
const examsRouter = require('./routes/exams-router');

const PORT = 5007;

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors());

dataBase.on('error', console.error.bind('MONGO DB CONNTECTION ERROR: '));

server.get('/', (req, res) => {
    res.send('Hello, World!');
});

server.use('/api', examsRouter);

server.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${ PORT }`);
});