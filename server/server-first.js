// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');
// const MongoStore = require('connect-mongo')(session);
// const expressStaticGzip = require('express-static-gzip');
// const path = require('path');
// require('dotenv').config();

// // Router objects
// const instructor = require('./routes/instructorRoutes')

// const app = express();
// const dbURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@segnodb.0p5lo.mongodb.net/segnoDB?retryWrites=true&w=majority`;

// const port = process.env.PORT || 5000;

// mongoose
//   .connect(dbURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
//   })
//   .then(console.log(`MongoDB connected ${dbURI}`))
//   .catch((err) => console.error(err));

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // 
// router.all('*', (req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//     res.header('Access-Control-Allow-Headers', '*');
//     next();
// });

// app.get('/test', (req, res) => {
//     res.send('Hello Sean.');
// })


// // Routes
// // app.use('/instructor', require('./routes/instructorRoutes.js'));
// app.use('/instructor', instructor);
// app.use('/student', require('./routes/studentRoutes'));
// app.use('/administrators', require('./routes/administratorRoutes'));
// app.use('/lessons', require('./routes/lessonRoutes'));
// app.use('/availability', require('./routes/instructorAvailabilityRoutes'));
// app.use(
//     '/',
//     expressStaticGzip('client/dist', {
//         enableBrotli: true,
//         orderPreference: ['br'],
//         setHeaders: function (res, path) {
//             res.setHeader('Cache-Control', 'public, max-age=31536000');
//         }
//     })
// );

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, '../client/dist/index.html'));
// });

// app.listen(port, () => {
//     console.log(`Listening on ${port}`);
// });