const express = require('express');
const router = express.Router();
const dateFormat = require("dateformat");

const messages = [
    {
        text: 'Hi there!',
        user: 'Amando',
        added: dateFormat(new Date(), "dddd, mmm dS, yyyy, h:MM:ss TT")
    },{
        text: 'Hello World!',
        user: 'Charles',
        added: dateFormat(new Date(), "dddd, mmm dS, yyyy, h:MM:ss TT")
    }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Wall', messages });
});

router.get('/new', function(req, res, next) {
    res.render('form');
});

router.post('/new', function(req, res, next) {
    const {user, text} = req.body;
    if (!user || !text) {
        res.redirect('/new');
        return;
    }
    messages.push({text, user, added: dateFormat(new Date(), "dddd, mmm dS, yyyy, h:MM:ss TT")});
    res.redirect('/');
});

module.exports = router;
