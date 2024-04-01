const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const port = process.env.PORT;

const userRouter = require('./routes/userRouter.js');

/*==================================================================*/

// Handle parsing of request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle requests for static files
app.use(express.static(path.resolve(__dirname, '../client/dist')));


// Define route handlers
app.use('/user', userRouter);



















/*=====================================================================*/

// Catch-all route handler
app.use('/*', (req, res) => {
  return res.status(404).send('Page not found - 404');
});


// Global Error Handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


// Listen on PORT in .env
app.listen(port, () => {
  console.log(`Server is listening on PORT:${port}`);
});