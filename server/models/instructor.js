const mongoose = require('mongoose');

// See below re lesson and availability creation, storage, and filtering.
// const Lesson = require('./lesson.js');
// const InstructorAvailability = require('./instructorAvailability.js');

const InstructorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        instruments: {
            type: Array,
            required: true,
        },
        students: {
            type: [String],
            required: false,
        },
        contact: {
            phone: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: true,
            },
            address: {
                street: {
                    type: String,
                    required: true,
                },
                city: {
                    type: String,
                    required: true,
                },
                state: {
                    type: String,
                    required: true,
                },
                zipCode: {
                    type: String,
                    required: true,
                },
            },
        },
        // Lessons and availailability can likely be created and stored separately,
        // filtered by instructor, student, time, etc.
        // calendar: {Lesson},
        // availability: {InstructorAvailability},
    },
    { strict: false }
);

module.exports = Instructor = mongoose.model('Instructors', InstructorSchema);