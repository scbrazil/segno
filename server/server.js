const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// const MongoStore = require('connect-mongo')(session);
const path = require('path');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;

const dbURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@segnodb.0p5lo.mongodb.net/musicSchool?retryWrites=true&w=majority`;

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(console.log(`MongoDB connected ${dbURI}`))
  .catch((err) => console.error(err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/test', (req, res) => {
    res.send('Hello Sean.');
})

// Routes
app.use('/instructor', require('./routes/instructorRoutes'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});