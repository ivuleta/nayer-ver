const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const User = require('../models/Appointment');

router.get('/userId', (req, res, next) => 
{
    User.find()
        .exec()
        .then(docs => { res.status(200).json(docs); })
        .catch(err => { res.status(500).json({ err: err }); });
});

module.exports = router;
