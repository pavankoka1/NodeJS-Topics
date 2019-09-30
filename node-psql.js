const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const queries = require('./queries');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send('Connection established!');
});

app.get('/all', (req, res) => {
    queries.getUsers(req, res);
});

app.listen(3000, () => {
    console.log('server is listening on port : 3000');
});

process.on('uncaughtException', (err) => {
    console.log('uncaught error occured');
    console.log('ERROR: ' + err.message);
});