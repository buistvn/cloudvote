const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Item', itemSchema);
