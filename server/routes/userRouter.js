const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

/* ==================================================== */

// Signup a new user
router.post('/', userController.signup, (req, res) => {
  return res.status(200).json('Registered user ' + res.locals.email + '.');
});

// Login an existing user
router.post('/login', (req, res) => {
  return res.status(200).json('dummy response - login');
});


module.exports = router;
