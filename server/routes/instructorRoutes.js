const router = require('express').Router();
const axios = require('axios');

// Route description format. Use it.

// @desc     
// @route   
// @access  Private


// Routes

// @desc    Retrieve all instructor' information (use only when necessary; resource heavy)
// @route   GET /instructor/:all
// @access  Private
router.get('/instructor/:all', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve all instructor names and IDs
// @route   GET /instructor/limited
// @access  Private
router.get('/instructor/limited', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve single instructor information by name
// @route   GET /instructor/name
// @access  Private
router.get('/instructor/name', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve single instructor information by ID
// @route   GET /instructor/:id
// @access  Private
router.get('/instructor/:id', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve instructor names and IDs by instruments
// @route   GET /instructor/:instrument
// @access  Private
router.get('/instructor/:instrument', async (req, res) => {
    try {

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
router.post('/instructor', async (req, res) => {
    try {

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