const express = require('express');
const router = express.Router();
const path = require('path');
const members = require('../../members.js');

router.get('/', (req, res) => {
    let cookieObj = {
        id: 1,
        fname: "pavan",
        lname: "koka",
        status: "always"
    };
    res.cookie('Object', cookieObj);
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    res.sendFile(path.join(__dirname, '../../html/index.html'));
});

router.get('/ppl', (req, res) => {
    res.json(members);
});

router.get('/ppl/:id', (req, res) => {
    res.json(members[req.params.id - 1]);
});

router.get('/add', (req, res) => {
    let obj = {
        name: req.query.name,
        status: req.query.status
    };
    res.send(JSON.stringify(obj));
});

router.get('/cookie', (req, res) => {
    console.log(req.cookies);
    res.send(req.cookies);
});

router.post('/post', (req, res) => {
    let obj = {
        name: req.body.myName,
        status: req.body.status
    };
    res.json(obj);
});

router.post('/jsonpost', (req, res) => {
    let obj = {
        first_name: req.body.fname,
        last_name: req.body.lname,
        status: req.body.status
    };
    res.json(obj);
});

module.exports = router;