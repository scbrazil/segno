const router = require('express').Router();
const axios = require('axios');

// Route description format. Use it.

// @desc    
// @route   
// @access  


// Routes

// @desc    Retrieve all lessons (likely resource-heavy; avoid)
// @route   GET /lessons/all
// @access  Private
router.get('/lessons/all', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// Currently set for params, but could be simply endpoint.
// @desc    Retrieve lesson
// @route   GET /lesson/:lessonid
// @access  Private
router.get('/lesson/:lessonid', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve all lessons by instructor
// @route   GET /lessons/:instructor
// @access  Private
router.get('/lessons/:instructor', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve lessons by instructor and student
// @route   GET /lessons/:instructor/:studentid
// @access  Private
router.get('/lessons/:instructor/:studentid', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve lessons by instructor and date
// @route   GET /lessons/:instructor/:date
// @access  Private
router.get('/lessons/:instructor/:date', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve lessons by instructor and month
// @route   GET /lessons/:instructor/:month
// @access  Private
router.get('/lessons/:instructor/:month', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve lessons by instructor and location
// @route   GET /lessons/:instructor/:location
// @access  Private
router.get('/lessons/:instructor/:location', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve lessons by instructor and instrument
// @route   GET /lessons/:instructor/:instrument
// @access  Private
router.get('/lessons/:instructor/:instrument', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve all lessons by student
// @route   GET /lessons/:student
// @access  Private
router.get('/lessons/:student', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve lessons by student and date
// @route   GET /lessons/:student/:date
// @access  Private
router.get('/lessons/:student/:date', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve lessons by student and month
// @route   GET /lessons/:student/:month
// @access  Private
router.get('/lessons/:student/:month', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve lessons by student and location
// @route   GET /lessons/:student/:location
// @access  Private
router.get('/lessons/:student/:location', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve lessons by student and instrument
// @route   GET /lessons/:student/:instrument
// @access  Private
router.get('/lessons/:student/:instrument', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve all lessons by month
// @route   GET /lessons/:month
// @access  Private
router.get('/lessons/:month', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve all lessons by date
// @route   GET /lessons/:date
// @access  Private
router.get('/lessons/:date', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve all lessons by location
// @route   GET /lessons/:location
// @access  Private
router.get('/lessons/:location', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve all lessons by instrument
// @route   GET /lessons/:instrument
// @access  Private
router.get('/lessons/:instrument', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve all lessons by instrument and location
// @route   GET /lessons/:instrument/:location
// @access  Private
router.get('/lessons/:instrument/:location', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve all lessons by instrument and month
// @route   GET /lessons/:instrument/:month
// @access  Private
router.get('/lessons/:instrument/:month', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Retrieve all lessons by instrument and date
// @route   GET /lessons/:instrument/:date
// @access  Private
router.get('/lessons/:instrument/:date', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Create new lesson
// @route   POST /lesson
// @access  Private
router.post('/lesson', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Update lesson
// @route   PUT /lesson
// @access  Private
router.put('/lesson', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @desc    Delete lesson
// @route   DELETE /lesson
// @access  Private
router.delete('/lesson', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = router;