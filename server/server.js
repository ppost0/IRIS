const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
const port = process.env.PORT;

const userRouter = require('./routes/userRouter.js');

/* ================================================================= */

// Handle parsing of request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle requests for static files
app.use(express.static(path.resolve(__dirname, '../client/dist')));

// Define route handlers
app.use('/api/users', userRouter);












/* ==================================================================== */

// Catch-all route handler
app.use('/*', (req, res) => res.status(404).send('Page not found - 404'));

// Global Error Handler
app.use((err, req, res) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});



// Connect to db
mongoose.connect(process.env.uri, { dbName:'IRIS' })
  .then(() => {
    console.log('Connected to db successfully.');

    // Only listen for requests if db was connected, otherwise do not listen
    app.listen(port, () => {
      console.log(`Server is listening on PORT:${port}`);
    });
  })
  .catch((err) => {
    // db not connected
    console.log(error);
  });


