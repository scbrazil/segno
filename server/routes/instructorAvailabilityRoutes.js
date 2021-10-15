const router = require('express').Router();
const axios = require('axios');

// Route description format. Use it.

// @desc    
// @route   
// @access  


// Routes

// @desc    Retrieve all instructors' entire availability (resource-heavy; avoid)
// @route   GET /availability/all
// @access  Private
router.get('/availability/all', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve instructor's availability (resource-heavy; avoid)
// @route   GET /availability/instructor
// @access  Private
router.get('/availability/instructor', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});


// @desc    Retrieve instructor's availability by month
// @route   GET /availability/instructor/:month
// @access  Private
router.get('/availability/instructor/:month', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve instructor's availability by date
// @route   GET /availability/instructor/:date
// @access  Private
router.get('/availability/instructor/:date', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// Likely unnecessary. All locations/rooms are likely equipped for various instruments.
// @desc    Retrieve instructor's availability by instrument
// @route   GET /availability/instructor/:instrument
// @access  Private
router.get('/availability/instructor/:instrument', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve instructor's availability by location
// @route   GET /availability/instructor/:location
// @access  Private
router.get('/availability/instructor/:location', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve instructor's availability by month and location
// @route   GET /availability/instructor/:month/:location
// @access  Private
router.get('/availability/instructor/:month/:location', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve instructor's availability by date and location
// @route   GET /availability/instructor/:date/:location
// @access  Private
router.get('/availability/instructor/:date/:location', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Assign instructor's availability
// @route   POST /availability/instructor
// @access  Private
router.post('/availability/instructor', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Update instructor's availability
// @route   PUT /availability/instructor
// @access  Private
router.put('/availability/instructor', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// Likely used in tangent with removing instructor
// @desc    Delete instructor's availability information
// @route   DELETE /availability/instructor
// @access  Private
router.delete('/availability/instructor', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});


modules.export = router;