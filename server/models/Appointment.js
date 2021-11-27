const mongoose = require('mongoose');

const appointmentSchema =  mongoose.Schema(
{
    _id: mongoose.Schema.Types.ObjectId,
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    title: { type: String, required: true},
    date: { type: Date, required: true},
    location: String,
    note: String,
    emgLvl:{ type: Number, required: true}
});

module.exports = mongoose.model('Appointment', appointmentSchema);