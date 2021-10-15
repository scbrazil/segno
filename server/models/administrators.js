const mongoose = require('mongoose');

const AdministratorSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
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
        fullPermission: {
            type: Boolean,
            required: true,
        },
        permissions: {
            addStudent: {
                type: Boolean,
                required: true,
            },
            deleteStudent: {
                type: Boolean,
                required: true,
            },
            modifyStudent: {
                type: Boolean,
                required: true,
            },
            addInstructor: {
                type: Boolean,
                required: true,
            },
            deleteInstructor: {
                type: Boolean,
                required: true,
            },
            modifyInstructor: {
                type: Boolean,
                required: true,
            },
            addLesson: {
                type: Boolean,
                required: true,
            },
            deleteLesson: {
                type: Boolean,
                required: true,
            },
            modifyLesson: {
                type: Boolean,
                required: true,
            },
        },
    }
);

modules.export = Administrator = ('Administrators', AdministratorSchema);