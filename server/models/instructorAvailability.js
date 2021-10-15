const mongoose = require('mongoose');

const InstructorAvailabilitySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        timeState: {
            type: String,
            required: true,
        },
        timeEnd: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: false,
        },
        room: {
            type: String,
            required: false,
        },
    }
);

module.exports = InstructorAvailability = ('InstructorAvailability', InstructorAvailabilitySchema);