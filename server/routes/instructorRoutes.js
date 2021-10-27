const express = require('express');
const router = express.Router();
const axios = require('axios');
const Instructor = require('../models/instructor');

// Route description format. Use it.

// @desc     
// @route   
// @access  Private


// TEST ROUTE
router.get('/test', async (req, res) => {
    try {
        res.json('It made it to the routes');
    } catch (err) {
        res.status(500).json({ err });
    }
});

// Routes

// @desc    Retrieve all instructor' information (use only when necessary; resource heavy)
// @route   GET /instructor/:all
// @access  Private
router.get('/all', async (req, res) => {
    try {
        let allInstructors = await Instructor.find({});

        res.status(200).json(allInstructors)
    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve all instructor names and IDs
// @route   GET /instructor/limited
// @access  Private
router.get('/limited', async (req, res) => {
    try {
        let allInstructors =
            await Instructor
                .find({})
                .select('_id name');

        res.status(200).json(allInstructors);
    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve single instructor information by name
// @route   GET /instructor/name
// @access  Private
router.get('/name', async (req, res) => {
    // res.json('Got to instructor name route')
    // res.json(req.body.name)
    
    try {
        let instructor = await Instructor.findOne({ name: req.body.name });
        // let instructor = await Instructor.findOne({ name: "Sean Brazil" });

        res.status(200).json(instructor);
    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve single instructor information by ID
// @route   GET /instructor/:id
// @access  Private
router.get('/id', async (req, res) => {
    // res.json('wrong place')
    try {
        const instructor = await Instructor.findById(req.params.id);

        res.status(200).json(instructor);
    } catch (error) {
        res.status(500).send({ error });
    }
});

// @desc    Retrieve instructor names and IDs by instruments
// @route   GET /instructor/:instrument
// @access  Private
router.get('/instrument', async (req, res) => {
    res.json('made it')
    res.json(req.params.instrument)
    try {
        let instructors =
            await Instructor
                .find({ instruments: 'tuba' })
                .select('_id name');

        res.status(200).json(instructors)
    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve instructor names and IDs by location
// @route   GET /instructor/:location
// @access  Private
router.get('/instructor/:location', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve instructor instruments
// @route   GET /instructor/instruments
// @access  Private
router.get('/instructor/instruments', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve instructor students
// @route   GET /instructor/students
// @access  Private
router.get('/instructor/students', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve all instructor lessons (potentially resource-heavy)
// @route   GET /instructor/lessons-all
// @access  Private
router.get('/instructor/lessons-all', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve instructor lessons by month
// @route   GET /instructor/lessons-month
// @access  Private
router.get('/instructor/lessons-month', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve instructor lessons by date
// @route   GET /instructor/lessons-date
// @access  Private
router.get('/instructor/lessons-date', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve instructor lessons by students
// @route   GET /instructor/lessons-student
// @access  Private
router.get('/instructor/lessons-student', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve instructor lessons by instrument
// @route   GET /instructor/lessons-instrument
// @access  Private
router.get('/instructor/lessons-instrument', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Add instructor
// @route   POST /instructor
// @access  Private
router.post('/new-instructor', async (req, res) => {
    // console.log('It made it to the route: ', req.body);
    let instructorName = `${req.body.firstName} ${req.body.lastName}`;
    
    // Organize new instructor object for DB document.
    let newInstructor = new Instructor({
        name: instructorName,
        instruments: req.body.instruments,
        contact: {
            phone: req.body.phone,
            email: req.body.email,
            address: {
                street: req.body.street,
                city: req.body.city,
                state: req.body.state,
                zipcode: req.body.zipcode
            }
        }
    });

    // res.send(instructorName)

    try {
        // Check if instructor already exists in the database.
        await Instructor.countDocuments({ name: instructorName }, async (err, count) => {
            if (err) res.send(err);
            if (count < 1) {
                await newInstructor.save(function (err) {
                    if (err) res.status(500).json(err);
                    res.status(200).json('New instructor added.');
                });
            } else {
                res.json('Instructor already exists.');
            }
        });

    } catch (error) {
        res.status(500).json({ error });
    }

  
});

// @desc    Update instructor information
// @route   PUT /instructor/info
// @access  Private
router.put('/instructor/info', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Add student to instructor
// @route   POST /instructor/student
// @access  Private
router.post('/instructor/student', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Delete student from instructor
// @route   DELETE /instructor/student
// @access  Private
router.delete('/instructor/student', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Add instrument to instructor
// @route   POST /instructor/instrument
// @access  Private
router.post('/instructor/instrument', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Delete instrument from instructor
// @route   DELETE /instructor/instrument
// @access  Private
router.delete('/instructor/instrument', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Delete instructor
// @route   DELETE /instructor
// @access  Private
router.delete('/instructor', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = router;