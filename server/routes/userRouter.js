const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

/* ==================================================== */

// Signup a new user
router.post('/', userController.signup, (req, res) => {
  return res.status(200).json('Registered user ' + res.locals.email + '.');
});

// Login an existing user
router.post('/login', userController.login, (req, res) => {
  return res.status(200).json('Logged in user ' + res.locals.user);
});


module.exports = router;
