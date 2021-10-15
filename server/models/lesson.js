const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema(
    {
        date: {
            type: Date,
            required: true,
        },
        student: {
            type: String,
            required: true,
        },
        instrument: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        room: {
            type: String,
            required: true,
        },
    }
);

modules.export = Lesson = ('Lessons', LessonSchema)