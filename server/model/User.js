const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 6,
    },
    email: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 7,
    },
    password: {
        type: String,
        required: true,
        maxlength: 999,
        minlength: 7,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('User', userSchema);
