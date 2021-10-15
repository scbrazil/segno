const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        instruments: {
            type: Array,
            required: true,
        },
        location: {
            type: [String],
            required: false,
        },
        contact: {
            contactName: {
                type: String,
                required: true,
            },
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
                zipcode: {
                    type: String,
                    required: true,
                },
            }
        },
    }
);

modules.export = Student = ('Students', StudentSchema);