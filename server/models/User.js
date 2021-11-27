const mongoose = require('mongoose');

const User = require('../models/User');

const userSchema =  mongoose.Schema(
{
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true}, 
    lastName: { type: String, required: true},
    sex:  { type: String, required: true},
    email: {
        type: String,
        required: true,
        unique: true
    }, 
    password: { type: String, required: true}
});

module.exports = mongoose.model('User', userSchema);