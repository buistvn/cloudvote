// contains a model for a created ballot measure

// ttl is the time to live for the measure being
// voted on.
// if (startDate === endDate) { end voting }
//
// 5 days in the future:
// Date.now() + (3600000 * 24 * 5) )

const mongoose = require('mongoose');

const measureSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 6,
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
    },
    creator: {
        type: String,
        maxlength: 255,
        minlength: 6,
        required: true,
    },
    votes: {
        yes: Number,
        no: Number,
    },
    voters: {
        type: Array,
        default: undefined,
    },
    startDate: {
        type: Date,
        default: Date.now(),
    },
    endDate: {
        type: Date,
        default: Date.now() + 3600000 * 24 * 1,
    },
});

// todo
// make timestamps to replace start and end dates
// https://mongoosejs.com/docs/guide.html#timestamps

module.exports = mongoose.model('Measure', measureSchema);
