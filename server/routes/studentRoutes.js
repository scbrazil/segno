const router = require('express').Router();
const axios = require('axios');

// Route description format. Use it.

// @desc    
// @route   
// @access  


// Routes

// @desc    Retrieve all students' information (use only when necessary; resource heavy)
// @route   GET /student/:all
// @access  Private
router.get('/student/:all', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve all student names and IDs
// @route   GET /student/limited
// @access  Private
router.get('/student/limited', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve single student information by name
// @route   GET /student/name
// @access  Private
router.get('', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve single student information by ID
// @route   GET /student/id
// @access  Private
router.get('', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve student names and IDs by instruments
// @route   GET /student/:instrument
// @access  Private
router.get('', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve student names and IDs by location
// @route   GET /student/:location
// @access  Private
router.get('', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve student instruments
// @route   GET /student/instruments
// @access  Private
router.get('', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve student instructors
// @route   GET /student/instructors
// @access  Private
router.get('', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve all student lessons (potentially resource-heavy)
// @route   GET /student/lessons-all
// @access  Private
router.get('', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve student lessons by month
// @route   GET /student/lessons-month
// @access  Private
router.get('', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve student lessons by date
// @route   GET /student/lessons-date
// @access  Private
router.get('', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve student lessons by instructor
// @route   GET /student/lessons-instructor
// @access  Private
router.get('', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve student lessons by instrument
// @route   GET /student/lessons-instrument
// @access  Private
router.get('', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Add student
// @route   POST /student
// @access  Private
router.get('', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Update student information
// @route   PUT /student/info
// @access  Private
router.get('', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Add instructor to student
// @route   POST /student/instructor
// @access  Private
router.get('', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Delete instructor from student
// @route   DELETE /student/instructor
// @access  Private
router.get('', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Add instrument to student
// @route   POST /student/instrument
// @access  Private
router.get('', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Delete instrument from student
// @route   DELETE /student/instrument
// @access  Private
router.get('', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Delete student
// @route   DELETE /student
// @access  Private
router.get('', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = router;